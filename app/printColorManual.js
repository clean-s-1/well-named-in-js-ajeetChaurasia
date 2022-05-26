import { getColorFromPairNumber } from './colorTranslator.js';

export function getColorManual(majorColors, minorColors) {
	let minorSize = majorColors.length;
	let majorSize = minorColors.length;
	let colorManualObject = [];
	for (let i = 1; i <= minorSize * majorSize; i++) {
		let colorNamesObject = getColorFromPairNumber(i);
		colorManualObject.push({
			pairNumber: i,
			majorColor: colorNamesObject.majorColor,
			minorColor: colorNamesObject.minorColor,
		});
	}
	return colorManualObject;
}

export function printColorManual(majorColors, minorColors) {
	let colorManual = getColorManual(majorColors, minorColors);
	for (let i = 0; i < colorManual.length; i++) {
		console.log(
			`Pair Number: ${colorManual[i].pairNumber}, Primary Color:${colorManual[i].majorColor}, Secondary Color: ${colorManual[i].minorColor}`
		);
	}
}
