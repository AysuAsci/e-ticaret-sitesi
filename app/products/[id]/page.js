import Link from 'next/link';

const ProductDetail = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();

  return (
    <div className="product-detail">
      <h1>{data.title}</h1>
      <img src={data.thumbnail} alt={data.title} className="product-detail-image" />
      <p>{data.description}</p>
      <p>Fiyat: {data.price}₺</p>
      <Link href="/products">Geri Dön</Link>
    </div>
  );
};

export default ProductDetail;