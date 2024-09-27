import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1 className="header">E-Ticaret Sitesine Hoş Geldiniz</h1>
      <nav className="nav">
        <ul>
          <li><Link href="/">Tüm Ürünler</Link></li>
          <li><Link href="/products?category=electronics">Elektronik</Link></li>
          <li><Link href="/products?category=clothing">Giyim</Link></li>
          <li><Link href="/products?category=home">Ev Eşyası</Link></li>
          <li><Link href="/products?category=beauty">Güzellik</Link></li>
          <li><Link href="/products?category=toys">Oyuncak</Link></li>
        </ul>
      </nav>
    </div>
  );
}

