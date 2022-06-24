//name prompt

const yesNO = () => {
  let player = prompt('Hello there, what is your name?')
  let answer = prompt(`${player} are you a star wars fan? Y/N`)

  if (answer === 'Y' || answer === 'y') {
    // if the answer is yes, the Star Wars Adventure function will run
    starWarsAdventure()
  }
  // if the answer is anything other 'Y' or 'y' an alert says Goodbye
  else {
    alert('Goodbye')
  }
  // restart option, not sure if I am using confirm correctly, not sure how to get cancel to stop the inital prompt
  let restart = confirm('Click ok to restart')
  yesNO()
}

//Star Wars Adventure Game
const starWarsAdventure = () => {
  //player selects choice, depending on choice the following loops or switch will run and display prompts
  let saberColor = prompt('What is your favorite light saber color? (R/B/G/P)')

  if (saberColor === 'R' || saberColor === 'r') {
    let darkSide = prompt(
      'So a fan of the darkside you are. Lord Vader or Darth Maul? (V/D)'
    )

    if (darkSide === 'V' || darkSide === 'v') {
      let anakin = prompt(
        'Complete the following quote: "     , I am your father." (Luke, No)'
      )

      if (anakin === 'No' || anakin === 'no') {
        alert('You truly are a Star Wars fan!')
      } else {
        alert('GO WATCH EMPIRE STRIKES BACK NOW!')
      }
    } else {
      alert(
        'Darth Maul is one of my favorite characters, if you have not watched the animated clone wars series, go watch it now! Darth Maul has one of the best character arcs in all of Star Wars!'
      )
    }
  } else if (saberColor === 'B' || saberColor === 'b') {
    let blue = prompt('Anakin or Obiwan?(A/O)')

    if (blue === 'O' || blue === 'o') {
      alert('You have the high ground!')
    } else {
      alert('You were the chosen one!')
    }
  } else if (saberColor === 'G' || saberColor === 'g') {
    let green = prompt(
      'You must be as wise as master Yoda. Which episode has the best Yoda quote? (1/5/6/8)'
    )
    switch (green) {
      case '1':
        alert(
          'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.'
        )
        break
      case '5':
        alert('Do or do not, there is no try')
        break
      case '6':
        alert('When 900 years old you reach, look as good, you will not.')
        break
      case '8':
        alert('The greatest teacher, failure is.')
    }
  } else if (saberColor === 'P' || saberColor === 'p') {
    alert('Good Motherf****** Answer!')
  } else {
    alert('I know there are other colors but I gave you only four options!')
  }
}
// runs the yesNo function
yesNO()
