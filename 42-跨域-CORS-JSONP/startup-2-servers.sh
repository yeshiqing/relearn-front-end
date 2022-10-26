#!/usr/bin/env bash
cd $(pwd)/lesson-codes/
cd ./qq-com && (node-dev server.js 8888 > log-qq 2>&1 &) 
cd ../
cd ./frank-com && (node-dev server.js 9990 > log-frank 2>&1 &)