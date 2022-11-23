let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

let taskShema = require("../models/Task"); // es un objeto del modelo task

// ruta para crear student

router.route("/create-task").post((req, res, next) => {
    taskShema.create(req.body, (error, data) => {
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
    taskShema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//Ruta para obtener un student

router.route("/edit-task/:id").get((req, res, next) => {
    taskShema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//Ruta par actualizar un student
router.route("/update-task/:id").put((req, res, next) => {
    taskShema.findByIdAndUpdate(
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
                console.log("Actividad actualizada con exito");
            }
        }
    );
});


//Ruta para eliminar un student

router.route("/delete-task/:id").delete((req, res, next) => {
    taskShema.findByIdAndDelete(req.params.id, (error, data) => {
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