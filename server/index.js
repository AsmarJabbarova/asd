// const express = require('express');
// const app = express();
// const port = 3000;

// // Require the upload middleware
// const upload = require('./upload');

// // Set up a route for file uploads
// app.post('/upload', upload.single('file'), (req, res) => {
//   // Handle the uploaded file
//   res.json({ message: 'File uploaded successfully!' });
//   const newUsers ={
//     title:"edf",
//     profilePicture: req.file.path
// }
// array.push(newUsers)
// });
// app.use("/uploads", express.static("uploads"))
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });









const express = require("express");
const app = express();
const port = 3030;
const multer = require("multer");
const fs = require("fs");

//static db
const arr = [];


// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadFolder = "./uploads/";
    if (!fs.existsSync(uploadFolder)) {
      fs.mkdirSync(uploadFolder);
    }
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//users post request
app.post("/users", upload.single("imageFile"), (req, res) => {
    console.log('body: ', req.body);
    const {title} = req.body;
    console.log('files: ', req.files)
    console.log('file: ', req.file);

    const newUser = {
        title: title,
        profilePicture: req.file.path
    }

    arr.push(newUser);
  //post
  res.send({ message: "File uploaded successfully!" , data: {
    title: newUser.title,
    fullPath: `http://localhost:7070/${newUser.profilePicture}`
  }});
});

app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});