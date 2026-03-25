// config.js - Simple configuration
const CONFIG = {
  APP_NAME: 'Theirvoices',
  STORAGE_KEY: 'theirvoices_users',
  CURRENT_USER_KEY: 'theirvoices_current_user',
  COURSES_KEY: 'theirvoices_courses',
  PROJECTS_KEY: 'theirvoices_projects',
  MARKETPLACE_KEY: 'theirvoices_marketplace',
  POSTS_KEY: 'theirvoices_posts'
};

// Sample courses data
const SAMPLE_COURSES = [
  {
    id: '1',
    title: 'Introduction to Music Production',
    description: 'Learn the basics of beat making and recording',
    difficulty: 'Beginner',
    duration: '4 weeks',
    enrolled: 234,
    icon: '🎵'
  },
  {
    id: '2',
    title: 'Audio Editing & Effects',
    description: 'Master reverb, delay, EQ, and compression',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    enrolled: 156,
    icon: '🎹'
  },
  {
    id: '3',
    title: 'Vocal Recording Techniques',
    description: 'Learn how to record and mix vocals professionally',
    difficulty: 'Intermediate',
    duration: '5 weeks',
    enrolled: 189,
    icon: '🎤'
  },
  {
    id: '4',
    title: 'Monetizing Your Music',
    description: 'Turn your talent into income',
    difficulty: 'Beginner',
    duration: '3 weeks',
    enrolled: 312,
    icon: '💰'
  },
  {
    id: '5',
    title: 'Afrobeats Production',
    description: 'Create authentic Afrobeats rhythms and melodies',
    difficulty: 'Intermediate',
    duration: '5 weeks',
    enrolled: 278,
    icon: '🌍'
  },
  {
    id: '6',
    title: 'Music Theory Fundamentals',
    description: 'Understand scales, chords, and progressions',
    difficulty: 'Beginner',
    duration: '4 weeks',
    enrolled: 201,
    icon: '🎼'
  }
];

// Sample marketplace items
const SAMPLE_MARKETPLACE = [
  {
    id: '1',
    title: 'Afrobeat Drum Kit Vol. 1',
    description: 'Professional drum samples for Afrobeat production',
    price: 15,
    seller: 'Kofi Beats',
    category: 'Samples',
    icon: '🥁'
  },
  {
    id: '2',
    title: 'Amapiano Piano Loops',
    description: 'Authentic Amapiano piano progressions',
    price: 20,
    seller: 'Lagos Sound',
    category: 'Loops',
    icon: '🎹'
  },
  {
    id: '3',
    title: 'Vocal Sample Pack',
    description: 'African vocal chops and harmonies',
    price: 25,
    seller: 'Nairobi Voices',
    category: 'Samples',
    icon: '🎤'
  },
  {
    id: '4',
    title: 'Trap Beat - "Sunrise"',
    description: 'Hard-hitting trap beat ready for vocals',
    price: 30,
    seller: 'Beat Maker Pro',
    category: 'Beats',
    icon: '🔥'
  },
  {
    id: '5',
    title: 'Chill Lo-Fi Pack',
    description: 'Relaxing lo-fi loops and samples',
    price: 18,
    seller: 'Accra Sounds',
    category: 'Loops',
    icon: '🌙'
  },
  {
    id: '6',
    title: 'Gospel Choir Samples',
    description: 'Uplifting choir vocals and harmonies',
    price: 35,
    seller: 'Kampala Gospel',
    category: 'Samples',
    icon: '🎶'
  }
];

// Sample community posts
const SAMPLE_POSTS = [
  {
    id: '1',
    author: 'Amara K.',
    avatar: 'A',
    time: '2 hours ago',
    content: 'Just finished my first beat! The course on drum patterns was so helpful. Can\'t wait to share it with you all! 🎵',
    likes: 24,
    comments: 5
  },
  {
    id: '2',
    author: 'Kwame M.',
    avatar: 'K',
    time: '5 hours ago',
    content: 'Looking for a female vocalist for my new Afrobeats track. DM me if interested! 🎤',
    likes: 15,
    comments: 8
  },
  {
    id: '3',
    author: 'Zuri N.',
    avatar: 'Z',
    time: '1 day ago',
    content: 'The mentorship program changed my life. Shoutout to all the amazing mentors here! 🙏',
    likes: 42,
    comments: 12
  },
  {
    id: '4',
    author: 'Chioma O.',
    avatar: 'C',
    time: '2 days ago',
    content: 'Just released my first single on streaming platforms! Thank you Theirvoices community for all the support 💫',
    likes: 67,
    comments: 18
  }
];

// Initialize sample data if not exists
function initializeSampleData() {
  if (!localStorage.getItem(CONFIG.COURSES_KEY)) {
    localStorage.setItem(CONFIG.COURSES_KEY, JSON.stringify(SAMPLE_COURSES));
  }
  if (!localStorage.getItem(CONFIG.MARKETPLACE_KEY)) {
    localStorage.setItem(CONFIG.MARKETPLACE_KEY, JSON.stringify(SAMPLE_MARKETPLACE));
  }
  if (!localStorage.getItem(CONFIG.POSTS_KEY)) {
    localStorage.setItem(CONFIG.POSTS_KEY, JSON.stringify(SAMPLE_POSTS));
  }
}

// Call on page load
initializeSampleData();

