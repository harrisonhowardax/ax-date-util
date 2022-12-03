import * as util from "../src/util";
import * as luxon from "../src/luxon";

describe("Luxon", () => {
	test("Init", () => {
		const init = luxon.init();
		const initTest = util.getInitFormat();
		expect(init).toBe(initTest);
	});
});
