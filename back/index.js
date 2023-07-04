import cors from "cors"
import express from "express"
import connection from "../front/src/db"
import user from "../front/src/models"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => { })

app.post("/register", async (req, res) => {
    const { name, email, phone, username, password } = req.body;
    const newUser = new user({
        name,
        email,
        phone,
        username,
        password
    })
    const savedUser = await newUser.save();
    res.status(200).end("well come")

})

connection.then(() => {
    app.listen(8080, () => { console.log("server started at port 8080") })
})