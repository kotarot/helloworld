/*
 * Filename: helloworld.ts.ts
 * Language: TypeScript
 * Compiler: 
 */

class Helloworld {
    text1 : string = "Hello, ";
    text2 : string = "TypeScript ";
    text3 : string = "world!";

    show() {
        console.log(this.text1 + this.text2 + this.text3);
    }
}

var hw = new Helloworld;
hw.show();

