const convertTempFromK = (temp, to = "C") => {
  const fromKFormulasMap = {
    C: (k) => -273.15 + k,
    F: (k) => (k - 273.15) * 1.8 + 32,
  };
  const result = fromKFormulasMap[to](temp);
  return Math.round(result * 10) / 10
};

export default convertTempFromK