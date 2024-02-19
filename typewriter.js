const sentence = "hello there from lighthouse labs";
let timerInterval = 0;

const typeWriter = function(initialDelay, timerDelay, stringToPrint){
  stringToPrint+=`\n`;
  for (const char of stringToPrint) {
    setTimeout(() => {
      process.stdout.write(char);
    }, initialDelay) 
    initialDelay = initialDelay + timerDelay;
  } 
}

typeWriter(0, 50, sentence);


