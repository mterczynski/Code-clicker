import React from "react";
import { CodeButton } from "./code-button";
import { Keyword } from "./keyword";

export class CodeColumn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nextKeywordId: 0,
			displayedKeywords: []
		};
	}

	addKeyword() {
		const newKeywordSrc = `assets/keywords/c${Math.ceil(
			Math.random() * 31
		)}.PNG`;

		this.setState({
			nextKeywordId: this.state.nextKeywordId + 1,
			displayedKeywords: [
				...this.state.displayedKeywords,
				{
					src: newKeywordSrc,
					id: this.state.nextKeywordId,
					left: Math.ceil(Math.random() * 86) + "%"
				}
			]
		});

		setTimeout(() => {
			this.setState({
				displayedKeywords: this.state.displayedKeywords.slice(1)
			});
		}, 3000);
	}

	onCodeButtonClick = () => {
		this.props.onCodeButtonClick();
		this.addKeyword();
	};

	render = () => (
		<div className="CodeColumn">
			{this.state.displayedKeywords.map(keyword => (
				<Keyword src={keyword.src} left={keyword.left} key={keyword.id} />
			))}

			<CodeButton
				handleClick={this.onCodeButtonClick}
				cursors={this.props.cursors}
			/>
		</div>
	);
}
