import {
	getColorFromPairNumber,
	getPairNumberFromColor,
} from './colorUtils.js';
import { ColorPair } from './colors.js';
import { printColorManual } from './printColorManual.js';
let pairNumber;
function checkPairNumberAndPairColor() {
	pairNumber = 4;
	let pairColor = getColorFromPairNumber(pairNumber);
	console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${pairColor}`);
	console.assert(pairColor.majorColor == 'WHITE');
	console.assert(pairColor.minorColor == 'BROWN');

	pairNumber = 5;
	pairColor = getColorFromPairNumber(pairNumber);
	console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${pairColor}`);
	console.assert(pairColor.majorColor == 'WHITE');
	console.assert(pairColor.minorColor == 'SLATE');

	pairNumber = 23;
	pairColor = getColorFromPairNumber(pairNumber);
	console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${pairColor}`);
	console.assert(pairColor.majorColor == 'VIOLET');
	console.assert(pairColor.minorColor == 'GREEN');

	pairColor = new ColorPair();
	pairColor.majorColor = 'YELLOW';
	pairColor.minorColor = 'GREEN';
	pairNumber = getPairNumberFromColor(pairColor);
	console.log(`[In]Colors: ${pairColor}, [Out] PairNumber: ${pairNumber}`);
	console.assert(pairNumber == 18);

	pairColor = new ColorPair();
	pairColor.majorColor = 'RED';
	pairColor.minorColor = 'BLUE';
	pairNumber = getPairNumberFromColor(pairColor);
	console.log(`[In]Colors: ${pairColor}, [Out] PairNumber: ${pairNumber}`);
	console.assert(pairNumber == 6);
}
checkPairNumberAndPairColor();
printColorManual();

