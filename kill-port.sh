#!/usr/bin/env bash

PORT=${1-4150}
PID=$(lsof -i :$PORT | tail -1 | awk '{ print $2; }')
[ ! -z "$PID" ] && kill -9 $PID
