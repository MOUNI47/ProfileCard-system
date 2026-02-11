import React, { useState } from "react";
import "../App.css";

function ProfileCard({ name, role, description }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>

      <button
        className={isFollowing ? "unfollow-btn" : "follow-btn"}
        onClick={handleFollow}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

export default ProfileCard;
