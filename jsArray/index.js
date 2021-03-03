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

console.log(filteredEmployees)