// EXERCICE 2: Series
//Part 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength) // 3
let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence) //black mirror,money heist,the big bang theory

console.log("I watched 3 series : " + myWatchedSeriesSentence) //I watched 3 series : black mirror,money heist,the big bang theory

//PART 2

//Change the series “the big bang theory” to “friends”
myWatchedSeries[2] = "friends"
console.log(myWatchedSeries) //['black mirror', 'money heist', 'friends']

//Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Halo")
console.log(myWatchedSeries) //['black mirror', 'money heist', 'friends','Halo']

//Add, at the beginning of the array, the name of your favorite series
myWatchedSeries.unshift("FBI")
console.log(myWatchedSeries) //['FBI','black mirror', 'money heist', 'friends','Halo']

//Delete the series “black mirror”.
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries) //['FBI', 'money heist', 'friends','Halo']

// Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1].substring(2,3)) // 'n'

//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries) //['FBI', 'money heist', 'friends','Halo']