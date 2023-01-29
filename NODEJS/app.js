var fs = require('fs');

fs.rename('index.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});



/*const superheroes = require('superheroes');
console.log(superheroes.random());
*/