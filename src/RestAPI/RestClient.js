// Import axios for making HTTP requests
import axios from 'axios';

// This class provides reusable HTTP methods for API calls
class RestClient {

    // Method to send a GET request
    static GetRequest = (getUrl) => {
        return axios.get(getUrl)
            .then(response => {
                // Return response data if successful
                return response.data;
            })
            .catch(error => {
                // Return null if an error occurs
                return null;
            });
    }

    // Method to send a POST request
    static PostRequest = (postUrl, postJson) => {
        let config = {
            headers: {
                'Content-Type': 'application/json', // JSON format header
            }
        };

        return axios.post(postUrl, postJson, config)
            .then(response => response.data)
            .catch(error => null);
    }
}

// Export the class so it can be reused across the app
export default RestClient;
