
# Code Challenge: Real-Time Portfolio Tracker with Data Streaming and GCP Deployment

**Objective:**

Build a real-time portfolio tracking application that streams market data with a 5-second delay using the Yahoo Finance API. The application should handle data unavailability gracefully, allow users to upload their portfolio via a CSV file, and store data in a database with proper clustering and schema migration. The frontend should be built with React, and the backend should present the streamed data. Deploy the entire application on Google Cloud Platform (GCP) using appropriate services.

---

## **Requirements**

### **1. Data Streaming with 5-Second Delay**

- **Market Data Streaming:**
  - Fetch real-time market data for stocks using the Yahoo Finance API.
  - Implement a 5-second delay in data streaming to simulate near-real-time updates.
  - Continuously update stock prices and other relevant data in the application.

### **2. Fallback Mechanism**

- **Data Unavailability Handling:**
  - Implement a fallback mechanism when the Yahoo Finance API is unavailable or fails.
  - Possible fallback options:
    - Use a cached version of the last available data.
    - Switch to an alternative data source/API.
    - Display a user-friendly message indicating data unavailability.

### **3. Portfolio Upload and Sample CSV**

- **User Portfolio Upload:**
  - Allow users to upload their portfolio via a CSV file.
  - Parse and validate the uploaded CSV file.

- **Sample CSV File:**
  - Provide a sample CSV file with the following columns:
    - `Symbol` (e.g., AAPL, GOOGL)
    - `Purchase Date` (e.g., 2023-01-15)
    - `Volume` (number of shares purchased)
    - `Purchase Price` (price per share at purchase)

- **Sample CSV Content:**

  You can download the sample CSV file by clicking [here](#download-sample-csv-file).

  Alternatively, copy the following content into a file named `sample_portfolio.csv`:

  ```csv
  Symbol,Purchase Date,Volume,Purchase Price
  AAPL,2023-01-15,50,150.00
  GOOGL,2022-12-10,10,2800.00
  MSFT,2023-02-20,20,250.00
  ```

### **4. Database Setup with Clustering and Schema Migration**

- **Database Selection:**
  - Use **Google BigQuery** or **MongoDB** for data storage.
  - Explain your choice of database in the README file.

- **Database Requirements:**
  - Set up the database with proper clustering to optimize query performance.
  - Implement schema migration to handle future changes in data models.
  - Store user portfolio data and streamed market data efficiently.

### **5. Frontend and Backend Development**

- **Frontend (React):**
  - Build a user interface using React.
  - Display the user's portfolio with real-time updates of stock prices.
  - Provide visual indicators for data updates (e.g., price changes).

- **Backend:**
  - Develop a backend server to handle API requests and data processing.
  - Serve the React frontend and manage communication between the frontend and backend.
  - Ensure secure and efficient data handling.

### **6. Deployment on Google Cloud Platform (GCP)**

- **GCP Components:**
  - Deploy the application using GCP services such as App Engine, Compute Engine, or Kubernetes Engine.
  - Use GCP's managed services for databases if applicable (e.g., Cloud Bigtable for BigQuery, or Cloud MongoDB).

- **Deployment Requirements:**
  - The application should be accessible via a public URL.
  - Ensure scalability and reliability in the deployment configuration.
  - Include instructions for deploying the application in the README file.

---

## **Deliverables**

1. **Source Code:**
   - Complete source code for the frontend and backend applications.
   - Organized repository with clear folder structure.

2. **README File:**
   - Detailed instructions on how to set up and run the application locally.
   - Explanation of the database choice and setup.
   - Deployment instructions and how to access the deployed application.
   - Any assumptions made during development.

3. **Sample CSV File:**
   - Include the provided sample CSV file (`sample_portfolio.csv`) in the repository.

4. **Documentation:**
   - Comments within the code explaining key sections.
   - Any additional documentation that helps in understanding the application.

---

## **Evaluation Criteria**

- **Functionality:**
  - Correct implementation of all specified features.
  - Ability to handle data streaming with a 5-second delay.
  - Effective fallback mechanism for data unavailability.

- **Code Quality:**
  - Clean, readable, and maintainable code.
  - Proper use of version control (Git).

- **Technical Choices:**
  - Justification for the choice of database and GCP services.
  - Efficient database schema design with clustering and migration capabilities.

- **User Experience:**
  - Intuitive and responsive frontend design.
  - Smooth display of real-time data updates.

- **Deployment:**
  - Successful deployment on GCP.
  - Application's accessibility and performance on the cloud platform.

- **Documentation:**
  - Clarity and completeness of the README file and code comments.
  - Ease of setting up and running the application based on provided instructions.

---

## **Getting Started**

- **Yahoo Finance API:**
  - Familiarize yourself with the [Yahoo Finance API](https://www.yahoofinanceapi.com/) for fetching stock data.
  - Ensure compliance with their terms of service.

- **GCP Account:**
  - Set up a [Google Cloud Platform account](https://cloud.google.com/free/) if you don't have one.
  - Be mindful of any costs associated with using GCP services.

- **Tools and Technologies:**
  - **Frontend:** React
  - **Backend:** Node.js, Python, or your preferred language
  - **Database:** MongoDB or BigQuery
  - **Version Control:** Git

---

**Note:** This challenge is designed to assess your data engineering skills, including real-time data processing, database management, full-stack development, and cloud deployment. Good luck!

---

## **Downloads**

### **Sample CSV File**

To download the sample CSV file:

1. **Direct Download:**
   - Right-click [this link](#) and select "Save link as..." (Note: In this text-based format, please copy the content below into a file).

2. **Copy and Save Manually:**
   - Copy the content below and paste it into a new file named `sample_portfolio.csv`.

   ```csv
   Symbol,Purchase Date,Volume,Purchase Price
   AAPL,2023-01-15,50,150.00
   GOOGL,2022-12-10,10,2800.00
   MSFT,2023-02-20,20,250.00
   ```

---

## **Submission Guidelines**

- **Deadline:** Please complete the challenge and submit your solution within the agreed timeframe.

- **How to Submit:**
  - Provide access to your Git repository (e.g., GitHub, GitLab) containing all the deliverables.
  - Include any deployment links or additional resources as needed.

- **Contact Information:**
  - If you have any questions or need clarifications, please reach out to the hiring manager or contact person.
