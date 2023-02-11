function helloUserName(first, last) {
  function userName() {
    return `${first} ${last}`;
  }
  userName();
  function info() {
    return `you are an Engineer `;
  }
  info();
  console.log(`Hello ${userName()} , ${info()}`);
}
helloUserName("mahdi", "sandouk");
