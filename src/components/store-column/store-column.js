import React from "react";
import { Employees } from "./employees";
import { Extensions } from "./extensions";

export class StoreColumn extends React.Component {
  render = () => (
    <div className="StoreColumn">
      <Employees
        buyEmployee={this.props.buyEmployee}
        calculateEmployeeCost={this.props.calculateEmployeeCost}
        money={this.props.money}
        employeesCount={this.props.employeesCount}
        playerLevel={this.props.playerLevel}
      />
      <Extensions
        money={this.props.money}
        multiplyClickMultiplier={this.props.multiplyClickMultiplier}
        playerLevel={this.props.playerLevel}
      />
    </div>
  );
}
