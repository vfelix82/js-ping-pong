import { pingPong } from './../src/ping-pong.js';
// var pingPong = require('./../js/pingPong').pingPongModule;
var output = [];
describe('ping', function() {

  it('should return ping if number is evenly divisible by 3', function() {
    var output = new pingPong(3)
    expect(output).toEqual([1, 2,'ping'])
  });
});

describe('pong', function() {

  it('should return pong if number is evenly divisible by 5', function() {
    var output = new pingPong(5)
    expect(output).toEqual([1,2,'ping',4,"pong"])
  });
});

describe('ping-pong', function() {

  it('should test that all multiples of 3 and 5 return ping-pong', function() {
    var output = new pingPong(15)
    expect(output).toEqual([1,2,'ping',4,"pong","ping", 7,8,"ping","pong",11,"ping",13,14,"ping-pong"])
  });
});
