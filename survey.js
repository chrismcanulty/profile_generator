// readline module in node to receive survey answers
// example usage at beginning
// .question(query, callback) function
// .close() function

// require readline module from node
const readline = require('node:readline');
// require node process for stdin and stdout
const { stdin: input, stdout: output } = require('node:process');

// create interface for user to interact with in node
const rl = readline.createInterface({ input, output });

// define the question, receive the answer
rl.question('What is your name?', (answer) => {
  // TODO: Log the answer in a database
  const name = answer;
    rl.question('What\'s an activity you like doing?', (answer) => {
    let activity = answer;
      rl.question('What do you listen to while doing that?', (answer) => {
      let music = answer;
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        let favMeal = answer;
          rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          let favFood = answer;
            rl.question('Which sport is your absolute favourite?', (answer) => {
            let sport = answer;
              rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              let power = answer;
              console.log(`Hello my name is ${name}. In my spare time I like ${activity}. My favorite music is ${music}. I could have ${favMeal} three times a day. I can't live without ${favFood}. My favourite sport is ${sport}. My friends say ${power} is my superpower.`);
  rl.close();
              });
            });
          });
        });
      });
    });


  });

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
