console.log('succesfully loaded!')

let quotes = [
    'Today is your day to shine',
    "Don't give up keep fighting",
    "That which doesn't kill us will only make us stronger",
    'There is always tomorrow',
     'Hope springs eternal',
     'May you chew your gum to its gone',
     'Eat all your food off your plate',
     "Don't count your chickens before they hatch",
     'What food you missed today,you can finish tomorrow'

];
let output1 = document.getElementById('output1').innerHTML;

let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
btn.addEventListener('click',function() {
    let randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];
    btn.innerHTML = 'next'
    document.getElementById('output1').innerHTML = randomQuotes;
    
});
  function clr() {
    output1.innerHTML = ''
  }
              
    //reset function---------------------------
    


         


 
