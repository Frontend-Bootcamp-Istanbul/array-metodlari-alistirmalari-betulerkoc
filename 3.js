var numbers = [12, 5, 20, 130, 44, 9, 240];

var newNumbers = numbers.filter(item => {
  return item < 15;
});

console.log(newNumbers);