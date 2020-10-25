module.exports = function check(str, bracketsConfig) {
  // your solution
  while (true) {
    let counter = 0;
    bracketsConfig.forEach(item => {
        if (str.includes(item[0] + item[1])) {
            str = str.replace(item[0] + item[1], '');
            counter += 1;
        }
    })
    if (counter === 0) break;
}

return (str === '') ? true : false;
}
