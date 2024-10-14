// Imports
import express from "express";
import patientsRoutes from "./routes/patientsRoutes.mjs";
import doctorsRoutes from "./routes/doctorsRoutes.mjs";
import patient1Routes from "./routes/patient1Routes.mjs";

// Initialize express and PORT number 
const app = express();
let PORT = 3000;


// middleware
app.use(express.json());




// Routes
app.use('/patients', patientsRoutes);
app.use('/patients/patient1', patient1Routes);
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