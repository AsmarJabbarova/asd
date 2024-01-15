import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Detail() {
  const [detail, setDetail] = useState([]);
  let { productId } = useParams();
  const navigate = useNavigate();
  axios
    .get(`http://localhost:3000/products/${productId}`)
    .then((res) => setDetail(res.data));

  return (
    <>
      {
        <div className="card">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {detail.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.price}
              </Typography>
            </CardContent>
            <CardActions>
              <button
                onClick={() => {
                  navigate(-1);
                }}
              >
                go back
              </button>
            </CardActions>
          </Card>
        </div>
      }
    </>
  );
}

export default Detail;
