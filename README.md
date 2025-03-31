# Emergency Room Queue Management API

## Overview

This project implements a RESTful API service to simulate the management of patient queues in an emergency room setting. It prioritizes patients based on their triage level and ensures efficient handling of critical cases.

## Features

- **Priority Queue System**: Patients are prioritized based on severity and wait time.
- **Real-Time Notifications**: Alerts for critical patients and estimated wait times.
- **Patient Management**: Add, treat, and discharge patients.
- **Concurrency Handling**: Ensures smooth queue operations.

## Tech Stack

- **Backend**: Node.js, Express
- **Middleware**: Logging, Error Handling
- **Testing**: Jest (Unit Tests)
- **Data Storage**: In-memory storage (No database required)
- **Security**: Input Validation, Rate Limiting

## API Endpoints

### 1. Add a Patient to the ER Queue

- **Endpoint**: `POST /patients/`


**Screenshot:**
![Screenshot 2025-03-31 184456](https://github.com/user-attachments/assets/7fcc91f2-90c4-46ce-8b14-ee313a04ef9a)


---

### 2. Get the Current Queue of Patients

- **Endpoint**: `GET /patients/queue`


**Screenshot:**
![Screenshot 2025-03-31 184546](https://github.com/user-attachments/assets/52b58a6d-fd01-4fb7-b89a-80842ca92212)

---

### 3. Move a Patient to "Being Treated"

- **Endpoint**: `PUT /patients/treat/:patient_id`
- **Example URL**: `PUT http://localhost:3000/patients/treat/1743424913583`
-
**Screenshot:**
![Screenshot 2025-03-31 184625](https://github.com/user-attachments/assets/da506b55-a94a-4735-a491-4db878abe826)


---

### 4. Discharge a Patient

- **Endpoint**: `DELETE /patients/discharge/:patient_id`
- **Example URL**: `DELETE http://localhost:3000/patients/discharge/1743424916886`


**Screenshot:**
![image](https://github.com/user-attachments/assets/d5462fdf-3bc3-480f-a748-e4ff06e8366c)


---

## Setup & Running Instructions

### Prerequisites

- Install **Node.js** (v16+ recommended)

### Installation Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/patient-queue-api.git
   cd patient-queue-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. The API will run at `http://localhost:3000/`

### Running Tests

```sh
npm test
```

## Additional Features

- **Real-Time WebSocket Updates** *(Bonus)*
- **Rate Limiting to Prevent API Abuse** *(Bonus)*
- **Doctor Availability Simulation** *(Bonus)*

## Contribution Guidelines

- Fork the repository
- Create a new branch (`feature-branch`)
- Commit changes and push
- Create a Pull Request (PR)

## License

This project is licensed under the MIT License.

---

🚀 **Happy Coding!**

