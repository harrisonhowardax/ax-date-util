import * as util from "../src/util";
import * as dayjs from "../src/dayjs";

describe("DayJS", () => {
	test("Init", () => {
		const init = dayjs.init();
		const initTest = util.getInitFormat();
		expect(init).toBe(initTest);
	});
});
