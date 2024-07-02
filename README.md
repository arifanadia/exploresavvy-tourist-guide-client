# exploresavvy-tourist guide

Welcome to the Tourist Guide website, your ultimate resource for exploring the beauty of Bangladesh!

## Live Site

Visit the live site:  https://exploresavvy-tourist-guide.web.app/

## Features

- **Homepage**:
  - Navbar with logo, website name, and user authentication (login/register)
  - Dynamic user profile dropdown with links to Dashboard and Offer Announcements
  - Banner/Slider section showcasing thematic images
  - Tourism and Travel Guide Section with tabs for Overview, Our Packages, and Meet Our Tour Guides
  - Tour Type Section linking to specific tour packages
  - Tourist Story Section featuring clickable stories with share functionality

- **Package Details Page**:
  - Gallery section displaying multiple images of tour destinations
  - About The Tour, Tour plan, and list of tour guides
  - Booking form with user information pre-filled and date picker for booking

- **Tour Guide Profile Page**:
  - Tour guide details, including reviews and rating system
  - Ability for users to rate and comment on tour guides

- **Authentication**:
  - Login and registration forms with social login options
  - Protected routes for users, tour guides, and admins

- **User Dashboards**:
  - **Tourist Dashboard**: My Profile, My Bookings, My Wishlist, Request to Admin
  - **Tour Guide Dashboard**: My Profile, My Assigned Tours
  - **Admin Dashboard**: My Profile, Add Package, Manage Users

- **Notifications and Alerts**:
  - SweetAlert/Toast notifications for CRUD operations and authentication events

- **Advanced Features**:
  - Pagination for tables (showing 10 items per page)
  - JWT authentication with local storage implementation
  - Discount message for frequent users with animation effects

## Technologies Used

- **Frontend**:
  - React.js with react-router-dom for routing
  - React Tabs for tabbed content
  - React Datepicker for date selection
  - React Share for social media sharing

- **Backend**:
  - Node.js with Express.js for server-side logic
  - MongoDB for database storage with Mongoose for ORM
  - Firebase Authentication for user authentication
  - JWT for secure authentication tokens
  - Tanstack Query for efficient data fetching (GET methods)

- **Additional Packages**:
  - React Helmet for managing browser tab metadata
  - React Confetti for celebratory animations
  - Framer Motion for fluid animations (optional)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/arifanadia/exploresavvy-tourist-guide-client.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd exploresavvy-tourist-guide-client
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Start the development server:**
    ```bash
    npm start
    ```
5. **Server-side git-repo**
    ```bash
    git clone https://github.com/arifanadia/exploresavvy-tourist-guide-server.git
    ```


## Contact

Email : contactarifanadia@gmail.com

---

