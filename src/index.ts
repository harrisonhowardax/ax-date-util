import * as dayjs from "./dayjs";
import * as datefns from "./date-fns";
import * as luxon from "./luxon";

console.log("\n---\n"); // Divider

// Run init functions
dayjs.init();
datefns.init();
luxon.init();

console.log("\n---\n"); // Divider

// Run the string to date functions
const dateTimeAsString = "2022/06/05 3:33 PM";
dayjs.stringToDate(dateTimeAsString);
datefns.stringToDate(dateTimeAsString);
luxon.stringToDate(dateTimeAsString);

console.log("\n---\n"); // Divider
