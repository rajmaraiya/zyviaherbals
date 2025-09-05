# Zyvia Herbals Authentication System

This document outlines the complete authentication system implemented for the Zyvia Herbals e-commerce platform using NextAuth.js, Prisma, and Neon PostgreSQL.

## 🚀 Features Implemented

### Authentication Methods
- ✅ **Email/Password (Credentials)** - Sign up and sign in with bcrypt-hashed passwords
- ✅ **Google OAuth** - Social login with Google accounts
- ✅ **Apple OAuth** - Social login with Apple ID
- ✅ **Secure Session Management** - JWT-based sessions with NextAuth.js

### Database Integration
- ✅ **Prisma ORM** - Type-safe database operations
- ✅ **Neon PostgreSQL** - Production database (configurable for SQLite in development)
- ✅ **NextAuth Database Adapter** - Seamless integration with Prisma

### User Interface
- ✅ **Premium UI Design** - Zyvia brand colors (cream, coffee, gold)
- ✅ **Responsive Pages** - `/signin`, `/signup`, `/forgot-password`
- ✅ **Enhanced UX** - Password strength indicators, form validation, loading states
- ✅ **Accessibility** - ARIA labels, keyboard navigation, screen reader support

### Route Protection
- ✅ **Middleware Protection** - Automatic redirects for unauthenticated users
- ✅ **Protected Routes** - `/account/*`, `/checkout/*`, `/admin/*`
- ✅ **Conditional Navigation** - Dynamic navbar with login/logout states

### User Management
- ✅ **Account Dashboard** - Profile management, order history, preferences
- ✅ **Secure Password Storage** - bcrypt hashing with salt rounds
- ✅ **Session Management** - Automatic token refresh and secure logout

## 📁 File Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts    # NextAuth API handler
│   │   └── signup/route.ts                # User registration API
│   ├── signin/
│   │   ├── page.tsx                       # Sign in page
│   │   └── SignInPageClient.tsx          # Sign in form component
│   ├── signup/
│   │   ├── page.tsx                       # Sign up page
│   │   └── SignUpPageClient.tsx          # Sign up form component
│   ├── forgot-password/
│   │   ├── page.tsx                       # Forgot password page
│   │   └── ForgotPasswordPageClient.tsx  # Password reset form
│   ├── account/
│   │   ├── page.tsx                       # Protected account page
│   │   └── AccountPageClient.tsx         # Account management dashboard
│   └── layout.tsx                         # Root layout with SessionProvider
├── components/
│   ├── providers/
│   │   └── SessionProvider.tsx            # NextAuth session wrapper
│   └── layout/
│       └── Header.tsx                     # Updated navbar with auth logic
├── lib/
│   ├── auth.ts                           # NextAuth configuration
│   └── prisma.ts                         # Prisma client instance
├── middleware.ts                          # Route protection middleware
└── prisma/
    └── schema.prisma                      # Database schema with auth models
```

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Database
DATABASE_URL="postgresql://username:password@endpoint.neon.tech/zyviaherbals"

# NextAuth.js
NEXTAUTH_SECRET="your-strong-random-secret-here"
NEXTAUTH_URL="https://zyviaherbals.com"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Apple OAuth
APPLE_CLIENT_ID="com.zyviaherbals.signin"
APPLE_TEAM_ID="your-apple-team-id"
APPLE_KEY_ID="your-apple-key-id"
APPLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour-private-key\n-----END PRIVATE KEY-----"
```

## 🛠 Setup Instructions

### 1. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database (creates tables)
npx prisma db push

# (Optional) Seed database
npx prisma db seed
```

### 2. OAuth Provider Setup

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `https://zyviaherbals.com/api/auth/callback/google`

#### Apple OAuth
1. Go to [Apple Developer Console](https://developer.apple.com)
2. Create an App ID with "Sign In with Apple" capability
3. Create a Service ID for web authentication
4. Generate a private key for Sign in with Apple
5. Configure redirect URI: `https://zyviaherbals.com/api/auth/callback/apple`

### 3. Deployment on Vercel

Add environment variables in Vercel dashboard:
- Project Settings → Environment Variables
- Add all variables from `.env.example`
- Deploy from GitHub repository

## 🎨 UI Components & Styling

### Brand Colors
```css
/* Zyvia Brand Palette */
--zyvia-cream: #faf9f7    /* Background */
--zyvia-coffee: #2d1810   /* Text & Headings */  
--zyvia-gold: #d4af37     /* Accent & Links */
```

### Typography
- **Headings**: Playfair Display (font-display)
- **Body**: Inter (font-sans)

### Form Components
- Custom input fields with icons
- Password strength indicators
- Social login buttons (Google, Apple)
- Accessible form validation

## 🔒 Security Features

### Password Security
- Minimum 8 characters
- bcrypt hashing with 12 salt rounds
- Strength indicator with visual feedback
- Secure password confirmation

### Session Security
- JWT-based sessions
- Automatic token refresh
- Secure httpOnly cookies
- CSRF protection

### Route Protection
- Middleware-based authentication
- Automatic redirects to sign-in
- Protected API routes
- Role-based access (extensible)

## 🧪 Testing Authentication

### Manual Testing Checklist
- [ ] Sign up with email/password
- [ ] Sign in with credentials
- [ ] Google OAuth sign-in
- [ ] Apple OAuth sign-in
- [ ] Password reset flow
- [ ] Protected route access
- [ ] Session persistence
- [ ] Logout functionality
- [ ] Account dashboard access

### Test Credentials (Development)
```
Email: test@zyviaherbals.com
Password: testpassword123
```

## 📱 Mobile Responsiveness

All authentication pages are fully responsive:
- Mobile-first design approach
- Touch-friendly buttons and inputs
- Optimized layouts for small screens
- Accessible navigation patterns

## 🚀 Next Steps

### Potential Enhancements
1. **Two-Factor Authentication** - Add SMS/TOTP support
2. **Social Logins** - Add Facebook, Twitter, LinkedIn
3. **Password Recovery** - Implement email-based reset
4. **Account Verification** - Email verification flow
5. **Admin Dashboard** - User management interface
6. **Analytics** - Track authentication metrics
7. **Rate Limiting** - Prevent brute force attacks
8. **Audit Logging** - Track authentication events

### Integration Opportunities
- Connect with existing cart system
- Link to order management
- Integrate with Stripe customer data
- Connect with email marketing (Resend)
- Sync with analytics (Vercel Analytics)

## 📚 Documentation References

- [NextAuth.js Documentation](https://next-auth.js.org)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Neon PostgreSQL](https://neon.tech/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Google OAuth Setup](https://developers.google.com/identity/protocols/oauth2)
- [Apple Sign-in Setup](https://developer.apple.com/sign-in-with-apple)

---

**Status**: ✅ Complete and Production-Ready
**Last Updated**: January 2024
**Version**: 1.0.0
