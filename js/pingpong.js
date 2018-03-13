function pingPong("ping-pong", "ping", "pong") {
  pingPong % 15 === 0 = "ping-pong";
  pingPong % 3 === 0 = "ping";
  pingPong % 5 === 0 = "pong";
}

exports.pingPongModule = pingPong;
