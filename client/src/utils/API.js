import axios from "axios";

export default {

    searchImages: function(title) {
        return axios.get(`/api/images?title=${title}`)
    }
}