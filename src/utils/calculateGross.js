
const row = ['A', 'B', 'C', 'D', 'E'];
const slabRange = {
    'A': '0 to 1,50,000',
    'B': '1,50,001 to 3,00,000',
    'C': '3,00,001 to 8,00,000',
    'D': '8,00,001 to1,00,00,000',
    'E': '1,00,00,001+'
};
const taxRates = [0.0, 0.025, 0.10, 0.25, 0.30];
let tax = [0, 0, 0, 0, 0];
let netIncome = [0, 0, 0, 0, 0];
const absolute = [150000, 146250, 450000, 6900000];
let grossIncome = [0, 0, 0, 0, 0];
const noTaxAmount = 400000;
const finalSlab = 4;

const calculateGrossHandler = (amount, slab) => {

    if (amount <= noTaxAmount && slab === 0) return amount;
    if (amount <= 0) return 0;

    if (slab === 0) {
        netIncome[slab] = absolute[slab];
        tax[slab] = 0;
        grossIncome[slab] = netIncome[slab];
        return grossIncome[slab] + calculateGrossHandler(amount - netIncome[slab], slab + 1);
    }
    if (slab === finalSlab || amount <= absolute[slab]) {
        grossIncome[slab] = amount / (1 - taxRates[slab]);
        netIncome[slab] = amount;
        tax[slab] = grossIncome[slab] * taxRates[slab];
        return grossIncome[slab];
    }
    if (amount > absolute[slab]) {
        netIncome[slab] = absolute[slab];
        grossIncome[slab] = netIncome[slab] / (1 - taxRates[slab]);
        tax[slab] = grossIncome[slab] * taxRates[slab];
        return grossIncome[slab] + calculateGrossHandler(amount - netIncome[slab], slab + 1);
    }
}
const calculateGross = (amount) => {

    tax = [0, 0, 0, 0, 0];
    netIncome = [0, 0, 0, 0, 0];
    grossIncome = [0, 0, 0, 0, 0];
    const slab = 0;
    const totalGross = Math.floor(calculateGrossHandler(amount, slab));
    const data = {
        row,
        slabRange,
        taxRates,
        totalGross,
        netIncome,
        grossIncome,
        tax,
        amount
    }
    return data;


};
export default calculateGross;