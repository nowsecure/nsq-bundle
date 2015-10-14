# nsq-bundle

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

## License
MIT
