# **Car Dealership Web Application**

## **Overview**  
The **Car Dealership Web Application** is a dynamic and user-friendly platform designed to streamline the inventory management process. Built with a React frontend, Node.js backend, and MongoDB database, this full-stack application empowers users to browse and filter a comprehensive catalog of cars.  

Customers can explore detailed car information, including specifications, pricing, and availability, while dealership administrators efficiently manage the inventory.  

With robust features like advanced responsive design and seamless interaction between frontend and backend, this application delivers a modern solution for car dealerships to enhance customer experience and operational efficiency.

---

## **Technologies Used**

### **Frontend**  
- **React**: JavaScript library for building user interfaces.  
- **Axios**: HTTP client for making requests to the backend API.  
- **React Router**: For client-side routing in the frontend.  
- **Tailwind CSS**: A utility-first CSS framework for building modern and highly customizable designs efficiently.  

### **Backend**  
- **Node.js**: JavaScript runtime environment for building the backend.  
- **Express.js**: Web framework for Node.js to handle routing and API requests.  
- **MongoDB**: NoSQL database to store car inventory data.  

### **Tools**  
- **npm**: Package managers to manage project dependencies.  
- **Postman**: For testing the API.

---

## **Setup Instructions**

### **Prerequisites**  
Before setting up the project, ensure you have the following installed:  
1. **Node.js (version 14 or higher):**  
   Download and install from [Node.js official website](https://nodejs.org/).  
2. **MongoDB:**  
   - Run MongoDB locally by following the installation instructions [here](https://www.mongodb.com/docs/manual/installation/).  
   - Alternatively, use [MongoDB Atlas](https://www.mongodb.com/atlas) for a cloud-hosted MongoDB instance.  
3. **Git:**  
   Install Git from [here](https://git-scm.com/downloads).  
4. **npm (comes with Node.js):**  
   The package manager used to install dependencies.  

---

### **How to Run**

#### **Clone the Repository**  
Clone the project repository to your local machine:  

git clone https://github.com/QuawiMudassir/Car-Dealership-App.git
cd Car-Dealership-App

### **Install Backend Dependencies**  
Navigate to the backend directory and install the required dependencies:  

cd backend
npm install

### **Setup Environment Variables**  
1. **Initialize the Database**: Set up a local database in your system and connect your app.  
2. **Run add-data.js**: To create and add data to your database:  

cd backend
node add-data.js

### **Start the Backend Server**  
Start the backend server by running:  
node server.js

### **Install Frontend Dependencies**  
Navigate to the frontend directory: 
cd ../frontend

### **Install the required dependencies**  
npm install

### **Start the Frontend Development Server**  
Start the frontend server:  
npm start
