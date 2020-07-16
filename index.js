const chairPrice = 15.678;
const sofaPrice = 123.965;
const armchairPrice = 90.2345;

//Max, Min Prices
const maxPrice = Math.max(chairPrice, sofaPrice, armchairPrice);
const minPrice = Math.min(chairPrice, sofaPrice, armchairPrice);
console.log(maxPrice);
console.log(minPrice);

//Sum Of Prices
const sumPrices = chairPrice + sofaPrice + armchairPrice;
console.log(sumPrices);

//Rounding To Integer
const chairRoundPrice = Math.floor(chairPrice);
const sofaRoundPrice = Math.floor(sofaPrice);
const armchairRoundPrice = Math.floor(armchairPrice);

const roundSumPrices = armchairRoundPrice + chairRoundPrice + sofaRoundPrice;
const hundredsSumPrices = Math.round((roundSumPrices) / 100) * 100;
console.log(hundredsSumPrices);

// Is Even Or Odd
console.log(roundSumPrices);
const even = roundSumPrices%2 === 0;
console.log(even);

//500-sumPrices
const change = 500 - sumPrices
console.log(change);

//Midle Price
const midle = sumPrices / 3;
const midle2 = +midle.toFixed(2);
console.log(midle2);

//Discount
const discount = parseInt(Math.random() * 100);

//Armchair Sail
const armchairWithDiscount = armchairRoundPrice / 100 * (100 - discount);
const armchairWithRoundDiscount = +armchairWithDiscount.toFixed(2);
//To Pay
console.log(armchairWithRoundDiscount);
//Profit
const difference = armchairRoundPrice / 100 * discount;
const profit = armchairRoundPrice / 2 - difference;
const roundProfit = +profit.toFixed(2);
console.log(roundProfit);

//Advanced
const template = `Стілець коштує ${chairPrice}грн (округлюємо в меншу сторону: ${chairRoundPrice}грн)
Диван коштує ${sofaPrice}грн (округлюємо в меншу сторону: ${sofaRoundPrice}грн)
Крісло коштує ${armchairPrice}грн (округлюємо в меншу сторону: ${armchairRoundPrice}грн)
Максимальна ціна за річ це ${maxPrice}грн, а мінімальна - ${minPrice}грн
Загальна сума цін всіх меблів: ${sumPrices}грн
Загальна сума, округлених в меньшу сторону до цілих, цін всіх меблів: ${roundSumPrices}грн
Сума цін всіх меблів округлена до сотень: ${hundredsSumPrices}грн
Cума цін всіх меблів округлена в меншу сторону є парним числом?: ${even}
Сума решти з 500грн при покупці усіх меблів: ${change}грн
Cереднє значення цін, округлене до другого знаку після коми: ${midle2}грн
Знижка на крісло: ${discount}%, до оплати: ${armchairWithRoundDiscount}грн
Прибуток від цього продажу: ${roundProfit}грн`;

console.log(template);
