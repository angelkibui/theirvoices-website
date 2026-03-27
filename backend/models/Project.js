// Project.js - Audio project model schema

class Project {
  constructor(data) {
    this.id = data.id || Date.now().toString();
    this.userId = data.userId;
    this.title = data.title || 'Untitled Project';
    this.tracks = data.tracks || [];
    this.bpm = data.bpm || 120;
    this.key = data.key || 'C Major';
    this.audioUrl = data.audioUrl || null;
    this.status = data.status || 'draft'; // 'draft', 'published'
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  validate() {
    if (!this.userId) {
      throw new Error('User ID is required');
    }
    if (!this.title) {
      throw new Error('Title is required');
    }
    return true;
  }
}

module.exports = Project;