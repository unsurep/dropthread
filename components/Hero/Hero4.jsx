'use client'
import { useEffect, useState } from 'react';

export default function Hero4() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        console.log('API Response:', data); // Debug log
        
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
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Shopify Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {products.map(({ node }) => {
          const priceObj = node.variants?.edges?.[0]?.node?.price;
          const imageUrl = node.images?.edges?.[0]?.node?.url;
          const altText = node.images?.edges?.[0]?.node?.altText || node.title;
          
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
                  marginBottom: 0
                }}>
                  Price: {priceObj.amount} {priceObj.currencyCode}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}