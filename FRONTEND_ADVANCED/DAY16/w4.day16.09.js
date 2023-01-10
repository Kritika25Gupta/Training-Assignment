var Customer = /** @class */ (function () {
    function Customer(id, name, city) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ""; }
        if (city === void 0) { city = ""; }
        this.id = id;
        this.name = name;
        this.city = city;
    }
    Customer.prototype.showDetails = function () {
        var str = "Id :  ".concat(this.id, ", Name:  ").concat(this.name, ", City: ").concat(this.city);
        console.log(str);
    };
    return Customer;
}());
var c1 = new Customer();
var c2 = new Customer(10256);
var c3 = new Customer(10256, "Scott");
var c4 = new Customer(10256, "Scott", "Hyd");
c1.showDetails();
c2.showDetails();
c3.showDetails();
c4.showDetails();
