//object//





//

const laptop={
    brand: "Apple",
    model: "Macbook m5",
    display: '15"',
    battery: 20000+'mah',

    performance:{
        ram: "12GB",
        rom: "512GB",
        chip: "M5",
        display_quality: "2k",
    }
};


console.log(laptop);



//--------------Get Property---------------//

const car={
    brand:"BMW",
    name: "BMW M5 Edition",
    model:"M5",
    price: 3000000,
}

console.log(car.price);
//
const usd = car.price;
console.log(usd);
//
//
//
console.log(car["brand"]);
//
const company = car["brand"];
console.log(company);








const phone ={
    brand: "Apple",
    model: "17 pro max",
    'color': ["white","Black","Pink"]
};

console.log(phone['color']);

phone["model"] = "18 pro max";
console.log(phone.model);
//
phone.model = "18 pro max";
console.log(phone["model"]);