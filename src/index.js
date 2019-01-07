import React from "react";
import ReactDOM from "react-dom";
import { CodeColumn } from "./components/code-column/code-column";
import { MainColumn } from "./components/main-column/main-column";
import { StoreColumn } from "./components/store-column/store-column";
import { EMPLOYEE_TYPES } from "./constants/employee-types";
import { EMPLOYEE_DATA } from "./constants/employee-data";

import "./styles.css";
import "./styles/code-column.css";
import "./styles/main-column.css";
import "./styles/store-column.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
      money: 0,
      playerLevel: 1,
      clickMultiplier: 1,
      totalGains: 0,
      employeesCount: {
        [EMPLOYEE_TYPES.CURSOR]: 0,
        [EMPLOYEE_TYPES.PROGRAMMER]: 0
      },
      moneyPerSecond: 0,
      lastTick: Date.now(),
      cursors: []
    };

    this.onCodeButtonClick = this.onCodeButtonClick.bind(this);
    this.buyEmployee = this.buyEmployee.bind(this);
    this.getPlayerLevel = this.getPlayerLevel.bind(this);
    this.calculateEmployeeCost = this.calculateEmployeeCost.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.multiplyClickMultiplier = this.multiplyClickMultiplier.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this.gameLoop);
  }

  gameLoop() {
    // update money:
    const now = Date.now();
    const delta = (now - this.state.lastTick) / 1000;
    requestAnimationFrame(this.gameLoop);
    this.setState({
      money: this.state.money + delta * this.state.moneyPerSecond,
      totalGains: this.state.totalGains + delta * this.state.moneyPerSecond,
      lastTick: now
    });
  }

  getPlayerLevel(clicks) {
    if (clicks < 10) {
      return 1;
    } else {
      return 2 + Math.floor(Math.log(clicks / 10) / Math.log(2));
    }
  }

  getRandomCursor() {
    // cursor.x^2 + cursor.y^2 = circle.radius^2
    const radius = 40;
    let left = Math.ceil(Math.random() * radius * 2) - radius;
    let top = Math.round(Math.sqrt(Math.pow(radius, 2) - Math.pow(left, 2)));
    if (Math.random() < 0.5) {
      top *= -1;
    }
    const angle = (Math.atan2(top, left) * 180) / Math.PI - 90;
    left += (radius * 2) / 3;
    top += (radius * 2) / 3;

    return { left, top, angle };
  }

  multiplyClickMultiplier(multiplier) {
    this.setState({
      clickMultiplier: this.state.clickMultiplier * multiplier
    });
  }

  addCursor() {
    this.setState({
      cursors: [...this.state.cursors, this.getRandomCursor()]
    });
  }

  calculateEmployeeCost(employee) {
    return Math.ceil(
      employee.baseCost * Math.pow(1.15, this.state.employeesCount[employee.id])
    );
  }

  buyEmployee(employee) {
    const employeeCost = this.calculateEmployeeCost(employee);
    if (
      this.state.playerLevel >= employee.requiredLevel &&
      this.state.money >= employeeCost
    ) {
      if (employee.id === EMPLOYEE_TYPES.CURSOR) {
        this.addCursor();
      }
      this.setState({
        money: this.state.money - employeeCost,
        employeesCount: {
          ...this.state.employeesCount,
          [employee.id]: this.state.employeesCount[employee.id] + 1
        },
        moneyPerSecond: Number(
          this.state.moneyPerSecond + employee.moneyPerSecond
        )
      });
    }
  }

  onCodeButtonClick() {
    this.setState({
      clicks: this.state.clicks + 1,
      playerLevel: this.getPlayerLevel(this.state.clicks + 1),
      money: this.state.money + this.state.clickMultiplier,
      totalGains: this.state.totalGains + this.state.clickMultiplier
    });
  }

  render = () => (
    <div className="App">
      <CodeColumn
        onCodeButtonClick={this.onCodeButtonClick}
        cursors={this.state.cursors}
      />
      <MainColumn
        totalGains={this.state.totalGains}
        moneyPerSecond={this.state.moneyPerSecond}
        clicks={this.state.clicks}
        money={this.state.money}
        playerLevel={this.state.playerLevel}
        clickMultiplier={this.state.clickMultiplier}
        employeesCount={this.state.employeesCount}
      />
      <StoreColumn
        buyEmployee={this.buyEmployee}
        money={this.state.money}
        calculateEmployeeCost={this.calculateEmployeeCost}
        employeesCount={this.state.employeesCount}
        multiplyClickMultiplier={this.multiplyClickMultiplier}
        playerLevel={this.state.playerLevel}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
