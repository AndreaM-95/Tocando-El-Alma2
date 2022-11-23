let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

let studentShema = require("../models/Student"); // es un objeto del modelo student 

// ruta para crear student

router.route("/create-student").post((req, res, next) => {
    studentShema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

//Ruta para leer students 

router.route("/").get((req, res, next) => {
    // eslint-disable-next-line array-callback-return
    studentShema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//Ruta para obtener un student

router.route("/edit-student/:id").get((req, res, next) => {
    studentShema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//Ruta par actualizar un student
router.route("/update-student/:id").put((req, res, next) => {
    studentShema.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                console.log(error);
                return next(error);
            } else {
                res.json(data);
                console.log("Estudiante actualizado con exito");
            }
        }
    );
});


//Ruta para eliminar un student

router.route("/delete-student/:id").delete((req, res, next) => {
    studentShema.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});


module.exports = router;