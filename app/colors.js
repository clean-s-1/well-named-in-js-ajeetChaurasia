export const MajorColorNames = ['WHITE', 'RED', 'BLACK', 'YELLOW', 'VIOLET'];
export const MinorColorNames = ['BLUE', 'ORANGE', 'GREEN', 'BROWN', 'SLATE'];

export function ColorPair() {
	this.majorColor;
	this.minorColor;
}

ColorPair.prototype.toString = function () {
	return `Major Color:${this.majorColor},Minor Color:${this.minorColor}`;
};
