function numLeapYears(str){
  let sum = 0,
      day=(1000 * 60 * 60 * 24 );
      yearsArr = str.split("-");

  for(let year = yearsArr[0]; year <= yearsArr[1]; year++){

    if((new Date(year, 2, 1) - new Date(year, 1, 1)) / day === 29) sum++;
    
  }

  return sum;
}

console.log(numLeapYears("1980-1984")); 

console.log(numLeapYears("2000-2020")); 

console.log(numLeapYears("1600-2000")); 