import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timerInterval);
        // Optionally, you can perform an action when the countdown reaches zero
        alert('Countdown complete!');
      }
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, [seconds]);

  return (
    <div>
      <p>Countdown Timer:</p>
      <p>{seconds} seconds</p>
    </div>
  );
};

export default CountdownTimer;
