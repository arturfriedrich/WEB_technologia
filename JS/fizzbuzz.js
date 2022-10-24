for(i = 1; i <= 100; i++){
  let holder = "";
  if(i % 3 == 0) holder += "Fizz";
  if(i % 5 == 0) holder += "Buzz";
  if (holder == "") holder = i;
  console.log(holder);
}