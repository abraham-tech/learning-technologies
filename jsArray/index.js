const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December']

// months.forEach( (month) => console.log(month))


//ForEach return nothing but map returns a value

// months.forEach((month, index, array) => console.log(month, index, array))


// newMonth = months.map(month => month.toUpperCase());
// console.log(newMonth)
// data = months.find((month) => month == "January")
// console.log(data)

//find index of
const index = months.findIndex(month => month == "April")
console.log("Index ", index)