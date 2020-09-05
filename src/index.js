import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Corsoul from './Corsoul';
import Navbar from './Navbar';
import All_items  from './All_items'
import Welcome from './Welcome'
import About from './About'
import Contact from './Contact'



import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navbar />,document.getElementById('navbars_compo'));
ReactDOM.render(<Welcome />,document.getElementById('welcome_compo'));
ReactDOM.render(<Corsoul />,document.getElementById('cour_compo'));
ReactDOM.render(<All_items />,document.getElementById('items_compo'));
ReactDOM.render(<About />,document.getElementById('about_compo'));
ReactDOM.render(<Contact />,document.getElementById('contact_compo'))









serviceWorker.unregister();
