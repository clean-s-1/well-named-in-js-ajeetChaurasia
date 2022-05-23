import { getColorFromPairNumber } from './colorUtils.js';
import { MajorColorNames, MinorColorNames } from './colors.js';

export function printColorManual() {
	let minorSize = MajorColorNames.length;
	let majorSize = MinorColorNames.length;
	for (let i = 1; i <= minorSize * majorSize; i++) {
		let colorNamesObject = getColorFromPairNumber(i);
		console.log(
			`Pair Number: ${i}, Primary Colors:${colorNamesObject.majorColor}, Secondary Color: ${colorNamesObject.minorColor}`
		);
	}
}
