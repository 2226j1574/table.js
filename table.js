// App.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// Header Component
function Header() {
  return (
    <header>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

// BookingForm Component
function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [diners, setDiners] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Booking submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <label htmlFor="diners">Number of Diners:</label>
      <input
        type="number"
        id="diners"
        value={diners}
        onChange={(e) => setDiners(e.target.value)}
        min="1"
        required
      />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="contact">Contact Info:</label>
      <input
        type="text"
        id="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Little Lemon Restaurant</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Reserve a Table</h1>
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

// Rendering the App component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// styles.css (inlined for the combined approach)
const styles = `
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #007bff;
}

main {
  padding: 2rem;
}

form {
  max-width: 600px;
  margin: 0 auto;
}

label {
  display: block;
  margin-top: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
}

button {
  display: block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

footer {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
`;

// Inject CSS into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
