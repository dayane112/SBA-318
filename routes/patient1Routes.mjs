import express from "express";
import { patient1 } from "../data/patient1.mjs";

let router = express.Router();

router.get('/', (req, res) => {
    res.json(patient1)
});


router.post('/', (req, res) => {
    if (req.body["Doctor notes"] && req.body.Diagnostic && req.body.Prescription && req.body.date) {
    const patient1Data = {
        "Doctor notes": req.body.DoctorNotes,
        Diagnostic: req.body.Diagnostic,
        Prescription: req.body.Prescription,
        date: req.body.date,
    };

    patient1.push(patient1Data)
    res.status(201).send('New note added');
    
}else {
    res.status(400).send('Missing fields');
}
});



export default router