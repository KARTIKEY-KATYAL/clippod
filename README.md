# ClipPod - AI Podcast Clipper SaaS

<div align="center">

![ClipPod Banner](thumbnail.png)

**Transform your podcasts into viral short-form content with AI**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.12-green)](https://www.python.org/)

</div>

## 🚀 Overview

ClipPod is a production-ready SaaS application that automatically converts full-length podcasts into engaging short-form clips optimized for TikTok, YouTube Shorts, and other vertical platforms. Using advanced AI technology, it identifies viral moments, adds subtitles, and crops video to focus on active speakers.

### ✨ Key Features

- 🎯 **AI-Powered Viral Detection** - Automatically identifies engaging moments using Gemini 2.5 Pro
- 🎬 **Active Speaker Detection** - Smart video cropping with LR-ASD technology
- 📱 **Vertical Format Optimization** - Perfect for TikTok and YouTube Shorts (9:16 aspect ratio)
- 🔊 **Automatic Subtitles** - AI-generated captions with perfect timing
- 📝 **High-Quality Transcription** - Powered by WhisperX for accurate speech-to-text
- 🎞️ **GPU-Accelerated Processing** - Fast video rendering with FFMPEGCV
- 💳 **Credit-Based Payment System** - Flexible pricing with Stripe integration
- 📊 **Background Processing** - Inngest-powered queue system for scalability
- 👤 **Secure Authentication** - NextAuth.js with multiple providers
- � **Modern UI/UX** - Beautiful interface built with Tailwind CSS & Shadcn UI
- ⚡ **Serverless Architecture** - Scalable processing with Modal deployment

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React Framework | 15.2.3 |
| **React** | UI Library | 19.0.0 |
| **TypeScript** | Type Safety | 5.8.2 |
| **Tailwind CSS** | Styling | 4.0.15 |
| **Shadcn UI** | Component Library | Latest |
| **NextAuth.js** | Authentication | 5.0.0-beta.25 |
| **Prisma** | Database ORM | 6.9.0 |
| **Stripe** | Payment Processing | 18.2.1 |
| **Inngest** | Background Jobs | 3.35.1 |

### Backend
| Technology | Purpose |
|------------|---------|
| **Python** | Backend Language (3.12+) |
| **FastAPI** | API Framework |
| **Modal** | Serverless GPU Platform |
| **WhisperX** | Speech Transcription |
| **Gemini 2.5 Pro** | AI Content Analysis |
| **LR-ASD** | Active Speaker Detection |
| **FFMPEGCV** | Video Processing |
| **OpenCV** | Computer Vision |

### Infrastructure
| Service | Purpose |
|---------|---------|
| **PostgreSQL** | Primary Database |
| **AWS S3** | File Storage |
| **Neon** | Managed PostgreSQL (Recommended) |
| **Vercel** | Frontend Deployment |
| **Modal** | Backend Deployment |

## 📁 Project Structure

```
clippod/
├── frontend/                 # Next.js Application
│   ├── src/
│   │   ├── app/             # App Router Pages
│   │   │   ├── (auth)/      # Authentication pages
│   │   │   ├── api/         # API Routes
│   │   │   └── dashboard/   # Protected dashboard
│   │   ├── components/      # React Components
│   │   │   ├── ui/          # Shadcn UI components
│   │   │   └── ...          # Custom components
│   │   ├── actions/         # Server Actions
│   │   ├── server/          # Server utilities
│   │   ├── lib/             # Utility functions
│   │   └── styles/          # Global styles
│   ├── prisma/              # Database Schema
│   └── package.json
├── backend/                  # Python FastAPI Backend
│   ├── main.py              # Modal deployment script
│   ├── requirements.txt     # Python dependencies
│   ├── asd/                 # LR-ASD speaker detection
│   └── ...                  # Processing utilities
└── README.md
```

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18+ and npm
- **Python** 3.12+
- **Git** with submodule support
- **PostgreSQL** (or use Neon free tier)

### 1. Clone Repository

```bash
git clone --recurse-submodules https://github.com/your-username/clippod.git
cd clippod
```

### 2. Backend Setup

Navigate to the backend directory and set up the Python environment:

```bash
cd backend
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

Clone and setup the LR-ASD model for active speaker detection:

```bash
git clone https://github.com/Junhua-Liao/LR-ASD.git asd
```

Setup Modal for serverless deployment:

```bash
modal setup
```

Test the backend locally:

```bash
modal run main.py
```

Deploy to production:

```bash
modal deploy main.py
```

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
npm install
```

Create environment configuration file:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Database
DATABASE_URL="postgresql://username:password@host:5432/database"

# Authentication
AUTH_SECRET="your-super-secret-auth-key"
BASE_URL="http://localhost:3000"

# AWS S3
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
AWS_REGION="us-east-1"
S3_BUCKET_NAME="your-bucket-name"

# Modal Backend
PROCESS_VIDEO_ENDPOINT="https://your-modal-endpoint.com"
PROCESS_VIDEO_ENDPOINT_AUTH="your-modal-auth-token"

# Stripe Payment
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SMALL_CREDIT_PACK="price_..."
STRIPE_MEDIUM_CREDIT_PACK="price_..."
STRIPE_LARGE_CREDIT_PACK="price_..."

# AI Services
GEMINI_API_KEY="your-gemini-api-key"

# Background Jobs
INNGEST_EVENT_KEY="your-inngest-event-key"
INNGEST_SIGNING_KEY="your-inngest-signing-key"
```

Initialize the database:

```bash
npm run db:push
```

Start the development server:

```bash
npm run dev
```

### 4. Queue Processing Setup

In a separate terminal, start the Inngest development server:

```bash
cd frontend
npm run inngest-dev
```

Your application should now be running at `http://localhost:3000`!

## ⚙️ Configuration Guide

### Database Setup

**Option 1: Neon (Recommended)**
1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string to your `DATABASE_URL` environment variable

**Option 2: Local PostgreSQL**
```bash
# Install PostgreSQL locally
createdb clippod
# Update DATABASE_URL with: postgresql://username:password@localhost:5432/clippod
```

### AWS S3 Configuration

1. **Create S3 Bucket**: Create a new bucket in your AWS console

2. **Configure CORS Policy**:
```json
[
    {
        "AllowedHeaders": [
            "Content-Type",
            "Content-Length", 
            "Authorization"
        ],
        "AllowedMethods": ["PUT"],
        "AllowedOrigins": ["*"],
        "ExposeHeaders": ["ETag"],
        "MaxAgeSeconds": 3600
    }
]
```

3. **Create IAM User** with the following policy:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": ["s3:ListBucket"],
            "Resource": "arn:aws:s3:::your-bucket-name"
        },
        {
            "Effect": "Allow",
            "Action": ["s3:GetObject", "s3:PutObject"],
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

### Stripe Configuration

1. **Create Stripe Account** and get API keys from the dashboard
2. **Create Products** for credit packs:
   - Small Pack: 50 credits (e.g., ₹150)
   - Medium Pack: 150 credits (e.g., ₹300) 
   - Large Pack: 500 credits (e.g., ₹500)
3. **Configure Webhook**:
   - Endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events: `checkout.session.completed`
4. **Test Webhook Locally**:
   ```bash
   # Install Stripe CLI
   npm install -g stripe-cli
   
   # Login to Stripe
   stripe login
   
   # Forward events to local server
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

### AI Services Setup

**Google Gemini API**
1. Visit [Google AI Studio](https://ai.google.dev/gemini-api/docs/quickstart?lang=python)
2. Create an API key
3. Add to `GEMINI_API_KEY` environment variable

**Modal Setup**
1. Sign up at [modal.com](https://modal.com)
2. Install Modal CLI: `pip install modal`
3. Run `modal setup` and follow authentication steps
4. Deploy backend: `modal deploy main.py`

## 🎯 Usage Guide

### For Users

1. **Sign Up/Login** - Create an account or sign in with your credentials
2. **Purchase Credits** - Choose a credit pack that fits your needs
3. **Upload Podcast** - Drag and drop your MP4 video file (up to 500MB)
4. **AI Processing** - Watch as AI identifies viral moments and creates clips
5. **Download Clips** - Get your optimized short-form content ready for social media

### For Developers

**Development Scripts**

Frontend:
```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run preview      # Preview production build
npm run db:push      # Sync database schema
npm run db:studio    # Open Prisma Studio
npm run inngest-dev  # Start background job processor
npm run lint         # Run ESLint
npm run typecheck    # Check TypeScript types
```

Backend:
```bash
modal run main.py    # Test backend locally
modal deploy main.py # Deploy to Modal
modal logs           # View deployment logs
```

**Database Management**
```bash
npm run db:push      # Push schema changes to database
npm run db:generate  # Generate Prisma client
npm run db:studio    # Open database browser
```

## 💰 Pricing Structure

| Pack | Credits | Price | Best For |
|------|---------|-------|----------|
| **Small** | 50 | ₹150 | Testing & Light Use |
| **Medium** | 150 | ₹300 | Regular Podcasters |
| **Large** | 500 | ₹500 | Heavy Users & Teams |

*Each credit processes approximately 1 minute of video content*

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Environment Variables**: Add all environment variables in Vercel dashboard
3. **Deploy**: Automatic deployment on push to main branch

```bash
# Manual deployment
npm run build
npm run start
```

### Backend Deployment (Modal)

```bash
# Deploy to Modal
modal deploy main.py

# Monitor deployment
modal logs

# View app status
modal app list
```

### Database Migration (Production)

```bash
# Run migrations
npm run db:migrate

# Generate client
npm run db:generate
```

## 🔧 Troubleshooting

### Common Issues

**1. Database Connection Issues**
```bash
# Check connection
npm run db:studio

# Reset database
npm run db:push --force-reset
```

**2. Stripe Webhook 404 Errors**
- Verify webhook URL: `/api/webhooks/stripe` (not `/api/stripe/webhook`)
- Check Stripe CLI forwarding URL
- Validate webhook secret in environment variables

**3. Upload Failures**
- Verify S3 bucket permissions
- Check CORS configuration
- Ensure file size is under 500MB

**4. Modal Deployment Issues**
```bash
# Check Modal status
modal app list

# View logs
modal logs

# Redeploy
modal deploy main.py --force
```

**5. Processing Queue Issues**
```bash
# Restart Inngest dev server
npm run inngest-dev

# Check function logs in Inngest dashboard
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup

1. **Fork the repository** and clone your fork
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Install dependencies** and set up the development environment
4. **Make your changes** and test thoroughly
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to your branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request** with a clear description of your changes

### Code Style Guidelines

- **Frontend**: Follow TypeScript and React best practices
- **Backend**: Follow PEP 8 Python style guidelines
- **Commits**: Use conventional commit messages
- **Documentation**: Update README and inline docs for new features

### Testing

```bash
# Frontend tests
npm run test

# Type checking
npm run typecheck

# Linting
npm run lint
```

### Areas for Contribution

- 🐛 Bug fixes and performance improvements
- ✨ New AI models integration
- 🎨 UI/UX enhancements
- 📚 Documentation improvements
- 🔧 Developer experience improvements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.MD](LICENSE.MD) file for details.

## 🆘 Support & Community

- **📖 Documentation**: Comprehensive guides and API docs
- **💬 Discord Community**: [Join our Discord](https://www.andreastrolle.com/)
- **🐛 Issues**: [GitHub Issues](https://github.com/your-username/clippod/issues)
- **💡 Feature Requests**: Use GitHub Discussions
- **📧 Email Support**: For enterprise customers

## 🙏 Acknowledgments

This project stands on the shoulders of giants. Special thanks to:

- **[T3 Stack](https://create.t3.gg/)** - For the excellent full-stack framework
- **[Junhua-Liao/LR-ASD](https://github.com/Junhua-Liao/LR-ASD)** - Active speaker detection model
- **[m-bain/whisperX](https://github.com/m-bain/whisperX)** - Advanced speech transcription
- **[Google](https://ai.google.dev/)** - Gemini AI API for content analysis
- **[Modal](https://modal.com)** - Serverless GPU infrastructure
- **[Vercel](https://vercel.com)** - Frontend deployment platform
- **[Neon](https://neon.tech)** - Serverless PostgreSQL

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/your-username/clippod?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/clippod?style=social)
![GitHub issues](https://img.shields.io/github/issues/your-username/clippod)
![GitHub pull requests](https://img.shields.io/github/issues-pr/your-username/clippod)

</div>

## 🔮 Roadmap

- [ ] **Multi-language Support** - Support for multiple spoken languages
- [ ] **Batch Processing** - Upload and process multiple files at once
- [ ] **Custom Branding** - Add watermarks and custom styling to clips
- [ ] **Analytics Dashboard** - Track clip performance and engagement
- [ ] **API Access** - RESTful API for integration with other tools
- [ ] **Team Collaboration** - Multi-user workspaces and sharing
- [ ] **Advanced AI Models** - Integration with latest AI technologies

---

<div align="center">

**Built with ❤️ by Kartikey Katyal**


</div>
