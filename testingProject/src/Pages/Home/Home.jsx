import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./../Home/Home.scss";

import axios from "axios";
import { useNavigate } from "react-router-dom";

// const colors = {
//   color: ["red,black,blue"],
// };

function Home() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProduct(res.data));
  }, []);

  function handleDelete(productId) {
    axios.delete(`http://localhost:3000/products/${productId}`);
    setProduct((prevProduct) =>
      prevProduct.filter((product) => product.id !== productId)
    );
  }

  const handleDetail = (productId) => {
    navigate(`/detail/${productId}`);
  };
  const handleBahadanUcuza = () => {
    const filter = [...product].sort((a, b) => b.price - a.price);
    setProduct(filter);
  };
  const handleUcuzdanBahaya = () => {
    const filter1 = [...product].sort((a, b) => a.price - b.price);
    setProduct(filter1);
  };

  return (
    <>
      <div className="main">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </div>

        <div className="price">
          <button onClick={handleBahadanUcuza}>bahadanucuza</button>
          <button onClick={handleUcuzdanBahaya}>ucuzdanbahaya</button>
        </div>
        {/* {colors.color.map((item) => (
          <div className="checkbox">
            <input type="checkbox" onChange={() => handleColor(item)} />
            <label htmlFor="">{item}</label>
          </div>
        ))} */}

        <div className="cards">
          {product
            .filter((item) => {
              return item.name
                .toLowerCase()
                .includes(search.toLocaleLowerCase());
            })
            .map((elem, i) => (
              <Card sx={{ maxWidth: 345 }} key={i}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {elem.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {elem.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {elem.color}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleDelete(elem.id)}>
                    delete
                  </Button>
                  <Button size="small" onClick={() => handleDetail(elem.id)}>
                    detail
                  </Button>
                </CardActions>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
