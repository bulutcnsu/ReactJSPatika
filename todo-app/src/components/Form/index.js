import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import '../../App.css';

function Form({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") return;
    onAdd(input.trim());  //string
    setInput(""); 
  };
    return (
    
	<header className="header">
		<br></br>
		<h2 id="header-todo">Todo App</h2>
		<br></br>
		
		<form  onSubmit={handleSubmit}>
			<div className="inputDiv">
				<input className="new-todo" value={input} onChange={(e) => setInput(e.target.value)} placeholder="What needs to be done?" autoFocus />
			</div>
			<div className="divBtn"><button className="submitBtn" type="submit"> Add Entry</button> </div>
			
		</form>
	</header>
   
    );
    }   

    export default Form;