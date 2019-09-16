#!/usr/bin/env sh

# Emulator doesn't seem to save topics/subscriptions so need to run this every start
echo "Setting up pubsub topics..."
sleep 10
node publisher.js
