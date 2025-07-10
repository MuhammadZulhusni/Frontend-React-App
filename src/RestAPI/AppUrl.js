class AppUrl {

    // Base URL for the Laravel backend API, set for production environment
    static BaseURL = 'https://rapi.get-virtual-admin.com/api';

    // API endpoints for Home Page sections
    static HomeTopTitle = this.BaseURL + '/homepage/title';
    static HomeTechDesc = this.BaseURL + '/techhome';
    static TotalHomeDetails = this.BaseURL + '/totalhome';
    static HomeVideo = this.BaseURL + '/home/video';

    // API endpoints for Projects
    static ProjectDetails = this.BaseURL + '/projectdetails/'; // Note: This URL expects an ID appended for details
    static ProjectAll = this.BaseURL + '/projectall';
    static ProjectHome = this.BaseURL + '/projecthome';

    // API endpoints for Services, Information, and Footer
    static Services = this.BaseURL + '/services';
    static Information = this.BaseURL + '/information';
    static FooterData = this.BaseURL + '/footerdata';

    // API endpoints for Courses
    // This URL is for fetching a specific course's details, expecting an ID to be appended.
    static CourseDetails = this.BaseURL + '/coursedetails/';
    static CourseAll = this.BaseURL + '/courseall';
    static CourseHome = this.BaseURL + '/coursehome';

    // API endpoints for Contact, Client Reviews, and Chart Data
    static ContactSend = this.BaseURL + '/contactsend';
    static ClientReview = this.BaseURL + '/clientreview';
    static ChartData = this.BaseURL + '/chartdata';
}

export default AppUrl;