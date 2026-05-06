# Modular Monolithic Food Delivery

A robust, scalable backend application for a food delivery platform, built using the Modular Monolith architecture pattern.

This project is built with [NestJS](https://nestjs.com/) and leverages Prisma ORM with PostgreSQL for data persistence. It integrates with Stripe for secure payment processing and includes comprehensive order tracking, user authentication, and an event-driven internal architecture.

## Features

- **Modular Monolith Architecture**: Clean separation of domains (e.g., Orders, Payments, Users, Auth) while keeping deployment simple as a single application.
- **Authentication & Authorization**: Secure JWT-based authentication and role-based access control (using `bcrypt` and `@nestjs/jwt`).
- **Payment Processing**: Full integration with Stripe, including webhook handling for payment reconciliation and synchronization with order tracking.
- **Order Tracking System**: Granular order state management and tracking history using optimized PostgreSQL JSONB operations.
- **Event-Driven Workflows**: Asynchronous communication between internal modules using `EventEmitter2` (e.g., triggering order status updates upon successful payment).
- **API Documentation**: Auto-generated OpenAPI (Swagger) documentation.
- **Containerized**: Production-ready Docker setup, including optimized builds for the Prisma client.

## Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) (Node.js/TypeScript)
- **Database**: PostgreSQL
- **ORM**: [Prisma](https://www.prisma.io/) (with `@prisma/adapter-pg`)
- **Payments**: Stripe API
- **Events**: NestJS Event Emitter
- **Documentation**: Swagger / OpenAPI

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- PostgreSQL
- Docker and Docker Compose (for containerized setup)
- Stripe Account (for payment integration)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd modular-monolithic-food-delivery
```

2. Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and configure the necessary variables. 
You will need to provide database connection strings, JWT secrets, and Stripe API keys:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/food_delivery?schema=public"

# Authentication
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRATION="1d"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

### Database Setup

Run Prisma migrations to initialize your database schema and generate the Prisma Client:

```bash
npx prisma migrate dev
```

If you have a seed script set up, you can populate the database:

```bash
npm run seed
```

### Running the Application

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

### Docker Deployment

The application includes a `Dockerfile` and `docker-compose.yml` for easy containerization, ensuring the Prisma client generates correctly in a containerized environment.

```bash
docker-compose up --build
```

## API Documentation

Once the application is running, you can access the Swagger API documentation to explore and interact with the endpoints:

- **Local URL**: `http://localhost:3000/api` (or whichever port your app runs on)

## Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## License

This project is [UNLICENSED](LICENSE).
