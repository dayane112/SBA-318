import express from "express";
import { patients } from "../data/patients.mjs";

let router = express.Router();

router.get('/', (req, res) => {
    res.json(patients);
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


router.post('/', patientInfo, (req, res, next) => {
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

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const patient = patients.find(p => p.id === id);

    if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
    }

    res.json(patient);
});

router.patch('/:id', (req, res, next) => {

    let name = req.body.name;
    let DOB = req.body.DOB;
    let email = req.body.email;
    // parseInt converts to url string to interger
    let id = parseInt(req.params.id);
    
    let patient = patients.find(p => p.id === id);

    if(name != null) patient.name = name;
    if(DOB != null) patient.DOB = DOB;
    if(email != null) patient.email = email;

    // if (name != null) {
    //         name
    // } else if (DOB != null) {
    //         DOB
    // } else if (email != null) {
    //         email
    // }  else {
    //     res.status(400).send('Missing fields');
    // }

    res.status(201).send('Patient edited');
    // next();
});


// router.delete('/:id', (req, res, next) => {
//     const patient = patients.find((p, i) => {
//       if (p.id == req.params.id) {
//         patients.splice(i, 1);
//         return true;
//       }
//     });
  
//     if (patient) res.json(patient);
//     else next();
//   });


router.delete('/:id', (req, res, next) => {
    let patient = null;
    for(let i = 0; i < patients.length; i++){
        // checking the id ID matches the ID of of URL
        // parseInt converts to url string to interger
      if (patients[i].id == parseInt(req.params.id)) {
        patient = patients[i];
        patients.splice(i, 1);

      }
    }
  
    if (patient) res.json(patient);
    else next();
    
});

export default router;