/* calculate a bowling score */
'use strict';
let rubric = { "-": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, 
			   "6": 6, "7": 7, "8": 8, "9": 9, "X": 10, "x": 10 };

let bowling_module = {
	score(sheet) {
		//let bonusThrow = sheet.split(" ")[9].split("").length - 2;
		let frames = sheet.split(" ");
		// join frames, split into throws, get count
		let throwsInfirstNine = frames.slice(0,9).join("").split("").length;
		let everyThrow = frames.join("").split("");
		let lastFrame = frames[9].split("");
		let total = 0;
		let lastFrameScore = 0;

		// calculate the score for the first nine frames
		for( let ii = 0; ii < throwsInfirstNine; ii++  ) {
			if ( everyThrow[ii] === "/" ) {
				total += (10 - rubric[ everyThrow[ii-1] ]) + rubric[ everyThrow[ii+1] ];
			} else if( everyThrow[ii] === ("X"||"x") ) {
				// add this throw and the next, no matter what
				total += (10 + rubric[everyThrow[ii+1]]);
				// deal with whether the second bonus throw is a spare
				if( everyThrow[ii+2] === "/" ) total += (10 - rubric[ everyThrow[ii+1] ]);
				else total += rubric[everyThrow[ii+2]];
			} else {
				total += rubric[ everyThrow[ii] ];
			}
		}
		
		// now calculate the score for last frame
		if( lastFrame[0] === ("X"||"x") ) {
			if( lastFrame[2] === "/" ) lastFrameScore = 20;
			else  lastFrameScore = 10 + rubric[ lastFrame[1] ] + rubric[lastFrame[2]];
		} else if ( lastFrame[1] === "/" ) {
			lastFrameScore = 10 + rubric[ lastFrame[2] ];
		} else {
			lastFrameScore = rubric[ lastFrame[0] ] + rubric[ lastFrame[1] ];
		}
		total += lastFrameScore;
		
		return total;
	}
};

module.exports = bowling_module;