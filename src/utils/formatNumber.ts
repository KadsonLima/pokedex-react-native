export function formatNumber(number:number):String {
  
    return "#".concat(String(number).padStart(3, '0'));
}