// var = function-scoped
function doSomethingVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log('Finally ' + i)
}
doSomethingVar()

// let = block-scoped
function doSomethingLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log('Finally ' + i) //error
}
doSomethingLet()

// let = block-scoped, can't be redeclared or reassigned
const test = '';