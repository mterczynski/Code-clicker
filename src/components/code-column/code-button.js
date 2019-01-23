import React from "react";

export class CodeButton extends React.Component {
	renderCursor = (cursor, i) => (
		<img
			key={i}
			style={{
				top: cursor.top,
				left: cursor.left,
				transform: `rotate(${cursor.angle}deg)`
			}}
			alt=""
			className="CodeColumn__cursor"
			src="assets/employees/cursor.png"
		/>
	);

	render = () => (
		<div className="CodeButton-container">
			<img src="assets/code.png" alt="Click" className="CodeButton" />
			<div
				className="CodeColumn__cursor-container"
				onClick={this.props.handleClick}
			>
				{this.props.cursors.map((cursor, i) => this.renderCursor(cursor, i))}
			</div>
		</div>
	);
}
