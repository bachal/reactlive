import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


export default function Contact() {
    return (
        <div>
             <div className="card col-md-12 col-lg-12  border  contactbg w-100" id="contact">
                    <div class="card-body ">
                        <div className="row justify-content-center">
                        <img className="" src={process.env.PUBLIC_URL + "del.png"} alt="Card image cap" height="100px" witdh="100%" /> <h5 className="f6"><b>आमचा संपर्क</b></h5>
                        </div>
                        <div className="row">
                        <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                        <h5 className="f8">दूरध्वनी :-९५१८९३६२५१,७०३८३८४२६०</h5>
                        <h5 className="f8">ई-मेल :-samarthsweets2010@gmail.com</h5>
                        <h5 className="f8">पत्ता :- मिरी  ,तालुका :पाथर्डी ,जिल्हा :अहमदनगर ,विट्ठल मंदिराजवळ ,पिन :४१४५०१</h5>
                        <h5 className="f8">संपर्काचा वेळ :-सकाळी ८:०० ते संघ्याकाळी ७:०० </h5>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img className="owner" src={process.env.PUBLIC_URL + "contact.jpeg"} alt="Card image cap" /> 

                        </div>
                        </div>
                        
                        
                    </div>
        </div>
        </div>
    )





}