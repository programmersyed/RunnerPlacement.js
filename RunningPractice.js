let raceNumber = Math.floor(Math.random() * 1000);
var runner= true
var runnerAge= 19
if ( runner=true && runnerAge>18){
  raceNumber+=1000
} 
if (runner=true && runnerAge > 18) {
  console.log(`You will race at 9:30 AM, ${
      raceNumber}`);
} else if (runner!=true && runnerAge > 18) {
  console.log(`You will race at 11 AM,${raceNumber}`);} else if (
runnerAge < 18
  ){
console.log('Youth registrants run at 12:30 pm (regardless of registration)”')
  } else (
    console.log(
      'Inability to race'
    )
  )
