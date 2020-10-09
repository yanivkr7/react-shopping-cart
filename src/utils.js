export default function formatCurrency(num){
    return  '\u20AA' + Number(num.toFixed(2)).toLocaleString();
}