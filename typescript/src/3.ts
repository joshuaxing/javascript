


// 抽象类

abstract class Animal{
    name: string | undefined;
    abstract speak(): void
}
class Cat extends Animal {
    speak(): void {
        console.log('miao')
    }
}

// 