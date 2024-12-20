function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number' && isFinite(value);
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return add(a,b);
  } else {
    throw new Error("Invalid input: both arguments must be numbers");
  }
}

let result1 = addSafe(1, 2); //Correct usage
console.log(result1); // 3

try {
  let result2 = addSafe("1", 2); //incorrect usage
  console.log(result2); 
} catch (error) {
  console.error(error.message); // Catches error
}

