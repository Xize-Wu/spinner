process.stdout.write('hello from spinner2.js... \rheyyy\n');
const arr = ['\r| ', '\r/ ', '\r~ ', '\r\\  '];


const foo = function(array) {
  let delay = 100;
  for (const element of array) {
    setTimeout(() => {
      process.stdout.write("\r" + element);// print the char here
    }, delay);
    delay += 200;
  }
};

foo(arr)