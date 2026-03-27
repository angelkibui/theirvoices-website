// User.js - User model schema
// This shows the structure for a real database implementation

class User {
  constructor(data) {
    this.id = data.id || Date.now().toString();
    this.name = data.name;
    this.email = data.email;
    this.password = data.password; // Would be hashed in production
    this.role = data.role || 'learner';
    this.bio = data.bio || '';
    this.location = data.location || '';
    this.coursesEnrolled = data.coursesEnrolled || 0;
    this.projectsCreated = data.projectsCreated || 0;
    this.earnings = data.earnings || 0;
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  // Validation
  validate() {
    if (!this.name || this.name.length < 2) {
      throw new Error('Name must be at least 2 characters');
    }
    if (!this.email || !this.email.includes('@')) {
      throw new Error('Valid email required');
    }
    if (!this.password || this.password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
    return true;
  }

  // Remove sensitive data
  toJSON() {
    const { password, ...userWithoutPassword } = this;
    return userWithoutPassword;
  }
}

module.exports = User;