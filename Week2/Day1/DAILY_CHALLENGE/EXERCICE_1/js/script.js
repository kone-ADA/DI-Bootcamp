const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//Remove Banana from the array
console.log(fruits.pop()) //["Apples", "Oranges", "Blueberries"]

// Sort the array in alphabetical order.

console.log(fruits.sort()) //['Apples', 'Banana', 'Blueberries', 'Oranges']

// Add “Kiwi” to the end of the array

console.log(fruits.push("kiwi")) //['Apples', 'Banana', 'Blueberries', 'Oranges', 'kiwi']

//Remove “Apples” from the array. Don’t use the same method as in part 1.

console.log(fruits.splice(0,1)) //['Banana', 'Blueberries', 'Oranges', 'kiwi']

//Sort the array in reverse order

console.log(fruits.reverse()) //['kiwi','Oranges', 'Blueberries', 'Banana']


