import dayjs from "dayjs";

export const init = (): string => {
	const dateAsFormat = dayjs().format("DD/MM/YYYY H:mm:ss");
	console.log(`DayJS ready at ${dateAsFormat}`);
	return dateAsFormat;
};
