<a name="readme-top"></a>

<div align="center">
<a href="https://alinafedoriv-hvoya.netlify.app/" target="_blank">
  <img src="https://github.com/user-attachments/assets/6fd77814-587c-43be-8184-bccb30a2dce6" alt="Logo" width="70">
</a>

<br />
<br />

<h3 align="center">Hvoya Pottery Co. Backend</h3>

<br />
<p align="center">
    
This repository contains the **backend** code for the <strong>Hvoya Pottery Co.</strong> website. It manages orders, payments, and interactions with the database using Supabase and Stripe.

<br />

<a href="https://alinafedoriv-hvoya.netlify.app/" target="_blank">View Live Demo</a>

</p>
</div>

<br />
<br />

[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=532223&lines=Hvoya+Pottery+Co.)](https://git.io/typing-svg)

<details>

  <summary>Table of Contents</summary>

  <br />

  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#techniques-used">Techniques Used</a></li>
      </ul>
    </li>
    <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
         <li><a href="#dependencies">Dependencies</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
    </li>
     <li>
        <a href="#usage">Usage</a>
        <ul>
          <li><a href="#api-endpoints">API Endpoints</a></li>
         <li><a href="#global-error-handling">Global Error Handling</a></li>
        </ul>
    </li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#project-links">Project Links</a></li>
  </ol>

  <br />
  
</details>

<details>
  
<summary>Website Screenshots</summary>

<br />

<div align="center">
  <img src="https://github.com/user-attachments/assets/dd7874ba-4a7d-4016-b0be-6d496688261b" width="100%"/>
</div>
</details>

<br />

## About The Project

### Overview

The **backend** is built with Node.js and Express.js, leveraging Supabase for database management and Stripe for payment processing. This service handles order creation, payment processing, and order fulfillment for the **Hvoya Pottery Co.** website.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<div align="center">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">
  <img src="https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe">
  <img src="https://img.shields.io/badge/Dotenv-07D8F5?style=for-the-badge&logo=dotenv&logoColor=white" alt="Dotenv">
  <img src="https://img.shields.io/badge/Helmet-5A5A5A?style=for-the-badge&logo=helmet&logoColor=white" alt="Helmet">
  <img src="https://img.shields.io/badge/Body_Parser-00758F?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Body-Parser">
  <img src="https://img.shields.io/badge/Cors-FF914D?style=for-the-badge&logo=Postman&logoColor=white" alt="Cors">
</div>
  
<br />
<br />

-   **Node.js** - JavaScript runtime for building the backend.
-   **Express.js** - Web framework for creating the server and handling routes.
-   **Supabase** - Backend-as-a-Service (BaaS) platform used for database management.
-   **Stripe** - Payment processing platform for managing transactions.
-   **dotenv** - Module to load environment variables from a `.env` file.
-   **Helmet** - Security middleware for Express applications.
-   **Body-Parser** - Middleware to parse incoming request bodies.
-   **CORS** - Middleware to allow cross-origin requests.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Features

-   **Order Management:** Create and manage orders in the Supabase database.
-   **Payment Processing:** Integrate with Stripe to process payments securely.
-   **Global Error Handling:** Custom error handling for better debugging and user feedback.
-   **Data Validation:** Validate incoming data to ensure all required fields are provided.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Techniques Used

-   **Server-Side Validation** - Ensuring that incoming requests have all necessary fields.
-   **Asynchronous Error Handling** - Using a wrapper to handle promise rejections in Express routes.
-   **Stripe Integration** - Managing payments through Stripe's API.
-   **Supabase Integration** - Handling database operations using Supabase's JavaScript client, including the use of PostgreSQL functions and triggers to automate database operations and ensure data integrity.
-   **Custom Error Handling** - Utilizing a custom `AppError` class to throw and manage errors.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js** (v16 or later)
-   **npm** (Node Package Manager)
-   **Supabase Account:** To manage your database and authentication.
-   **Stripe Account:** For processing payments.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Dependencies

All dependencies are automatically installed when running the **`npm install`** command during the installation process.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

Follow these steps to set up the <strong>Hvoya Pottery Co. backend</strong> locally:

<br />

1. Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/afedoriv/hvoya-backend.git
cd hvoya-backend
```

2. Install dependencies:

```bash
npm install
```

3. Environment Setup:

Create a `.env` file in the root directory and add your environment variables:

```bash
CLIENT_BASE_URL=your_client_url
NODE_ENV=development_or_production
PORT=your_port
STRIPE_SECRET_KEY=your_stripe_secret_key
SUPABASE_SECRET_KEY=your_supabase_secret_key
SUPABASE_URL=your_supabase_url
```

4. Start the server:

```bash
npm start
```

The server will start on the default port `3000` or the one specified in your environment variables.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

### API Endpoints

-   **POST /api/v1/checkout**

Initiates the checkout process, including order creation, payment processing, and updating order status.

<br />

**Request Body:**

```bash
{
  "order_details": {
    "address": "240 Mathistown Rd, Apt 107",
    "cardholderFullName": "John Wilson",
    "email": "hvoya.user@gmail.com",
    "fullName": "John Wilson",
    "giftWrap": true,
    "location": "240 Mathistown Rd, Apt 107",
    "phone": 71821112345,
    "zipCode": "08087"
  },
  "payment_method_id": "pm_1Iqy9v2eZvKYlo2CNYmiNzw9",
  "user_id": "e8fd3585-195e-4442-805e-8d0957c21c1f",
  "return_url": "your_return_url"
}
```

<br />

**Note:** In the request body, `order_details` is an object with fields of types string (address, cardholderFullName, email, fullName, location and zipCode), boolean (giftWrap) and number (phone). The `payment_method_id` and `user_id` are strings representing identifiers, and `return_url` is a string specifying the URL to redirect to after payment.

<br />

**Response:**

```bash
{
  "status": "success",
  "data": {
    "order": {
      "id": "320964c3-d39d-4ca0-37d1-eea8cb8c9bae"
    },
    "payment": {
      "charge_id": "ch_3MtweELkdIwHu7ix05lnLAFd",
      "charged_amount": 0,
      "client_secret": "pi_3MtwBwLkdIwHu7ix28a3tqPa_secret_YrKJUKribcBjcG8HVhfZluoGH",
      "currency": "usd",
      "payment_intent_id": "pi_3MtwBwLkdIwHu7ix28a3tqPa",
      "payment_method_id": "pm_1MtweELkdIwHu7ixxrsejPtG",
      "receipt_email": "hvoya.user@gmail.com",
      "status": "status"
    }
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Global Error Handling

The server uses a custom `AppError` class to handle errors. Errors are sent as JSON with the following structure:

<br />

```bash
{
  "status": "error",
  "message": "A detailed error message",
  "errorCode": "SpecificErrorType",
  "details": "Additional details about the error"
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Deployment

To deploy this backend, you can use platforms like Heroku, Vercel, or any other Node.js-compatible hosting service. Ensure that you set your environment variables in the hosting platform for the app to function correctly.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Links

-   **Live Demo:** [Hvoya Pottery Co. Website](https://alinafedoriv-hvoya.netlify.app)
-   **Frontend Repository:** - [Hvoya Pottery Co. Frontend GitHub](https://github.com/afedoriv/hvoya-frontend)
-   **Backend Repository:** - [Hvoya Pottery Co. Backend GitHub](https://github.com/afedoriv/hvoya-backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
