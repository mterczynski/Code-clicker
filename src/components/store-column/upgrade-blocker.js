import React from "react";

export class UpgradeBlocker extends React.Component {
	render() {
		return this.props.playerLevel < this.props.requiredLevel ? (
			<div className="UpgradeBlocker">
				<p className="UpgradeBlocker-text">
					Level {this.props.requiredLevel} required
				</p>
			</div>
		) : (
			<React.Fragment />
		);
	}
}
