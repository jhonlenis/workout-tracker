const express = require("express");
const router = express.Router();

const {
  getExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise
} = require("../../controllers/exercises.controller");
// Definir las rutas para ejercicios
router.get("/", getExercises);
router.get("/:id", getExerciseById);
router.post("/", createExercise);
router.put("/:id", updateExercise);
router.delete("/:id", deleteExercise);
// Exportar el router
module.exports = router;
