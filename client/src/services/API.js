import axios from "axios";

export default {

  fetchFriends: function() {
    return axios.get('api/friends/')
  },
  
}