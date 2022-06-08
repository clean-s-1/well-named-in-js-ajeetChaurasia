import {
	getColorFromPairNumber,
	getPairNumberFromColor,
} from './colorTranslator.js';
import { MajorColorNames, MinorColorNames, ColorPair } from './colors.js';
import { getColorManual, printColorManual } from './printColorManual.js';
let pairNumber;
function checkPairNumberAndPairColor() {
	pairNumber = 4;
	let pairColor = getColorFromPairNumber(
		pairNumber,
		MajorColorNames,
		MinorColorNames
	);
	console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${pairColor}`);
	console.assert(pairColor.majorColor == 'WHITE');
	console.assert(pairColor.minorColor == 'BROWN');

	pairNumber = 5;
	pairColor = getColorFromPairNumber(
		pairNumber,
		MajorColorNames,
		MinorColorNames
	);
	console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${pairColor}`);
	console.assert(pairColor.majorColor == 'WHITE');
	console.assert(pairColor.minorColor == 'SLATE');

	pairNumber = 23;
	pairColor = getColorFromPairNumber(
		pairNumber,
		MajorColorNames,
		MinorColorNames
	);
	console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${pairColor}`);
	console.assert(pairColor.majorColor == 'VIOLET');
	console.assert(pairColor.minorColor == 'GREEN');

	pairColor = new ColorPair();
	pairColor.majorColor = 'YELLOW';
	pairColor.minorColor = 'GREEN';
	pairNumber = getPairNumberFromColor(
		pairColor,
		MajorColorNames,
		MinorColorNames
	);
	console.log(`[In]Colors: ${pairColor}, [Out] PairNumber: ${pairNumber}`);
	console.assert(pairNumber == 18);

	pairColor = new ColorPair();
	pairColor.majorColor = 'RED';
	pairColor.minorColor = 'BLUE';
	pairNumber = getPairNumberFromColor(
		pairColor,
		MajorColorNames,
		MinorColorNames
	);
	console.log(`[In]Colors: ${pairColor}, [Out] PairNumber: ${pairNumber}`);
	console.assert(pairNumber == 6);

	let colorManual = getColorManual(MajorColorNames, MinorColorNames);
	console.assert(colorManual[8].pairNumber == 9);
	console.assert(colorManual[8].majorColor == 'RED');
	console.assert(colorManual[8].minorColor == 'BROWN');
}

checkPairNumberAndPairColor();
printColorManual(MajorColorNames, MinorColorNames);

