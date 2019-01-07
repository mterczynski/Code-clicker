import React from "react";
import { PLAYER_LEVELS } from "../../constants/player-levels";
import { EmployeeList } from "./employee-list";

export class MainColumn extends React.Component {
  render = () => (
    <div className="MainColumn">
      <div>
        <p>
          Level <span className="highlight">{this.props.playerLevel}</span> -{" "}
          {
            PLAYER_LEVELS[
              Math.min(this.props.playerLevel - 1, PLAYER_LEVELS.length - 1)
            ]
          }
        </p>

        <p>
          Money:{" "}
          <span className="money">{Math.floor(this.props.money)} $ </span>
        </p>

        <p>
          per second:{" "}
          <span className="money">
            {Math.round(this.props.moneyPerSecond * 100) / 100} $
          </span>
        </p>

        <p>
          Click multiplier:{" "}
          <span className="highlight">{this.props.clickMultiplier}x</span>
        </p>
      </div>

      <EmployeeList employeesCount={this.props.employeesCount} />

      <div className="MainColumn__extra-info">
        <p>
          Clicked <span className="highlight">{this.props.clicks} </span> times
        </p>

        <p>
          Total gains:{" "}
          <span className="money">{Math.floor(this.props.totalGains)} $</span>
        </p>
      </div>
    </div>
  );
}
