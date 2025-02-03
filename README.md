
- 📂 **Proposed folder structure** (Hexagonal Architecture)  
- 🚀 **Setup instructions**  
- 🔧 **Running & development commands**  
- 📡 **API Endpoints overview**  
- 🔜 **Future features**  

---

## **📜 README.md**
```markdown
# 🛍️ Lumiere Backend

A **NestJS + TypeScript eCommerce API** built with **Hexagonal Architecture** for scalability and maintainability.

---

## 📂 Folder Structure (Hexagonal Architecture)
```
/Lumiere-backend
│── /src
│   ├── /modules
│   │   ├── /products                # 💡 Product Module (Feature)
│   │   │   ├── /domain              # 🟠 Domain Layer (Entities, Interfaces)
│   │   │   │   ├── product.entity.ts  # ✅ TypeORM Entity (Database Model)
│   │   │   │   ├── product.repository.ts  # ✅ Repository Interface (Abstract)
│   │   │   ├── /application         # 🟡 Application Layer (Services, DTOs, Use Cases)
│   │   │   │   ├── product.service.ts  # ✅ Business Logic (Use Cases)
│   │   │   │   ├── use-cases
│   │   │   │   │   ├── create-product.use-case.ts  # ✅ Use Case for Creating Product
│   │   │   │   │   ├── get-products.use-case.ts  # ✅ Use Case for Fetching Products
│   │   │   │   ├── dto
│   │   │   │   │   ├── create-product.dto.ts  # ✅ DTO for Validation
│   │   │   ├── /infrastructure      # 🔵 Infrastructure Layer (Controllers, Repositories)
│   │   │   │   ├── product.controller.ts  # ✅ API Endpoints (Handles HTTP Requests)
│   │   │   │   ├── product.repository.postgres.ts  # ✅ TypeORM Repository Implementation
│   │   │   ├── products.module.ts  # ✅ NestJS Module File (Registers Controllers & Services)
│   ├── /common                      # ✨ Shared Utilities (Guards, Pipes, DTOs)
│   ├── /config                      # ⚙️ Database & Environment Configs
│   ├── /auth                        # 🔑 Authentication Module (JWT, OAuth)
│   ├── /database                     # 🛢️ Database Configs & Migrations
│   ├── main.ts                       # 🎯 Application Entry Point
│── /prisma                           # 🔹 Prisma Migrations
│   ├── schema.prisma                 # ✅ Prisma Schema
│── .env                              # ✅ Environment Variables
│── package.json
│── tsconfig.json
│── docker-compose.yml                # ✅ PostgreSQL Setup
│── README.md                         # 📄 Project Documentation





## 🚀 Getting Started

### **1️⃣ Install Dependencies**
Make sure you have **Node.js (v18+)** installed. Then, run:

```bash
npm install
```



### **2️⃣ Setup PostgreSQL (via Docker)**
If you don’t have PostgreSQL installed, use **Docker**:

```bash
docker-compose up -d


Or manually create a database in PostgreSQL.



### **3️⃣ Configure Environment Variables**
Create a `.env` file in the root:

```ini
DATABASE_URL=postgresql://user:password@localhost:5432/ecommerce
JWT_SECRET=mysecretkey
PORT=5000
```


### **4️⃣ Run the Development Server**
```bash
npm run start:dev
```



## 📡 API Endpoints

| HTTP Method | Route             | Description              |
|------------|------------------|--------------------------|
| **GET**    | `/products`       | Get all products         |
| **GET**    | `/products/:id`   | Get a single product     |
| **POST**   | `/products`       | Create a new product     |
| **PUT**    | `/products/:id`   | Update a product         |
| **DELETE** | `/products/:id`   | Delete a product         |



## 🔜 Upcoming Features

✅ **User Authentication** (OAuth, JWT)  
✅ **Orders & Checkout**  
✅ **File Uploads (Cloudinary, S3)**  
✅ **GraphQL Support**  
✅ **Automated Testing with Jest**  



## 🎯 Contribution
1. Fork the repo
2. Create a new feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push the branch (`git push origin feature-name`)
5. Open a PR!



## ⚡ Deployment
1. **Backend** → [Railway](https://railway.app/), [DigitalOcean](https://www.digitalocean.com/)  
2. **Frontend** → [Vercel](https://vercel.com/)  


### 👨‍💻 Built With
- [NestJS](https://nestjs.com/) 🚀  
- [TypeScript](https://www.typescriptlang.org/) 🔷  
- [PostgreSQL](https://www.postgresql.org/) 🛢️  
- [Docker](https://www.docker.com/) 🐳  
