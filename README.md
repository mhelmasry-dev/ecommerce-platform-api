# 🛒 E-Commerce Platform API

A full-featured RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB.

## 🔗 Links
- **Live Demo:** [https://ecommerce-platform-api-tau.vercel.app](https://ecommerce-platform-api-tau.vercel.app)
- **API Documentation (Swagger):** [https://ecommerce-platform-api-tau.vercel.app/api-docs](https://ecommerce-platform-api-tau.vercel.app/api-docs)
- **GitHub:** [https://github.com/mhelmasry-dev/ecommerce-platform-api](https://github.com/mhelmasry-dev/ecommerce-platform-api)

---

## ✨ Features

- 🔐 **Authentication** — Signup, Login with JWT (Access & Refresh Tokens)
- 👤 **User** — Profile management & Wishlist
- 🏷️ **Categories & SubCategories** — Hierarchical category system
- 🏪 **Brands** — Brand management with image upload
- 📦 **Products** — Full CRUD with image upload (main + sub images)
- 🛒 **Cart** — Add, update, and remove products
- 🎟️ **Coupons** — Discount coupon system
- 📋 **Orders** — Place orders with cash or card payment
- ⭐ **Reviews** — Product reviews (only after order delivery)
- 🔔 **Real-time Notifications** — Socket.io integration

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| Node.js | Runtime |
| Express.js | Web Framework |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| Cloudinary | Image Upload |
| Socket.io | Real-time Communication |
| Swagger (OpenAPI 3.0) | API Documentation |
| Multer | File Handling |
| Bcrypt | Password Hashing |

---

## 📚 API Endpoints

### 🔐 Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Register a new user |
| POST | `/auth/login` | Login and get tokens |

### 📦 Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/product` | Get all products with filters |
| POST | `/product` | Create a new product (Admin) |

### 🛒 Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/cart` | Add product to cart |

### 📋 Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/order` | Place a new order |

### ⭐ Reviews
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/review/:productId` | Create a review |
| PUT | `/review/:reviewId` | Update a review |

> 📖 For full API documentation, visit the [Swagger Docs](https://ecommerce-platform-api-tau.vercel.app/api-docs)

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB
- Cloudinary Account

### Installation

```bash
# Clone the repository
git clone https://github.com/mhelmasry-dev/ecommerce-platform-api.git

# Navigate to the project
cd ecommerce-platform-api

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start the server
npm start
```

### Environment Variables

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 👨‍💻 Author

**Mohammed Elmasry**
- GitHub: [@mhelmasry-dev](https://github.com/mhelmasry-dev)
