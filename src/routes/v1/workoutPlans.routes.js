const express = require("express");
const router = express.Router();

const {
  getWorkoutPlans,
  getWorkoutPlanById,
  createWorkoutPlan,
  updateWorkoutPlan,
  deleteWorkoutPlan
} = require("../../controllers/workoutPlans.controller");


