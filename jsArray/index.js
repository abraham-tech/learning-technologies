const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']

// months.forEach( (month) => console.log(month))


//ForEach return nothing but map returns a value

// months.forEach((month, index, array) => console.log(month, index, array))


// newMonth = months.map(month => month.toUpperCase());
// console.log(newMonth)
// data = months.find((month) => month == "January")
// console.log(data)

//find index of
// const index = months.findIndex(month => month == "April")
// console.log("Index ", index)

//array filter months

filtered = months.filter(month => month == 'May')
console.log(filtered)

const employees = [
    { name: 'David Carlson', age: 30 },
    { name: 'John Cena', age: 34 },
    { name: 'Mike Sheridan', age: 25 },
    { name: 'John Carte', age: 50 }
  ];

//get employees age greater than 300

const filteredEmployees = employees.filter(employee => employee.age > 30)

const indexOfEmployees = filteredEmployees.indexOf(employee => employee.name == 'Mike Sheridan');

console.log(indexOfEmployees)

//check if all positive or not 

// let numbers = [10, -30, 20, 50];

// const checkPositive = numbers.every(number => number >= 0 )

// console.log('result ', checkPositive)


// const checkSomePositive = numbers.some(number => number >= 0 )

// console.log('result ', checkSomePositive)

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((sum, number) => sum + number, 0);

// console.log('result ', sum)


const coordinates = [
    { x: 1, y: 2 }, 
    { x: 2, y: 3 }, 
    { x: 3, y: 4 }
  ];

  const sum = coordinates.reduce((sum,current)=> sum+current.y,0);
  console.log('result ', sum)