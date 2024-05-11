export const animationFrame = (
  callback: (data: number) => void,
  duration = 1000,
  delay = 0
) => {
  setTimeout(() => {
    let startTimestamp: number;
    function step(timestamp: number) {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      callback(progress);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
  }, delay);
};
