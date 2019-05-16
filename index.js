var text = `bbbbbbbb`

const loop = (targetText, reg) => {
  while((result = reg.exec(targetText)) !== null) {
    console.log(result)
  }
}

var regex01 = /b{5}/g
var regex02 = /b{5,}/g
var regex03 = /b{5,6}/g
var regex04 = /a{0,}/g
var regex05 = /a*/g

var regex06a = /b{1,}/g
var regex06b = /b+/g

var regex07a = /b{0,1}/g
var regex07b = /b?/g

console.log('\nregex01:')
loop(text, regex01)
console.log('\nregex02:')
loop(text, regex02)
console.log('\nregex03:')
loop(text, regex03)
console.log('\n----------------------')
console.log(regex04.exec(text))
console.log(regex05.exec(text))
console.log('\n----------------------')

console.log('\nregex06a:')
loop(text, regex06a)

console.log('\nregex06b:')
loop(text, regex06b)

console.log(regex07a.exec(text))
console.log(regex07b.exec(text))
