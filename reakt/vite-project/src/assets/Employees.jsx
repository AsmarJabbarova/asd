import React from 'react'
import  employees  from './employees.js';
function Employees() {
  let sumSalary=employees.reduce((prevValue,currentValue)=>prevValue+currentValue.salary,0);
  console.log(sumSalary);
  
  return (
    <div>
        <ul>
        {employees.sort((a,b)=>a.name.localeCompare(b.name)).map((elem, i) => {
          return <li key={i}>{elem.name}</li>;
        })}
      </ul>
      <span>
        Average salary ={sumSalary/employees.length}
      </span>
    </div> 
  )
}

export default Employees