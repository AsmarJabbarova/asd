import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Helmet} from "react-helmet";

function Detail() {

  const [detail, setDetail] = useState([])
  let { productId } = useParams()
  useEffect(()=>{
    console.log(productId);
    axios.get(`http://localhost:3000/product/${productId}`).then((res) => setDetail(res.data))
  },[])
  return (
    <>
        <Helmet>
        <title>Detail</title>
      </Helmet>
      {
        <Grid item xs={6} >
          <div className="card">
            <Card sx={{ display: 'flex' }} >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }} className='asd'>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={detail.img}
                    alt="Live from space album cover"
                  />
                  <div className='meals'> <Typography component="div" variant="h5">
                    {detail.name}
                  </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">

                    </Typography></div>
                  <Typography>
                    $29
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                </Box>
              </Box>

            </Card>
          </div>
        </Grid>
      }

    </>
  )
}

export default Detail