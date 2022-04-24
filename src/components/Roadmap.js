import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
import RoadmapPic from '../assets/images/bg/timeline.png'

import ScreenShort1 from '../assets/images/logo/Screenshot_1 (1).png'
const Roadmap = () => {
    
    useEffect(() => {
      AOS.init();
    }, [])
    return (
        <div className="timeline_section" style={{
            backgroundImage: `url(${RoadmapPic})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            objectFit: "cover"
}}>
     <div className="container">
          <div className="timeline__title">
               <img src={ScreenShort1} alt=""/> <br/>
               <h4>Roadmap</h4>
          </div>
     </div>
     <div className="timeline">
          <div className="section right section__one" data-aos="fade-up"  data-aos-duration="3000">
               <div className="content">
                    <div className="content__title">
                         <span>Phase 1</span>
                    </div>
                    <div className="content__list">
                         <ul>
                              <li><p>Core team/Business plan generated</p></li>
                              <li><p>Launching website</p></li>
                              <li><p>Nft mint</p></li>
                              <li><p>SolanVerse token sale seed round</p></li>
                         </ul>
                    </div>
               </div>
          </div>
          <div className="section left section__two" data-aos="fade-up"  data-aos-duration="3000">
               <div className="content">
                    <div className="content__title">
                         <span>Phase 2</span>
                    </div>
                    <div className="content__list">
                         <ul>
                                   <li><p>Wallet and smart contracts implementation into the platform</p></li>
                              <li><p>Listing on dex</p></li>
                              <li><p>Major Marketing campaign</p></li>
                              <li><p>Applying for CoinMarketCap & coingecko tracking</p></li>
                         </ul>
                    </div>
               </div>
          </div>
          <div className="section right section__three" data-aos="fade-up"  data-aos-duration="3000">
               <div className="content">
                    <div className="content__title">
                         <span>Phase 3</span>
                    </div>
                    <div className="content__list">
                         <ul>
                              <li><p>2000+ Holders</p></li>
                              <li><p>Applying to get listed on popular CEXs</p></li>
                              <li><p>Upgrading our token utility & smart contract</p></li>
                              <li><p>Play 2 Earn utility with Metaverse integration</p></li>
                         </ul>
                    </div>
               </div>
          </div>
          <div className="section left section__four" data-aos="fade-up"  data-aos-duration="3000">
               <div className="content">
                    <div className="content__title">
                         <span>Phase 4</span>
                    </div>
                    <div className="content__list">
                         <ul>
                              <li><p>Expanding and further developing SolanVerse ecosystem </p></li>
                              <li><p>Launch of NFT marketplace</p></li>
                              <li><p>Partnership with similar projects</p></li>
                              <li><p>Cross-chain development</p></li>
                         </ul>
                    </div>
               </div>
          </div>
          <div className="section right section__five" data-aos="fade-up"  data-aos-duration="3000">
               <div className="content">
                    <div className="content__title">
                         <span>Phase 5</span>
                    </div>
                    <div className="content__list">
                         <ul>
                         
                              <li><p>Adding an ability to trade commodities such as gold & silver</p></li>
                              <li><p>Metaverse marketplace (Lands, games, items)</p></li>
                         </ul>
                    </div>
               </div>
          </div>
     </div>
</div>
    );
};

export default Roadmap;