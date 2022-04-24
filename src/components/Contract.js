import React,{useEffect} from 'react';
import contract from '../assets/images/contract/contract.gif'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const Contract = () => {
        useEffect(() => {
      AOS.init();
    }, [])
    return (
        <div className="contract_section">
     <div className="container">
          <div className="contract_area">
               <div className="row align-items-center">
                    <div className="col-lg-7 col-12">
                         <div className="contract_image" data-aos="fade-up"  data-aos-duration="3000">
                              <img src={contract} alt="image"/>
                         </div>
                    </div>
                    <div className="col-lg-5 col-12">
                         <div className="contract_content" data-aos="fade-up"  data-aos-duration="3000">
                              <div className="contact_title">
                                   <span>Smart Contracts</span>
                                   <h2>Smarter Smart Contracts</h2>
                              </div>
                              <div className="contract_para">
                                   <p>SolanVerse is one of the leading smart contracts Proof of Stake blockchains. SolanVerse smart contracts can use formal verification, allowing them to be mathematically verified, reliable, and secure.</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</div>
    );
};

export default Contract;