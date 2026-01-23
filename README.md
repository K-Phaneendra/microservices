# Shop – Microservices POC

This repository contains a **Proof of Concept (POC) e-commerce application** named `shop`, implemented using a microservices architecture with Node.js (TypeScript), PostgreSQL, MongoDB, and RabbitMQ.

The goal of this POC is to demonstrate:

- Proper service decomposition
- Clear data ownership
- Independent deployability
- Clean API layering

## Microservices

Each service is independently deployable and owns its own data store.

| Service | Responsibility | Database |
|------|---------------|----------|
| User Service | User management | PostgreSQL |
| Authentication Service | Authentication / identity | PostgreSQL |
| Product (Catalog) Service | Product catalog | MongoDB |
| Cart Service | User shopping carts | MongoDB |
| Order Service | Order lifecycle | PostgreSQL |
| Payment Service | Payment records | PostgreSQL |
| Inventory Service | Stock & reservations | PostgreSQL |
| Notification Service | Asynchronous notifications | RabbitMQ |

### Run application

#### Prerequisites
- Node.js 24.11.1 (nvm recommended)
- Docker & Docker compose

#### Infrastructure
To start:
- PostgreSQL
- MongoDB
- RabbitMQ

run `docker-compose up -d`

#### Services
To start each service individually run
```
cd services/inventory-service
npm run dev
```
Each service:
- Starts on port 3000 (configurable)
- Exposes /health endpoint
