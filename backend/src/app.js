const express = require('express');
const app = express();
const connectDB = require('./database/mongoose');
const tasks = require('./routes/route');
require('dotenv').config();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger/swagger')


const port = process.env.PORT;

app.use(express.static('./public'));
app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks)

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs.specs))


const serve = async () => {
    try {
      await connectDB(process.env.CONNECTION_STRING);

      app.listen(port, () =>
        console.log(`Server port: ${port}`)
      );

    } catch (error) {

      console.log(error);
    }

  };
  

serve();