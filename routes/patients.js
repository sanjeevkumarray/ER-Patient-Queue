const express = require("express");
const { PriorityQueue } = require("../queue");
const router = express.Router();

const patientQueue = new PriorityQueue();

router.post("/", (req, res) => {
  const { name, triageLevel } = req.body;
  if (!name || triageLevel < 1 || triageLevel > 5) {
    return res.status(400).json({ error: "Invalid patient data" });
  }
  const patient = patientQueue.enqueue(name, triageLevel);
  res.status(201).json({ message: "Patient added", patient });
});

router.get("/queue", (req, res) => {
  res.json(patientQueue.getQueue());
});

router.put("/treat/:id", (req, res) => {
  const patient = patientQueue.treat(req.params.id);
  if (!patient) return res.status(404).json({ error: "Patient not found" });
  res.json({ message: "Patient is being treated", patient });
});

router.delete("/discharge/:id", (req, res) => {
  const discharged = patientQueue.discharge(req.params.id);
  if (!discharged) return res.status(404).json({ error: "Patient not found" });
  res.json({ message: "Patient discharged" });
});

module.exports = router;