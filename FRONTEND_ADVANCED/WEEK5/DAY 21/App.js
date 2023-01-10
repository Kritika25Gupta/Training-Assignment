import './App.css';
import React from 'react';
import StudentDetails from './StudentDetails'
function App() {
  return (
    <>
    <table border="2">
      <th>Student ID</th>
      <th>Student Name</th>
      <th>Course</th>
      <th>Age</th>
      <th>Total</th>
      <StudentDetails></StudentDetails>
    </table>
    </>
  );
}
export default App;
