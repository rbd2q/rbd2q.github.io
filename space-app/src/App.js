import './App.scss';

import OfferItem from "./entities/offer-item";
import Button from "./shared/button";
import Footer from "./widgets/footer";
import Header from "./widgets/header";

const App = () => (
  <div className="App">
    <Header/>
    <div className="banner">
      <div className="bannerContainer">
        <div className="infoBlock">
          <h1 data-text="space" className="title">Discover the vast expanses of space</h1>
          <h2 data-text="endless!" className="subtitle">Where the possibilities are endless!</h2>
          <Button variant="primary" text="Learn more"/>
        </div>
        <div className="earthBlock">
          <picture>
            <source srcSet="images/earth.webp" type="image/webp"/>
            <source srcSet="images/earth.png" type="image/png"/>
            <img src="images/earth.png" className="earthImage" alt="earth"/>
          </picture>
        </div>
      </div>
    </div>
    <div className="offersWrapper">
      <div className="offersContainer">
        <span className="offersTitle">Offers</span>
        <div className="offersList">
          <OfferItem
            title="Move the borders of reality!"
            description="Go on a space adventure - it's possible with us!"
            imageUrl="images/space-1.webp"
          />
          <OfferItem
            title="Space is not just stars and planets"
            description="Go on a space adventure"
            imageUrl="images/space-2.webp"
          />
          <OfferItem
            title="For those who dream of stars"
            description="Our offer: make your dream come true"
            imageUrl="images/space-3.webp"
          />
          <OfferItem
            title="Fulfill your fantastic dreams"
            description="Space has never been so close"
            imageUrl="/images/space-4.webp"
          />
        </div>
        <div className="contentBlock">
          <h4 className="contentTitle">Embark on a space journey</h4>
          <span className="contentText">Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</span>
          <a href="/" className="contentLink">Read more</a>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
)

export default App;
