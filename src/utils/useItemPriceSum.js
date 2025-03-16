const useItemPriceSum = (items)=> {
    const priceSum = items.reduce((acc, curr) => acc + curr.card.info.price, 0);
    return priceSum/100;
};

export default useItemPriceSum;