import React, { useEffect, useState } from 'react'
import AddPopUp from './AddPopUp';
// import FilterTodo from './FilterTodo';
import './todohome.css'
import { TodoList } from './TodoList';



export default function TodoHome() {
 
  const [todos, setTodos] = useState([]);

  // const ftodos=[...todos]
  // const [filteredList, setFilteredList] = useState(ftodos);
  // console.log(filteredList)

  const [selectedFilter, setSelectedFilter] = useState("");
  const [isComplete, setComplete] = useState(false);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    
  };
  console.log(selectedFilter)

  // const filterByFunction = (filteredData) => {
   
  //   if (!selectedFilter) {
  //     return filteredData;
  //   }

  //   const filteredFunction = filteredData.filter(
  //     (f) => f.isComplete===selectedFilter
  //   );
  //   return filteredFunction;
  // };

  const filteredTodos = todos.filter((todo) => {
    if (selectedFilter === 'incomplete') {
      return todo.isComplete === false;
    }

     if (selectedFilter === 'complete') {
      return todo.isComplete === true;
      
    }
    if(selectedFilter===""){
      return  todo.isComplete===false||true;
    }
    
  });

  




  // const [filterStatus, setFilterStatus] = useState("all");
  
  

//   let newArray = todos.filter(t => {
//     if (filter === "incomplete") {
//       return todo.isCompleted;
//     } else if (filterStatus.isComplete=== "incomplete") {
//       return !todo.isCompleted;
//     }
//     return true; 
//   });
// console.log(newArray);


// const handleFilterChange = (newFilter) => {
//   setFilterStatus(newFilter);
//   console.log(filterStatus);
// };

  const addTodo=todo=>{
    if(!todo.text){
      console.log(!todo.text)
      return;
    }
    const newtodo=[...todos,todo];
    console.log(newtodo);
    setTodos(newtodo);
  }
  // const istaskdone=(index)=>{
  //   const updateList=[...todos];
  //   updateList[index].isComplete="complete";
  //   setTodos(updateList);
  //   console.log(todos)
  // }
//   const istaskdone = (index) => {
//     const updatedList = [...todos];
//     updatedList[index].isComplete = !updatedList[index].isComplete;
//     setTodos(updatedList);
// };  
const istaskdone = (index) => {
    const updatedList = [...todos];
    updatedList[index].isComplete = updatedList[index].isComplete == true ? false : true ;
    setTodos(updatedList);
};  
  const Edit=(index,newval,select)=>{
       const updateList=[...todos];
        updateList[index].text=newval;
        updateList[index].isComplete=select;
        setTodos(updateList);
        console.log(updateList)
  }
  const remove=(index)=>{
    const updateList=[...todos];
    updateList.splice(index,1);
    setTodos(updateList);
  }
  // useEffect(() => {
  //   var filteredData = filterByFunction(todos);
  //    setTodos(filteredData);
  // });

  return (
    <div className='container'>
        <h1 className='headline'>Todo List</h1>
        
      <div className='addandall'>
      <AddPopUp submit={addTodo}/>
      <div className="filter-buttons">
      <select 
          id="input"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
          
        </select>
    </div>
      </div> 
       <div className='headline2'>{(todos && todos.length)? "":"No Task"}</div>
      <TodoList todos={filteredTodos} istaskdone={(index, filteredTodo) => istaskdone(index, filteredTodo)}
      edit={Edit} remove={remove}/>
    </div>
  )
}
