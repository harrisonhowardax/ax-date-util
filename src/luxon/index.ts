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
