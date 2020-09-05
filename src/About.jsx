import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


export default function About() {
    return (
        <div>
             <div className="card col-md-12 col-lg-12  border  aboutbg w-100  " id="about">
                    <div class="card-body mt-5">
                        <div className="row justify-content-center">
                        <img className="" src={process.env.PUBLIC_URL + "cook6.png"} alt="Card image cap" height="120px" witdh="100%" /> <h5 className=" f6"><b>आमच्याविषयी माहिती</b></h5>
                        </div>
                        <div className="row">
                        <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                            <p >बाचल बंधु  मिठाईवाले या स्वीट्स लघुउद्योगाची सुरुवात श्री मिठूशेठ  बाचल व कै. सौ.यमुनाबाई मिठूशेठ बाचल  यांनी १९८० साली  केली . त्यानंतर सलग ३० वर्ष या शॉप ने ग्राहकांची सेवा केली. ग्राहकांना योग्य दरात अतिशय चांगला दर्जाचा माल देणे हा हेतू त्यांनी कायम ठेवला.आज पर्यंत यशस्वीरित्या शॉप ग्राहाकांची सेवा करत आहे . त्यांनतर मिठूशेठ बाचल यांचे ज्येष्ठ चिरंजीव श्री सचिनशेठ मिठूशेठ बाचल यांनी २०१० साली बाचल बंधू मिठाईवाले चे नामांकरण करून समर्थ स्वीट्स एक नवीन चव देणारा स्वीट्स  उद्योग प्रशिध्द केला. काही चांगले बदल करून त्यांनी समर्थ स्वीट्स चे नांव अजून प्रशिध्द केले . व आज ग्राहकांच्या मागणीनुसार योग्य दरात चांगला दर्जाचा माल ते ऑर्डरनुसार देतात.आणि आपल्या  ठरलेल्या हेतू  नुसार यशस्वीरित्या वाटचाल करत आहे .शेवटी आपल्याला जपायचा तो गोडवा आपुलकीचा... </p>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-center">
                        <img className="owner" src={process.env.PUBLIC_URL + "sachin.jpg"} alt="Card image cap" /> 
                        <h5 className="f7"><b> श्री.सचिनशेठ मिठूशेठ बाचल(Owner)</b></h5>

                        </div>
                        </div>
                        
                        
                    </div>
        </div>
        </div>
    )





}