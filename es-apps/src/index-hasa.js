//Hierachy: HAS-A - IS-A
class Product {
    constructor(id = 1, name = 'phone') {
        this.id = id;
        this.name = name;
    }
}
class Order {
    //HAS-A
    constructor(orderId = 'A001', product = new Product()) {
        this.orderId = orderId
        //has-a
        this.product = product;

    }
}
let order = new Order();
console.log(order)

//DI 
let newOrder = new Order('B001', new Product(30, 'Covid-19 Mask'))
console.log(newOrder)
console.log(newOrder.orderId,newOrder.product.name)

