import * as datefns from "date-fns";

export const init = (): string => {
	const dateAsFormat = datefns.format(new Date(), "dd/MM/yyyy H:mm:ss");
	console.log(`Date-fns ready at ${dateAsFormat}`);
	return dateAsFormat;
};
