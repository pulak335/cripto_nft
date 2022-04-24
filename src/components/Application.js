import React,{useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import app1 from '../assets/images/logo/app1.png';
import app2 from '../assets/images/logo/app2.png';
import app3 from '../assets/images/logo/app3.png';
import app4 from '../assets/images/logo/app4.png';
import app5 from '../assets/images/logo/app5.png';
import ApplicationPic from '../assets/images/bg/application.png'

const Application = () => {

    useEffect(() => {
      AOS.init();
    }, [])

    return (

        <div className="application__section" 
        style={{backgroundImage: `url(${ApplicationPic})`,
               backgroundPosition: "center",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               objectFit: "cover"
}}>
    <div className="container">
        <div className="apllication__inner">
            <div className="title">
                <p data-aos="fade-up"  data-aos-duration="2000">Applications</p>
                <div data-aos="fade-up"  data-aos-duration="3000" className="offer_section_button">
                        <button>Solanvarse Applications</button>
                        </div>
            </div>
            <div className="app__section" data-aos="fade-up"  data-aos-duration="3000">
                <div className="item1">
                        <div className="app">
                            <img src={app1} alt=""/>
                        </div>
                        <p>Salon Pay</p>
                </div>
                <div className="item1">
                        <div className="app">
                            <img src={app2} alt=""/>
                        </div>
                        <p>Salon Bets</p>
                </div>
                <div className="item1">
                        <div className="app">
                            <img src={app3} alt=""/>
                        </div>
                        <p>Salon Lending</p>
                </div>
                <div className="item1">
                        <div className="app">
                            <img src={app4} alt=""/>
                        </div>
                        <p>Salon Shop</p>
                </div>
                <div className="item1">
                        <div className="app">
                            <img src={app5} alt=""/>
                        </div>
                        <p>Salon Travel</p>
                </div>
                
            </div>
        </div>
    </div>
</div>
    );
};

export default Application;