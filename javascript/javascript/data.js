let employees = [
  { name: "Alice", salary: 5000 },
  { name: "Bob", salary: 3000 },
  { name: "Charlie", salary: 7000 },
  { name: "David", salary: 4000 }
];
let sorted = employees.sort((a, b) => a.salary - b.salary);
let secondLast = sorted[employees.length-2];
console.log("Name:", secondLast.name);
console.log("Salary:", secondLast.salary);
