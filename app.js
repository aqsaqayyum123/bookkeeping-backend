const express = require('express');
const db = require('./config/database');
const indexRoutes = require('./routes');
require('dotenv').config();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Backend APIS',
      description: "API'S Information in detail",
      contact: {
        name: 'Developer',
      },
      servers: ['http://localhost:5000'],
    },
  },
  // []
  apis: ['./routes/api/*.routes.js'],
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRoutes);

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/bookkeeping', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

async function dbconnection() {
  try {
    let result = await db.authenticate();
    console.log(' Database connected successfully');
  } catch (error) {
    console.log(error);
  }
}
dbconnection();

app.get('/', (req, res) => res.send('index'));

try {
  const PORT = process.env.PORT;
  app.listen(PORT, console.log(`listening on ${PORT}`));
} catch (error) {
  console.log(error);
}
