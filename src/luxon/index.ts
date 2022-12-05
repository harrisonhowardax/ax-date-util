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

export const addWeeks = (weeks: number): Date => {
	const result = luxon.DateTime.now().plus({ weeks });
	console.log(`Luxon add weeks ${result.toFormat(FORMAT)}`);
	return result.toJSDate();
};

export const addQuarters = (quarters: number): Date => {
	const result = luxon.DateTime.now().plus({ quarters });
	console.log(`Luxon add quarters ${result.toFormat(FORMAT)}`);
	return result.toJSDate();
};

export const timeFromNow = (date: Date): string => {
	const result = luxon.DateTime.fromJSDate(date).toRelative();
	console.log(`Luxon time from now ${result}`);
	return result || "";
};

export const sameOrBefore = (date: Date): boolean => {
	const today = luxon.DateTime.now();
	const result = today.toMillis() <= date.getTime();
	console.log(`Luxon same or before ${result}`);
	return result;
};

export const formatAsLocale = (date: Date, locale: string): string => {
	const result = luxon.DateTime.fromJSDate(date)
		.setLocale(locale)
		.toFormat("LLLL d, yyyy h:mm a");
	console.log(`Luxon format as locale ${result}`);
	return result;
};
