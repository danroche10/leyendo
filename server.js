import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "./routes/essayroutes";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080; //Heroku Step 1

// mongo connection
mongoose.Promise = global.Promise;
//Heroku Step 2
mongoose.connect(
  process.env.MONGODB_URI,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);
// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Heroku Step 3
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

// CORS setup
app.use(cors());

routes(app);

app.get("/", (req, res) =>
  res.send(`Our Soccer application is running on port ${PORT}`)
);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Your soccer server is running on port ${PORT}`)
);
