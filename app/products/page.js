import Link from 'next/link';

const Products = async ({ searchParams }) => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  const products = data.products;

  return (
    <div className="container">
      <h1>Tüm Ürünler</h1>
      <div className="product-wrapper">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-img">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-content">
              <h2>{product.title}</h2>
              <div className="price">${product.price}</div>
              <Link href={`/products/${product.id}`} className="btn">Detaylar</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;