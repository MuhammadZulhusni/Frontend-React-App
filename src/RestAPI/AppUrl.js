// This class stores and manages all API endpoint URLs used in the app.
// It defines a base URL and appends specific paths to create full API endpoints.

class AppUrl {

    // Base URL for the Laravel backend API
    // Local
    // static BaseURL = 'http://127.0.0.1:8000/api';
    // Production
    static BaseURL = 'https://rapi.get-virtual-admin.com/api';

    // Homepage-related endpoints
    static HomeTopTitle = this.BaseURL + '/homepage/title';
    static HomeTechDesc = this.BaseURL + '/techhome';
    static TotalHomeDetails = this.BaseURL + '/totalhome';
    static HomeVideo = this.BaseURL + '/home/video';

    // Project-related endpoints
    static ProjectDetails = this.BaseURL + '/projectdetails/';
    static ProjectAll = this.BaseURL + '/projectall';
    static ProjectHome = this.BaseURL + '/projecthome';

    // Services and information
    static Services = this.BaseURL + '/services';
    static Information = this.BaseURL + '/information';
    static FooterData = this.BaseURL + '/footerdata';

    // Course-related endpoints
    static CourseDetails = this.BaseURL + '/coursedetails';
    static CourseAll = this.BaseURL + '/courseall';
    static CourseHome = this.BaseURL + '/coursehome';

    // Other features
    static ContactSend = this.BaseURL + '/contactsend';
    static ClientReview = this.BaseURL + '/clientreview';
    static ChartData = this.BaseURL + '/chartdata';
}

// Export the class so it can be used in other parts of the React app
export default AppUrl;
