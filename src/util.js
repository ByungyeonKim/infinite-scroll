const randomTimer = (func) => (resolve) => {
  const time = Math.floor(Math.random() * 5) * 1000;
  setTimeout(() => resolve(func()), time);
};

const delayTime = (func) => new Promise(randomTimer(func));

export default delayTime;
