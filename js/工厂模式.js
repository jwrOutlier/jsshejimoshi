//工厂模式就是你需要什么东西不直接使用new的方法生成实例，然后统一通过工厂进行生产加工再生成实例。(通过工厂产生实例，不需要让每个类生成实例)

class Circle {
    draw() {
        console.log('i am a circle');

    }
}

class Rectange {
    draw() {
        console.log('i am a rectange');
    }
}

class Square {
    draw() {
        console.log('i am a square');

    }
}


// 制造工厂
class ShapeFa {
    getShape(shapeType) {
        switch (shapeType) {
            case 'CIRCLE':
                return new Circle()
                break;
            case 'RECTANGE':
                return new Rectange()
                break;
            case 'SQUARE':
                return new Square()
                break;
            default:
                break;
        }
    }
}

let shapeFa = new ShapeFa();
let shape1 = shapeFa.getShape('CIRCLE')
shape1.draw()
let shape2 = shapeFa.getShape('RECTANGE')
shape2.draw()
let shape3 = shapeFa.getShape('SQUARE')
shape3.draw()
