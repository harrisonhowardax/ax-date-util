import * as datefns from "date-fns";
import * as datefnstz from "date-fns-tz";
import * as locales from "date-fns/locale";
import { timezones } from "../util";

export const FORMAT = "dd/MM/yyyy H:mm:ss";

export const init = (): string => {
	const dateAsFormat = datefns.format(new Date(), FORMAT);
	console.log(`Date-fns ready at ${dateAsFormat}`);
	return dateAsFormat;
};

export const stringToDate = (dateAsString: string): Date => {
	const result = datefns.parseISO(new Date(dateAsString).toISOString());
	console.log(`Date-fns string to date ${datefns.format(result, FORMAT)}`);
	return result;
};

export const numberToDate = (dateAsMS: number): Date => {
	const result = datefns.toDate(dateAsMS);
	console.log(`Date-fns number to date ${datefns.format(result, FORMAT)}`);
	return result;
};

export const addDays = (days: number): Date => {
	const result = datefns.add(new Date(), { days });
	console.log(`Date-fns add days ${datefns.format(result, FORMAT)}`);
	return result;
};

export const addWeeks = (weeks: number): Date => {
	const result = datefns.add(new Date(), { weeks });
	console.log(`Date-fns add weeks ${datefns.format(result, FORMAT)}`);
	return result;
};

export const addQuarters = (quarters: number): Date => {
	const result = datefns.addQuarters(new Date(), quarters);
	console.log(`Date-fns add quarters ${datefns.format(result, FORMAT)}`);
	return result;
};

export const timeFromNow = (date: Date): string => {
	const result = datefns.formatDistanceToNow(date);
	console.log(`Date-fns time from now ${result}`);
	return result;
};

export const sameOrBefore = (date: Date): boolean => {
	const today = new Date();
	const result = datefns.isEqual(today, date) || datefns.isBefore(today, date);
	console.log(`Date-fns same or before ${result}`);
	return result;
};

export const formatAsLocale = (date: Date, locale: keyof typeof locales): string => {
	const result = datefns.format(date, "LLLL d, yyyy h:mm a", { locale: locales[locale] });
	console.log(`Date-fns format as locale ${result}`);
	return result;
};

export const closestTo = (date: Date, dates: Date[]): Date => {
	const result = datefns.closestTo(date, dates);
	console.log(`Date-fns closest to ${datefns.format(result || date, FORMAT)}`);
	return result || date;
};

export const clamp = (date: Date, min: Date, max: Date): Date => {
	const result = datefns.clamp(date, { start: min, end: max });
	console.log(`Date-fns clamp ${datefns.format(result, FORMAT)}`);
	return result;
};

/**
 * Not supported
 */
export const getTimezone = (): string => {
	const result = Intl.DateTimeFormat().resolvedOptions().timeZone;
	console.log(`Date-fns get timezone ${result}`);
	return result;
};

export const formatTimezone = (date: Date, timezone: timezones[number]): string => {
	const result = datefnstz.formatInTimeZone(date, timezone, `${FORMAT} zzzz`);
	console.log(`Date-fns format timezone ${result}`);
	return result;
};
