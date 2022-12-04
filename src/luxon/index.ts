import * as luxon from "luxon";

export const FORMAT = "dd/MM/yyyy H:mm:ss";

export const init = (): string => {
	const dateAsFormat = luxon.DateTime.now().toFormat(FORMAT);
	console.log(`Luxon ready at ${dateAsFormat}`);
	return dateAsFormat;
};

export const stringToDate = (dateAsString: string): Date => {
	const result = luxon.DateTime.fromISO(new Date(dateAsString).toISOString());
	console.log(`Luxon string to date ${result.toFormat(FORMAT)}`);
	return result.toJSDate();
};

export const numberToDate = (dateAsMS: number): Date => {
	const result = luxon.DateTime.fromMillis(dateAsMS);
	console.log(`Luxon number to date ${result.toFormat(FORMAT)}`);
	return result.toJSDate();
};

export const addDays = (days: number): Date => {
	const result = luxon.DateTime.now().plus({ days });
	console.log(`Luxon add days ${result.toFormat(FORMAT)}`);
	return result.toJSDate();
};
