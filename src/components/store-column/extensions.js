import React from "react";
import { UpgradeBlocker } from "./upgrade-blocker";
import { INITIAL_EXTENSIONS } from "../../constants/initial-extensions";

export class Extensions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extensions: INITIAL_EXTENSIONS.map(extension => ({
        ...extension,
        onPurchase: extension.onPurchase.bind(this)
      }))
    };
  }

  render = () => (
    <div className="Extensions">
      <p className="StoreColumn__section-header">Extensions</p>
      <ul className="StoreColumn__list">
        {this.state.extensions
          .filter(extension => !extension.sold)
          .map(extension => (
            <li
              className="StoreColumn__list-item"
              onClick={extension.onPurchase}
              key={extension.id}
            >
              <UpgradeBlocker
                playerLevel={this.props.playerLevel}
                requiredLevel={extension.requiredLevel}
              />

              <div>
                <img
                  className="StoreColumn__avatar"
                  alt=""
                  src={extension.avatarUrl}
                />
              </div>

              <div>
                <div>{extension.name}</div>
                <div className="StoreColumn__item-description highlight">
                  {extension.description}
                </div>
              </div>

              <div
                className={
                  this.props.money >= extension.price
                    ? "money"
                    : "too-expensive"
                }
              >
                {extension.price} $
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
