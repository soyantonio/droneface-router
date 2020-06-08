#!/bin/sh

set -e

if [ -z "$COMMAND" ]; then
    printf "Fallback container alive hit [CTRL+C] to stop! or run 'docker-compose down'\n"    
    while :; do sleep 86400; done
else
    printf "The main service will be listening\n"
    exec "$@"
fi