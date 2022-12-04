export const dateToFormat = (date: Date): string => {
	return `${numToLeading(date.getDate())}/${numToLeading(
		date.getMonth() + 1
	)}/${date.getFullYear()} ${date.getHours()}:${numToLeading(date.getMinutes())}:${numToLeading(
		date.getSeconds()
	)}`;
};

export const numToLeading = (num: number): string => {
	if (num >= 10) {
		return `${num}`;
	} else {
		return `0${num}`;
	}
};
