const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);
//箭头函数，compare function
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]