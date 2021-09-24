import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

const app = express();
app.use(cors());

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

app.use('/posts', postRoutes);

// https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = 'mongodb+srv://ani_mongouser:mwf3to6@cluster0.nbyew.mongodb.net/test';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>{app.listen(PORT, ()=>{ console.log(`Server running at port ${PORT}`); })})
  .catch(error=>{console.log(error.message); });