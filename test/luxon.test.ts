import * as util from "../src/util";
import * as luxon from "../src/luxon";

describe("Luxon", () => {
	test("Init", () => {
		const init = luxon.init();
		const initTest = util.dateToFormat(new Date());
		expect(init).toBe(initTest);
	});

	test("String To Date", () => {
		const dateTimeAsString = "2022/06/05 3:33 PM";
		const stringToDate = luxon.stringToDate(dateTimeAsString);
		const stringToDateTest = new Date(dateTimeAsString);
		expect(stringToDate).toEqual(stringToDateTest);
	});

	test("Number To Date", () => {
		const dateTimeAsMS = 1642573333410;
		const numberToDate = luxon.numberToDate(dateTimeAsMS);
		const numberToDateTest = new Date(dateTimeAsMS);
		expect(numberToDate).toEqual(numberToDateTest);
	});

	test("Add Days", () => {
		const daysToAdd = 10;
		const addDays = luxon.addDays(daysToAdd);
		const addDaysTest = util.addDays(new Date(), daysToAdd);
		expect(util.dateToFormat(addDays)).toBe(util.dateToFormat(addDaysTest));
	});

	test("Add Weeks", () => {
		const weeksToAdd = 15;
		const addWeeks = luxon.addWeeks(weeksToAdd);
		const addWeeksTest = util.addDays(new Date(), weeksToAdd * 7);
		expect(util.dateToFormat(addWeeks)).toBe(util.dateToFormat(addWeeksTest));
	});

	test("Add Quarters", () => {
		const quartersToAdd = 3;
		const addQuarters = luxon.addQuarters(quartersToAdd);
		const addQuartersTest = util.addMonths(new Date(), quartersToAdd * 3);
		expect(util.dateToFormat(addQuarters)).toBe(util.dateToFormat(addQuartersTest));
	});

	test("Time From Now", () => {
		const timeFrom = new Date();
		timeFrom.setFullYear(timeFrom.getFullYear() - 20); // Remove 20 years
		const timeFromNow = luxon.timeFromNow(timeFrom);
		const timeFromNowTest = "20 years ago";
		expect(timeFromNow).toBe(timeFromNowTest);
		// Test edge case where date can be invalid
		const timeFromNowEdge1 = luxon.timeFromNow(new Date("INVALID DATE"));
		expect(timeFromNowEdge1).toBe("");
	});

	test("Same or Before", () => {
		const sameDate = new Date();
		const same = luxon.sameOrBefore(sameDate);
		expect(same).toBe(true);

		const beforeDate = new Date(2100, 10, 10);
		const before = luxon.sameOrBefore(beforeDate);
		const beforeTest = beforeDate.getTime() >= new Date().getTime();
		expect(before).toBe(beforeTest);
	});

	test("Format As Locale", () => {
		const date = new Date(2002, 6, 6);
		const locale = "de";
		const formatAsLocale = luxon.formatAsLocale(date, locale);
		const formatAsLocaleTest = "Juli 6, 2002 12:00 AM";
		expect(formatAsLocale).toBe(formatAsLocaleTest);
	});

	test("Closest To", () => {
		const closeStart = new Date();
		const closeArray = [new Date(2002, 6, 6), new Date(2017, 5, 6), new Date(2015, 2, 9)];
		const closestTo = luxon.closestTo(closeStart, closeArray);
		const closestToTest = closeArray[1];
		expect(closestTo.getTime()).toBe(closestToTest.getTime());
		// Test edge case 1
		const closestToEdge1 = luxon.closestTo(closeStart, []);
		expect(closestToEdge1.getTime()).toBe(closeStart.getTime());
	});

	test("Clamp", () => {
		const clampMin = new Date(2011, 10, 11);
		const clampMax = new Date(2012, 11, 12);
		// Cases test if it's before, between, and after
		const clampBeforeDate = new Date(2010, 9, 10);
		const clampBetweenDate = new Date(2012, 1, 2);
		const clampAfterDate = new Date(2013, 1, 2);
		// Tests the cases
		const clampBefore = luxon.clamp(clampBeforeDate, clampMin, clampMax);
		const clampBetween = luxon.clamp(clampBetweenDate, clampMin, clampMax);
		const clampAfter = luxon.clamp(clampAfterDate, clampMin, clampMax);
		expect(clampBefore.getTime()).toBe(clampMin.getTime());
		expect(clampBetween.getTime()).toBe(clampBetweenDate.getTime());
		expect(clampAfter.getTime()).toBe(clampMax.getTime());
	});

	test("Get Timezone", () => {
		const getTimezone = luxon.getTimezone();
		const getTimezoneTest = Intl.DateTimeFormat().resolvedOptions().timeZone;
		expect(getTimezone).toBe(getTimezoneTest);
	});
});
