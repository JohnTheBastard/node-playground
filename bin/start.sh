#!/bin/bash
#echo $1 $2 $3 ' -> echo $1 $2 $3'

args=("$@")
#argcount=("$#")

#echo ${args[0]} ${args[1]} ${args[2]} ' -> args=("$@"); echo ${args[0]} ${args[1]} ${args[2]}'
#echo $@ ' -> echo $@'

if [ $# -eq 0 ]; then
	CMD=$( npm start | tee /dev/tty)
	echo $CMD
elif [ ${args[0]} = "test" ]; then
	CMD=$( npm test | tee /dev/tty)
	echo $CMD
elif [ ${args[0]} = "client" ]; then
	CMD=$( npm run web-start | tee /dev/tty)
	echo $CMD
elif [ ${args[0]} = "express" ]; then
	CMD=$( npm run express-start | tee /dev/tty)
	echo $CMD
else
	echo "invalid arguments"
fi
