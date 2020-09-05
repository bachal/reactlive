import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Items from './Items'
import {all_items_list} from './All_itmes_list'

export default function All_items() {
    const all_items=all_items_list
    const chk = all_items.map((name,i) => {
        return <Items name={all_items[i].name} img={all_items[i].img}/>
     })

    return (<div className="">
        <div className="card border-info col-12 col-md-12 col-lg-12" id="all_items">
            <div className="card-header border-white text-center bg-white">

            <img src={process.env.PUBLIC_URL + "1.jpg"} width="150" height="100" alt="" />&nbsp;&nbsp;<h2 className="f4"><b>आमच्याकडे मिळणारे  सर्व पदार्थ</b></h2>
            </div>
            <div className="card-body bg-white p-1">
                <div className="row">
                    {chk}
                </div>

            </div>

        </div>

    </div>)
}