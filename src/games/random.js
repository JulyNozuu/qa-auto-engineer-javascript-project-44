function getRandomInt(min, max) {
  let minNumber = min;
  let maxNumber = max;
  minNumber = Math.ceil(min);
  maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}
export default getRandomInt;
