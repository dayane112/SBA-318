// Imports
import express from "express";
import { patients } from "./data/patients.mjs";
import { doctors } from "./data/doctors.mjs";
import { patient1 } from "./data/patient1.mjs";

// nitialize express and PORT number 
const app = express();
let PORT = 3000;


// middleware



// Routes



// listen
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})