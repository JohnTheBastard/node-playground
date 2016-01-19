#!/bin/bash
args=("$@")

# For future reference:
#argcount=("$#")
#echo ${args[0]} ${args[1]} ${args[2]} ' -> args=("$@"); echo ${args[0]} ${args[1]} ${args[2]}'
#echo $@ ' -> echo $@'
#echo $1 $2 $3 ' -> echo $1 $2 $3'

if [ $# -eq 0 ]; then
 	$( npm start | tee /dev/tty )
elif [ ${args[0]} = "test" ]; then
	if [ $# -eq 1 ]; then
		$( npm test | tee /dev/tty )
	elif [ ${args[1]}  = "all" ]; then
		$( npm test | tee /dev/tty )
	else
		$( npm run gulp -- --option ${args[1]} | tee /dev/tty )
	fi
elif [ ${args[0]} = "client" ]; then
	$( npm run web-start )
elif [ ${args[0]} = "express" ]; then
	$( npm run express-start)
fi