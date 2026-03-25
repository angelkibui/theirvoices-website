// auth.js - Authentication functions

// Check if user is logged in
function isLoggedIn() {
  return localStorage.getItem(CONFIG.CURRENT_USER_KEY) !== null;
}

// Get current user
function getCurrentUser() {
  const userStr = localStorage.getItem(CONFIG.CURRENT_USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
}

// Get all users
function getAllUsers() {
  const usersStr = localStorage.getItem(CONFIG.STORAGE_KEY);
  return usersStr ? JSON.parse(usersStr) : [];
}

// Save users
function saveUsers(users) {
  localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(users));
}

// Update current user
function updateCurrentUser(updatedUser) {
  const users = getAllUsers();
  const userIndex = users.findIndex(u => u.id === updatedUser.id);
  
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    saveUsers(users);
    
    // Update current user in storage
    const { password: _, ...userWithoutPassword } = users[userIndex];
    localStorage.setItem(CONFIG.CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    
    return true;
  }
  return false;
}

// Register new user
function register(name, email, password, role = 'learner') {
  const users = getAllUsers();
  
  // Check if user already exists
  if (users.find(u => u.email === email)) {
    return { success: false, message: 'User already exists with this email' };
  }
  
  // Create new user
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password, // In real app, this would be hashed
    role,
    createdAt: new Date().toISOString(),
    coursesEnrolled: 0,
    projectsCreated: 0,
    earnings: 0,
    bio: '',
    location: ''
  };
  
  users.push(newUser);
  saveUsers(users);
  
  return { success: true, message: 'Registration successful!', user: newUser };
}

// Login user
function login(email, password) {
  const users = getAllUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }
  
  // Save current user (without password)
  const { password: _, ...userWithoutPassword } = user;
  localStorage.setItem(CONFIG.CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
  
  return { success: true, message: 'Login successful!', user: userWithoutPassword };
}

// Logout user
function logout() {
  localStorage.removeItem(CONFIG.CURRENT_USER_KEY);
  window.location.href = 'index.html';
}

// Protect page (redirect to login if not logged in)
function protectPage() {
  if (!isLoggedIn()) {
    window.location.href = 'login.html';
  }
}

// Redirect if already logged in
function redirectIfLoggedIn() {
  if (isLoggedIn()) {
    window.location.href = 'dashboard.html';
  }
}

// Get user's first name
function getFirstName(fullName) {
  return fullName.split(' ')[0];
}

// Get user initials
function getUserInitials(name) {
  const names = name.split(' ');
  if (names.length >= 2) {
    return names[0][0] + names[1][0];
  }
  return names[0][0];
}