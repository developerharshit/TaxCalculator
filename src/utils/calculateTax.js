
const row = ['A','B','C','D','E'];
const slabRange = {
    'A':'0 to 1,50,000',
    'B':'1,50,001 to 3,00,000',
    'C':'3,00,001 to 8,00,000',
    'D':'8,00,001 to1,00,00,000',
    'E':'1,00,00,001+'
};
const taxRates = [0.0,0.025,0.10,0.25,0.30];
let taxableIncome = [0,0,0,0,0];
let tax = [0,0,0,0,0];
const taxAmountArray = [150000,150000,500000,9200000];
const noTaxAmount = 400000;
const finalSlab = 4;

const calculateTaxHandler = (amount,slab)=>{
    //console.log(finalSlab===0);
    if(amount<=noTaxAmount && slab===0)return 0;
    if(amount<=0)return 0;
    if(slab===finalSlab){
        tax[slab]=amount * taxRates[slab];
        taxableIncome[slab]=amount;
        return tax[slab];
    }
    //console.log(amount);
    tax[slab] = Math.min(taxAmountArray[slab],amount)*taxRates[slab];
    taxableIncome[slab] = Math.min(taxAmountArray[slab],amount);
    return tax[slab]+calculateTaxHandler(amount-Math.min(taxAmountArray[slab],amount),slab+1);

}
const calculateTax = (amount)=>{
   
     taxableIncome = [0,0,0,0,0];
     tax = [0,0,0,0,0];
    const slab = 0;
    const totalTax = Math.floor(calculateTaxHandler(amount,slab));
    const data = {
        taxRates,
        taxableIncome,
        tax,
        totalTax,
        row,
        slabRange,
        amount:amount
    }
    return data;


};
export default calculateTax;