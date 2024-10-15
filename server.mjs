// Imports
import express from "express";
import patientsRoutes from "./routes/patientsRoutes.mjs";
import doctorsRoutes from "./routes/doctorsRoutes.mjs";
import patient1Routes from "./routes/patient1Routes.mjs";
import { patients } from './data/patients.mjs';
import { doctors } from './data/doctors.mjs';
import { patient1 } from './data/patient1.mjs'

import pug from "pug";

// Initialize express and PORT number 
const app = express();
let PORT = 3000;

// Servin static files
app.use(express.static('./styles'));
app.use(express.urlencoded({ extended: true }));

// middleware
app.use(express.json());



app.set("view engine", "pug");
app.get("/", (req, res) => {
  res.render("index"); //filename home.pug
});

app.get("/patients", (req, res) => {
    res.render("patientList", { patients: patients }); //filename home.pug
});

app.get("/patients/update", (req, res) => {
    res.render("patientList", { patients: patients }); //filename home.pug
});

app.get("/doctors", (req, res) => {
    res.render("doctorList", { doctors: doctors }); //filename home.pug
});

app.get("/patient1", (req, res) => {
    res.render("patient1", { patient1: patient1 }); //filename home.pug
});



// Routes
app.use('/patient1', patient1Routes);
app.use('/patients', patientsRoutes);
app.use('/doctors', doctorsRoutes);


app.get("/", (req, res) => {
    res.send("Server is working")
  })

app.get('*', (req, res) => {
    res.status(404).send('404 Page not found!')
})

app.use((req, res) => {
    res.status(404);
    res.json({ error: "404 Page not found!" });
  });

// listen
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})