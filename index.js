import express from 'express';
import dotenv from 'dotenv';
// import session from 'express-session';
import authRoutes from './routes/authRoute.js';
import blogRoutes from './routes/blogRoute.js';
import {connectDB} from './config/db.js';

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
// app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));

app.use('/', authRoutes);
app.use('/', blogRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
