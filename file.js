function array( arrayNumbers ) {
  var postiveArray = [];
  var sumForNegative = 0;

  for(var i = 0; i < arrayNumbers.length; i++) {
    if(arrayNumbers[i] > 0) {
      postiveArray.push(arrayNumbers[i]);
      
    }else{
      sumForNegative += arrayNumbers[i];
    }
  }

  console.log(postiveArray.length);

  return sumForNegative;
}

let result = array( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);

console.log(result);

