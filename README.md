# nsq-bundle

[![travis](https://travis-ci.org/nowsecure/nsq-bundle.svg)](https://travis-ci.org/nowsecure/nsq-bundle)

Installs a nsq bundle and exposes the following binaries

* `nsqd`
* `nsqlookupd`
* `nsqadmin`

## Usage

Install it globally

```
$ npm i nsq-bundle -g
```

Run `nsqd`

```
$ nsqd -tcp-address=:5150 -http-address=:5151 -verbose=true
[nsqd] 2015/10/14 16:55:42.106852 nsqd v0.3.6 (built w/go1.5.1)
[nsqd] 2015/10/14 16:55:42.106965 ID: 498
[nsqd] 2015/10/14 16:55:42.107006 NSQ: persisting topic/channel metadata to nsqd.498.d
at
[nsqd] 2015/10/14 16:55:42.114307 TCP: listening on [::]:5150
[nsqd] 2015/10/14 16:55:42.114514 HTTP: listening on [::]:5151
```

This module is also useful as a `devDependency` if you want to run `nsqd` during tests etc.

```
$ npm i nsq-bundle -D
```

Then we can add some scripts to `package.json`, e.g.

```json
{
  "name": "mymodule",
  "scripts": {
    "pretest": "nsqd &",
    "test": "tape test.js",
    "posttest": "pkill nsqd"
  },
  "devDependencies": {
    "nsq-bundle": "^1.0.0"
    "tape": "^4.2.1"
  }
}
```

This is a simple setup where the `pretest` script will fire up `nsqd` before the tests and the `posttest` script will kill the `nsqd` process afterwards.

## License
MIT
