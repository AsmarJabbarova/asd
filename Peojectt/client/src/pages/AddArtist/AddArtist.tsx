// import React from 'react'

// type Props = {}

// const AddArtist = (props: Props) => {
//   return (
//     <div>AddArtist</div>
//   )
// }

// export default AddArtist

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import './AddArtists.scss'
export default function MediaCard() {
  return (
    <>
    <div className='mainAdd'>
  
    <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  {/* <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="standard-basic" label="Standard" variant="standard" /> */}
</Box>
<Stack spacing={2} direction="row">
    
    <Button variant="contained">ADd ARTIST</Button>
  </Stack>
    </div>
      
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/jpeg;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Selena Gomez
        </Typography>
        <Typography variant="body2" color="text.secondary">
        24
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Delete</Button>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </>
  
  );
}