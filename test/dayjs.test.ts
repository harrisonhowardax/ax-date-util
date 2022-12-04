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
});
