// Course.js - Course model schema

class Course {
  constructor(data) {
    this.id = data.id || Date.now().toString();
    this.title = data.title;
    this.description = data.description;
    this.difficulty = data.difficulty; // 'Beginner', 'Intermediate', 'Advanced'
    this.duration = data.duration; // e.g., '4 weeks'
    this.enrolled = data.enrolled || 0;
    this.icon = data.icon || '🎵';
    this.modules = data.modules || [];
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  validate() {
    if (!this.title || this.title.length < 5) {
      throw new Error('Title must be at least 5 characters');
    }
    if (!this.description) {
      throw new Error('Description is required');
    }
    if (!['Beginner', 'Intermediate', 'Advanced'].includes(this.difficulty)) {
      throw new Error('Invalid difficulty level');
    }
    return true;
  }
}

module.exports = Course;