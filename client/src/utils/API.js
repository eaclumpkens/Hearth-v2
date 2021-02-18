import axios from "axios";

export default {
  // Topic API
  getTopics: function() {
    return axios.get("/api/topics");
  },
  getTopic: function(id) {
    return axios.get("/api/topics/" + id);
  },
  getTopicsByCategory: function(category) {
    return axios.get("/api/topics/" + category);
  },
  deleteTopic: function(id) {
    return axios.delete("/api/topics/" + id);
  },
  saveTopic: function(topicData) {
    return axios.post("/api/topics", topicData);
  },
  // User API
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Review API
  getReviews: function() {
    return axios.get("/api/reviews");
  },
  getReview: function(id) {
    return axios.get("/api/reviews/" + id);
  },
  getReviewsByTopic: function(topic) {
    return axios.get("/api/reviews/" + topic)
  },
  deleteReview: function(id) {
    return axios.delete("/api/reviews/" + id);
  },
  saveReview: function(reviewData) {
    return axios.post("/api/reviews", reviewData);
  }
};