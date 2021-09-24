function sayHello(name) {
  let newName = name || 'friend';
  let msg = `Hello, ${newName}`
  console.log(msg)
}

sayHello();
sayHello('jain');