import React, { useState, useEffect } from 'react';

const Notification = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [remainingTime, setRemainingTime] = useState('');
  const [notificationText, setNotificationText] = useState('');
  const [notificationActive, setNotificationActive] = useState(false);

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  useEffect(() => {
    const checkNotification = () => {
      const currentTime = new Date().getTime();
      const start = new Date(`2023-06-06T${startTime}`).getTime();
      const end = new Date(`2023-06-06T${endTime}`).getTime();

      if (currentTime >= start && currentTime <= end) {
        setNotificationText('Notification: Time is running out!');
        setNotificationActive(true);

        const remaining = Math.ceil((end - currentTime) / 1000);
        setRemainingTime(`Remaining time: ${remaining} seconds`);
      } else {
        setNotificationText('Notification: Inactive');
        setNotificationActive(false);
        setRemainingTime('');
      }
    };

    const interval = setInterval(checkNotification, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startTime, endTime]);

  return (
    <div>
      <div>
        <label htmlFor="start-time">Starting Time:</label>
        <input type="time" id="start-time" value={startTime} onChange={handleStartTimeChange} />
      </div>
      <div>
        <label htmlFor="end-time">Ending Time:</label>
        <input type="time" id="end-time" value={endTime} onChange={handleEndTimeChange} />
      </div>
      <div>
        {notificationActive && <div className="notification">{notificationText}</div>}
        {remainingTime && <div className="remaining-time">{remainingTime}</div>}
      </div>
    </div>
  );
};

export default Notification;

    

