export const linkLogo = (coin, remote_coin) => {
	remote_coin.logo = coin.logo;
	return remote_coin;
};

export const zeroBalanceValue = (coin) => {
	coin.balance = 0;
	coin.value = 0;
	coin.percentage = 0;
	return coin;
};