import * as datefns from "date-fns";

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
