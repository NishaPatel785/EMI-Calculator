export function calculateEMI(principal, annualRate, tenureYears) {
  const monthlyRate = annualRate / 12 / 100;
  const tenureMonths = tenureYears * 12;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return emi;
}
