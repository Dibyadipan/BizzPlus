import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); 

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected!'))
.catch((error) => console.error('MongoDB connection error:', error));


app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

