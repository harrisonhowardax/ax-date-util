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
		const addDaysTest = util.addDays(new Date(), daysToAdd);
		expect(util.dateToFormat(addDays)).toBe(util.dateToFormat(addDaysTest));
	});

	test("Add Weeks", () => {
		const weeksToAdd = 15;
		const addWeeks = dayjs.addWeeks(weeksToAdd);
		const addWeeksTest = util.addDays(new Date(), weeksToAdd * 7);
		expect(util.dateToFormat(addWeeks)).toBe(util.dateToFormat(addWeeksTest));
	});

	test("Add Quarters", () => {
		const quartersToAdd = 3;
		const addQuarters = dayjs.addQuarters(quartersToAdd);
		const addQuartersTest = util.addMonths(new Date(), quartersToAdd * 3);
		expect(util.dateToFormat(addQuarters)).toBe(util.dateToFormat(addQuartersTest));
	});

	test("Time From Now", () => {
		const timeFrom = new Date();
		timeFrom.setFullYear(timeFrom.getFullYear() - 20); // Remove 20 years
		const timeFromNow = dayjs.timeFromNow(timeFrom);
		const timeFromNowTest = "20 years ago";
		expect(timeFromNow).toBe(timeFromNowTest);
	});

	test("Same Or Before", () => {
		const sameDate = new Date();
		const same = dayjs.sameOrBefore(sameDate);
		expect(same).toBe(true);

		const beforeDate = new Date(2100, 10, 10);
		const before = dayjs.sameOrBefore(beforeDate);
		const beforeTest = beforeDate.getTime() >= new Date().getTime();
		expect(before).toBe(beforeTest);
	});

	test("Format As Locale", () => {
		const date = new Date(2002, 6, 6);
		const locale = "de";
		const formatAsLocale = dayjs.formatAsLocale(date, locale);
		const formatAsLocaleTest = "Juli 6, 2002 12:00 AM";
		expect(formatAsLocale).toBe(formatAsLocaleTest);
	});

	test("Closest To", () => {
		const closeStart = new Date();
		const closeArray = [new Date(2002, 6, 6), new Date(2017, 5, 6), new Date(2015, 2, 9)];
		const closestTo = dayjs.closestTo(closeStart, closeArray);
		const closestToTest = closeArray[1];
		expect(closestTo.getTime()).toBe(closestToTest.getTime());
		// Test edge case 1
		const closestToEdge1 = dayjs.closestTo(closeStart, []);
		expect(closestToEdge1.getTime()).toBe(closeStart.getTime());
	});
});
