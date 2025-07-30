'use client'
import Client from 'shopify-buy';
import { useEffect, useState } from 'react';

// Debug logging for environment variables
const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

// Log environment variables status
console.log('Shopify Configuration:', {
  domain: SHOPIFY_DOMAIN || 'Missing domain',
  hasToken: SHOPIFY_TOKEN ? 'Yes' : 'No'
});

// Initialize Shopify client
let client = null;
try {
  client = Client.buildClient({
    domain: SHOPIFY_DOMAIN,
    storefrontAccessToken: SHOPIFY_TOKEN
  });
  console.log('Shopify client initialized successfully');
} catch (error) {
  console.error('Failed to initialize Shopify client:', error);
}

export default function Hero4() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState({});

  useEffect(() => {
    if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
      console.error('Missing Shopify configuration');
      setApiError('Shopify configuration is missing. Please check your environment variables.');
      setLoading(false);
      return;
    }

    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        console.log('API Response:', data);
        
        if (data.error) {
          setApiError(data.error + (data.details ? `: ${data.details}` : ''));
          setProducts([]);
        } else if (data.data && data.data.products && data.data.products.edges) {
          setProducts(data.data.products.edges);
        } else {
          setApiError('No products found or unexpected response structure.');
          setProducts([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setApiError('Fetch error: ' + err.message);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  const handleBuyNow = async (productId, variantId) => {
    if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
      console.error('Missing Shopify configuration');
      alert('Shopify configuration is missing. Please check your environment variables.');
      return;
    }
  
    if (!client) {
      console.error('Shopify client not initialized');
      alert('Shopify client not initialized. Please refresh the page.');
      return;
    }
  
    if (!variantId) {
      console.error('No variant ID provided');
      alert('Product variant not found. Please try another product.');
      return;
    }
  
    setLoadingProducts(prev => ({ ...prev, [productId]: true }));
    
    try {
      console.log('Starting checkout process...', {
        productId,
        variantId
      });
  
      // Create checkout
      const checkout = await client.checkout.create();
      console.log('Checkout created:', checkout);
  
      if (!checkout || !checkout.id) {
        throw new Error('Failed to create checkout');
      }
  
      // Extract the numeric ID from the variant ID
      const variantNumericId = variantId.split('/').pop();
      console.log('Using variant ID:', variantNumericId);
  
      // Add item to checkout
      const checkoutWithItems = await client.checkout.addLineItems(checkout.id, [{
        variantId: variantId,  // Use the original variant ID
        quantity: 1,
      }]);
  
      console.log('Checkout with items:', checkoutWithItems);
  
      if (!checkoutWithItems || !checkoutWithItems.webUrl) {
        throw new Error('Failed to add items to checkout');
      }
  
      // Redirect to checkout
      window.location.href = checkoutWithItems.webUrl;
    } catch (error) {
      console.error('Checkout error:', error);
      alert(`Checkout error: ${error.message}. Please try again or contact support if the issue persists.`);
    } finally {
      setLoadingProducts(prev => ({ ...prev, [productId]: false }));
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <div>Loading Shopify products...</div>
      </div>
    );
  }

  if (apiError) {
    return (
      <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>
        <h3>Error loading products:</h3>
        <p>{apiError}</p>
        <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          <p>Debug Information:</p>
          <p>Domain configured: {SHOPIFY_DOMAIN ? 'Yes' : 'No'}</p>
          <p>Token configured: {SHOPIFY_TOKEN ? 'Yes' : 'No'}</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Shopify Products</h1>
        <div style={{ 
          backgroundColor: '#f0f8ff', 
          padding: '20px', 
          borderRadius: '8px',
          margin: '20px 0'
        }}>
          <h3>✅ Connection Successful!</h3>
          <p>Your Shopify store is connected, but no products were found.</p>
          <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
            <h4>To see products here:</h4>
            <ol>
              <li>Go to your Shopify admin dashboard</li>
              <li>Navigate to <strong>Products</strong></li>
              <li>Click <strong>Add product</strong></li>
              <li>Fill in the product details (title, description, price, image)</li>
              <li>Make sure the product status is set to <strong>Active</strong></li>
              <li>Save the product</li>
              <li>Refresh this page</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 className='text-4xl font-black' style={{ textAlign: 'center', marginBottom: '30px' }}>
        Shopify Products
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '10px' }}>
        {products.map(({ node }) => {
          const priceObj = node.variants?.edges?.[0]?.node?.price;
          const imageUrl = node.images?.edges?.[0]?.node?.url;
          const altText = node.images?.edges?.[0]?.node?.altText || node.title;
          const variantId = node.variants?.edges?.[0]?.node?.id;
          const isLoading = loadingProducts[node.id] || false;

          // Debug log for variant ID
          console.log('Product:', node.title, 'Variant ID:', variantId);
          
          return (
            <div key={node.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              backgroundColor: '#f9f9f9'
            }}>
              <h2 style={{ marginTop: 0, marginBottom: '10px' }}>{node.title}</h2>
              
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={altText}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    marginBottom: '10px'
                  }}
                />
              )}
              
              <p style={{
                marginBottom: '10px',
                color: '#666',
                fontSize: '14px',
                lineHeight: '1.4'
              }}>
                {node.description || 'No description available'}
              </p>
              
              {priceObj && (
                <p style={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                  color: '#333',
                  marginBottom: '10px'
                }}>
                  Price: {priceObj.amount} {priceObj.currencyCode}
                </p>
              )}

              <button
                onClick={() => handleBuyNow(node.id, variantId)}
                disabled={isLoading}
                style={{
                  backgroundColor: isLoading ? '#cccccc' : '#008060',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                {isLoading ? 'Processing...' : 'Buy Now'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}