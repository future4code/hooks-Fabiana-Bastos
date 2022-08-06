import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/ZWZ52JHrh1E9-rj7hBasQh1JEm91yJprldVq--kuZgL6SeOS8O1g3JI8Na686Y4ggpVnvkrWU0QybnuFoPG-vseqFcSidyszfBopcawg0ncX5aEF3OUVXj47-2xqq1d7nr_xRjdfKc2irSbkpdoS8UWzfgI7N93_3AVQDafkeK49vxJGknOEQYKusrh4wqgqJzFB1R5DVFg7X77d65pROp2a18FaWCCxwaZ3v1RDIi3Z__c-tnGpvVmqeY24wIdiRAZAVUl0jWfJs1OrZauAUSAUUbbuLDUZ09FvEkpKK68jzXJZzYGe3hA9GTRuxTqKVAbVw9NxwTDuT2FL-DnhCZoPwIxVXkep5Ir0HZcLKHOHWnr0l0bBb6oPrKfXjIri6NzA7kUwsNEgEYdJD-Ie6gVbiQhK0KFZSJvPymZzWszH_g_XqHdImq858bG0G-aupCLCVnoba_UwNEt4K11mCygnHjP-w2skju5e2CB1md9ocv170k_jOCRCrc_NXVuTu6hBG18Sca9J4gYHButw_r-OoEbnkKMnyBbm4m6KyRAxBKX7L6aFdji_rGmkreEA6OWE_cdG-QuiJ_GLLJHwegxf2NCI6fSbb0QKt5x3vQlC0nHGdpWY3w6s7dyfQCtLuHNzvv-EN2EggAaYYK10ETb7BuCrYFCC2qD4pU_-AZKrL19rKU3XzKZzgyB1d0a3b9_4Yf3geLic3z1yw7goLXR3Be245Uw7xpkb68bcFX-tvGX8YkO6ddOcXplZIfM=w664-h894-no?authuser=0" 
          nome="Astrodev" 
          descricao="Oi, eu sou a Fabiana, tenho 29 anos e sou de Salvador-BA. Sou professora bilíngue, mas busco migrar de área e me tornar uma full stack dev estudando na Labenu!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/608/premium/608258.png?token=exp=1650673091~hmac=494717144636c29c237b4d0b80f3ce0e" 
          texto="Ver mais"
        />

        <CardPequeno
        imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1650673127~hmac=f54d4d66e6e3a8aba1026080f3b26c06" 
        texto="Email: fabianadias@hotmail.com"
        />

        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/331/331810.png" 
        texto="Endereço: Rua Labenu"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/999/999735.png" 
          nome="Escola Bolinha" 
          descricao="Professora bilíngue" 
        />
        
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/2282/2282198.png" 
          nome="NASA" 
          descricao="Dev de foguetes." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
