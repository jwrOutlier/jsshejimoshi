//什么叫单例模式，简单来说就是一个实例只生产一次。
//指一个类只有一个实例，且该类能自行创建这个实例的一种模式
//单例类只有一个实例对象；
// 该单例对象必须由单例类自行创建；
// 单例类对外提供一个访问该单例的全局访问点。

class SingleObj{
    constructor(){
        // 防止new调用
        if(new.target!==undefined){
            const errorMsg = "This is single object,Can't use keyword new!";
            const tipMsg = "You should use method getInstance to get instance。";
            throw new Error(`\n${errorMsg}\n${tipMsg}`)
        }
    }

    static getInstance(){
        // 生产实例
        if(SingleObj.instance){
            return SingleObj.instance
        }
        SingleObj.instance={};
        SingleObj.instance.__proto__ = SingleObj.prototype
        return SingleObj.instance
    }
}

const instance = SingleObj.getInstance();
console.log(instance);
// instance.showMessage();