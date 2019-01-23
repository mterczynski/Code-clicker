import React from "react";
import { EMPLOYEE_DATA } from "../../constants/employee-data";
import { UpgradeBlocker } from "./upgrade-blocker";

export class Employees extends React.Component {
	getEmployeeDataWithCount() {
		return EMPLOYEE_DATA.map(employee => ({
			...employee,
			count: this.props.employeesCount[employee.id]
		}));
	}

	render = () => (
		<div className="Employees">
			<p className="StoreColumn__section-header">Employees</p>
			<ul className="StoreColumn__list">
				{this.getEmployeeDataWithCount().map(employee => (
					<li
						key={employee.id}
						className="StoreColumn__list-item"
						onClick={() => this.props.buyEmployee(employee)}
					>
						<UpgradeBlocker
							playerLevel={this.props.playerLevel}
							requiredLevel={employee.requiredLevel}
						/>

						<div className="Employees__avatar-group">
							<img
								className="StoreColumn__avatar"
								alt=""
								src={employee.avatarUrl}
							/>
							<div className="Employees__count highlight">{employee.count}</div>
						</div>

						<div>
							<div>{employee.name}</div>
							<div className="StoreColumn__item-description">
								+ <span className="money">{employee.moneyPerSecond}$</span> per
								second
							</div>
						</div>

						<div
							className={
								this.props.money >= this.props.calculateEmployeeCost(employee)
									? "money"
									: "too-expensive"
							}
						>
							{this.props.calculateEmployeeCost(employee)} $
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
