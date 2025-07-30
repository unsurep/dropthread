// app/api/products/route.js
import axios from 'axios';

export async function GET(request) {
  const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
  const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN) {
    return new Response(
      JSON.stringify({ 
        error: "Shopify credentials are missing.",
        details: "Check your environment variables"
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const url = `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`;

  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            description
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    console.log('Making request to Shopify:', {
      domain: SHOPIFY_STORE_DOMAIN,
      hasToken: !!SHOPIFY_STOREFRONT_ACCESS_TOKEN
    });
    
    const response = await axios.post(
      url,
      { query },
      {
        headers: {
          'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data.errors) {
      console.error('GraphQL errors:', response.data.errors);
      return new Response(
        JSON.stringify({ 
          error: "GraphQL errors occurred",
          details: JSON.stringify(response.data.errors)
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Shopify API error:', error);
    
    let errorMsg = error.message;
    let details = '';
    
    if (error.response) {
      console.error('Error response status:', error.response.status);
      console.error('Error response data:', error.response.data);
      
      details = error.response.data
        ? JSON.stringify(error.response.data)
        : error.response.statusText;
      
      if (error.response.status === 401) {
        errorMsg = 'Invalid Shopify access token';
      } else if (error.response.status === 404) {
        errorMsg = 'Shopify store not found';
      }
    }
    
    return new Response(
      JSON.stringify({ 
        error: errorMsg, 
        details: details || 'No additional details available'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}