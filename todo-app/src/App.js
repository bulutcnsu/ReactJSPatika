import './App.css';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';
import { useState } from 'react'; 



function App() {
 const [link,setLink]= useState("active");
 const [todos, setTodos] = useState([

  {name: "Learn React",
  value: "active"
  },
  {name: "Learn JavaScript",
  value: "active"
  },
  {name: "Have a Fun",
   value: "active"
  }]);


    const handleAdd = (newTodo) => {
    const newTodoObj = {
          name : newTodo,
          value : "active" }  
         setTodos([...todos, newTodoObj]);    }
      
         

  const handleDelete = (nameToDelete) => {
    console.log("handle delete kısmına geldin :index ",nameToDelete);
    setTodos(todos.filter((todo) => todo.name !== nameToDelete));
   
  };
    const handleComplete = (indexToComplete) => {
    const indexValue = todos[indexToComplete].value;
    todos[indexToComplete].value = (indexValue =='active') ? "completed":"active";
    setTodos([...todos]);
   
  };

    const handleDeleteAll = () => {
     setTodos([]); 
  };

  const handleSelected =(link) => {

  setLink(link); }

  return (
    <div className="App">
      <section className="todoapp">
        
          <Form  onAdd={handleAdd}/>
           <List  todos={todos}  activeLink={link} onDelete ={handleDelete} onComplete={handleComplete}/>
          <Footer todos={todos} getLink={handleSelected} onDeleteAll={handleDeleteAll}/>  

        </section>    
                      
    </div>
  );
}

export default App;
