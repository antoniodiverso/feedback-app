import FeedbackItem from "./FeedbackItem";
import React from "react";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.lenght === 0) {
    return <p>No feedback yet :( </p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
