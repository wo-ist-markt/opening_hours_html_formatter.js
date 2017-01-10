#!/bin/bash

# Concatenate all Javascript files into one file
# Prepend version information

now="$(date +'%Y-%m-%d %r')"
now="$(echo $now | sed -e 's/[\r\n]//g')"
out=dist/opening_hours_html_formatter.js

cat lib/.version > $out
echo "// Generated at $now" >> $out
echo >> $out
cat lib/src/* >> $out

