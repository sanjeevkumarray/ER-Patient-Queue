Emergency Room Queue Management API

Overview

This project implements a RESTful API service to simulate the management of patient queues in an emergency room setting. It prioritizes patients based on their triage level and ensures efficient handling of critical cases.

Features

Priority Queue System: Patients are prioritized based on severity and wait time.

Real-Time Notifications: Alerts for critical patients and estimated wait times.

Patient Management: Add, treat, and discharge patients.

Concurrency Handling: Ensures smooth queue operations.

Tech Stack

Backend: Node.js, Express

Middleware: Logging, Error Handling

Testing: Jest (Unit Tests)

Data Storage: In-memory storage (No database required)

Security: Input Validation, Rate Limiting

API Endpoints

1. Add a Patient to the ER Queue

Endpoint: POST /patients/


![image](https://github.com/user-attachments/assets/a0529055-e4b2-4f9c-ac24-b7ef1b7d635e)


2. Get the Current Queue of Patients

Endpoint: GET /patients/queue
![image](https://github.com/user-attachments/assets/39b1bbab-4eda-4986-8a16-fca203385281)





3. Move a Patient to "Being Treated"

Endpoint: PUT /patients/treat/:patient_id

Example URL: PUT http://localhost:3000/patients/treat/1743424913583


![image](https://github.com/user-attachments/assets/550bc001-b6c4-497a-9d2c-5af4c5de76c2)


4. Discharge a Patient

Endpoint: DELETE /patients/discharge/:patient_id

Example URL: DELETE http://localhost:3000/patients/discharge/1743424916886



![image](https://github.com/user-attachments/assets/748813c8-f6d6-4e33-b9d4-68b09ac61bcc)


Setup & Running Instructions

Prerequisites

Install Node.js (v16+ recommended)

Installation Steps

Clone the repository:

git clone https://github.com/your-username/patient-queue-api.git
cd patient-queue-api

Install dependencies:

npm install

Start the server:

npm start

The API will run at http://localhost:3000/

Running Tests

npm test

Additional Features

Real-Time WebSocket Updates (Bonus)

Rate Limiting to Prevent API Abuse (Bonus)

Doctor Availability Simulation (Bonus)

Contribution Guidelines

Fork the repository

Create a new branch (feature-branch)

Commit changes and push

Create a Pull Request (PR)

License

This project is licensed under the MIT License.
