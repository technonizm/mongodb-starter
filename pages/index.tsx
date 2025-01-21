import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className="main">
      {/* Üst Banner */}
      <div className="banner">
        <h1>Kart Takas Platformu</h1>
      </div>

      {/* Arama Bölümü */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Kart ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Ana İçerik */}
      <div className="container">
        {/* Sol Sütun - Satılık Kartlar */}
        <div className="column">
          <h2>Satılık Kartlar</h2>
          <button className="add-button">+ Yeni Kart Ekle</button>
          <div className="card-list">
            <div className="card-item">
              <img src="https://via.placeholder.com/100x140" alt="Kart" />
              <div className="card-info">
                <h3>Örnek Kart 1</h3>
                <p>Adet: 3</p>
                <button className="contact-button">İletişime Geç</button>
              </div>
            </div>
            <div className="card-item">
              <img src="https://via.placeholder.com/100x140" alt="Kart" />
              <div className="card-info">
                <h3>Örnek Kart 2</h3>
                <p>Adet: 1</p>
                <button className="contact-button">İletişime Geç</button>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ Sütun - Aranan Kartlar */}
        <div className="column">
          <h2>Aranan Kartlar</h2>
          <button className="add-button">+ Aradığın Kartı Ekle</button>
          <div className="card-list">
            <div className="card-item">
              <img src="https://via.placeholder.com/100x140" alt="Kart" />
              <div className="card-info">
                <h3>Örnek Aranan Kart</h3>
                <p>İstenen Adet: 2</p>
                <button className="contact-button">İletişime Geç</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
