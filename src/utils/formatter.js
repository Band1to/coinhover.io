export const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const round = (value) => Math.round((value) * 100) / 100;

export const multiply = (num1, num2) => num1 * num2;