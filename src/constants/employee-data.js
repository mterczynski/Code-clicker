import { EMPLOYEE_TYPES } from "./employee-types";

export const EMPLOYEE_DATA = Object.freeze([
	{
		id: EMPLOYEE_TYPES.CURSOR,
		name: "Cursor",
		moneyPerSecond: 0.1,
		baseCost: 15,
		avatarUrl: "assets/employees/cursor.png",
		requiredLevel: 2
	},
	{
		id: EMPLOYEE_TYPES.PROGRAMMER,
		name: "Programmer",
		moneyPerSecond: 1,
		baseCost: 100,
		avatarUrl: "assets/employees/programmer.png",
		requiredLevel: 5
	}
]);
