interface GPS
{
    getCoordinates():void;
}
interface MediaPlayer
{
    start():void;
    stop():void;
    pause():void;
}
class SmartPhone implements GPS, MediaPlayer{
    getCoordinates():void{
        console.log('The cordinates are 23.49');
    }
    start(): void {
        console.log('Music has started');
    }
    stop(): void {
        console.log('Music has stopped');
    }
    pause(): void {
        console.log('Music has paused');
    }
}
var thePhone:SmartPhone = new SmartPhone();
thePhone.getCoordinates(); 
thePhone.start(); 
thePhone.stop(); 
thePhone.pause(); 
