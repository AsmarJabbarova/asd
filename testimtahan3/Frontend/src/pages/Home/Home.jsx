import React, { useState } from 'react'
import './../Home/Home.scss'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";
function Home() {
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:3000/product").then((res) => setProduct(res.data))
  })
  const handleDetail = (productId) => {
    navigate(`/detail/${productId}`)
  }


  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="container">

        <div className="books">
          <div className="title">
            Tasty and Delition Foods
          </div>
          <div className="but">
            <button className='button1'>Book a Table</button>
          </div>
          {/* <div className="bookTab">
            <div className="inputs">
              <input type="text" placeholder='Name' />
              <input type="tel" placeholder='Phone' />
              <input type="date" />
              <input type="text" placeholder='Time' />
              <input type="text" placeholder='Person' />
            </div>
            <div className="but">
              <button>Book</button>
            </div>


          </div> */}

        </div>
        <div className="section2">
          <div className="about">
            <div className="left">
              <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg" alt="" />
            </div>
            <div className="right">
              <div className="ab">ABOUT TASTY</div>
              <div className="our">
                Our chef cooks the most delicious food for you
              </div>
              <div className="lorem">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </div>

            </div>
          </div>
        </div>

        <div className="secMenu">
          <div className="title">
            Discover Our Exclusive Menu
          </div>
          <div className="buttonss">
            <button className='main'>Main</button>
            <button className="dessert">Dessert</button>
            <button className='drinks'>Drinks</button>
          </div>
          <div className="menu">
            <input type="text" placeholder='search' onChange={(e) => { setSearch(e.target.value) }} />

            <Grid container spacing={2}>
              {
                product.filter(elem => elem.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((elem, i) => (
                  <Grid item xs={6} key={i} >
                    <div className="card" onClick={() => handleDetail(elem.id)} >
                      <Card sx={{ display: 'flex' }} >
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ flex: '1 0 auto' }} className='asd'>
                            <CardMedia
                              component="img"
                              sx={{ width: "100px", height:"100px", borderRadius:"50%" }}
                              image={elem.img}
                              alt="Live from space album cover"
                            />
                            <div className='meals'> <Typography component="div" variant="h5">
                              {elem.name}
                            </Typography>
                              <Typography variant="subtitle1" color="text.secondary" component="div">
                                Meat, Potatoes, Rice, Tomatoe
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
                ))
              }
            </Grid>


          </div>



        </div>
      </div>
    </>
  )
}

export default Home

