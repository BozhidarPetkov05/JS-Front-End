function solve(count, type, day) {
    let price;
    let totalPrice;
    if (day == 'Friday') {
        if (type == 'Students') {
            price = 8.45;
            totalPrice = price * count;
            if  (count >= 30) {
                totalPrice -= totalPrice * 15 / 100;
            }
        } else if (type == "Business"){
            price = 10.90;
            totalPrice = price * count;
            if (count >= 100) {
                totalPrice -= 10 * price;
            }
        } else if (type == "Regular") {
            price = 15.00;
            totalPrice = price * count;
            if (count >= 10 && count <= 20) {
                totalPrice -= totalPrice * 5 / 100;
            }
        }
    } else if (day == 'Saturday') {
        if (type == 'Students') {
            price = 9.80;
            totalPrice = price * count;
            if  (count >= 30) {
                totalPrice -= totalPrice * 15 / 100;
            }
        } else if (type == "Business"){
            price = 15.60;
            totalPrice = price * count;
            if (count >= 100) {
                totalPrice -= 10 * price;
            }
        } else if (type == "Regular") {
            price = 20.00;
            totalPrice = price * count;
            if (count >= 10 && count <= 20) {
                totalPrice -= totalPrice * 5 / 100;
            }
        }
    } else if (day == 'Sunday') {
        if (type == 'Students') {
            price = 10.46;
            totalPrice = price * count;
            if  (count >= 30) {
                totalPrice -= totalPrice * 15 / 100;
            }
        } else if (type == "Business"){
            price = 16.00;
            totalPrice = price * count;
            if (count >= 100) {
                totalPrice -= 10 * price;
            }
        } else if (type == "Regular") {
            price = 22.50;
            totalPrice = price * count;
            if (count >= 10 && count <= 20) {
                totalPrice -= totalPrice * 5 / 100;
            }
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, 'Students', 'Sunday');
solve(40, 'Regular', 'Saturday');