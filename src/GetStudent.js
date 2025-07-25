import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetStudent = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', course: '', fee: '' });

  useEffect(() => {
    axios.get('http://localhost:3302/student')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.log("Error fetching students:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent(prev => ({ ...prev, [name]: value }));
  };

  const addStudent = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3302/student', newStudent)
      .then(response => {
        setStudents(prev => [...prev, response.data]);
        setNewStudent({ name: '', course: '', fee: '' }); // Reset form
      })
      .catch(error => {
        console.log("Error adding student:", error);
      });
  };

  return (
    <div >
      <h3>Add New Student</h3>
      <form onSubmit={addStudent}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={newStudent.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="course"
          placeholder="Enter course"
          value={newStudent.course}
          onChange={handleChange}
        />
        <input
          type="number"
          name="fee"
          placeholder="Enter fee"
          value={newStudent.fee}
          onChange={handleChange}
        />
        <button type="submit">Add Student</button>
      </form>

      <h2>Student Details</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetStudent;