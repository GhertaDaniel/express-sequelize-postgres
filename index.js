require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/db');
const cors = require('cors');

const app = express();

const PORT = process.env.DB_PORT || 3001;
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
