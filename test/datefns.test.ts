import * as util from "../src/util";
import * as datefns from "../src/date-fns";

describe("Date-fns", () => {
	test("Init", () => {
		const init = datefns.init();
		const initTest = util.dateToFormat(new Date());
		expect(init).toBe(initTest);
	});

	test("String To Date", () => {
		const dateTimeAsString = "2022/06/05 3:33 PM";
		const stringToDate = datefns.stringToDate(dateTimeAsString);
		const stringToDateTest = new Date(dateTimeAsString);
		expect(stringToDate).toEqual(stringToDateTest);
	});

	test("Number To Date", () => {
		const dateTimeAsMS = 1642573333410;
		const numberToDate = datefns.numberToDate(dateTimeAsMS);
		const numberToDateTest = new Date(dateTimeAsMS);
		expect(numberToDate).toEqual(numberToDateTest);
	});

	test("Add Days", () => {
		const daysToAdd = 10;
		const addDays = datefns.addDays(daysToAdd);
		const addDaysTest = new Date().getDate() + daysToAdd;
		expect(addDays.getDate()).toBe(addDaysTest);
	});
});
