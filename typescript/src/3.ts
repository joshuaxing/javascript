


// 抽象类

abstract class Animal{
    name: string;
    abstract speak(): void
}
class Cat extends Animal {
    speak(): void {
        console.log('miao')
    }
}

// 