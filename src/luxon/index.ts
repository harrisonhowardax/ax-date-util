import * as luxon from "luxon";

export const init = (): string => {
	const dateAsFormat = luxon.DateTime.now().toFormat("dd/MM/yyyy H:mm:ss");
	console.log(`Luxon ready at ${dateAsFormat}`);
	return dateAsFormat;
};
