import express from "express";
import { doctors } from "../data/doctors.mjs";

let router = express.Router();

router.get('/', (req, res) => {
    res.json(doctors)
});


router.route('/').post((req, res) => {
    if (req.body.doctor && req.body.specialty && req.body.license) {
    const doctorData = {
        ID:  doctors.length + 1,
        doctor: req.body.doctor,
        specialty: req.body.specialty,
        license: req.body.license
    };

    doctors.push(doctorData)
    res.render('doctorList', { doctors: doctors })
    // res.status(201).send('Doctor added');
    
}else {
    res.status(400).send('Missing fields');
}
});




export default router