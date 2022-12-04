import * as util from "../src/util";
import * as dayjs from "../src/dayjs";

describe("DayJS", () => {
	test("Init", () => {
		const init = dayjs.init();
		const initTest = util.dateToFormat(new Date());
		expect(init).toBe(initTest);
	});

	test("String To Date", () => {
		const dateTimeAsString = "2022/06/05 3:33 PM";
		const stringToDate = dayjs.stringToDate(dateTimeAsString);
		const stringToDateTest = new Date(dateTimeAsString);
		expect(stringToDate).toEqual(stringToDateTest);
	});

	test("Number To Date", () => {
		const dateTimeAsMS = 1642573333410;
		const numberToDate = dayjs.numberToDate(dateTimeAsMS);
		const numberToDateTest = new Date(dateTimeAsMS);
		expect(numberToDate).toEqual(numberToDateTest);
	});

	test("Add Days", () => {
		const daysToAdd = 10;
		const addDays = dayjs.addDays(daysToAdd);
		const addDaysTest = new Date().getDate() + daysToAdd;
		expect(addDays.getDate()).toBe(addDaysTest);
	});
});
