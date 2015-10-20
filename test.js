var test = require('tape')
var spawn = require('child_process').spawn

test('nsqd listens on port 5150', function (t) {
  testPort(t, 5150)
})

test('nsqd listens on port 5151', function (t) {
  testPort(t, 5151)
})

function testPort (t, port) {
  spawn('lsof', [ '-i', ':' + port ], { env: process.env })
    .on('exit', function (code) {
      t.equal(code, 0, 'lsof exited without error')
      t.end()
    })
}
