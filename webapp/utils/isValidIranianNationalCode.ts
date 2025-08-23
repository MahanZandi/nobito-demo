export function isValidIranianNationalCode(input: string): boolean {
  if (!/^\d{10}$/.test(input)) return false;

  const invalidCodes = [
    "0000000000",
    "1111111111",
    "2222222222",
    "3333333333",
    "4444444444",
    "5555555555",
    "6666666666",
    "7777777777",
    "8888888888",
    "9999999999",
  ];
  if (invalidCodes.includes(input)) return false;

  const check = +input[9];
  const sum = [...input].slice(0, 9).reduce((acc, digit, i) => {
    return acc + +digit * (10 - i);
  }, 0);

  const remainder = sum % 11;

  return (
    (remainder < 2 && check === remainder) ||
    (remainder >= 2 && check === 11 - remainder)
  );
}
