#!/usr/bin/env bash
pidQQ=$(lsof -P -i:8888 | grep LISTEN | grep -Eo " \d+ ")
if [ "$pidQQ" ]; then
    kill $pidQQ
fi

pidFrank=$(lsof -P -i:9990 | grep LISTEN | grep -Eo " \d+ ")
if [ "$pidFrank" ]; then
    kill $pidFrank
fi