// Import axios for making HTTP requests
import axios from 'axios';

// This class provides a reusable method for making GET requests using axios
class RestClient {

    // Static method to send a GET request to the given URL
    static GetRequest = (getUrl) => {
        return axios.get(getUrl)
            .then(response => {
                // If the request is successful, return the response data
                return response.data;
            })
            .catch(error => {
                // If there's an error, return null
                return null;
            });
    }
}

// Export the class so it can be imported and used in other files
export default RestClient;
