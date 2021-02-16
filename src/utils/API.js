import axios from "axios";

export default {
  getTopics: function() {
    return axios.get("/api/topics");
  },
  getTopic: function(id) {
    return axios.get("/api/topics/" + id);
  },
  deleteTopic: function(id) {
    return axios.delete("/api/topics/" + id);
  },
  saveTopic: function(topicData) {
    return axios.post("/api/topics", topicData);
  }
};