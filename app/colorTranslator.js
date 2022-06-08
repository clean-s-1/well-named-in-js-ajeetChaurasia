import { ColorPair } from './colors.js';

export function getColorFromPairNumber(pairNumber, majorColors, minorColors) {
	let minorSize = majorColors.length;
	let majorSize = minorColors.length;

	checkValidPairNumber(pairNumber, majorSize, minorSize);
	let zeroBasedPairNumber = pairNumber - 1;
	let majorIndex = parseInt(zeroBasedPairNumber / minorSize);
	let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let pair = new ColorPair();
	pair.majorColor = majorColors[majorIndex];
	pair.minorColor = minorColors[minorIndex];
	return pair;
}

function checkValidPairNumber(pairNumber, majorSize, minorSize) {
	if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
		throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
	}
}

export function getPairNumberFromColor(pairColor, majorColors, minorColors) {
	let majorIndex = getColorIndex(majorColors, pairColor.majorColor);
	let minorIndex = getColorIndex(minorColors, pairColor.minorColor);

	if (majorIndex == -1 || minorIndex == -1) {
		throw `Unknown Colors:${pairColor.toString()}`;
	}
	return majorIndex * minorColors.length + (minorIndex + 1);
}

function getColorIndex(ColorNames, color) {
	let colorIndex = -1;
	for (let i = 0; i < ColorNames.length; i++) {
		if (ColorNames[i] == color) {
			colorIndex = i;
			break;
		}
	}
	if (colorIndex == -1) {
		throw `Unknown Colors:${color}`;
	}
	return colorIndex;
}
