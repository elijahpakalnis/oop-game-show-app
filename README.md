# OOJS Guess the phrase game
Fun project, wrote blueprint classes and
created objects from these classes.
Utilized .forEach, .every array iterations.
ES6 syntax, arrow functions, spread operators.
Ternary conditionals. 
No spaghetti code :P

This project allows user 2 ways of inputting data,
by clicking the letters, and by typing on keyboard.

So part of this project submission is also to note what was changed in CSS, truth is
I'm till a noob with CSS stuff, so it was all superficial, just changed background colors, transparency, borders, some margins, image widths/heights.

+ removed the folowing colors :root
  --color-win: #78CF82;
  --color-lose: #D94545;
  --color-start: #5b85b7;
  --color-neutral: #445069;
  --color-keys-light: #E5E5E5;
  & changed 
  --color-neutral-light: #D2D2D23D from #D2D2D2 (for opacity)
  --color-keys: #6200FF from #37474F

+ added Helvetica font family line in the *{} 

+ added black background to body

+ removed unecessary margin duplicate in h2

+ changed button borders from transparent to #440BD4

+ changed #btn__reset margin: 0 auto -> to 20px auto

+ changed .head color to white

+ added border .space border: solid darkgray 2px;

+ changed .show background-color rgba(0, 255, 255, 0.5) and 
  added border: solid 2px cyan;

+ increased margin-top to 25px on #phrase ul li elements

+ added .chosen border border: solid 1px #85DB30
  & changed background-color: #86DB307E * removed background: #3a3f58

+ addeed .wrorng   border: solid 1px #FC0F3E
 & changed background-color: #FC0F3E5B * removed background: #f7a964

+ removed .btn_reset & .btn_reset:active 

+ added #qwerty marin-top: 25px

+ added .tries img{ width: 99px; height: 99px} for custom image

+ removed .start a, .win a, .lose a since they were no longer needed

+ changed start and lose background colors to black

