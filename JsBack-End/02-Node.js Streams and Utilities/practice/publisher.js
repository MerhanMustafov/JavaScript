const { publisher } = require("./subscriber");

publisher.on("ping", firstEvent);
publisher.on("ping", SecondEvent);
publisher.on("pong", ThirdEvent);

function firstEvent(message) {
  console.log(message);
}
function SecondEvent(message) {
  console.log(message);
}
function ThirdEvent(a, b, c) {
  console.log(
    `calculate: a + b + c where a=${a}, b=${b}, c=${c} answer: `,
    a + b + c
  );
}
