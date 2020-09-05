import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


export default function Corsoul() {

    return (
        <div className="card p-3">

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                <div class="carousel-item active">
                        <img class="d-block imgsize" src={process.env.PUBLIC_URL + "st3.jpg"} alt="First slide" />
                    </div>
                    <div class="carousel-item ">
                        <img class="d-block imgsize" src={process.env.PUBLIC_URL + "image1.jpg"} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block imgsize" src={process.env.PUBLIC_URL + "st7.jpg"} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block imgsize" src={process.env.PUBLIC_URL + "image3.jpg"} alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block imgsize" src={process.env.PUBLIC_URL + "st1.jpg"} alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block imgsize" src={process.env.PUBLIC_URL + "st2.jpg"} alt="Third slide" />
                    </div>
                   
                    <div class="carousel-item">
                        <img class="d-block imgsize" src={process.env.PUBLIC_URL + "st6.jpg"} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block imgsize" src={process.env.PUBLIC_URL + "st8.jpeg"} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block imgsize" src={process.env.PUBLIC_URL + "st9.jpeg"} alt="First slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>



        </div>


    )


}