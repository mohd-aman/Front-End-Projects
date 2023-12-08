//Q. Polyfill of filter

// Array.prototype.myFilter = function (callbackFn, thisArg) {
//     let filteredArr = [];
//      for(let i=0;i<this.length;i++){
//       if(this[i] != undefined && callbackFn.call(thisArg,this[i],i,this)){
//         filteredArr.push(this[i])
//       }
//      }
//     return filteredArr
//   };

// let arr = [1,3,4,5,7]
// let even = arr.myFilter(function(ele){
//     return ele%2 == 1
// })

// console.log(even);



//Q. Check if two objects are equal
// function checkEqual(value1,value2){
//     if(Object.is(value1,value2)){
//         return true;
//     }
//     let bothObj = Object.prototype.toString.call(value1) === '[object Object]' && Object.prototype.toString.call(value2) === '[object Object]';
//     let bothArr = Array.isArray(value1) && Array.isArray(value2);
//     if(!bothArr && !bothObj){
//         return false;
//     }
//     if(Object.keys(value1).length != Object.keys(value2).length){
//         return false;
//     }
//     for(let key in value1){
//         if(!checkEqual(value1[key], value2[key])){
//             return false;
//         }
//     }
//     return true
// }

// console.log(Object.prototype.toString.call(["d",'d']));


// Q Deep Clone lighter version

// function deepClone(value){
//     if(typeof value != 'object' || value == null){
//         return value
//     }
//     let clone = Array.isArray(value) == true?[]:{};
//     for(let key in value){
//         clone[key] = deepClone(value[key]);
//     }
//     return clone
// }



// for(var i=0;i<10;i++){
//     (function(i){
//         setTimeout(function(){
//             console.log(i);
//         },100)
//     })(i)
    
// }

//squash an object
// function squashObject(obj) {
//     let res = {};
//     for(let key in obj){
//       if(Object.prototype.toString.call(obj[key]) === '[object Object]' || Array.isArray(key)){
//         let ret = squashObject(obj[key]);
//         console.log(ret);
//         for(let retKey in ret){
//             if(retKey){
//                 res[key+"."+retKey] = ret[retKey];}
//             else
//                 res[key] = ret[retKey]
//         }
//       }
//       else{
//         res[key] = obj[key];
//       }
      
//     }
//     return res;
//   } 

// console.log(squashObject({
//     foo: {
//       '': {
//         '': 1,
//         bar: 2,
//       },
//       a: 1,
//     },
//   }))

// Parent object constructor.
// function Animal(name) {
//     this.name = name;
//   }
  
//   // Add a method to the parent object's prototype.
//   Animal.prototype.makeSound = function () {
//     console.log('The ' + this.constructor.name + ' makes a sound.');
//   };
  
//   // Child object constructor.
//   function Dog(name) {
//     Animal.call(this, name); // Call the parent constructor.
//   }
  
//   // Set the child object's prototype to be a new instance of the parent object.
//   Dog.prototype = Object.create(Animal.prototype);
  
//   // Add a method to the child object's prototype.
//   Dog.prototype.bark = function () {
//     console.log('Woof!');
//   };
  
//   // Create a new instance of Dog.
//   const bolt = new Dog('Bolt');
  
//   // Call methods on the child object.
//   console.log(bolt.name); // "Bolt"
//   bolt.makeSound(); // "The Dog makes a sound."
//   bolt.bark(); // "Woof!"



// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.makeSound = function(){
//     console.log("The "+this.name + " make a sound")
// }

// function Dog(name,breed){
//     this.breed = breed;
//     Animal.call(this,name);
// }

// Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog;
// let alex = new Dog("alex","no idea");
// console.log(alex);

// function foo() {
// 	this.a = 'a';
// }
// foo.prototype.getA = ()=>{
//     return this.a;
// }
// let hello = new foo();
// let hello2 = new foo();
// // add getA for `foo` which return property a
// console.log(hello);
// console.log(hello2);


// let a = ()=>{
//     console.log("hel")
// }
// console.log(a);

// Promise.myPromiseAll = function(arr){
//     return new Promise((resolve,reject)=>{
//         if(arr.length == 0){
//             resolve([]);
//         }
//             let result = [];
//             let pending = arr[0];
//             for(let i=1;i<arr.length;i++){
//                 pending = pending.then((val)=>{
//                     result.push(val);
//                     return arr[i]
//                 }).catch((err)=>{
//                     reject(err);
//                 })
//             }
//             pending.then((val)=>{
//                 result.push(val);
//                 resolve(result);
//             }).catch((err)=>{
//                 reject(err);
//             })
//         }  
//     )
// }

// let p1 = Promise.resolve(4);
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Error");
//     },1000)
// })
// let p3 = Promise.resolve("abc");
// let result = Promise.myPromiseAll([p1,p2,p3])
// result.then((output)=>{
//     console.log(output);
// }).catch((err)=>{
//     console.log(err);
// })


// Generate data center level aggregated stats of protected vs. unprotected applications
// The following mock helper method returns protection stats for a given application type in a given data center.
// In real implementation this will be an ajax call to `${datacenterUrl}/${applicationType}` or something like that
const getApplicationProtectionStats = (datacenterUrl, applicationType)=> new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        protectedApps: Math.floor(Math.random() * 100),
        unprotectedApps: Math.floor(Math.random() * 100)
      });
       reject('error');
    }, 1000);
   });
   // getApplicationProtectionStats('https://www.olive.com/stat', 'vmware').then(console.log)
   const applicationTypes = [
    'vmware',
    'mssql',
    'ahv'
   ];
   const datacenters = [
    {name: 'olive', url: 'https://www.olive.com/stat'},
    {name: 'comet', url: 'https://www.comet.com/stat'},
    {name: 'blah', url: 'https://www.blah.com/stat'}
   ];
   // {
   //   olive: {
   //     protectedApps: <sum of protected apps counts for each application type in Olive>,
   //     unprotectedApps: <sum of unprotected apps counts for each application type in Olive>
   //   },
   //   comet: {..},
   //   blah: {...}
   // }

// (async function(){
//     let result = {}
//     for(let datacenter of datacenters){
//         let promises = [];
//         for(let applicationType of applicationTypes){
//             promises.push(getApplicationProtectionStats(datacenter.url,applicationType));
//         }
//         let obj = await Promise.all(promises);
//         result[datacenter.name] = obj;
//     }
//     console.log(result);
// })();

//out -> [{protectedApp:5,unprotectedApp:30},{},{},..]
// function utility(arr){
//     let obj = {protectedApp:0,unprotectedApps:0};
//     for(let item of arr){
//         obj.protectedApp+=item.protectedApp;
//         obj.unprotectedApps+=item.unprotectedApps;
//     }
//     return obj;
// }

// function memoized(func){
//     let cache = {};
//     return function(arg){
//         if(cache[arg]){
//             return cache[arg]
//         }
//         cache[arg] = func(arg)
//         console.log(cache)
//         return cache[arg];
//     }
// }
// function abc(n){
//     return n
// }
// let fn = memoized(abc)

// fn(10);
// fn(2);
// fn(10);
// fn({abc:"3"})


// [a, b, c, d]  => {a:b, c: d} using reducer

let arr = ['a','b','c','d'];
let res = arr.reduce((acc,item,index,arr)=>{
    if(index%2 === 0){
        acc[item] = arr[index+1]
    }
    return acc;
},{})
console.log(res);



// useMemo hook implementation

