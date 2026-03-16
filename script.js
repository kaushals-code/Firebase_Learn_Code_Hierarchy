Only for Firebase CRUD in Node backend

import express from "express";
import { fbInstance } from "./db.js";
import { getDatabase, set, ref } from "firebase/database";

const app = express();
const port = 3000;

const datab = getDatabase(fbInstance);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi bro!");
});

app.post("/addUser", (req, res) => {
    set(ref(datab, "users/004"), {
        name: req.headers["username"],
        phone: req.headers["password"]
    });

    res.send({ status: "Success" });
})

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});
