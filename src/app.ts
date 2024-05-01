import  express  from "express";
import  cors  from "cors";
import "dotenv/config";
import { router } from "./routes/item";
import db from "./config/mongo"

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log("connection ready"));
app.listen(PORT, () => console.log(`Running in port ${PORT}`));