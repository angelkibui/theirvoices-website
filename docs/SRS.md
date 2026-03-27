# Software Requirements Specification (SRS)
## Theirvoices - Digital Music Creation Platform

**Prepared by:** Angel Kibui  
**Organization:** African Leadership University  
**Date:** January 21, 2026  
**Version:** 1.0

---

THEIRVOICE– A Digital Platform for Empowering Africans in Music




Description of the concept of their Mission; 
My mission is to foster and empower the talents of African women and marginalized minorities by encouraging them to create music, develop artistic skills, and access sustainable creative opportunities
This mission addresses the critical gap in the African creative economy where women and minority groups face systemic barriers to entering and succeeding in the music production industry.
Relevance in the African Creative Sector: 
The African music industry is experiencing unprecedented global growth, with Afrobeats, Amapiano, and other African genres. However, women remain significantly underrepresented in music production. According to the Annenberg Inclusion Initiative (2021), only 2.6% of music producers globally are women, with even lower representation in Africa. The creative economy contributes approximately 2.9% to Africa's GDP (African Union, 2021), yet women creators face barriers including limited access to production software, inadequate training and lack of mentorship.
Theirvoice is relevant because it directly addresses the United Nations Sustainable Development Goals (SDG 5: Gender Equality and SDG 8: Decent Work and Economic Growth) while leveraging Africa's mobile-first digital infrastructure to democratize music creation.




Problem statement: 
WHO: African women and minority groups aged 16-35 who aspire to become musicians but lack access to resources and opportunities.
WHAT: These aspiring creators face many barriers that prevent them from participating in the music production industry for example; Economic barriers – lack of enough capital, Educational barriers- limited music education, Technical barriers - insufficient production tools and social barriers - Gender bias and lack of female role models (UNESCO, 2023).
WHEN: It is an ongoing issue but has intensified in the digital age as music production has shifted to digital platforms, creating a digital divide that affects many Africans.
WHERE: Across  Africa, particularly in marginalized areas where talented individuals exist but infrastructure and economic conditions limit access to creative tools.
WHY: The problem exists due to:
Not enough investment in creative education
Gender inequality in STEM 
Lack of local and affordable creative platforms
Limited mentorship
HOW: The problem manifests through:
individuals unable to afford software Women dropping out of music careers due to lack of mentorship and hostile environments
existing platforms focus on already established artists, leaving emerging artists without support.
skilled creators migrate to markets with better infrastructure

Software development model 
Agile/Scrum methodology is specifically chosen for this project because this project requires continuous feedback from users to improve usability and relevance. Creative needs evolve, and Agile allows the system to adapt to any evolution.



Implementation Steps:
1. Requirement Gathering from users
We will search for the target audience of the system and gather requirements
This will be done through interviews, surveys and observations
This ensures the system is built on real needs rather than assumptions
2. Development
Cross-functional teams including developers, UX designers familiar with African contexts, and music educators
Theirvoice will be built in iterations instead of the entire software at once.
After one feature is concluded it will be reviewed and tested before moving on to the next
Such features are; User registration, artist profiles, content submission, mentors feedback.
Continuous integration/continuous deployment (CI/CD) to test features in real African network conditions
3. Testing and feedback
Beta testing with actual women creators in target markets
Iterative feedback on usability, especially for users with varying digital literacy levels
Cultural adaptation (language, UI/UX preferences, local music styles)
4. Improvement and deployment
Assess what worked 
Identify improvements based on feedback
5. Product Backlog Refinement
Continuous prioritization based on:
User impact (features that remove biggest barriers first)
Technical feasibility in African infrastructure
Revenue potential to ensure sustainability
Scalability across diverse African markets

Why is it relevant? Agile is relevant because we're building for a market where user needs must be discovered rather than assumed.  Flexibility, the ability to make changes based on future needs and ensuring we don't waste resources building features users don't need. 
The hypothesis of their solution
If we provide African women and minorities with a platform combining affordable music education, production tools, and community support, then we anticipate;
Participation (6-month target):
1000+ active users creating music on the platform
20% of users from rural areas
70% of users using it as their first music production experience
Skill Development (12-month target):
5000+ users completing at least one music production course
Average skill improvement of 40% measured through assessments
500+ users publishing their first complete track
Economic Empowerment (18-month target):
1000+ users earning income from their music ($50+ monthly)
100+ users transitioning to full-time or part-time music careers
$250,000+ total earnings distributed to creators through the platform
Community Impact (24-month target):
30% increase in female representation in local music production scenes
mentorship relationships formed through platform
Partnerships with 10+ music labels/distributors 
       5. Long-Term Outcomes (3-5 years):
Contribute to closing the gender gap in music production
Create a new generation of African women music producers 
Establish sustainable income 





References 
African Union. (2021). African Union handbook on the creative economy. African Union Commission.
Annenberg Inclusion Initiative. (2021). Inclusion in the recording studio? Gender and race/ethnicity of artists, songwriters & producers across 900 popular songs from 2012-2020. USC Annenberg School for Communication and Journalism.
Grand View Research. (2023). Music production software market size, share & trends analysis report. Grand View Research, Inc.
Speedtest Global Index. (2024). Global speeds. Ookla. Retrieved January 20, 2026, from https://www.speedtest.net/global-index
UNESCO. (2023). Re-shaping cultural policies: Advancing creativity for development. UNESCO Publishing.
World Bank. (2024). World development indicators: Income and poverty. The World Bank Group.















  Software Requirements Specification (SRS) Template

Title: Theirvoices - A  Digital Music Creation Platform
Prepared by: Angel Kibui 
Organization: African Leadership University
Date Created: January 21, 2026


Table of Contents....................................................................................................................
 Revision History............................................................................................................................. 
1.   Introduction.............................................................................................................................
1.1   Purpose................................................................................................................................. 
1.2   Document Conventions.......................................................................................................... 
1.3   Intended Audience and Reading Suggestions........................................................................
1.4   Product Scope........................................................................................................................ 
1.5   References............................................................................................................................. 
2.   Overall Description................................................................................................................. 
2.1   Product Perspective................................................................................................................ 
2.2   Product Functions.................................................................................................................. 
2.3   User Classes and Characteristics...........................................................................................
2.4   Operating Environment.......................................................................................................... 
2.5   Design and Implementation Constraints..................................................................................
2.6   User Documentation............................................................................................................... 
2.7   Assumptions and Dependencies.............................................................................................
3.   External Interface Requirements........................................................................................... 
3.1   User Interfaces....................................................................................................................... 
3.2   Hardware Interfaces............................................................................................................... 
3.3   Software Interfaces................................................................................................................. 
3.4   Communications Interfaces..................................................................................................... 
4.   System Features....................................................................................................................... 
4.1   System Feature 1.................................................................................................................... 
4.2   System Feature 2 (and so on).................................................................................................
5.   Other Nonfunctional Requirements......................................................................................
5.1   Performance Requirements..................................................................................................... 
5.2   Safety Requirements.............................................................................................................. 
5.3   Security Requirements............................................................................................................ 
5.4   Software Quality Attributes.................................................................................................... 
5.5   Business Rules....................................................................................................................... 
6.   Appendix................................................................................................................ 
Appendix A: Glossary................................................................................................................... 
Appendix B: Analysis Models......................................................................................................  




 
Revision History
Name
Date
Reason For Changes
Version
 Angel Kibui
 20/01/2026
 Initial SRS creation
 1.0
 


 
 

 
 

1. 	Introduction
1.1 	Purpose
This Software Requirements Specification (SRS) document describes the functional and non-functional requirements for Theirvoices Version 1.0, a mobile digital platform designed to empower African women and minorities in music creation, education, and monetization. This document specifies the complete system requirements for the minimum viable product (MVP) that will be developed and deployed across African markets.
The scope of this SRS covers the web application and mobile application components of Theirvoices, including user management, learning management system, audio production tools, community features, and payment integration. 
1.2 	Document Conventions
<SRS follows these conventions:
Bold text indicates system components, user roles, or emphasis on critical requirements
Italic text is used for technical terms defined in the Glossary (Appendix A)
All functional requirements (FR) inherit the priority of their parent requirement 
Requirements are numbered hierarchically (e.g., FR 1.1, FR 1.1.1)
"<>" brackets indicate values to be finalized during development

1.3 	Intended Audience and Reading Suggestions
This document is intended for:
Developers: Focus on Sections 3 (External Interface Requirements), 4 (Requirement Specification), and 5 (Nonfunctional Requirements) for technical implementation details.
Project Managers: Read Section 2 (Overall Description) for system overview, then Section 4 for feature prioritization and timeline planning.
UX/UI Designers: Review Sections 2.3 (User Classes), 3.1 (User Interfaces), and Appendix B for design requirements and user flow diagrams.
Testers: Focus on Section 4 (Functional Requirements) and 5 (Nonfunctional Requirements) for test case development.
Stakeholders/Investors: Read Sections 1.4 (Product Scope) and 2 (Overall Description) for business context and system capabilities.
Marketing Teams: Review Section 2.3 (User Classes) and 2.6 (User Documentation) to understand target users and content needs.
Recommended reading sequence: Start with Section 1 (Introduction) for context, proceed to Section 2 (Overall Description) for system overview, then dive into sections relevant to your role.

1.4 	Product Scope
Theirvoices is a cloud-based, mobile-first platform that provides music production education and tools for African women and underrepresented minorities. The software addresses critical barriers in the African creative economy by providing:
Relevant Benefits:
Accessible music production education at low costs costs
Production tools that work on low-bandwidth connections
Peer-to-peer learning community and mentorship opportunities
Direct monetization channels for creators


Objectives:
Enable 10,000+ African women to create their first music track within 12 months
Provide music education accessible at <$10/month compared to $500+ for other courses
Create sustainable income opportunities for creators through platform monetization
Build the largest community of African women music producers
Goals: Theirvoices aligns with the African Union's Agenda 2063 goal of leveraging the creative economy for economic transformation. The platform supports Gender Equality, Decent Work and Economic Growth, and Industry, Innovation, and Infrastructure while creating a sustainable social enterprise model that can scale across African markets.
1.5 References
Project Proposal: "Theirvoices: Digital Platform for Empowering African Women in Music Creation" (Part A)
2. 	Overall Description
2.1 	Product Perspective
Theirvoice is a new, self-contained product designed specifically for the African market context. Unlike existing music production platforms (e.g, Splice, BandLab) that are built for high-bandwidth environments, Theirvoice is architected from the ground up for mobile, low-connectivity African infrastructure.
Theirvoice operates as a cloud-based web and mobile application that interfaces with:
Mobile Money Payment Systems ( MTN Mobile Money, Airtel Money) for user payments and creator payouts
Cloud Storage Services (AWS S3 or Google Cloud Storage) for audio file storage
Email/SMS Services for user notifications and authentication
Social Media Platforms (instagram, tiktok) for content sharing




Major System Components:
[User Devices: Web/Mobile] 
        ↓
[Load Balancer/CDN]
        ↓
[Application Server]
    ├── Authentication Service
    ├── Learning Management System
    ├── Audio Production Engine
    ├── Community Platform
    └── Payment Gateway
        ↓
[Database Layer]
    ├── User Database
    ├── Content Database
    └── Transaction Database
        ↓
[External Services]
    ├── Mobile Money APIs
    ├── Cloud Storage
    └── Email/SMS Gateway
This structure ensures scalability, maintainability, and secure interaction between subsystems.

2.2 	Product Functions
Theirvoice provides the following major functions:
User Management
User registration and authentication (email, phone, social media)
Profile creation with portfolio showcase
Role-based access control (learner, creator, mentor, administrator)
Learning Management System (LMS)
Music production courses (beginner to advanced)
Video tutorials, reading materials, and interactive exercises
Progress tracking and certification
Audio Production Tools
Audio recording (microphone input)
Audio editing (trim, cut, fade)
Audio effects library (reverb, delay)
Community Platform
Discussion forums organized by topics
Direct messaging between users
Feedback and collaboration features (share work-in-progress, receive comments)
Monetization 
Marketplace for selling beats, samples, and complete tracks
Mobile money payment integration
Pricing and licensing tools for creators





2.3 	User Classes and Characteristics
Class 1: Aspiring Learners (Highest Priority)
User: African women and minorities aged 16-35
Technical Expertise: Low to medium digital literacy, familiar with electronics but limited technical music knowledge
Frequency of Use: Daily during active learning (30-60 min sessions), 3-5 times per week
Product Functions Used: Learning modules (100%), basic recording tools (80%), community forums (60%)
Characteristics: Highly motivated but resource-constrained, prefer mobile access, sensitive to data costs, value peer support
Special Needs: Simplified interfaces, extensive help, offline functions
Class 2: Active Creators ( High Priority)
Demographics: Users who have completed at least one course and actively create music
Technical Expertise: Medium to high, understand basic music production concepts
Frequency of Use: 4-7 times per week, sessions of 1-3 hours
Product Functions Used: Audio production tools (100%), marketplace (70%), community (80%)
Characteristics: Income-motivated, seeking recognition, willing to pay for premium features
Special Needs: More advanced production tools, efficient workflow
Class 3: Mentors/Educators (Important)
Demographics: Experienced music producers, educators, industry professionals 
Technical Expertise: High musical and technical expertise
Frequency of Use: 2-4 times per week for mentorship activities
Product Functions Used: Community features (100%), course creation tools (if provided), feedback systems (100%)
Characteristics: Giving motivation, interested in shaping next generation
Special Needs: Efficient communication tools, impact tracking, recognition systems
Class 4: Supporters/Fans (Less Important )
Demographics: Music consumers interested in supporting African creators
Technical Expertise: Basic to medium
Frequency of Use: Weekly or monthly browsing
Product Functions Used: Marketplace browsing (100%), purchasing (100%), discovery features (80%)
Characteristics: Value authenticity and direct creator support
Special Needs: Easy discovery, secure payment, simple purchasing process

2.4 	Operating Environment
Web Application:
Modern web browsers: Google Chrome , Firefox , Safari , Microsoft Edge 
Minimum screen resolution: 320px width (mobile devices)
JavaScript enabled, Web Audio API support required
Mobile Application:
Android 8.0
Minimum 2GB RAM, 100MB available storage
Microphone hardware for recording functionality
Cloud Infrastructure: AWS or Google Cloud Platform
Application Server: Node.js  with Express.js framework
Database: PostgreSQL for relational data, MongoDB for content/media metadata
Web Server: Nginx for reverse proxy and load balancing
Connection: Designed to operate on 3G connections (minimum 256kbps)
Mobile money platforms: M-Pesa API, MTN Mobile Money API, Airtel Money API
Cloud storage: AWS S3 or Google Cloud Storage
2.5 	Design and Implementation Constraints
Technical Constraints:
Must function on low-bandwidth connections limiting real-time collaboration features
Audio processing must be optimized for mobile CPUs 
Mobile app limited to Android initially due to resource constraints
 Regulatory Constraints:
Must comply with African data protection laws (e.g. Kenya Data Protection Act 2019)
Payment processing must follow local financial regulations
Age verification required (minimum 16 years with parental consent, 18+ for monetization)
Business Constraints:
Development timeline: 6-month MVP development cycle
Initial budget limitations require focus on web/Android only


Hardware Limitations:
Storage limitations on user devices 
Security Constraints:
User passwords must be hashed using bcrypt 
HTTPS required for all communications
Audio content must have copyright
Internationalization:
Initial language support: English, French, Swahili (expandable to Hausa, Zulu, Amharic)
Currency support for local markets (KES, NGN, GHS, ZAR, UGX, TZS)
2.6 	User Documentation
The following user documentation will be delivered with Theirvoice:
1. Getting Started Guide 
It has account creation, profile setup, first recording, first course enrollment
2. In-App Tutorials
Feature-specific tooltips and walkthroughs and video tutorials
3. Video Tutorial Library
Beginner tutorials covering basic music production concepts
4. Community-Created Content
User-generated tips and tricks 
Frequently Asked Questions (FAQ) 
Troubleshooting guides collaboratively built with community
5. Mentor/Educator Guide 
How to provide effective feedback
Best practices for mentorship
Platform features for educators

6. Creator Monetization Guide 
How to price and sell work
Payment and payout processes
Legal basics (copyright, licensing)
Documentation delivery formats
In-app embedded content (HTML)
Downloadable PDFs (for offline reference)
Video: MP4 format, multiple quality levels (240p-720p)
2.7 	Assumptions and Dependencies
Assumptions:
Users have access to smartphones or computers with internet connectivity 
Users have basic literacy in at least one supported language (English, French, or Swahili)
Cloud infrastructure providers (AWS/GCP) will maintain service availability in African regions
Microphone access will be granted by users for recording functionality
At least 70% of users will access platform via mobile devices rather than desktop
Dependencies:
Technical Dependencies:
Web Audio API
Mobile Money API
Cloud Storage Provider
CDN Service
Third-Party Services:
Payment Processors: 
Authentication Services
Email/SMS Provider
External Factors:
Government policies 
Competition from emerging platforms
Currency exchange rate stability 
Internet infrastructure improvements or degradation 
3. 	External Interface Requirements
3.1 	User Interfaces
Screen Layouts:
1. Home/Dashboard Screen
Top navigation: Logo, Search, Notifications, Profile
Hero section: Featured courses or community highlights
Quick actions: "Start Recording", "Continue Learning", "Browse Marketplace"
Progress widgets: Course completion, daily streak, achievements
Community feed: Recent posts, success stories 
Bottom navigation : Home, Learn, Create, Community, Profile
2. Learning Module Interface
Course catalog with filter/sort options (difficulty, duration, topic)
Progress indicator eg. 1 of 15 lessons completed
Interactive elements: Quizzes, exercises embedded in lessons
Next/Previous lesson navigation
3. Audio Production Interface
Top toolbar: Project name, Save, Export, Settings
Main canvas: Display for multiple tracks 
Left sidebar: Track controls (volume, pan, mute, solo, effects)
Bottom panel: Transport controls (play, pause, record, loop)
Floating action button: "Add Track"
4. Community/Forum Interface
Category navigation (Questions, Showcase, Collaborations, General)
Post list view: Title, author, date, reply count, like count
Individual post view: Original content, replies threaded
User profile sidebar: Avatar, bio, portfolio links
UI Standards:
Color scheme: Vibrant color ,, high-contrast text
Typography: Sans-serif fonts optimized for mobile 
Icons: Consistent icon set African-themed

3.2 	Hardware Interfaces

Input Interface:
Microphone: System default microphone accessed via Web Audio API (web) or Android MediaRecorder API (mobile)
Output Interface:
Speakers/Headphones: System audio output via Web Audio API or Android AudioTrack
Storage Interface:
Device Storage (Mobile): Access to device storage for offline content caching
Minimum 100MB required for app installation
Additional storage for offline courses (500MB-2GB)
SD Card (Android): Optional external storage support for audio project files
Network Interface:
WiFi/Cellular Data: Standard network interfaces for internet connectivity
Camera Interface:
Camera: Standard image capture via browser File API or Android Camera API
Maximum upload size: 5MB 
Supported formats: JPEG, PNG

3.3 	Software Interfaces
Operating System Interfaces:
Web Browsers:
Chrome , Firefox , Safari, Edge 
Android OS:
Android 8.0

Database Interfaces:
PostgreSQL 14+:
MongoDB 5+:
Cloud Storage Interface:
AWS S3 / Google Cloud Storage
CDN Interface:
Cloudflare / AWS CloudFront:
Payment Gateway Interfaces:
M-Pesa API:
MTN Mobile Money API:
Flutterwave / Paystack API
INCOMING Data:
User registration data (name, email, password)  Purpose: Create new user account
Audio files from user's microphone  Purpose: Record new music
Search queries  Purpose: Find courses or marketplace items
OUTGOING Data:
Payment request to M-Pesa API  Purpose: Process user payment
Audio files to cloud storage (AWS S3)  Purpose: Save user's recordings
Email notifications to users → Purpose: Confirm registration, password reset
User progress data to database → Purpose: Track course completion
Services Needed
M-Pesa API Service: Processes mobile money payments
AWS S3 Storage Service: Stores audio files
Email Service : Sends transactional emails
Database Service (PostgreSQL): Stores user data, courses, transactions
Nature of Communications
REST API over HTTPS: Most communication (JSON format)
WebSocket: For real-time chat 
Webhooks: M-Pesa sends payment confirmation back to your system
File Upload : When uploading audio
Data Shared Across Components
User session data (JWT token) - shared between authentication service and all other services
Audio project metadata - shared between editing tool, storage system, and marketplace
User profile information - shared between community features, courses, and marketplace
3.4 	Communications Interfaces
HTTPS Protocols:
All client-server communication over HTTPS 
RESTful API architecture for web/mobile app backend communication
Mobile Money Communication:
communication standards: JSON over HTTPS POST
Security: HMAC signature verification for callbacks, IP whitelisting
Timeout Handling: 30-second timeout for payment requests, retry logic
Push Notifications:
Android: Firebase Cloud Messaging
Triggers: Course completion, new messages, payment confirmations, community interactions
Email Communication:
SMTP Protocol: Via third-party service 
Templates: HTML emails with plain-text fallback
Types: Transactional (welcome, password reset, receipts), Marketing (newsletters, promotions)
Real-Time Communication:
WebSocket Protocol 




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
4. 	Requirement Specification
Stakeholder Requirements Specification
Functional Requirements

Req ID
Requirements
Description 
FR 1
User Registration and Authentication


FR 1.1
Email/Phone Registration
Allow users to register using email address or phone number with OTP verification
FR 1.2
Password Management
Allow users to create secure passwords, reset forgotten passwords via email/SMS
FR 1.3
Profile Creation
Allow users to create and edit profiles with name, bio, profile picture, location, interests
FR 1.4
Email Verification
Send verification email/SMS upon registration, require verification to access full features
FR 2
Learning Management System


FR 2.1
Browse Course
Display all available courses with filters (difficulty, topic, duration, language)
FR 2.2
Course Enrollment
Allow users to enroll in courses
FR 2.3
Progress Tracking
Track and display user progress through courses (% completion, lessons completed)
FR 2.4
CourseCompletion Certificate
award certificates upon successful course completion
FR 3
Audio Production Tools


FR 3.1
Audio Recording
Enable users to record audio using device microphone via browser or mobile app
FR 3.2
Music Editing Tools 
Provide trim, cut, copy, paste, and delete functions
FR 3.3
Audio Effects
Provide basic effects: reverb, delay, EQ, compression, normalization
FR 3.4
Project Save
Allow users to save projects to cloud
FR 3.5
Export Audio
Export final mixes as MP3 or WAV files
FR 4
Monetizationand Marketplace


FR 4.1
List Products 
Allow creators to upload and list beats, samples, or tracks for sale
FR 4.2
Browse Marketplace 
Display all listed products with search, filter, and sort capabilities
FR 4.3
Purchase Flow
Complete purchase flow from cart to payment confirmation
FR 4.4
Mobile Money Integration
Process payments via M-Pesa, MTN Mobile Money, Airtel Money
FR 5
Administrationand Management


FR 5.1
User Management
Admin dashboard to view, edit, suspend, or delete user accounts


5. 	Other Nonfunctional Requirements
Example of Non-Functional Requirements (EDIT THIS PART)


Requirement Type
Req ID
Description 
Security
NFR 1
User passwords must be hashed using bcrypt
User uploaded content must be scanned for malware before storage
Performance 
NFR 2
System must support 10,000 concurrent users without degradation
Initial page load must complete in under 5 seconds on 3G connection
Usability 
NFR 4
Interface must be available in English, French
Platform must be operable by users with basic digital literacy
System must provide contextual help/tooltips for new users
Reliability
NFR 5
User data must be backed up daily
System must  handle offline scenarios and sync when connection restored
Failed payment transactions must be rolled back with user notification
Cross Browser Support 
NFR 6
The system must be accessible across the two web browser Google Chrome, Microsoft Edge
Business rules
NFR 7
Users must be minimum 16 years old and 18+ to monetize with age verification
Platform commission is 15% on all marketplace sales


THEIRVOICE– A Digital Platform for Empowering Africans in Music




Description of the concept of their Mission; 
My mission is to foster and empower the talents of African women and marginalized minorities by encouraging them to create music, develop artistic skills, and access sustainable creative opportunities
This mission addresses the critical gap in the African creative economy where women and minority groups face systemic barriers to entering and succeeding in the music production industry.
Relevance in the African Creative Sector: 
The African music industry is experiencing unprecedented global growth, with Afrobeats, Amapiano, and other African genres. However, women remain significantly underrepresented in music production. According to the Annenberg Inclusion Initiative (2021), only 2.6% of music producers globally are women, with even lower representation in Africa. The creative economy contributes approximately 2.9% to Africa's GDP (African Union, 2021), yet women creators face barriers including limited access to production software, inadequate training and lack of mentorship.
Theirvoice is relevant because it directly addresses the United Nations Sustainable Development Goals (SDG 5: Gender Equality and SDG 8: Decent Work and Economic Growth) while leveraging Africa's mobile-first digital infrastructure to democratize music creation.




Problem statement: 
WHO: African women and minority groups aged 16-35 who aspire to become musicians but lack access to resources and opportunities.
WHAT: These aspiring creators face many barriers that prevent them from participating in the music production industry for example; Economic barriers – lack of enough capital, Educational barriers- limited music education, Technical barriers - insufficient production tools and social barriers - Gender bias and lack of female role models (UNESCO, 2023).
WHEN: It is an ongoing issue but has intensified in the digital age as music production has shifted to digital platforms, creating a digital divide that affects many Africans.
WHERE: Across  Africa, particularly in marginalized areas where talented individuals exist but infrastructure and economic conditions limit access to creative tools.
WHY: The problem exists due to:
Not enough investment in creative education
Gender inequality in STEM 
Lack of local and affordable creative platforms
Limited mentorship
HOW: The problem manifests through:
individuals unable to afford software Women dropping out of music careers due to lack of mentorship and hostile environments
existing platforms focus on already established artists, leaving emerging artists without support.
skilled creators migrate to markets with better infrastructure

Software development model 
Agile/Scrum methodology is specifically chosen for this project because this project requires continuous feedback from users to improve usability and relevance. Creative needs evolve, and Agile allows the system to adapt to any evolution.



Implementation Steps:
1. Requirement Gathering from users
We will search for the target audience of the system and gather requirements
This will be done through interviews, surveys and observations
This ensures the system is built on real needs rather than assumptions
2. Development
Cross-functional teams including developers, UX designers familiar with African contexts, and music educators
Theirvoice will be built in iterations instead of the entire software at once.
After one feature is concluded it will be reviewed and tested before moving on to the next
Such features are; User registration, artist profiles, content submission, mentors feedback.
Continuous integration/continuous deployment (CI/CD) to test features in real African network conditions
3. Testing and feedback
Beta testing with actual women creators in target markets
Iterative feedback on usability, especially for users with varying digital literacy levels
Cultural adaptation (language, UI/UX preferences, local music styles)
4. Improvement and deployment
Assess what worked 
Identify improvements based on feedback
5. Product Backlog Refinement
Continuous prioritization based on:
User impact (features that remove biggest barriers first)
Technical feasibility in African infrastructure
Revenue potential to ensure sustainability
Scalability across diverse African markets

Why is it relevant? Agile is relevant because we're building for a market where user needs must be discovered rather than assumed.  Flexibility, the ability to make changes based on future needs and ensuring we don't waste resources building features users don't need. 
The hypothesis of their solution
If we provide African women and minorities with a platform combining affordable music education, production tools, and community support, then we anticipate;
Participation (6-month target):
1000+ active users creating music on the platform
20% of users from rural areas
70% of users using it as their first music production experience
Skill Development (12-month target):
5000+ users completing at least one music production course
Average skill improvement of 40% measured through assessments
500+ users publishing their first complete track
Economic Empowerment (18-month target):
1000+ users earning income from their music ($50+ monthly)
100+ users transitioning to full-time or part-time music careers
$250,000+ total earnings distributed to creators through the platform
Community Impact (24-month target):
30% increase in female representation in local music production scenes
mentorship relationships formed through platform
Partnerships with 10+ music labels/distributors 
       5. Long-Term Outcomes (3-5 years):
Contribute to closing the gender gap in music production
Create a new generation of African women music producers 
Establish sustainable income 





References 
African Union. (2021). African Union handbook on the creative economy. African Union Commission.
Annenberg Inclusion Initiative. (2021). Inclusion in the recording studio? Gender and race/ethnicity of artists, songwriters & producers across 900 popular songs from 2012-2020. USC Annenberg School for Communication and Journalism.
Grand View Research. (2023). Music production software market size, share & trends analysis report. Grand View Research, Inc.
Speedtest Global Index. (2024). Global speeds. Ookla. Retrieved January 20, 2026, from https://www.speedtest.net/global-index
UNESCO. (2023). Re-shaping cultural policies: Advancing creativity for development. UNESCO Publishing.
World Bank. (2024). World development indicators: Income and poverty. The World Bank Group.















  Software Requirements Specification (SRS) Template

Title: Theirvoices - A  Digital Music Creation Platform
Prepared by: Angel Kibui 
Organization: African Leadership University
Date Created: January 21, 2026


Table of Contents....................................................................................................................
 Revision History............................................................................................................................. 
1.   Introduction.............................................................................................................................
1.1   Purpose................................................................................................................................. 
1.2   Document Conventions.......................................................................................................... 
1.3   Intended Audience and Reading Suggestions........................................................................
1.4   Product Scope........................................................................................................................ 
1.5   References............................................................................................................................. 
2.   Overall Description................................................................................................................. 
2.1   Product Perspective................................................................................................................ 
2.2   Product Functions.................................................................................................................. 
2.3   User Classes and Characteristics...........................................................................................
2.4   Operating Environment.......................................................................................................... 
2.5   Design and Implementation Constraints..................................................................................
2.6   User Documentation............................................................................................................... 
2.7   Assumptions and Dependencies.............................................................................................
3.   External Interface Requirements........................................................................................... 
3.1   User Interfaces....................................................................................................................... 
3.2   Hardware Interfaces............................................................................................................... 
3.3   Software Interfaces................................................................................................................. 
3.4   Communications Interfaces..................................................................................................... 
4.   System Features....................................................................................................................... 
4.1   System Feature 1.................................................................................................................... 
4.2   System Feature 2 (and so on).................................................................................................
5.   Other Nonfunctional Requirements......................................................................................
5.1   Performance Requirements..................................................................................................... 
5.2   Safety Requirements.............................................................................................................. 
5.3   Security Requirements............................................................................................................ 
5.4   Software Quality Attributes.................................................................................................... 
5.5   Business Rules....................................................................................................................... 
6.   Appendix................................................................................................................ 
Appendix A: Glossary................................................................................................................... 
Appendix B: Analysis Models......................................................................................................  




 
Revision History
Name
Date
Reason For Changes
Version
 Angel Kibui
 20/01/2026
 Initial SRS creation
 1.0
 


 
 

 
 

1. 	Introduction
1.1 	Purpose
This Software Requirements Specification (SRS) document describes the functional and non-functional requirements for Theirvoices Version 1.0, a mobile digital platform designed to empower African women and minorities in music creation, education, and monetization. This document specifies the complete system requirements for the minimum viable product (MVP) that will be developed and deployed across African markets.
The scope of this SRS covers the web application and mobile application components of Theirvoices, including user management, learning management system, audio production tools, community features, and payment integration. 
1.2 	Document Conventions
<SRS follows these conventions:
Bold text indicates system components, user roles, or emphasis on critical requirements
Italic text is used for technical terms defined in the Glossary (Appendix A)
All functional requirements (FR) inherit the priority of their parent requirement 
Requirements are numbered hierarchically (e.g., FR 1.1, FR 1.1.1)
"<>" brackets indicate values to be finalized during development

1.3 	Intended Audience and Reading Suggestions
This document is intended for:
Developers: Focus on Sections 3 (External Interface Requirements), 4 (Requirement Specification), and 5 (Nonfunctional Requirements) for technical implementation details.
Project Managers: Read Section 2 (Overall Description) for system overview, then Section 4 for feature prioritization and timeline planning.
UX/UI Designers: Review Sections 2.3 (User Classes), 3.1 (User Interfaces), and Appendix B for design requirements and user flow diagrams.
Testers: Focus on Section 4 (Functional Requirements) and 5 (Nonfunctional Requirements) for test case development.
Stakeholders/Investors: Read Sections 1.4 (Product Scope) and 2 (Overall Description) for business context and system capabilities.
Marketing Teams: Review Section 2.3 (User Classes) and 2.6 (User Documentation) to understand target users and content needs.
Recommended reading sequence: Start with Section 1 (Introduction) for context, proceed to Section 2 (Overall Description) for system overview, then dive into sections relevant to your role.

1.4 	Product Scope
Theirvoices is a cloud-based, mobile-first platform that provides music production education and tools for African women and underrepresented minorities. The software addresses critical barriers in the African creative economy by providing:
Relevant Benefits:
Accessible music production education at low costs costs
Production tools that work on low-bandwidth connections
Peer-to-peer learning community and mentorship opportunities
Direct monetization channels for creators


Objectives:
Enable 10,000+ African women to create their first music track within 12 months
Provide music education accessible at <$10/month compared to $500+ for other courses
Create sustainable income opportunities for creators through platform monetization
Build the largest community of African women music producers
Goals: Theirvoices aligns with the African Union's Agenda 2063 goal of leveraging the creative economy for economic transformation. The platform supports Gender Equality, Decent Work and Economic Growth, and Industry, Innovation, and Infrastructure while creating a sustainable social enterprise model that can scale across African markets.
1.5 References
Project Proposal: "Theirvoices: Digital Platform for Empowering African Women in Music Creation" (Part A)
2. 	Overall Description
2.1 	Product Perspective
Theirvoice is a new, self-contained product designed specifically for the African market context. Unlike existing music production platforms (e.g, Splice, BandLab) that are built for high-bandwidth environments, Theirvoice is architected from the ground up for mobile, low-connectivity African infrastructure.
Theirvoice operates as a cloud-based web and mobile application that interfaces with:
Mobile Money Payment Systems ( MTN Mobile Money, Airtel Money) for user payments and creator payouts
Cloud Storage Services (AWS S3 or Google Cloud Storage) for audio file storage
Email/SMS Services for user notifications and authentication
Social Media Platforms (instagram, tiktok) for content sharing




Major System Components:
[User Devices: Web/Mobile] 
        ↓
[Load Balancer/CDN]
        ↓
[Application Server]
    ├── Authentication Service
    ├── Learning Management System
    ├── Audio Production Engine
    ├── Community Platform
    └── Payment Gateway
        ↓
[Database Layer]
    ├── User Database
    ├── Content Database
    └── Transaction Database
        ↓
[External Services]
    ├── Mobile Money APIs
    ├── Cloud Storage
    └── Email/SMS Gateway
This structure ensures scalability, maintainability, and secure interaction between subsystems.

2.2 	Product Functions
Theirvoice provides the following major functions:
User Management
User registration and authentication (email, phone, social media)
Profile creation with portfolio showcase
Role-based access control (learner, creator, mentor, administrator)
Learning Management System (LMS)
Music production courses (beginner to advanced)
Video tutorials, reading materials, and interactive exercises
Progress tracking and certification
Audio Production Tools
Audio recording (microphone input)
Audio editing (trim, cut, fade)
Audio effects library (reverb, delay)
Community Platform
Discussion forums organized by topics
Direct messaging between users
Feedback and collaboration features (share work-in-progress, receive comments)
Monetization 
Marketplace for selling beats, samples, and complete tracks
Mobile money payment integration
Pricing and licensing tools for creators





2.3 	User Classes and Characteristics
Class 1: Aspiring Learners (Highest Priority)
User: African women and minorities aged 16-35
Technical Expertise: Low to medium digital literacy, familiar with electronics but limited technical music knowledge
Frequency of Use: Daily during active learning (30-60 min sessions), 3-5 times per week
Product Functions Used: Learning modules (100%), basic recording tools (80%), community forums (60%)
Characteristics: Highly motivated but resource-constrained, prefer mobile access, sensitive to data costs, value peer support
Special Needs: Simplified interfaces, extensive help, offline functions
Class 2: Active Creators ( High Priority)
Demographics: Users who have completed at least one course and actively create music
Technical Expertise: Medium to high, understand basic music production concepts
Frequency of Use: 4-7 times per week, sessions of 1-3 hours
Product Functions Used: Audio production tools (100%), marketplace (70%), community (80%)
Characteristics: Income-motivated, seeking recognition, willing to pay for premium features
Special Needs: More advanced production tools, efficient workflow
Class 3: Mentors/Educators (Important)
Demographics: Experienced music producers, educators, industry professionals 
Technical Expertise: High musical and technical expertise
Frequency of Use: 2-4 times per week for mentorship activities
Product Functions Used: Community features (100%), course creation tools (if provided), feedback systems (100%)
Characteristics: Giving motivation, interested in shaping next generation
Special Needs: Efficient communication tools, impact tracking, recognition systems
Class 4: Supporters/Fans (Less Important )
Demographics: Music consumers interested in supporting African creators
Technical Expertise: Basic to medium
Frequency of Use: Weekly or monthly browsing
Product Functions Used: Marketplace browsing (100%), purchasing (100%), discovery features (80%)
Characteristics: Value authenticity and direct creator support
Special Needs: Easy discovery, secure payment, simple purchasing process

2.4 	Operating Environment
Web Application:
Modern web browsers: Google Chrome , Firefox , Safari , Microsoft Edge 
Minimum screen resolution: 320px width (mobile devices)
JavaScript enabled, Web Audio API support required
Mobile Application:
Android 8.0
Minimum 2GB RAM, 100MB available storage
Microphone hardware for recording functionality
Cloud Infrastructure: AWS or Google Cloud Platform
Application Server: Node.js  with Express.js framework
Database: PostgreSQL for relational data, MongoDB for content/media metadata
Web Server: Nginx for reverse proxy and load balancing
Connection: Designed to operate on 3G connections (minimum 256kbps)
Mobile money platforms: M-Pesa API, MTN Mobile Money API, Airtel Money API
Cloud storage: AWS S3 or Google Cloud Storage
2.5 	Design and Implementation Constraints
Technical Constraints:
Must function on low-bandwidth connections limiting real-time collaboration features
Audio processing must be optimized for mobile CPUs 
Mobile app limited to Android initially due to resource constraints
 Regulatory Constraints:
Must comply with African data protection laws (e.g. Kenya Data Protection Act 2019)
Payment processing must follow local financial regulations
Age verification required (minimum 16 years with parental consent, 18+ for monetization)
Business Constraints:
Development timeline: 6-month MVP development cycle
Initial budget limitations require focus on web/Android only


Hardware Limitations:
Storage limitations on user devices 
Security Constraints:
User passwords must be hashed using bcrypt 
HTTPS required for all communications
Audio content must have copyright
Internationalization:
Initial language support: English, French, Swahili (expandable to Hausa, Zulu, Amharic)
Currency support for local markets (KES, NGN, GHS, ZAR, UGX, TZS)
2.6 	User Documentation
The following user documentation will be delivered with Theirvoice:
1. Getting Started Guide 
It has account creation, profile setup, first recording, first course enrollment
2. In-App Tutorials
Feature-specific tooltips and walkthroughs and video tutorials
3. Video Tutorial Library
Beginner tutorials covering basic music production concepts
4. Community-Created Content
User-generated tips and tricks 
Frequently Asked Questions (FAQ) 
Troubleshooting guides collaboratively built with community
5. Mentor/Educator Guide 
How to provide effective feedback
Best practices for mentorship
Platform features for educators

6. Creator Monetization Guide 
How to price and sell work
Payment and payout processes
Legal basics (copyright, licensing)
Documentation delivery formats
In-app embedded content (HTML)
Downloadable PDFs (for offline reference)
Video: MP4 format, multiple quality levels (240p-720p)
2.7 	Assumptions and Dependencies
Assumptions:
Users have access to smartphones or computers with internet connectivity 
Users have basic literacy in at least one supported language (English, French, or Swahili)
Cloud infrastructure providers (AWS/GCP) will maintain service availability in African regions
Microphone access will be granted by users for recording functionality
At least 70% of users will access platform via mobile devices rather than desktop
Dependencies:
Technical Dependencies:
Web Audio API
Mobile Money API
Cloud Storage Provider
CDN Service
Third-Party Services:
Payment Processors: 
Authentication Services
Email/SMS Provider
External Factors:
Government policies 
Competition from emerging platforms
Currency exchange rate stability 
Internet infrastructure improvements or degradation 
3. 	External Interface Requirements
3.1 	User Interfaces
Screen Layouts:
1. Home/Dashboard Screen
Top navigation: Logo, Search, Notifications, Profile
Hero section: Featured courses or community highlights
Quick actions: "Start Recording", "Continue Learning", "Browse Marketplace"
Progress widgets: Course completion, daily streak, achievements
Community feed: Recent posts, success stories 
Bottom navigation : Home, Learn, Create, Community, Profile
2. Learning Module Interface
Course catalog with filter/sort options (difficulty, duration, topic)
Progress indicator eg. 1 of 15 lessons completed
Interactive elements: Quizzes, exercises embedded in lessons
Next/Previous lesson navigation
3. Audio Production Interface
Top toolbar: Project name, Save, Export, Settings
Main canvas: Display for multiple tracks 
Left sidebar: Track controls (volume, pan, mute, solo, effects)
Bottom panel: Transport controls (play, pause, record, loop)
Floating action button: "Add Track"
4. Community/Forum Interface
Category navigation (Questions, Showcase, Collaborations, General)
Post list view: Title, author, date, reply count, like count
Individual post view: Original content, replies threaded
User profile sidebar: Avatar, bio, portfolio links
UI Standards:
Color scheme: Vibrant color ,, high-contrast text
Typography: Sans-serif fonts optimized for mobile 
Icons: Consistent icon set African-themed

3.2 	Hardware Interfaces

Input Interface:
Microphone: System default microphone accessed via Web Audio API (web) or Android MediaRecorder API (mobile)
Output Interface:
Speakers/Headphones: System audio output via Web Audio API or Android AudioTrack
Storage Interface:
Device Storage (Mobile): Access to device storage for offline content caching
Minimum 100MB required for app installation
Additional storage for offline courses (500MB-2GB)
SD Card (Android): Optional external storage support for audio project files
Network Interface:
WiFi/Cellular Data: Standard network interfaces for internet connectivity
Camera Interface:
Camera: Standard image capture via browser File API or Android Camera API
Maximum upload size: 5MB 
Supported formats: JPEG, PNG

3.3 	Software Interfaces
Operating System Interfaces:
Web Browsers:
Chrome , Firefox , Safari, Edge 
Android OS:
Android 8.0

Database Interfaces:
PostgreSQL 14+:
MongoDB 5+:
Cloud Storage Interface:
AWS S3 / Google Cloud Storage
CDN Interface:
Cloudflare / AWS CloudFront:
Payment Gateway Interfaces:
M-Pesa API:
MTN Mobile Money API:
Flutterwave / Paystack API
INCOMING Data:
User registration data (name, email, password)  Purpose: Create new user account
Audio files from user's microphone  Purpose: Record new music
Search queries  Purpose: Find courses or marketplace items
OUTGOING Data:
Payment request to M-Pesa API  Purpose: Process user payment
Audio files to cloud storage (AWS S3)  Purpose: Save user's recordings
Email notifications to users → Purpose: Confirm registration, password reset
User progress data to database → Purpose: Track course completion
Services Needed
M-Pesa API Service: Processes mobile money payments
AWS S3 Storage Service: Stores audio files
Email Service : Sends transactional emails
Database Service (PostgreSQL): Stores user data, courses, transactions
Nature of Communications
REST API over HTTPS: Most communication (JSON format)
WebSocket: For real-time chat 
Webhooks: M-Pesa sends payment confirmation back to your system
File Upload : When uploading audio
Data Shared Across Components
User session data (JWT token) - shared between authentication service and all other services
Audio project metadata - shared between editing tool, storage system, and marketplace
User profile information - shared between community features, courses, and marketplace
3.4 	Communications Interfaces
HTTPS Protocols:
All client-server communication over HTTPS 
RESTful API architecture for web/mobile app backend communication
Mobile Money Communication:
communication standards: JSON over HTTPS POST
Security: HMAC signature verification for callbacks, IP whitelisting
Timeout Handling: 30-second timeout for payment requests, retry logic
Push Notifications:
Android: Firebase Cloud Messaging
Triggers: Course completion, new messages, payment confirmations, community interactions
Email Communication:
SMTP Protocol: Via third-party service 
Templates: HTML emails with plain-text fallback
Types: Transactional (welcome, password reset, receipts), Marketing (newsletters, promotions)
Real-Time Communication:
WebSocket Protocol 




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
4. 	Requirement Specification
Stakeholder Requirements Specification
Functional Requirements

Req ID
Requirements
Description 
FR 1
User Registration and Authentication


FR 1.1
Email/Phone Registration
Allow users to register using email address or phone number with OTP verification
FR 1.2
Password Management
Allow users to create secure passwords, reset forgotten passwords via email/SMS
FR 1.3
Profile Creation
Allow users to create and edit profiles with name, bio, profile picture, location, interests
FR 1.4
Email Verification
Send verification email/SMS upon registration, require verification to access full features
FR 2
Learning Management System


FR 2.1
Browse Course
Display all available courses with filters (difficulty, topic, duration, language)
FR 2.2
Course Enrollment
Allow users to enroll in courses
FR 2.3
Progress Tracking
Track and display user progress through courses (% completion, lessons completed)
FR 2.4
CourseCompletion Certificate
award certificates upon successful course completion
FR 3
Audio Production Tools


FR 3.1
Audio Recording
Enable users to record audio using device microphone via browser or mobile app
FR 3.2
Music Editing Tools 
Provide trim, cut, copy, paste, and delete functions
FR 3.3
Audio Effects
Provide basic effects: reverb, delay, EQ, compression, normalization
FR 3.4
Project Save
Allow users to save projects to cloud
FR 3.5
Export Audio
Export final mixes as MP3 or WAV files
FR 4
Monetizationand Marketplace


FR 4.1
List Products 
Allow creators to upload and list beats, samples, or tracks for sale
FR 4.2
Browse Marketplace 
Display all listed products with search, filter, and sort capabilities
FR 4.3
Purchase Flow
Complete purchase flow from cart to payment confirmation
FR 4.4
Mobile Money Integration
Process payments via M-Pesa, MTN Mobile Money, Airtel Money
FR 5
Administrationand Management


FR 5.1
User Management
Admin dashboard to view, edit, suspend, or delete user accounts


5. 	Other Nonfunctional Requirements
Example of Non-Functional Requirements (EDIT THIS PART)


Requirement Type
Req ID
Description 
Security
NFR 1
User passwords must be hashed using bcrypt
User uploaded content must be scanned for malware before storage
Performance 
NFR 2
System must support 10,000 concurrent users without degradation
Initial page load must complete in under 5 seconds on 3G connection
Usability 
NFR 4
Interface must be available in English, French
Platform must be operable by users with basic digital literacy
System must provide contextual help/tooltips for new users
Reliability
NFR 5
User data must be backed up daily
System must  handle offline scenarios and sync when connection restored
Failed payment transactions must be rolled back with user notification
Cross Browser Support 
NFR 6
The system must be accessible across the two web browser Google Chrome, Microsoft Edge
Business rules
NFR 7
Users must be minimum 16 years old and 18+ to monetize with age verification
Platform commission is 15% on all marketplace sales



```

---

### **10. .gitignore**
```
# Node modules
node_modules/
npm-debug.log
yarn-error.log

# Environment variables
.env
.env.local

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp
*.swo

# Build files
dist/
build/

# Logs
logs/
*.log

# Test coverage
coverage/