import { MajorColorNames, MinorColorNames, ColorPair } from './colors.js';

export function getColorFromPairNumber(pairNumber) {
	let minorSize = MajorColorNames.length;
	let majorSize = MinorColorNames.length;

	if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
		throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
	}
	let zeroBasedPairNumber = pairNumber - 1;
	let majorIndex = parseInt(zeroBasedPairNumber / minorSize);
	let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let pair = new ColorPair();
	pair.majorColor = MajorColorNames[majorIndex];
	pair.minorColor = MinorColorNames[minorIndex];
	return pair;
}

export function getPairNumberFromColor(pairColor) {
	let majorIndex = getColorIndex(MajorColorNames, pairColor.majorColor);
	let minorIndex = getColorIndex(MinorColorNames, pairColor.minorColor);

	if (majorIndex == -1 || minorIndex == -1) {
		throw `Unknown Colors:${pairColor.toString()}`;
	}
	return majorIndex * MinorColorNames.length + (minorIndex + 1);
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
