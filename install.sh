#!/usr/bin/env bash

VERSION=0.3.6
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
URL_BASE="https://s3.amazonaws.com/bitly-downloads/nsq"

NSQ_DOWNLOAD="nsq-${VERSION}.${OS}-amd64.go1.5.1"

if [ ! -f ${NSQ_DOWNLOAD}.tar.gz ]; then
    echo "Downloading nsq bundle"
    wget "${URL_BASE}/${NSQ_DOWNLOAD}.tar.gz"
fi

if [ ! -d bin ]; then
    echo "Extracting bundle"
    mkdir bin
    tar zxvf ${NSQ_DOWNLOAD}.tar.gz -C bin --strip-components=2
fi
