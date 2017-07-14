export const linkLogo = (coin, remote_coin) => {
	remote_coin.logo = coin.logo;
	return remote_coin;
}

export const formatPriceUSD = (coin) => {
	coin.price_usd = Number(coin.price_usd).toFixed(2);
	return coin;
}

export const zeroBalanceValue = (coin) => {
	coin.balance = 0;
	coin.value = 0;
	coin.percentage = 0;
	return coin;
}
