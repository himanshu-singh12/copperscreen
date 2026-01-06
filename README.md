# Copper Screen - Enterprise Digital Consultancy

![Copper Screen Logo](public/images/logo-new.png)

**Data-backed growth. Empathy-led strategy.**

A modern, high-performance website for Copper Screen's enterprise digital consultancy services, built with Next.js 15, TypeScript, and Tailwind CSS. Features include advanced animations, AI agent showcases, admin dashboard for lead management, and seamless Google Sheets integration.

## 🚀 Live Demo

- **Production**: [https://copperscreen.pages.dev](https://copperscreen.pages.dev)
- **Admin Dashboard**: [https://copperscreen.pages.dev/admin](https://copperscreen.pages.dev/admin)

## ✨ Features

### 🎨 Frontend Features
- **Modern Design**: Copper-themed UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for Core Web Vitals and SEO
- **Animations**: Framer Motion animations and custom stacking cards
- **Interactive**: Dynamic service showcases and industry expertise sections

### 🔧 Technical Features
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Hydration Safe**: No hydration mismatches or errors

### 📊 Admin Dashboard
- **Secure Login**: Protected admin area with authentication
- **Lead Management**: View, filter, and manage contact form submissions
- **Real-time Data**: Fetches leads from Google Sheets
- **Export Functionality**: Download leads as CSV
- **Status Tracking**: Track lead progression through sales funnel

### 🔗 Integrations
- **Google Sheets**: Contact form submissions stored automatically
- **Google Apps Script**: Server-side processing for form data
- **SEO Optimized**: Meta tags, sitemap, robots.txt
- **Analytics Ready**: Google Analytics and GTM integration ready

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Backend**: [Google Apps Script](https://script.google.com/)
- **Database**: [Google Sheets](https://sheets.google.com/)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/copper-screen-website.git
   cd copper-screen-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your-google-apps-script-url
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_ADMIN_USERNAME=admin
   NEXT_PUBLIC_ADMIN_PASSWORD=copper2024
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
copper-screen-website/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard pages
│   ├── about/             # About page
│   ├── ai-agents/         # AI agents showcase
│   ├── blog/              # Blog pages
│   ├── case-studies/      # Case studies
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── manifest.ts        # Web app manifest
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # React components
│   ├── admin/             # Admin dashboard components
│   ├── common/            # Shared components
│   ├── home/              # Homepage components
│   ├── layout/            # Layout components
│   └── ui/                # UI components
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── images/            # Images and logos
│   ├── _headers           # Cloudflare headers
│   ├── _redirects         # Cloudflare redirects
│   └── robots.txt         # SEO robots file
├── .env.example           # Environment variables template
├── .env.local             # Local environment variables
├── DEPLOYMENT.md          # Deployment guide
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎯 Key Pages

### Public Pages
- **Homepage** (`/`): Hero section, services overview, metrics, global presence
- **Services** (`/services`): Detailed service offerings
- **AI Agents** (`/ai-agents`): AI solutions by industry
- **Case Studies** (`/case-studies`): Client success stories
- **About** (`/about`): Company information and team
- **Blog** (`/blog`): Insights and industry content
- **Contact** (`/contact`): Contact form and office locations

### Admin Area
- **Admin Login** (`/admin`): Secure authentication
- **Dashboard** (`/admin`): Lead management interface

## 🔐 Admin Dashboard

### Access
- **URL**: `/admin`
- **Default Credentials**:
  - Username: `admin`
  - Password: `copper2024`

### Features
- **Lead Overview**: Total leads, conversion rates, status distribution
- **Lead Management**: View, filter, and update lead status
- **Search & Filter**: Find leads by name, email, company, service, or status
- **Export**: Download filtered leads as CSV
- **Lead Details**: Full lead information with contact actions
- **Real-time Updates**: Refresh data from Google Sheets

### Security
- Client-side authentication with localStorage
- No indexing by search engines
- Secure headers and cache control
- Environment-based credential configuration

## 📊 Google Sheets Integration

### Setup
1. Create a Google Sheet for lead storage
2. Set up Google Apps Script web app
3. Configure CORS and permissions
4. Update environment variables

### Data Flow
1. User submits contact form
2. Form data sent to Google Apps Script
3. Script processes and stores in Google Sheets
4. Admin dashboard fetches data for display
5. Real-time updates and status management

### Lead Data Structure
- Name, Email, Company, Phone
- Service Interest, Budget Range
- Message/Project Details
- Timestamp, Source, Status

## 🎨 Design System

### Colors
- **Primary**: Copper (#B87333)
- **Secondary**: Charcoal (#2C2C2C)
- **Accent**: Electric Blue (#3B82F6)
- **Success**: Emerald (#10B981)

### Typography
- **Primary**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono

### Components
- Magnetic buttons with hover effects
- Stacking service cards animation
- Copper mesh background patterns
- Typewriter text animations
- Responsive navigation with mega menu

## 🚀 Deployment

### Cloudflare Pages
The application is optimized for Cloudflare Pages deployment:

1. **Automatic Deployments**: Connected to GitHub for CI/CD
2. **Environment Variables**: Configured in Cloudflare dashboard
3. **Custom Headers**: Security and performance headers
4. **Edge Optimization**: Global CDN with edge caching
5. **SSL/TLS**: Automatic HTTPS with modern TLS

### Build Configuration
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 18.x or 20.x

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript checks
- `npm run preview` - Build and preview locally

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting (via ESLint)
- **Husky**: Git hooks for quality checks

### Performance
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Webpack bundle analyzer
- **Caching**: Aggressive caching strategies

## 🔒 Security

### Implemented Security Measures
- **Headers**: Security headers via Next.js config
- **HTTPS**: Enforced SSL/TLS
- **XSS Protection**: Content Security Policy
- **Admin Protection**: No search engine indexing
- **Environment Variables**: Sensitive data protection

### Best Practices
- No sensitive data in client-side code
- Secure authentication flow
- CORS configuration for APIs
- Regular dependency updates

## 📈 SEO & Performance

### SEO Features
- **Meta Tags**: Comprehensive meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions

### Performance Optimizations
- **Image Optimization**: WebP/AVIF formats
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components
- **Caching**: Static asset caching
- **Compression**: Gzip/Brotli compression

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design
- Write meaningful commit messages
- Test on multiple devices/browsers

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)

### Issues
If you encounter any issues:
1. Check the [Issues](https://github.com/your-username/copper-screen-website/issues) page
2. Search for existing solutions
3. Create a new issue with detailed information

### Contact
- **Email**: hello@copperscreen.com
- **Website**: [copperscreen.pages.dev](https://copperscreen.pages.dev)
- **LinkedIn**: [linkedin.com/company/copperscreen](https://linkedin.com/company/copperscreen)

---

**Built with ❤️ by Copper Screen**

*Data-backed growth. Empathy-led strategy. 15+ years of expertise.*