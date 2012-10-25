var Helloworld = (function () {
    function Helloworld() {
        this.text1 = "Hello, ";
        this.text2 = "TypeScript ";
        this.text3 = "world!";
    }
    Helloworld.prototype.show = function () {
        console.log(this.text1 + this.text2 + this.text3);
    };
    return Helloworld;
})();
var hw = new Helloworld();
hw.show();
