const reeds = [
    {
        author: '--Oscar Wilde',
        quote: '"Be yourself; everyone else is already taken."'
    },
    {
        author: '--Frank Zappa',
        quote: '"So many books, so little time."'
    },
    {
        author: '--Marcus Tullius Cicero',
        quote: '"A room without books is like a body without a soul."'
    },
    {
        author: '--Mae West',
        quote: '"You only live once, but if you do it right, once is enough."'
    },
    {
        author: '--Mahatma Gandhi',
        quote: '"Be the change that you wish to see in the world."'
    },

];
//   وعملته لاكن الباقي عامله بمجهودي والله ف اعطيلي البونص بقاااchat gpt الداله بتاعة ضمان عدم تكرار الرقم الحالي انا بحثت عنه في 
var usedRandomNumbers = [];

function reedsclick() {
  var num_random;

 
  if (usedRandomNumbers.length === reeds.length) {
    usedRandomNumbers = [];
  }

  do {
    num_random = Math.floor(Math.random() * reeds.length);
  } while (usedRandomNumbers.includes(num_random));

  usedRandomNumbers.push(num_random);

  document.getElementById('quote').innerHTML = reeds[num_random].quote;
  document.getElementById('author').innerHTML = reeds[num_random].author;
}