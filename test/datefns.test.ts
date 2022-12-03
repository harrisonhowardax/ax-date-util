import * as util from "../src/util";
import * as datefns from "../src/date-fns";

describe("Date-fns", () => {
	test("Init", () => {
		const init = datefns.init();
		const initTest = util.getInitFormat();
		expect(init).toBe(initTest);
	});
});
