import { useState } from 'react'; 
import '../../App.css';

function List({ todos,activeLink, onDelete, onComplete}){
const [isChecked, setIsChecked] = useState(false); 
 
  const onDeleteProcess= (index) =>{
    onDelete(index);
  }
  const handleCheckBox =(index)=>{
         setIsChecked(index.checked);
         onComplete(index);
  }
  
  return(
  <section className="main">
		<input className="toggle-all" type="checkbox"   />
		<label htmlFor="toggle-all">
			Mark all as complete</label>
      <ul className="todo-list">

  {todos.filter(todo => todo.value === (activeLink) || activeLink==="all" )
  .map( ( todo, index ) => {

return(
 
 <li className="todo" key={todo.name}  name={todo.name} >
  <div className="view">
              <input className="toggle" name ={index} type="checkbox" checked={isChecked}   onChange={() => handleCheckBox(index)}  />
            <label>{todo.name}</label>
                                      
               <button
                className="destroy"
                 onClick={() => onDeleteProcess(todo.name)}
              ></button>
            </div>
          </li>)//second return

})}
</ul> </section>
  )  


};


 export default List;