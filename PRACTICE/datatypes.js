let a =5;
console.log(typeof a);  //number

let x = "Hardik";
console.log(typeof x);  //string

let z = 5.5;
console.log(typeof z);  //number

let h;
console.log(typeof h);  //undefined

let mm = null;
console.log(typeof mm); //object

let double = 64151.1651651;
console.log(typeof double); //number

let array = [1,2,3,4];
console.log(typeof array);

let hm = 14;
let mh = 14;
console.log(hm == mh); // check the value contain in the object.(ans = true)

let H = [14];
let M = [14];
console.log(H == M); // check the reference of the object which it contain.(ans = false)

let student = {
    name:"Hardik",
    age:23
}
console.log("Name: " + student.name + " & Age: " + student.age);
console.log(typeof student);
