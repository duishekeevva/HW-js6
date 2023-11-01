//1
// function myFunction(arr) {
//     return arr.reverse()
// }
// console.log(myFunction( [1, 2, 3] ))

//2
// function myFunction(arr) {
//     let arrNum=[]
//     for (let i=0; i<arr.length; i++) {
//         if (typeof arr[i]==="number" && arr[i]>0) {
//             arrNum.push(arr[i])
//         }
//     } return arrNum
// }
// console.log(myFunction( [0, 1, false, 2, undefined, '', 3, null] ))

// 3
// function myFunction(arr) {
//     return arr.filter((el, id) => arr.indexOf(el) === id);
// }
// console.log(myFunction( [1, 2, 3, 1, 2]  ))

// 4
// function myFunction(arrStr, arrNum) {
//     return [...arrStr, ...arrNum]
// }
// console.log(myFunction(  ['a', 'b', 'c'] ,[1, 2, 3]))

// 5
// function myFunction(arrNum) {
//     arrNum.push(4,5,6)
//     return arrNum
// }
// console.log(myFunction(  [1, 2, 3]))

// 6
// function myFunction(arrNum) {
//     arrNum.unshift(4,5,6)
//     return arrNum
// }
// console.log(myFunction(  [1, 2, 3]))


// 7
// function myFunction(arrNum) {
//     arrNum.splice(1,2)
//     return arrNum
// }
// console.log(myFunction(  [1, 2, 3, 4, 5]))

// 8
// function myFunction(Obj) {
//     return Object.keys(Obj)
// }
// console.log(myFunction(  { js:'test', jq: 'hello', css: 'world'}))

// 9
// function myFunction(arr) {
//     return arr.join(',')
// }
// console.log(myFunction(  ['Капуста', 'Репа', 'Редиска', 'Морковка']))

// 10
// function myFunction(arr) {
//     let resArr=[]
//     let strArr = arr.split('').join().split(',')
//     for (let i = 0; i < strArr.length; i++) {
//         if(strArr[i]===strArr[i].toLowerCase()){
//             resArr.push(strArr[i].toUpperCase())
//         }
//         else if (strArr[i]===strArr[i].toUpperCase()) {
//             resArr.push(strArr[i].toLowerCase())
//         }
//         else {
//             resArr.push(strArr[i])
//         }
//     }
//         return resArr.join('').split()
//
// }
//
// console.log(myFunction('КаЖдЫй ОхОтНиК'))


//11
// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ]
// // console.log(cars.filter(el=>el.price >= 40000 && el.price <= 60000 && el.year<2019))
// 12
// console.log(cars.filter(el=>el.make==="Chevrolet"))