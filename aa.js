var config = {
	baseBet: { label: "base bet", value: currency.minAmount, type: "number" },
	payout: { label: "payout", value: 2, type: "number" },
	stop: { label: "stop lost again", value: 1, type: "number" },
	lossMultiplier: { label: "loss multiplier", value: 2, type: "number" },
	silver: { label: "silver", value: 5, type: "number" },
	gold: { label: "gold", value: 10, type: "number" },
	sniperValue: { label: "sniper value", value: 0.5, type: "number" },
};
function main() {
	let maxLost = 0;
	let lostAmount = config.baseBet.value;
	for (let i = 1; i <= config.stop.value; i++) {
		maxLost += lostAmount;
		lostAmount *= config.lossMultiplier.value;
	}
	log.info("Max Lost will be " + maxLost);
	var currentBet = config.baseBet.value;
	var currentPayout = config.payout.value;
	var total = 0;
	var cnt = 0;
	var winCnt = 0;
	var lostCnt = 0;
	var skip = false;
	var historyData = [];
	var sniper = false;
	game.onBet = function () {
		game.bet(currentBet, currentPayout).then(function (payout) {
			if (payout > 1) {
				currentBet = config.baseBet.value;
				total += (game.history[0].wager * (game.history[0].cashedAt - 100)) / 100;
				winCnt++;
				cnt = 0;
				if (sniper) log.success("-------------- Bull's eye ---------------");
				log.success("Win :" + winCnt + ", Lost: " + lostCnt + ", Total: " + total);
			} else {
				currentBet *= config.lossMultiplier.value;
				total -= game.history[0].wager;
				cnt++;
				lostCnt++;
				log.error("Win :" + winCnt + ", Lost: " + lostCnt + ", Total: " + total);
			}
			if (cnt >= config.stop.value) {
				skip = true;
				currentBet = config.baseBet.value;
			}
			if (game.history[0].crash <= 125 && game.history[1].crash <= 125 && game.history[2].crash <= 125) {
				currentBet = config.gold.value;
				currentPayout = 1.25;
			} else if (game.history[0].crash <= 125 && game.history[1].crash <= 125) {
				currentBet = config.silver.value;
				currentPayout = 1.25;
			} else {
				snipper = true;
				for (let i = 0; i < 20; i++) if (game.history[i].crash > 1000) snipper = false;
				if (snipper) {
					currentBet = config.sniperValue.value;
					currentPayout = 10;
				} else {
					currentPayout = config.payout.value;
				}
			}
			historyData.push(game.history[0].crash);
			if ((winCnt + lostCnt) % 100 == 0) {
				console.log(historyData);
			}
			if (total < -20 && lostCnt + winCnt == 1000) game.stop();
		});
	};
}
