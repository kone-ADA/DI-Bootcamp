const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//Remove Banana from the array
fruits.pop() 
console.log(fruits) //["Apples", "Oranges", "Blueberries"]

// Sort the array in alphabetical order.
fruits.Sort()
console.log(fruits) //['Apples', 'Banana', 'Blueberries', 'Oranges']

// Add “Kiwi” to the end of the array
fruits.push("kiwi")
console.log(fruits) //['Apples', 'Banana', 'Blueberries', 'Oranges', 'kiwi']

//Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.splice(0,1)
console.log(fruits) //['Banana', 'Blueberries', 'Oranges', 'kiwi']

//Sort the array in reverse order
fruits.reverse()
console.log(fruits) //['kiwi','Oranges', 'Blueberries', 'Banana']


