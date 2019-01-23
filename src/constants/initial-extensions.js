export const INITIAL_EXTENSIONS = Object.freeze([
	{
		id: 1,
		name: "Bracket Pair Colorizer",
		description: "Doubles the click multiplier",
		avatarUrl: "assets/extensions/bracket-pair-colorizer.png",
		sold: false,
		price: 100,
		requiredLevel: 6,
		onPurchase() {
			if (this.props.money > 100 && this.props.playerLevel >= 6) {
				this.props.multiplyClickMultiplier(2);
				this.setState({
					extensions: [
						...this.state.extensions.map(extension =>
							extension.id === 1 ? { ...extension, sold: true } : extension
						)
					]
				});
			}
		}
	},

	{
		id: 2,
		name: "Path Intellisense",
		description: "Doubles the click multiplier",
		avatarUrl: "assets/extensions/path-inteliiSense2.PNG",
		sold: false,
		price: 500,
		requiredLevel: 8,
		onPurchase() {
			if (this.props.money > 500 && this.props.playerLevel >= 8) {
				this.props.multiplyClickMultiplier(2);
				this.setState({
					extensions: [
						...this.state.extensions.map(extension =>
							extension.id === 2 ? { ...extension, sold: true } : extension
						)
					]
				});
			}
		}
	}
]);
