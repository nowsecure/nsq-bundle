var test = require('tape')
var spawn = require('child_process').spawn
var bl = require('bl')

test('nsqd listens on port 4150', function (t) {
  testPort(t, 4150)
})

test('nsqd listens on port 4151', function (t) {
  testPort(t, 4151)
})

function testPort (t, port) {
  t.plan(2)
  var regexp = new RegExp(":" + port)
  spawn('lsof', [ '-i', ':' + port ])
    .on('exit', function (code) {
      t.equal(code, 0, 'lsof exited without error')
    })
    .stdout.pipe(bl(function (err, data) {
      t.equal(regexp.test(data.toString()), true, 'should match port')
    }))
}
