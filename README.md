# Theirvoices - Empowering African Women in Music

A digital platform empowering African women and minorities to create, learn, and earn through music and creative expression.

##  Project Overview

Theirvoices is a mobile-first web platform that addresses critical barriers in the African creative economy by providing:
- **Accessible music production education** at affordable costs
- **Mobile-optimized production tools** that work on low-bandwidth connections
- **Peer-to-peer learning community** and mentorship opportunities
- **Direct monetization channels** for creators

##  Features

###  User Management
- User registration and authentication
- Role-based access control (Learner, Creator, Mentor, Admin)
- Profile management

###  Learning Management System
- Music production courses (Beginner to Advanced)
- Progress tracking
- Course enrollment

###  Audio Production Studio
- Browser-based audio recording
- Multi-track support
- Audio editing and effects
- Project saving and export

###  Marketplace
- Buy and sell beats, samples, and tracks
- Mobile money payment integration (M-Pesa, MTN Mobile Money)
- Product filtering and search

###  Community Platform
- Discussion forums
- Post creation and sharing
- Collaboration features

##  Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required for demo version (uses localStorage)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/yourusername/theirvoices-website.git
   cd theirvoices-website
```

2. **Open the application**
   - Simply use a local server:
```bash
     cd frontend
     python -m http.server 8000
     # Then visit http://localhost:8000
```

### First Time Setup

1. Open Theirvoices in your browser
2. Click "Sign Up" to create an account
3. Fill in your details and choose your role (Learner/Creator/Mentor)
4. Login with your credentials
5. Explore the platform!

##  Project Structure
```
theirvoices-website/
├── frontend/
│   ├── index.html           # Landing page
│   ├── login.html           # Login page
│   ├── register.html        # Registration page
│   ├── dashboard.html       # User dashboard
│   ├── courses.html         # Course catalog
│   ├── course-detail.html   # Individual course
│   ├── studio.html          # Audio production studio
│   ├── marketplace.html     # Marketplace for beats/samples
│   ├── community.html       # Community forum
│   ├── profile.html         # User profile
│   ├── css/
│   │   ├── app.css          # Main styles
│   │   └── landing.css      # Landing page styles
│   └── js/
│       ├── config.js        # Configuration
│       └── auth.js          # Authentication functions
├── backend/
│   ├── config/
│   │   └── db.js            # Database config
│   ├── models/
│   │   ├── User.js          # User model
│   │   ├── Course.js        # Course model
│   │   └── Project.js       # Project model
│   ├── routes/
│   │   └── auth.js          # Auth routes
│   ├── package.json         # Backend dependencies
│   └── server.js            # Express server (for future)
├── docs/
│   └── SRS.md               # Software Requirements Specification
└── README.md                # This file
```

##  Technology Stack

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling (with custom CSS variables)
- **JavaScript (ES6+)** - Functionality
- **Web Audio API** - Audio recording
- **LocalStorage** - Data persistence (demo mode)

### Backend (Future Implementation)
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB/PostgreSQL** - Database
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### Fonts
- **Space Grotesk** - Headings
- **Inter** - Body text
- **Oswald** - Labels

##  Key User Flows

### New User Journey
1. Land on homepage
2. Click "Sign Up"
3. Create account (Name, Email, Password, Role)
4. Login
5. View dashboard with stats
6. Enroll in a course
7. Create first audio project in studio
8. Share with community

### Creator Journey
1. Login
2. Go to Studio
3. Record audio track
4. Edit and add effects
5. Save project
6. Export as MP3
7. List on Marketplace
8. Earn from sales

##  Design System

### Colors
- **Sage**: `#B9E08E` - Primary brand color
- **Cream**: `#F6F3EA` - Background
- **Coral**: `#D13B3B` - Accent/CTA buttons
- **Dark**: `#111111` - Text
- **Gray**: `#3F3F3F` - Secondary text

### Typography
- **Headings**: Space Grotesk (700)
- **Body**: Inter (400, 500, 600)
- **Labels**: Oswald (400, 500)

##  Security Considerations

### Current Implementation (Demo)
- Passwords stored in plain text in localStorage (for demo only)
- No encryption
- No server-side validation

### Production Requirements
- Password hashing with bcrypt
- JWT authentication
- HTTPS only
- Rate limiting
- Input validation and sanitization
- CSRF protection
- XSS prevention

##  Future Enhancements

### Phase 2 Features
- [ ] Real backend with database
- [ ] Firebase/Auth0 authentication
- [ ] Actual mobile money integration (M-Pesa API)
- [ ] Real audio recording with waveform visualization
- [ ] File upload to cloud storage (AWS S3/Cloudflare)
- [ ] Email notifications
- [ ] Advanced audio effects (VST plugins)

### Phase 3 Features
- [ ] iOS/Android native apps
- [ ] Real-time collaboration
- [ ] Video tutorials
- [ ] Live streaming
- [ ] AI-powered music generation
- [ ] Multi-language support (French, Swahili, Hausa)

##  Target Metrics

- **6 months**: 10,000+ active users
- **12 months**: 5,000+ course completions
- **18 months**: $250,000+ total earnings distributed
- **24 months**: 30% increase in female representation in African music production


##  Author

**Angel Kibui**
- African Leadership University
- Software Engineering Student
- Project: Theirvoices Platform

##  Support

For issues or questions about this project:
- Email: [a.kibui@alustudent.;]
- GitHub Issues: [repository-url]

---
