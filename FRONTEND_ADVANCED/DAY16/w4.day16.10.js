var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.getCoordinates = function () {
        console.log('The cordinates are 23.49');
    };
    SmartPhone.prototype.start = function () {
        console.log('Music has started');
    };
    SmartPhone.prototype.stop = function () {
        console.log('Music has stopped');
    };
    SmartPhone.prototype.pause = function () {
        console.log('Music has paused');
    };
    return SmartPhone;
}());
var thePhone = new SmartPhone();
thePhone.getCoordinates();
thePhone.start();
thePhone.stop();
thePhone.pause();
