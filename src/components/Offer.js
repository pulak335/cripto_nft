import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import O1 from '../assets/images/offer/o1.png'
import O2 from '../assets/images/offer/02.png'
import O3 from '../assets/images/offer/03.png'
const Offer = () => {
    
    useEffect(() => {
      AOS.init();
    }, [])

    return (
        <div className="offer_section">
            <div className="container">
                <div className="offer_area">
                    <div className="offer_title text-center">
                            <span data-aos="fade-up"  data-aos-duration="1000">Our Service</span>
                            <div className="offer_section_button" data-aos="fade-up"  data-aos-duration="2000">
                                <button>What do we offer ?</button>
                            </div>
                    </div>
                    <div className="offer_body" data-aos="fade-up"  data-aos-duration="2000">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="offter_item">
                                        <div className="offer_img">
                                                <img src={O1} alt="img"/>
                                        </div>
                                        <div className="offer_content">
                                                <h4>Solanverse Token</h4>
                                                <p> Our main token within SolanVerse ecosystem which generate income thanks to our well designed staking pool. 
                                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="offter_item">
                                        <div className="offer_img">
                                                <img src={O2} alt="img" />
                                        </div>
                                        <div className="offer_content">
                                                <h4>Solanverse NFTs</h4>
                                                <p>Passive income generating NFTs to increase even fixed APR & generate higher returns. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 m-auto">
                                    <div className="offter_item">
                                        <div className="offer_img">
                                                <img src={O3} alt="img"/>
                                        </div>
                                        <div className="offer_content">
                                                <h4>NFT Marketplace</h4>
                                                <p> After our limited nft mint sold out, you’ll have chance to sell it for higher price at our own nft marketplace</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;