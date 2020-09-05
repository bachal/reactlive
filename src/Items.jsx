import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {all_items_list} from './All_itmes_list'
import Atom_detail  from './Atom_detail'

export default function Items(prop) {
const  item_id=prop.name

    return (
        <div className="card border-primary border-rounded-pill col-6 col-md-4 col-lg-4 mt-2  bg-light " >
            <img className="mt-2 zoom " src={process.env.PUBLIC_URL + prop.img} alt="Card image cap" height="200px" witdh="100%" />
            <div className="card-body text-center">
                <p className="card-text">{prop.name} </p>
                <a href="#" class="btn btn-sm btn-primary zoom_button" data-toggle="modal" data-target="#exampleModal" id={item_id} onClick={() => submit(item_id)}>भाव आणि माहिती </a>
            </div>&nbsp;




            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-lg ">
                    <div class="modal-content">
                        <div class="modal-header modelheaderbg">
                            <h3 class="modal-title w-100 text-center " ><b>निवडलेल्या पदार्थाची  माहिती </b></h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body " id="a_data">
                            

                        </div>
                        <div class="modal-footer bg-dark">
                            <button type="button" class="btn btn-sm btn-danger m-auto" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}

function submit(name){

   // alert(name);
    const sweet_items=all_items_list;
    
    
    {sweet_items.filter( sweet_items=> sweet_items.name == name).map(filteredcar => (
        ReactDOM.render(<Atom_detail atom_data={filteredcar} /> , document.getElementById('a_data'))
       
    ))}
}