// 纸盒子
class Wrapper {
    pack() {
        return "wrapper"
    }
}
// 瓶子
class Bottle {
    pack() {
        return "bottle"
    }
}
// 汉堡需要使用纸盒包住
class Burger {
    packing() {
        return new Wrapper()
    }
}

// 冷饮需要使用瓶子来装
class ColorDrink {
    packing() {
        return new Bottle()
    }
}


// 蔬菜汉堡
class VegBurger extends Burger {
    price() {
        return 25.0
    }
    name() {
        return "veg burger"
    }
}

// 肌肉汉堡
class ChickenBurger extends Burger {
    price() {
        return 50.5
    }
    name() {
        return "chicken burger"
    }
}

// 可乐
class Coke extends ColdDrink {
    price() {
        return 30.0;
    }
    name() {
        return "Coke";
    }
}
// 百事
class Pepsi extends ColdDrink {
    price() {
        return 35.0;
    }
    name() {
        return "Pepsi";
    }
}

// 创建套餐类
class Meal {
    constructor() {
        const items = [];
        Reflect.defineProperty(this, 'item', {
            get: () => {
                if (this.__proto__ !== Meal.prototype) {
                    throw new Error('items is private')
                }
                return items
            }
        })
    }
    addItem(item) {
        this[this.itemName].push(item);
    }
    getCost() {
        let cost = 0.0;
        for (const item of this[this.itemName]) {
            cost += item.price()
        }
        return cost
    }
    showItems() {
        for (const item of this[this.itemName]) {
            const nameStr = 'item' + item.name();
            const packStr = 'packing' + item.packing().pack();
            const priceStr = "price" + item.price();
            console.log(`${nameStr},${packStr},${priceStr}`);
        }
    }
}

// 套餐建造者
class MealBuilder {
    prepareVegMeal() {
        const meal = new Meal();
        meal.addItem(new VegBurger());
        meal.addItem(new Coke());
        return meal;
    }
    prepareNonVegMeal() {
        const meal = new Meal();
        meal.addItem(new ChickenBurger());
        meal.addItem(new Pepsi());
        return meal;
    }
}

const mealBuilder = new MealBuilder();
const vegMeal = mealBuilder.prepareVegMeal();
console.log("Veg Meal");
vegMeal.showItems();
console.log("Total Cost: " + vegMeal.getCost());
const nonVegMeal = mealBuilder.prepareNonVegMeal();
console.log("\nNon-Veg Meal");
nonVegMeal.showItems();
console.log("Total Cost: " + nonVegMeal.getCost());
/**
 * output:
 * Veg Meal
 * Item : Veg Burger,Packing : Wrapper,Price : 25
 * Item : Coke,Packing : Bottle,Price : 30
 * Total Cost: 55
 *
 * Non-Veg Meal
 * Item : Chicken Burger,Packing : Wrapper,Price : 50.5
 * Item : Pepsi,Packing : Bottle,Price : 35
 * Total Cost: 85.5
 */