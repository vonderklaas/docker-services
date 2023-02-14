const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require('./config/config');

const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');

const MONGO_URl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose.set('strictQuery', true);

const connectWithRetry = () => {
  mongoose
    .connect(MONGO_URl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB!'))
    .catch((error) => {
      console.log(error);
      console.log('Error, retrying to connect!');
      setTimeout(connectWithRetry, 5000);
    });
};

const PORT = process.env.PORT || 3000;

const app = express();

// Tell Express to trust Nginx headers
app.enable('trust proxy');

app.use(cors({}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<h1 style='font-family: sans-serif'>Hello from Docker!</h1>`);
});

app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on: ${PORT}`);
  connectWithRetry();
});
