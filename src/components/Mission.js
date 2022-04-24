import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import Bitcoin from '../assets/images/allgif/372102230_BITCOIN_400px.gif';
import m1 from '../assets/images/mission/m1.png';
import m2 from '../assets/images/mission/m2.png';
import m3 from '../assets/images/mission/m3.png';
import m4 from '../assets/images/mission/m4.png';
import m5 from '../assets/images/mission/m5.png';
import m6 from '../assets/images/mission/m6.png';
import m7 from '../assets/images/mission/m7.png';
import m8 from '../assets/images/mission/m8.png';
import m9 from '../assets/images/mission/m9.png';
import m10 from '../assets/images/mission/m10.png';
import m11 from '../assets/images/mission/m11.png';

const Mission = () => {
    useEffect(() => {
      AOS.init();
    }, [])

    return (
        <div class="mission_section adaptive">
            <div class="container">
                <div class="mission_area">
                    <div class="mission_title">
                        <p data-aos="fade-up" data-aos-duration="2000">Our Mission</p>
                        <div data-aos="fade-up" data-aos-duration="3000" class="offer_section_button">
                            <button>Solanverse Future Missions</button>
                        </div>
                    </div>
                    <div class="mission_body">
                        <div class="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m2} alt=""/>
                                <h4>ADDING AN ABILITY TO BUY  COMMODITIES SUCH AS GOLD & SILVER WITHOUT MAKING CHARGE
                                </h4>
                        </div>
                        <div class="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m1} alt="image"/>
                                <h4>BUY, SELL & LEASE VIRTUAL REAL ESTATE</h4>
                        </div>

                        <div class="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m3} alt="image"/>
                                <h4>Play to Earn Games</h4>
                        </div>
                        <div class="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m4} alt="image"/>
                                <h4>ACCESS A WEALTH OF INFORMATION & INDUSTRY INSIGHT AT A CLICK OF A FINGER </h4>
                        </div>
                        <div class="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m5} alt="image"/>
                                <h4>AN OPPORTUNITY TO ACCESS EDUCATIONAL & LEARNING TOOLS</h4>
                        </div>
                        <div class="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m6} alt="image"/>
                                <h4>VIRTUAL EVENTS, STORES, GAMES & GALLERIES</h4>
                        </div>
                        <div class="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m7} alt="image"/>
                                <h4>NEXT GEN PRODUCT & AD OPPORTUNITIES</h4>
                        </div>
                        <div class="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m8} alt="image"/>
                                <h4>SECURE DECENTRALISED VIRTUAL WORLD</h4>
                        </div>
                        <div class="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m9} alt="image"/>
                                <h4>A FRIENDLY ENVIRONMENT FOR PARTNERSHIPS & SOCIAL NETWORKING</h4>
                        </div>
                        <div class="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m10} alt="image"/>
                                <h4>MULTIPLE STREAM’S OF INCOME BOTH ACTIVE & PASSIVE</h4>
                        </div>
                        <div class="mission_item" data-aos="fade-up" data-aos-duration="3000">
                            <img src={m11} alt="image"/>
                                <h4>ALL INFORMATION IN ONE DECENTRALISED HUB</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="global_image">
                <img src={Bitcoin} alt="image"/>
                    <div class="mission_bg_color"></div>
            </div>
        </div>
    );
};

export default Mission;