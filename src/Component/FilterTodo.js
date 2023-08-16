// import React from 'react'
// import { useState } from 'react';

// const  FilterTodo = (props) => {

//   const [isComplete, setComplete] = useState("all");
//   const handleSubmit = (e) => {
   
//     e.preventDefault();
//     props.submit({isComplete: isComplete
//     })
//     setComplete("all")
//   }
//   const handleComplete = (e) => {
//     const newValue = e.target.value ;
//     setComplete(newValue);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <select
//               name='process'
//               className='userinput'
//               style={{ width: '400px' }}
//               onChange={handleComplete}
//               value={isComplete}
//             >
//               <option value='all'>All</option>
//               <option value='incomplete'>Incomplete</option>
//               <option value='complete'>Complete</option>
//             </select>
//             <button className='btn btn-primary m-2' variant="contained" color='secondary' type='submit' >set</button>
//             </form>
//     </div>
//   )
// }

// import { Box, FormControl, MenuItem, Select } from '@mui/material'
// import React from 'react'
// import './filtertodo.css'
// import { brown } from '@mui/material/colors'

// function FilterTodo(props) {
//   return (
//     <div>
//         <Box sx={{ minWidth: 130,color:brown }}>
//         <FormControl fullWidth>
  
//   <Select
//   defaultValue={"All"}
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
//     // value={age}
//     // label="Age"
//     // onChange={handleChange}
//   >
//     <MenuItem value={"All"}>All</MenuItem>
//     <MenuItem value={"Incompleted"}>Incompleted</MenuItem>
//     <MenuItem value={"Completed"}>Completed</MenuItem>
//   </Select>
// </FormControl>
// </Box>
        
//     </div>
//   )
// }

// export default FilterTodo
import React, { useState } from 'react';

export default function FilterTodo() {

  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    
  };
  console.log(selectedBrand)

  return (
    <div className="filter-buttons">
      <select
          id="brand-input"
          value={selectedBrand}
          onChange={handleBrandChange}
        >
          <option value="All">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
          
        </select>
    </div>
  );
}
