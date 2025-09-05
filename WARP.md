# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

ZYVIA Herbals is a premium e-commerce Next.js application specializing in Himalayan wellness products. The application features a sophisticated UI with luxury animations, comprehensive e-commerce functionality, and a modern tech stack.

## Key Technologies

- **Frontend**: Next.js 15.4.6 with React 19, TypeScript, Tailwind CSS
- **Database**: Prisma with SQLite (development) 
- **Authentication**: NextAuth.js with Google OAuth support
- **Payments**: Stripe integration
- **UI Components**: Shadcn/UI (Radix-based components)
- **Animations**: Framer Motion
- **File Uploads**: UploadThing
- **Email**: Resend API
- **State Management**: Zustand

## Development Commands

### Basic Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Database Operations
```bash
# Generate Prisma client (runs automatically after install)
npx prisma generate

# Apply database migrations
npx prisma db push

# Open Prisma Studio (database GUI)
npx prisma studio

# Seed database with sample data
npx prisma db seed
```

### Development Workflow
```bash
# Run single test (if tests exist)
# Note: No test framework is currently configured

# Lint (currently disabled on Vercel)
npm run lint
```

## Architecture Overview

### Directory Structure
- `src/app/` - Next.js App Router pages and layouts
  - `(marketing)/` - Marketing pages group
  - `account/`, `admin/`, `products/` - Feature-specific pages
  - `uploadthing/` - File upload API routes
- `src/components/` - Reusable React components
  - `ui/` - Shadcn/UI component library (48+ components)
  - Premium UI components (LoadingScreen, LuxuryParticles, etc.)
- `src/pages/` - Page components (HomePage, ProductsPage, etc.)
- `src/lib/` - Utility functions and configurations
- `prisma/` - Database schema and migrations

### Database Schema Architecture
The Prisma schema is organized into logical groups:

1. **Authentication** (`User`, `Account`, `Session`, `VerificationToken`)
2. **Catalog** (`Product`, `ProductImage`, `Variant`) 
3. **Social** (`Review`)
4. **Shopping** (`Cart`, `CartItem`)
5. **Orders** (`Order`, `OrderItem`)
6. **Addresses** (`Address`)

Key relationships:
- Users can have multiple addresses, reviews, orders, and carts
- Products have multiple images, variants, and reviews
- Orders contain multiple items and link to shipping addresses
- Cart system supports both authenticated and guest users

### UI Component System
- Based on Shadcn/UI with Radix primitives
- Consistent design system using CSS variables
- Custom luxury components with animations
- Responsive design with Tailwind CSS
- Dark mode support configured

### Authentication Flow
- NextAuth.js with Prisma adapter
- Supports email/password and Google OAuth
- User sessions managed with database storage
- Protected routes using middleware

### Payment Integration
- Stripe for payment processing
- Webhook handling for payment events
- Order status tracking (pending, paid, failed, refunded)

## Environment Configuration

Copy `.env.example` to `.env.local` and configure:

**Required for development:**
- `DATABASE_URL` - Prisma database connection
- `NEXTAUTH_SECRET` - Authentication secret
- `NEXTAUTH_URL` - Base URL for auth callbacks

**Optional services:**
- `GOOGLE_CLIENT_ID/SECRET` - Google OAuth
- `STRIPE_*` - Payment processing
- `RESEND_API_KEY` - Email functionality
- `UPLOADTHING_*` - File uploads

## Development Guidelines

### Component Development
- Follow Shadcn/UI patterns for new components
- Use TypeScript interfaces for props
- Implement responsive design with Tailwind
- Leverage Framer Motion for animations
- Use `cn()` utility for className merging

### Database Changes
- Always create migrations with `prisma db push`
- Update seed data when schema changes
- Test migrations on development database first
- Document significant schema changes

### Styling Approach
- Tailwind CSS with custom theme variables
- Consistent color palette using CSS variables
- Animation classes for luxury feel
- Mobile-first responsive design

### API Integration
- Use server actions for form handling
- Implement proper error boundaries
- Handle loading states consistently
- Follow Next.js 15 app router patterns

## Key Features

1. **E-commerce Functionality**
   - Product catalog with variants and images
   - Shopping cart (persistent for users)
   - Order management and tracking
   - User reviews and ratings

2. **User Experience**
   - Premium loading animations
   - Luxury particle effects
   - Custom cursor interactions
   - Smooth page transitions

3. **Admin Capabilities**
   - Product management
   - Order processing
   - User account administration

4. **Integration Points**
   - Stripe payment processing
   - Email notifications via Resend
   - File uploads through UploadThing
   - Analytics via Vercel Analytics

## Performance Considerations

- Next.js image optimization configured
- SQLite for development (switch to PostgreSQL for production)
- Component lazy loading where appropriate
- CSS-in-JS avoided in favor of Tailwind
- Build optimizations enabled in Next.js config

## Deployment Notes

- Configured for Vercel deployment
- ESLint disabled during builds (see `next.config.ts`)
- Automatic Prisma client generation on build
- Environment variables required for production deployment
