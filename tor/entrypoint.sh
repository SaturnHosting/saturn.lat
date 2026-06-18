#!/bin/sh
set -e
mkdir -p /var/lib/tor/saturn
if [ -f /hs/hs_ed25519_secret_key ] && [ ! -f /var/lib/tor/saturn/hs_ed25519_secret_key ]; then
    cp /hs/hostname /hs/hs_ed25519_public_key /hs/hs_ed25519_secret_key /var/lib/tor/saturn/
fi
chown -R tor:tor /var/lib/tor
chmod 700 /var/lib/tor/saturn
chmod 600 /var/lib/tor/saturn/hs_ed25519_secret_key 2>/dev/null || true
exec su-exec tor tor -f /etc/tor/torrc