import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


export default function Welcome() {
    return (
        <div>
            <div className="card col-md-12 col-lg-12  border mt-5 img-fluid w-100" id="welcome">
                    <div class="card-body mt-5">
                        <div className="row justify-content-center">
                            <h5 class=" text-center"><img className="" src={process.env.PUBLIC_URL + "w4.png"} alt="Card image cap" height="60px" witdh="100%" />सुस्वागतम <img className="text-danger" src={process.env.PUBLIC_URL + "w4.png"} alt="Card image cap" height="60px" witdh="100%" /></h5>

                        </div>
                        <div className="row">
                            <div className="col-3 col-md-3 col-lg-3 d-flex justify-content-end">
                            <img className="img1" src={process.env.PUBLIC_URL + "cook2.png"} alt="Card image cap" />

                            </div>
                            <div className="col-6 col-md-6 col-lg-6 text-center ">

                                <h5 class="f1 mt-3 ">बाचल बंधू मिठाईवाले आपले सहर्ष स्वागत  करीत आहोत.</h5>
                                <h1 class=" text-50 f2"> <b>समर्थ स्वीट्स </b></h1>
                                <h5 class=" f3">स्वादिष्ट,खमंग व ताजा पदार्थ मिळण्याचे एकमेव ठिकाण. गोडवा आपुलकीचा. </h5>
                            </div>
                            <div className="col-3 col-md-3 col-lg-3">
                            <img className="img2" src={process.env.PUBLIC_URL + "cook5.png"} alt="Card image cap"  />
                            </div>
                            </div>
                        
                    </div>
        </div>
        </div>



            

)



}