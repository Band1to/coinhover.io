export const floorCents = (num) => (Math.floor(num * 100) / 100);

export const round = (value) => Math.round((value) * 100) / 100;

export const rounder = (balance, price_usd) => round(multiply(balance, floorCents(price_usd)));

export const multiply = (num1, num2) => num1 * num2;

export const calcTotal = (assets) => {
	const values = assets.map((asset) => asset.value);
	const total = values.reduce((sum, value) => sum + value, 0);
	return total;
};