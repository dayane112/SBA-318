import express from "express";
import { patients } from "../data/patients.mjs";

let router = express.Router();

router.get('/', (req, res) => {
    res.json(patients)
});

const patientInfo = (req, res, next) => {
    const name = req.body.name;
    const DOB = req.body.DOB;
    const email = req.body.email;

    if(!name || !DOB || !email){
        res.status(400).send('Missing fields');
    }
    next()
}


router.post('/', patientInfo, (req, res) => {
    const name = req.body.name;
    const DOB = req.body.DOB;
    const email = req.body.email;

    const patientData = {
        ID: patients.length + 1,
        name,
        DOB,
        email
    };

    patients.push(patientData);
    res.status(201).send('Patient added');
});

// router.post('/', (req, res) => {
//     if (req.body.name && req.body.DOB && req.body.email) {
//     const patientData = {
//         "Patient ID":  patients.length + 1,
//         name: req.body.name,
//         DOB: req.body.DOB,
//         email: req.body.email
//     };

//     patients.push(patientData)
//     res.status(201).send('Patient added');
    
// }else {
//     res.status(400).send('Missing fields');
// }
// });



export default router;