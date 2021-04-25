const add = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new TypeError(`Expected type number, got ${typeof num1}`);
  }

  return num1 + num2;
};

export default add;
