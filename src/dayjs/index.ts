import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(quarterOfYear);
dayjs.extend(relativeTime);

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
