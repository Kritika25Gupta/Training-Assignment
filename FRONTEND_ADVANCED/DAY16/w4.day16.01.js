function compare() {
    var ar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ar[_i] = arguments[_i];
    }
    var max_array = Math.max.apply(Math, ar);
    console.log("Maximum value is : " + max_array);
}
compare(45, 89, 34, 80, 43, 67);
