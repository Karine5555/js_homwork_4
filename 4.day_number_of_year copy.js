function dayOfYear(str){
  let date = str.split("/"),
      day=(1000 * 60 * 60 * 24 ),
      startYear = new Date(date[2]),
      endYear = new Date(date[2], date[0] - 1, date[1]);

 return Math.ceil((endYear - startYear) / day) + 1;
}


console.log(dayOfYear("12/13/2020")); 

console.log(dayOfYear("12/17/2020"));