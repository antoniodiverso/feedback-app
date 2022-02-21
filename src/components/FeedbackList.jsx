import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import React from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext);

  if (!feedback || feedback.lenght === 0) {
    return <p>No feedback yet :( </p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
