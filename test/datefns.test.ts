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
		const addDaysTest = util.addDays(new Date(), daysToAdd);
		expect(util.dateToFormat(addDays)).toBe(util.dateToFormat(addDaysTest));
	});

	test("Add Weeks", () => {
		const weeksToAdd = 15;
		const addWeeks = datefns.addWeeks(weeksToAdd);
		const addWeeksTest = util.addDays(new Date(), weeksToAdd * 7);
		expect(util.dateToFormat(addWeeks)).toBe(util.dateToFormat(addWeeksTest));
	});

	test("Add Quarters", () => {
		const quartersToAdd = 3;
		const addQuarters = datefns.addQuarters(quartersToAdd);
		const addQuartersTest = util.addMonths(new Date(), quartersToAdd * 3);
		expect(util.dateToFormat(addQuarters)).toBe(util.dateToFormat(addQuartersTest));
	});

	test("Time From Now", () => {
		const timeFrom = new Date();
		timeFrom.setFullYear(timeFrom.getFullYear() - 20); // Remove 20 years
		const timeFromNow = datefns.timeFromNow(timeFrom);
		const timeFromNowTest = "about 20 years";
		expect(timeFromNow).toBe(timeFromNowTest);
	});

	test("Same or Before", () => {
		const sameDate = new Date();
		const same = datefns.sameOrBefore(sameDate);
		const sameTest = sameDate.getTime() === new Date().getTime();
		expect(same).toBe(sameTest);

		const beforeDate = new Date(2100, 10, 10);
		const before = datefns.sameOrBefore(beforeDate);
		const beforeTest = beforeDate.getTime() >= new Date().getTime();
		expect(before).toBe(beforeTest);
	});

	test("Format As Locale", () => {
		const date = new Date(2002, 6, 6);
		const locale = "de";
		const formatAsLocale = datefns.formatAsLocale(date, locale);
		const formatAsLocaleTest = "Juli 6, 2002 12:00 vorm.";
		expect(formatAsLocale).toBe(formatAsLocaleTest);
	});
});
