#!/bin/sh
docker builder prune -f
docker build -t muhrilobianco/typebot-builder:latest --build-arg SCOPE=builder .
docker build -t muhrilobianco/typebot-viewer:latest --build-arg SCOPE=viewer .
docker login
docker push muhrilobianco/typebot-builder:latest
docker push muhrilobianco/typebot-viewer:latest
