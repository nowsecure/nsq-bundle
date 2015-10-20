#!/usr/bin/env node

var path = require('path')
var expand = require('expand-template')()
var get = require('simple-get')
var pump = require('pump')
var zlib = require('zlib')
var tar = require('tar-fs')

var urlBase = 'https://s3.amazonaws.com/bitly-downloads/nsq'
var fileName = expand('nsq-{version}.{platform}-amd64.go1.5.1.tar.gz', {
  version: '0.3.6',
  platform: process.platform
})

var url = urlBase + '/' + fileName
console.log('requesting', url)

var req = get(url, function (err, res) {
  if (err) return onerror(err)
  if (res.statusCode !== 200)
    return onerror(new Error('http error ' + res.statusCode))

  var tarStream = tar.extract('bin', {
    readable: true,
    writeable: true,
    strip: 2
  }).on('entry', function (entry) {
    var isEntry = entry.name && entry.name.length
    if (isEntry) console.log('extracting into', 'bin/' + entry.name)
  })

  pump(res, zlib.createGunzip(), tarStream, onerror)
})

req.setTimeout(30 * 1000, function () {
  req.abort()
})

function onerror (err) {
  if (!err) return
  console.log(err.message)
  process.exit(1)
}
