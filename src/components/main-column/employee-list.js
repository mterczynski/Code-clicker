import React from "react";
import { EMPLOYEE_TYPES } from "../../constants/employee-types";

export class EmployeeList extends React.Component {
	render = () => (
		<div className="EmployeeList">
			<div className="EmployeeList__programmerList">
				{[...Array(this.props.employeesCount[EMPLOYEE_TYPES.PROGRAMMER])].map(
					(el, i) => (
						<img
							key={i}
							alt=""
							className="EmployeeList__programmer-avatar"
							src="assets/employees/programmer.png"
						/>
					)
				)}
			</div>
		</div>
	);
}
