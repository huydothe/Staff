class Staff {
    name : string;
    email : string;
    age : number;
    constructor(name:string, email:string, age:number,) {
        this.name=name;
        this.email=email;
        this.age=age;
    }
    getName=()=>this.name;
    getEmail=()=>this.email;
    getAge=()=>this.age;

    setName=(name: string)=>this.name=name;
    setEmail=(email: string)=>this.email=email;
    setAge=(age: number)=>this.age=age;
}

let staff = new Staff('Huy','huydothe1999@gamil.com',24);

console.log(staff.getName())
console.log(staff.getEmail())
console.log(staff.getAge())

staff.setName('HH');
staff.setEmail('HH@gmail.com');
staff.setAge(26);
console.log(staff.getName())
console.log(staff.getEmail())
console.log(staff.getAge())
