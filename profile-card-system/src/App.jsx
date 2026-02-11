import React from "react";
import ProfileCard from "./components/Profilecard";
import "./App.css";

function App() {
  const profiles = [
  {
    id: 1,
    name: "Mamatha",
    role: "Frontend Developer",
    description: "Passionate about building interactive web applications."
  },
  {
    id: 2,
    name: "Rahul",
    role: "Backend Developer",
    description: "Loves working with APIs and databases."
  },
  {
    id: 3,
    name: "Anjali",
    role: "UI/UX Designer",
    description: "Designing beautiful and user-friendly interfaces."
  },
  {
    id: 4,
    name: "Kiran",
    role: "Full Stack Developer",
    description: "Enjoys working on both frontend and backend technologies."
  },
  {
    id: 5,
    name: "Sneha",
    role: "Data Analyst",
    description: "Loves analyzing data and finding meaningful insights."
  },
  {
    id: 6,
    name: "Arjun",
    role: "Mobile App Developer",
    description: "Building responsive and user-friendly mobile applications."
  }
];


  return (
  <div className="main-wrapper">
    <div className="container">
      <h1>Interactive Profile Card System</h1>

      <div className="card-container">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            description={profile.description}
          />
        ))}
      </div>
    </div>
  </div>
  );
}

export default App;
