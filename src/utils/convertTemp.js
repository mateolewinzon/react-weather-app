const convertTempFromK = (temp, to = "C") => {
  
  if (typeof temp === 'string' && !/^\d+$/.test(temp)) {
    throw new Error("Input temperature must be a number or string of a number");
  }

  const fromKFormulasMap = {
    C: (k) => -273.15 + k,
    F: (k) => (k - 273.15) * 1.8 + 32,
  };
  const result = fromKFormulasMap[to](Number(temp));
  return Math.round(result * 10) / 10;
};

export default convertTempFromK;
