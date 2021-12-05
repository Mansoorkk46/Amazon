import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_img" src="https://m.media-amazon.com/images/I/71oMRmImOQL._SX3000_.jpg" alt="" />
                
                <div className="home_row">
                <Product 
                id="01"
                title="See U in C by Ali Karim Sayed (Author)"
                price={4450}
                image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg" />
                <Product 
                id="02"
                title="MOTOROLA G60 (Frosted Champange, 6GB RAM, 128GB Storage)"
                price={4450}
                image="https://m.media-amazon.com/images/I/61sHL3RIq1L._SL1500_.jpg" />
                <Product
                id="03"
                title="Fossil Analog Black Dial Men's Watch-FS5164"
                price={4450}
                image="https://m.media-amazon.com/images/I/71KEuZCYSDL._UY500_.jpg"  />
                
                </div>
                
                <div className="home_row">
                <Product 
                 id="03"
                 title="ASUS TUF Gaming A15 (2021) 15.6-inch (39.62 cms) FHD 144Hz, AMD Ryzen 7 4800H, RTX 3050 4GB Graphics "
                 price={4450}
                 image="https://images-eu.ssl-images-amazon.com/images/I/41LDfnScXZS._SX300_SY300_QL70_FMwebp_.jpg" />
                <Product 
                 id="04"
                 title="Sony a7 III Full-Frame Mirrorless Interchangeable-Lens Camera (with 28-70mm F3.5-5.6 OSS Lens)"
                 price={4450}
                 image="https://m.media-amazon.com/images/I/91rQ3XfEYzL._SL1500_.jpg" />

                </div>
                
                <div className="home_row">
                <Product
                 id="05"
                 title="
                 Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X80AJ (Black) (2021 Model) | with Alexa Compatibility"
                 price={4450}
                 image="https://m.media-amazon.com/images/I/81t9bFDmxBS._SL1500_.jpg"  />
                
                </div>
            </div>

        </div>
    )
}
export default Home