export const zeroBalanceValue = (coin) => {
	coin.balance = 0;
	coin.value = 0;
	coin.percentage = 0;
	return coin;
};