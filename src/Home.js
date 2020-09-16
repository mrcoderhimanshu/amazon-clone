import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="--"
        />
        <div className="home__row">
          <Product
            key={"1f"}
            id={1}
            title="The Lean startup"
            price={20.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            key={"2e"}
            id={2}
            title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
            price={785.7}
            rating={5}
            image="https://m.media-amazon.com/images/I/61YSMhOd5EL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            key={"3d"}
            id={3}
            title="How to Stop Worrying and Start Living: Time-Tested Methods for Conquering Worry"
            price={8.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51vQLtjwSeL._SX318_BO1,204,203,200_.jpg"
          />
          <Product
            key={"4c"}
            id={4}
            title="Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Black),SM-R840NZKAINS"
            price={457.1}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/717WeOKf-TL._SL1500_.jpg"
          />
          <Product
            key={"5b"}
            id={5}
            title="AmazonBasics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            price={15.49}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71gfnsDd3-L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            key={"6a"}
            id={6}
            title="AmazonBasics 18-Piece White Kitchen Dinnerware Set, Dishes, Bowls, Service for 6"
            price={40.49}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61Rmo6TPAjL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
