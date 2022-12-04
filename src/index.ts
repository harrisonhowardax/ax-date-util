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

const dateTimeAsMS = 1642573333410;
dayjs.numberToDate(dateTimeAsMS);
datefns.numberToDate(dateTimeAsMS);
luxon.numberToDate(dateTimeAsMS);

console.log("\n---\n"); // Divider

const daysToAdd = 10;
dayjs.addDays(daysToAdd);
datefns.addDays(daysToAdd);
luxon.addDays(daysToAdd);

console.log("\n---\n"); // Divider

const weeksToAdd = 15;
dayjs.addWeeks(weeksToAdd);
datefns.addWeeks(weeksToAdd);
luxon.addWeeks(weeksToAdd);

console.log("\n---\n"); // Divider

const quartersToAdd = 3;
dayjs.addQuarters(quartersToAdd);
datefns.addQuarters(quartersToAdd);
luxon.addQuarters(quartersToAdd);

console.log("\n---\n"); // Divider

const timeFrom = new Date();
timeFrom.setFullYear(timeFrom.getFullYear() - 20); // Remove 20 years
dayjs.timeFromNow(timeFrom);
datefns.timeFromNow(timeFrom);
luxon.timeFromNow(timeFrom);

console.log("\n---\n"); // Divider

const sameBefore = new Date(2100, 10, 10);
dayjs.sameOrBefore(sameBefore);
datefns.sameOrBefore(sameBefore);
luxon.sameOrBefore(sameBefore);

console.log("\n---\n"); // Divider
