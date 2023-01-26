class Car {
    constructor(name, yearOfManufacturing){
        this.name = name;
        this.yearOfManufacturing = yearOfManufacturing
    }

    age(year){
        return year - this.yearOfManufacturing
    }
}

const ford = new Car('Ford', 2012)
console.log(ford);
console.log(ford.age(2022));

let set = new Set();

set.add(1);

set.add('1');

set.add({ key: 'value' });

console.log(set.size);


class User{

    constructor(name,age=9) {

        this.name  = name;

        this.age = age;

    }

 

    getData() {

        console.log(this.name + " is " + this.age + " years old !");

    }

}

 

var user =new User("foo",7);

user.getData();

 