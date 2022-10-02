import convertTempFromK from "utils/convertTemp";

test("Converts from Kelvin to Celcius", () => {
  expect(convertTempFromK(0)).toBe(-273.1);
  expect(convertTempFromK("270")).toBe(-3.1);
  expect(convertTempFromK(285)).toBe(11.9);
  expect(convertTempFromK(310)).toBe(36.9);
  expect(() => {
    convertTempFromK("285s")
  }).toThrow();;
});

test("Converts from Kelvin to Farenheit", () => {
  expect(convertTempFromK(0, "F")).toBe(-459.7);
  expect(convertTempFromK("50", "F")).toBe(-369.7);
  expect(convertTempFromK(200, "F")).toBe(-99.7);
  expect(convertTempFromK(315, "F")).toBe(107.3);
  expect(() => {
    convertTempFromK("285s", 'F')
  }).toThrow();;
});
