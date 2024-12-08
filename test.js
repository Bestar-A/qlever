var config = {
	bet: { label: "bet", value: currency.minAmount * 1.2, type: "number" },
	payout: { label: "payout", value: 2, type: "number" },
};

function main() {
	game.onBet = function () {
		if (game.history[0]) {
			log.success(game.history[0].gameId);
			log.success(game.history[0].hash);
			log.success(game.history[0].odds);
			log.success(game.history[0].crash);
			log.success(game.history[0].cashedAt);
			log.success(game.history[0].wager);
		}
		game.bet(config.bet.value, config.payout.value).then(function (payout) {
			if (payout > 1) {
				log.success("We won, payout " + payout + "X!");
			} else {
				log.error("We lost, payout " + payout + "X!");
			}
		});
	};
}
