import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
import '../../App.css';



function Footer({todos, getLink,onDeleteAll}) {


 const sendLinkValue =(value) => {	
 getLink(value.baseURI.slice(22)); }

    return (
  <footer className="footer">
		<span className="todo-count">
			<strong>{todos.length} </strong>
			items left
		</span>

		<ul className="filters" onClick={(e) => sendLinkValue(e.currentTarget)}>
			<li>
				<Link to="all" className="all" value="all" >All</Link>
			</li>
			<li>
				<Link to="active" className="active">Active</Link>
			</li>
			<li>
				<Link to="completed" className="completed" >Completed</Link>
			</li>
		</ul>

		<button className="clear-completed" type="submit" 
			  onClick={() => onDeleteAll()}>
		
			Clear completed
		</button>
	</footer>
    );
}   

export default Footer;  