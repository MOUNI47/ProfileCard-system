import React, { useState } from "react";
import "../App.css";

function ProfileCard({ name, role, description }) {

  const [status, setStatus] = useState("Follow");

  const handleClick = () => {
    if (status === "Follow") {
      setStatus("Following");
    } else if (status === "Following") {
      setStatus("Unfollow");
    } else {
      setStatus("Follow");
    }
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>

      <button 
        className={`btn ${status.toLowerCase()}`} 
        onClick={handleClick}
      >
        {status}
      </button>
    </div>
  );
}

export default ProfileCard;
