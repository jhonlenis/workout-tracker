// src/routes/v1/workoutReports.routes.js
const express = require("express");
const router = express.Router();
const {
  getWorkoutReports,
  getWorkoutReportById,
  createWorkoutReport,
  updateWorkoutReport,
  deleteWorkoutReport
} = require("../../controllers/workoutReports.controller");


