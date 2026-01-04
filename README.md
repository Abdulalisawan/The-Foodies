# 🍽️ The Foodies — Food Discovery & Review Platform

Live Website: https://the-foodies-heaven.netlify.app/

---

## 📌 Project Overview

The Foodies is a modern food discovery and review platform where users can explore delicious dishes, share their experiences, and save their favourite foods. The project focuses on providing a clean user interface, secure authentication, and a smooth user experience while demonstrating full-stack development skills.

This application allows authenticated users to manage reviews and favourites with real-time data handling and responsive design.

---

## 📸 Project Screenshot

Add a clean screenshot of the homepage or food listing page. Save the image as screenshot.png in the root directory.

![The Foodies Screenshot](./screenshot2.jpeg)

---

## ✨ Key Features

- Secure user authentication using Firebase
- Add, edit, and manage food reviews
- Favourite system to save preferred dishes
- Search and filter dishes using backend logic
- Personalized “My Reviews” section
- Fully responsive UI for mobile, tablet, and desktop
- Smooth animations and clean design

---

## 🧰 Technologies Used

Frontend:
- React
- React Router
- Tailwind CSS
- GSAP

Backend:
- Node.js
- Express.js

Database:
- MongoDB Atlas

Authentication:
- Firebase Authentication

Deployment:
- Netlify (Frontend)
- Vercel (Backend)

---

## 📦 Main Dependencies

- react
- react-router-dom
- firebase
- axios
- gsap
- express
- mongodb

---

## ⚙️ How to Run the Project Locally

Step 1: Clone the repository  
git clone https://github.com/your-username/the-foodies.git  
cd the-foodies  

Step 2: Install dependencies  
npm install  

Step 3: Environment variables  
Create a .env file in the root directory and add:

VITE_FIREBASE_API_KEY=your_firebase_api_key  
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain  
MONGODB_URI=your_mongodb_connection_string  

Never commit the .env file to GitHub.

Step 4: Run the project  
npm run dev  

The application will run at: http://localhost:5173

---

## 🔗 Project Resources

Live Website: https://the-foodies-heaven.netlify.app/  
Frontend Repository: https://github.com/your-username/the-foodies  
Backend Repository: https://github.com/your-username/the-foodies-server  

---

## 🎯 Why This Project Matters

- Demonstrates real-world full-stack development
- Implements secure authentication
- Uses CRUD operations with MongoDB
- Focuses on clean UI/UX and responsiveness
- Built with modern, industry-relevant tools

---

## 👤 Author

Abdul Ali Sawan  
Full Stack MERN Developer  
Dhaka, Bangladesh  

Email: dev.abdulalisawan@gmail.com  
GitHub: https://github.com/Abdulalisawan  
LinkedIn: https://www.linkedin.com/in/abdul-ali-sawan  

---

## ✅ Programming Hero Requirement Checklist

Project overview provided: ✅  
Live project link included: ✅  
Screenshot included: ✅  
Technologies listed clearly: ✅  
Dependencies mentioned: ✅  
Core features highlighted: ✅  
Local setup guide included: ✅  
Resources section added: ✅  

---

## 🚀 Recent Updates - Phase 5: Explore Page Filters

### What's New (Latest Enhancement)

The Explore/Reviews page now includes a **comprehensive filtering and sorting system**:

#### 🔍 Advanced Search
- Search across 3 fields: food name, restaurant name, description
- Real-time search with 500ms debounce
- Case-insensitive matching

#### 📂 Category Filter
- Multi-select from 8 food categories
- Biriyani, Pizza, Burger, Kebab, Curry, Chinese, Dessert, Beverage

#### ⭐ Rating Filter
- Minimum rating selection: 5 stars, 4+ stars, 3+ stars
- Single selection

#### 💰 Price Range Filter
- Dual sliders: ৳0 to ৳5000
- Real-time price display

#### 📅 Date Range Filter
- Last Week, Last Month, Last 3 Months, Last Year
- Time-based filtering

#### 📊 Sorting Options
- Newest First (default)
- Highest Rated
- Oldest First

#### 📄 Smart Pagination
- 6 items per page
- Intelligent page number display
- Smooth scroll to top on page change

#### 🏷️ Active Filters Display
- Visual filter chips with remove buttons
- "Clear All" button for quick reset
- Filter count badge

### New Components Created
- `FilterSidebar.jsx` - Advanced filter UI with 4 filter types
- `Pagination.jsx` - Smart pagination component
- `ActiveFilters.jsx` - Visual filter display and management

### Updated Pages
- `Allreviews.jsx` - Complete rewrite with filter integration, responsive layout, dark mode support

### Key Features
- ✅ **Dark Mode Support** - Full dark mode styling for all filters
- ✅ **Mobile Responsive** - Works seamlessly on mobile, tablet, desktop
- ✅ **Performance Optimized** - Uses useMemo for efficient calculations
- ✅ **Zero Breaking Changes** - All existing functionality preserved
- ✅ **Accessibility** - WCAG AA compliant with keyboard navigation

### Documentation Files
- `PHASE_5_COMPLETE.md` - Complete implementation overview
- `PHASE_5_FILTERS_SUMMARY.md` - Features and components
- `PHASE_5_API_REFERENCE.md` - Component APIs and usage
- `PHASE_5_QUICKSTART.md` - User guide for the filter system
- `FILTERS_VISUAL_GUIDE.md` - UI/UX documentation
- `FILTERS_TESTING_GUIDE.md` - Comprehensive testing checklist

### How to Use Filters

1. Navigate to `/reviews`
2. Use the left sidebar to apply filters:
   - Category (multi-select checkboxes)
   - Rating (minimum rating)
   - Price Range (dual sliders)
   - Date Range (single select)
3. Use sort dropdown to order results
4. Use search box for text search
5. See active filters displayed at top
6. Browse pages using pagination
7. Click X on filter chips to remove individual filters
8. Click "Clear All" to reset everything

### Performance & Quality
- **Time Complexity:** O(n) for filtering, O(n log n) for sorting
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Support:** Fully responsive at all breakpoints
- **Dark Mode:** Complete dark mode support
- **Accessibility:** Keyboard navigation, ARIA labels, focus states

---

## 📋 Implementation Phases

### Completed Phases
- ✅ Phase 1: Complete Codebase Analysis
- ✅ Phase 2: Implement Global UI & Design System
- ✅ Phase 3: Enhance Home/Landing Page
- ✅ Phase 4: Improve Card & Details Page
- ✅ Phase 5: Build Explore Page Filters

### Upcoming Phases
- ⏳ Phase 6: Enhance Authentication UI
- ⏳ Phase 7: Enhance User Dashboard
- ⏳ Phase 8: Add Additional Pages
- ⏳ Phase 9: Final UX Polish & Testing

---

⭐ If you like this project, consider giving it a star!
