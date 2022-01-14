const events = require("events");

const publisher = new events.EventEmitter();

function eventRaiser() {
  publisher.emit("ping", "FIRST");
  publisher.emit("ping", "SECOND");

  publisher.emit("pong", 1, 3, 7);
}

module.exports = {
  publisher,
  eventRaiser,
};
