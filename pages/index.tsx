import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className={styles.main}>
      {/* Üst Banner */}
      <div className={styles.banner}>
        <h1>Kart Takas Platformu</h1>
      </div>

      {/* Arama Bölümü */}
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Kart ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* Ana İçerik */}
      <div className={styles.container}>
        {/* Sol Sütun - Satılık Kartlar */}
        <div className={styles.column}>
          <h2>Satılık Kartlar</h2>
          <button className={styles.addButton}>+ Yeni Kart Ekle</button>
          <div className={styles.cardList}>
            <div className={styles.cardItem}>
              <img src="/placeholder.jpg" alt="Kart" />
              <div className={styles.cardInfo}>
                <h3>Örnek Kart 1</h3>
                <p>Adet: 3</p>
                <button className={styles.contactButton}>İletişime Geç</button>
              </div>
            </div>
            {/* Daha fazla kart buraya eklenebilir */}
          </div>
        </div>

        {/* Sağ Sütun - Aranan Kartlar */}
        <div className={styles.column}>
          <h2>Aranan Kartlar</h2>
          <button className={styles.addButton}>+ Aradığın Kartı Ekle</button>
          <div className={styles.cardList}>
            <div className={styles.cardItem}>
              <img src="/placeholder.jpg" alt="Kart" />
              <div className={styles.cardInfo}>
                <h3>Örnek Aranan Kart</h3>
                <p>İstenen Adet: 2</p>
                <button className={styles.contactButton}>İletişime Geç</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
