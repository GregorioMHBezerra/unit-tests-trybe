const calculator = (number1, number2) => {
  const sum = number1 + number2;
  const mult = number1 * number2;
  const div = Math.floor(number1 / number2);
  const sub = number1 - number2;
  return {
    sum,
    mult,
    div,
    sub,
  };
};

const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    return Object.keys(object);
  }
  if (type === 'values') {
    return Object.values(object);
  }
  if (type === 'entries') {
    return Object.entries(object);
  }
};

module.exports = { calculator, arrayGenerator };
