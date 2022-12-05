import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import relativeTime from "dayjs/plugin/relativeTime";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

import "./loadLocales";

dayjs.extend(quarterOfYear);
dayjs.extend(relativeTime);
dayjs.extend(isSameOrBefore);
dayjs.extend(LocalizedFormat);

export const FORMAT = "DD/MM/YYYY H:mm:ss";

export const init = (): string => {
	const result = dayjs().format(FORMAT);
	console.log(`DayJS ready at ${result}`);
	return result;
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

export const addDays = (days: number): Date => {
	const result = dayjs().add(days, "days");
	console.log(`DayJS add days ${result.format(FORMAT)}`);
	return result.toDate();
};

export const addWeeks = (weeks: number): Date => {
	const result = dayjs().add(weeks, "weeks");
	console.log(`DayJS add weeks ${result.format(FORMAT)}`);
	return result.toDate();
};

export const addQuarters = (quarters: number): Date => {
	const result = dayjs().add(quarters, "quarters");
	console.log(`DayJS add quarters ${result.format(FORMAT)}`);
	return result.toDate();
};

export const timeFromNow = (date: Date): string => {
	const result = dayjs(date).fromNow();
	console.log(`DayJS time from now ${result}`);
	return result;
};

export const sameOrBefore = (date: Date): boolean => {
	const result = dayjs().isSameOrBefore(date);
	console.log(`DayJS same or before ${result}`);
	return result;
};

export const formatAsLocale = (date: Date, locale: string): string => {
	const result = dayjs(date).locale(locale).format("MMMM D, YYYY h:mm A");
	console.log(`DayJS format as locale ${result}`);
	return result;
};

export const closestTo = (date: Date, dates: Date[]): Date => {
	const dateAsDayjs = dayjs(date);
	const closest: { date?: Date; diff?: number } = {};
	for (const d of dates) {
		const diff = dateAsDayjs.diff(d, "milliseconds");
		if (!closest.date || !closest.diff || diff < closest.diff) {
			closest.date = d;
			closest.diff = diff;
		}
	}
	console.log(`DayJS closest to ${dayjs(closest.date || date).format(FORMAT)}`);
	return closest.date || date;
};
