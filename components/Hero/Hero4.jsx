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
      <div className="p-5 text-center">
        <div>Loading Shopify products...</div>
      </div>
    );
  }

  if (apiError) {
    return (
      <div className="p-5 text-red-600 text-center">
        <h3 className="text-lg font-bold">Error loading products:</h3>
        <p>{apiError}</p>
        <div className="mt-5 text-sm text-gray-500">
          <h1 className='text-red-600 text-4xl font-black'>Error</h1>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="p-5 text-center">
        <h1 className="text-2xl font-bold">Shopify Products</h1>
        <div className="bg-blue-100 p-5 rounded-lg my-5">
          <h3 className="text-lg font-bold">✅ Connection Successful!</h3>
          <p>Your Shopify store is connected, but no products were found.</p>
          <div className="mt-5 text-left max-w-md mx-auto">
            <h4 className="font-bold">To see products here:</h4>
            <ol className="list-decimal list-inside">
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
    <div className="p-5">
      <h1 className='text-4xl font-black text-center mb-8'>
        Shopify Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(({ node }) => {
          const priceObj = node.variants?.edges?.[0]?.node?.price;
          const imageUrl = node.images?.edges?.[0]?.node?.url;
          const altText = node.images?.edges?.[0]?.node?.altText || node.title;
          const variantId = node.variants?.edges?.[0]?.node?.id;
          const isLoading = loadingProducts[node.id] || false;

          // Debug log for variant ID
          console.log('Product:', node.title, 'Variant ID:', variantId);
          
          return (
            <div key={node.id} className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <h2 className="mt-0 mb-2 font-bold text-lg">{node.title}</h2>
              
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={altText}
                  className="w-full h-48 object-cover rounded mb-2"
                />
              )}
              
              <p className="mb-2 text-gray-600 text-sm leading-snug">
                {node.description || 'No description available'}
              </p>
              
              {priceObj && (
                <p className="font-bold text-lg text-gray-800 mb-2">
                  Price: {priceObj.amount} {priceObj.currencyCode}
                </p>
              )}

              <button
                onClick={() => handleBuyNow(node.id, variantId)}
                disabled={isLoading}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-white rounded border-none ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-700 cursor-pointer'}`}>
                {isLoading ? 'Processing...' : 'Buy Now'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}