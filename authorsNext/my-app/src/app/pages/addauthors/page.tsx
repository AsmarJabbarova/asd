"use client"
import "./../addauthors/adauthors.scss"
import Link from "next/link"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



export default function AddAuthors() {
  
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);

    
  


  };
    return (
      <>
      <div className="addAuthors">

      <div className="navHome">
        <div className="title"><h1>AUTHORS</h1></div>
        <div className="list">
          <div className="listEl"> <Link className="link" href="/">Home</Link></div>
           <div className="listEl"><Link className="link" href="/pages/authors">AUTHORS</Link></div>
            <div className="listEL"><Link className="link" href="/pages/addauthors"> ADD AUTHORS</Link></div>
            
           
         
        </div>
      </div>
<div className="addTitle">
  <h1>ADD AYTHORS</h1>
</div>
<div className="forms">
  <input type="text" placeholder="Name*" />
  <input type="text" placeholder="Birth Year*" />
  <input type="text" placeholder="Genre*" />
  {/* <select id="">
  <option value="">is Dead</option>
  <option value="">is Alive</option>
</select> */}
  <FormControl fullWidth  className="selectDead">
        <InputLabel id="demo-simple-select-label" >is Dead</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          style={{width:"15%"}}
        >
          <MenuItem value={10}>yes</MenuItem>
          <MenuItem value={20}>no</MenuItem>
        </Select>
      </FormControl>  
{/* <select name="" id="">
    <option value="">Gender</option>
    <option value="">Female</option>
    <option value="">Male</option>
  </select> */}
    <FormControl fullWidth  className="selectDead">
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          style={{width:"15%"}}
         
        >
          <MenuItem value={10}>Female</MenuItem>
          <MenuItem value={20}>Male</MenuItem>
        </Select>
      </FormControl>  
  <input type="text" placeholder="ImageURl*" />
</div>

      </div>
      </>
    )
  }