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

export const closestTo = (date: Date, dates: Date[]): Date => {
	const dateAsLuxon = luxon.DateTime.fromJSDate(date);
	const closest: { date?: Date; diff?: number } = {};
	for (const d of dates) {
		const diff = dateAsLuxon.diff(luxon.DateTime.fromJSDate(d), "milliseconds").toMillis();
		if (!closest.date || !closest.diff || diff < closest.diff) {
			closest.date = d;
			closest.diff = diff;
		}
	}
	console.log(
		`Luxon closest to ${luxon.DateTime.fromJSDate(closest.date || date).toFormat(FORMAT)}`
	);
	return closest.date || date;
};

export const clamp = (date: Date, min: Date, max: Date): Date => {
	const dateAsLuxon = luxon.DateTime.fromJSDate(date);
	const asInterval = luxon.Interval.fromDateTimes(min, max);
	const isBefore = asInterval.isAfter(dateAsLuxon);
	const isAfter = asInterval.isBefore(dateAsLuxon);
	let result = date;
	if (isBefore) {
		result = min;
	} else if (isAfter) {
		result = max;
	}
	console.log(`Luxon clamp ${luxon.DateTime.fromJSDate(result).toFormat(FORMAT)}`);
	return result;
};

export const getTimezone = (): string => {
	const result = luxon.DateTime.now().zoneName;
	console.log(`Luxon get timezone ${result}`);
	return result;
};
