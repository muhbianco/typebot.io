#!/bin/bash
echo "172.17.0.1 mariadb" >> /etc/hosts

cd apps/viewer;
node  -e "const { configureRuntimeEnv } = require('next-runtime-env/build/configure'); configureRuntimeEnv();"
cd ../..;

NODE_OPTIONS=--no-node-snapshot HOSTNAME=0.0.0.0 PORT=3000 node apps/viewer/server.js;
