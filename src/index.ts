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

const locale = "de";
dayjs.formatAsLocale(new Date(), locale);
datefns.formatAsLocale(new Date(), locale);
luxon.formatAsLocale(new Date(), locale);

console.log("\n---\n"); // Divider

const closeStart = new Date();
const closeArray = [new Date(2002, 6, 6), new Date(2017, 5, 6), new Date(2015, 2, 9)];
dayjs.closestTo(closeStart, closeArray);
datefns.closestTo(closeStart, closeArray);
luxon.closestTo(closeStart, closeArray);

console.log("\n---\n"); // Divider

const clampDate = new Date(2010, 9, 10);
const clampMin = new Date(2011, 10, 11);
const clampMax = new Date(2012, 11, 12);
dayjs.clamp(clampDate, clampMin, clampMax);
datefns.clamp(clampDate, clampMin, clampMax);
luxon.clamp(clampDate, clampMin, clampMax);

console.log("\n---\n"); // Divider

dayjs.getTimezone();
datefns.getTimezone();
luxon.getTimezone();

console.log("\n---\n"); // Divider
