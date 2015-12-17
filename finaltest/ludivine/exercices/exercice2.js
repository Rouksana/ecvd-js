function getNaiveDiviser(n){
  var diviser = [];

  var i; 

  for (i = 0; i > n ; i /= 2) {

  	i.push(diviser);

  }

  return diviser;
}
// Complexity:

function getOptimizedDiviser(n){
  var diviser = [];

  // Write an optimized solution here

  return diviser;
}
// Complexity:

// --------------------------------------------------------
// Check your algorithm
console.log(getNaiveDiviser(0).length === 0);
console.log(getNaiveDiviser(1).length === 1);
console.log(getNaiveDiviser(8).length === 4);
console.log(getNaiveDiviser(120).length === 16);
console.log(getNaiveDiviser(12345679).length === 4);

console.log(getOptimizedDiviser(0).length === 0);
console.log(getOptimizedDiviser(1).length === 1);
console.log(getOptimizedDiviser(8).length === 4);
console.log(getOptimizedDiviser(120).length === 16);
console.log(getOptimizedDiviser(12345679).length === 4);