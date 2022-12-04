import dayjs from "dayjs";

export const FORMAT = "DD/MM/YYYY H:mm:ss";

export const init = (): string => {
	const dateAsFormat = dayjs().format(FORMAT);
	console.log(`DayJS ready at ${dateAsFormat}`);
	return dateAsFormat;
};

export const stringToDate = (dateAsString: string): Date => {
	const result = dayjs(dateAsString);
	console.log(`DayJS string to date ${result.format(FORMAT)}`);
	return result.toDate();
};

export const numberToDate = (dateAsMS: number): Date => {
	const result = dayjs(dateAsMS);
	console.log(`DayJS number to date ${result.format(FORMAT)}`);
	return result.toDate();
};
