import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import {Link} from '@mui/material';
import { useNavigate } from 'react-router-dom';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Categories() {
    const navigate = useNavigate();

    let[categories,setCategories]=useState([])
    useEffect(()=>{
        axios("https://6554d83163cafc694fe7163f.mockapi.io/category").then((res)=>{
            setCategories(res.data)
        })
    },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Categories Name</TableCell>
            <TableCell align="right">Categories description</TableCell>
            <TableCell align="right">Categories Details</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">                            
                {category.id}
              </TableCell>
              <TableCell align="right">{category.name}</TableCell>
              <TableCell align="right">{category.description}</TableCell>
              <TableCell align="right">{category.details}</TableCell>
              <TableCell align="right">
             <button onClick={()=> {
                  navigate(`/category/${category.id   }`)

             }}>
                details
             </button>
                </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}