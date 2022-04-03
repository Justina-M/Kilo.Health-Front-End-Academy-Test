import { useState, useEffect } from "react";

const now = new Date().getTime();

const Countdown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [leftHours, setLeftHours] = useState(0);
  const [leftMinutes, setLeftMinutes] = useState(0);
  const [leftSeconds, setLeftSeconds] = useState(0);

  const totalCountTime =
    (parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)) *
    1000;
  const countdownToTime = now + totalCountTime;

  useEffect(() => {
    const timer = setInterval(() => {
      var distance = countdownToTime - new Date().getTime();

      // distance between now and the cont down time
      var h = Math.floor((distance % (1000 * 3600 * 24)) / (1000 * 3600));
      var min = Math.floor((distance % (1000 * 3600)) / (1000 * 60));
      var s = Math.floor((distance % (1000 * 60)) / 1000);

      setLeftHours(h);
      setLeftMinutes(min);
      setLeftSeconds(s);

      if (distance < 1000) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownToTime]);

  return (
    <span>
      {("0" + leftHours).slice(-2)}:{("0" + leftMinutes).slice(-2)}:
      {("0" + leftSeconds).slice(-2)}
    </span>
  );
};

export default Countdown;
