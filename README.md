
# Real-Time Portfolio Tracker with Data Streaming

## Table of Contents
- [Real-Time Portfolio Tracker with Data Streaming](#real-time-portfolio-tracker-with-data-streaming)
  - [Table of Contents](#table-of-contents)
    - [Overview](#overview)
    - [Architecture](#architecture)
    - [Tech Stack](#tech-stack)
    - [Features](#features)
    - [Database Decision](#database-decision)
    - [System Design](#system-design)
      - [Diagram](#diagram)

---

### Overview
The **Real-Time Portfolio Tracker** is a web application that allows users to monitor their stock portfolios with near real-time updates. The application fetches stock data using the `yahoo-finance2` open-source Node.js library and implements a 5-second delay to simulate near-real-time data flow. Users can upload their portfolio as a CSV file, and the data is stored in a MongoDB database for efficient management and retrieval.

### Architecture
This application is designed to handle high-volume, continuous data flow and provides seamless data streaming to the frontend via WebSockets. It will be deployed on **Google Cloud Platform (GCP)** to leverage its scalability, autoscaling, and resilience features.

### Tech Stack
- **Frontend**: React (for the user interface and real-time data updates)
- **Backend**: Node.js (for API handling, data processing, and WebSocket streaming)
- **Database**: MongoDB (for storing high-volume portfolio and stock data)
- **Cache**: Redis (for caching stock data and managing API availability)
- **Deployment**: Google Cloud Platform (Compute Engine for backend services, Load Balancer, Autoscaler)

### Features
- **Real-Time Stock Price Streaming**: Fetches stock data every 5 seconds from the Yahoo Finance API and streams it to users via WebSockets.
- **CSV Portfolio Upload**: Allows users to upload their portfolio details in a CSV file format.
- **Data Fallback Mechanism**: Uses Redis to cache the last available stock data in case of API unavailability. The backend also connects to Yahoo's WebSocket endpoint to avoid rate-limiting issues and ensure continuous data flow.
- **Scalable and Resilient Deployment**: The application is deployed on GCP using Load Balancer and Autoscaler to ensure that it scales according to demand and remains highly available.

### Database Decision
- **MongoDB over BigQuery**: MongoDB was chosen for this project due to its flexibility, scalability, and ability to handle high volumes of frequently updated data, which is ideal for near-real-time applications. While BigQuery is optimized for analytical workloads and large-scale data queries, it is not designed for real-time, high-frequency transactional data like stock prices. MongoDB’s document-based model makes it well-suited to store complex stock and portfolio data structures. Moreover, MongoDB’s low-latency queries allow the application to fetch stock data and user portfolios quickly, which aligns with the application's core requirement for frequent updates and fast read operations. MongoDB also offers horizontal scaling and sharding capabilities, which help manage large datasets as the user base grows.
  
- **Database Optimisations**:
  - **Indexing**: Creating indexes on frequently queried fields, such as stock symbols and user IDs, can significantly improve query performance, making lookups faster and more efficient.
  - **Sharding**: As the amount of data increases, sharding the database by stock symbol or user ID can distribute the data across multiple servers. This improves performance because each user will query only relevant shards, reducing the load on any single server and ensuring faster responses.

### System Design
Below is the system design for the application, highlighting key components and data flow.

#### Diagram

![System Design Diagram](https://github.com/shayan65/data-streaming/blob/sys-design/images/systemdesign1.png)
