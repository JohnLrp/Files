# TODO: Implement Courses Page with Enrollment and Payment

## Frontend Updates
- [ ] Update Home.js: Add onClick to "Get Started" button to navigate to "/courses"
- [ ] Update App.js: Add BrowserRouter and Routes for /courses and /class/:id
- [ ] Update Courses.jsx: Modify courses array to include streams for class 11 and 12 (Science, Commerce, Arts)
- [ ] Update Courses.jsx: Ensure enroll button navigates to "/enroll/:courseId"
- [ ] Update Courses.jsx: Ensure details button navigates to "/class/:id"
- [ ] Create Form.jsx: New component for student enrollment form with details and payment integration
- [ ] Update ClassDetail.jsx: Add navigation for enroll button to "/enroll/:courseId"
- [ ] Update ClassDetail.jsx: Display subjects based on class and stream

## Backend Updates
- [ ] Update studentController.js: Add POST endpoint for enrollment submission
- [ ] Update studentRoutes.js: Add route for enrollment
- [ ] Update db.json: Add structure for enrollments and payments
- [ ] Update adminController.js: Ensure payments are fetched for admin dashboard

## Testing and Verification
- [ ] Test navigation from Home to Courses
- [ ] Test enroll button navigation to form
- [ ] Test details button navigation to class details
- [ ] Test form submission and payment
- [ ] Verify admin panel shows payments and enrollments
