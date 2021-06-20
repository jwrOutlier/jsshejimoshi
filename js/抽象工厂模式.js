// 其实抽象工厂，简单来说就是多个工厂的工厂(将多个工厂在进行工厂化)

// 形状工厂
class Circle {
    draw() {
        console.log("I'm a circle")
    }
}
class Rectangle {
    draw() {
        console.log("I'm a rectangle")
    }
}
class Square {
    draw() {
        console.log("I'm a square")
    }
}
class ShapeFactory {
    getShape(shapeType) {
        switch (shapeType) {
            case 'CIRCLE':
                return new Circle();
            case 'RECTANGLE':
                return new Rectangle();
            case 'SQUARE':
                return new Square();
            default:
                return null;
        }
    }
}



// 再新加一个颜色工厂
class Red {
    fill() {
        console.log("fill red")
    }
}
class Blue {
    fill() {
        console.log("fill blue")
    }
}
class Green {
    fill() {
        console.log("fill green")
    }
}
class ColorFactory {
    getColor(color){
        switch(color) {
            case 'RED':
                return new Red();
            case 'BLUE':
                return new Blue();
            case 'GREEN':
                return new Green();
            default:
                return null;
        }
    }
}

// 添加抽象工厂
// 最后添加抽象工厂
class FactoryProducer {
    static getFactory(choice){
        switch(choice) {
            case 'SHAPE':
                return new ShapeFactory();
            case 'COLOR':
                return new ColorFactory();
            default:
                return null;
        }
    }
}
// 拿形状工厂
let shapeFa =FactoryProducer.getFactory('SHAPE')
// 拿到各种形状
shapeFa.getShape('CIRCLE').draw()

// 拿颜色工厂
let colorFa = FactoryProducer.getFactory('COLOR')
colorFa.getColor('RED').fill()