// TRY: 練習問題１
let i = 57052
let j = 57054
console.log(i + j)

let text1 = "114"
let text2 = "106"
console.log(text1 + text2)
// TRY: 練習問題２
i = 5
i += 2
i *= 5
i = 100 % i
i /= 6

console.log(i)

// TRY: 練習問題３
let happiness = 89 // 0 から 100 までの数値を代入してください
let sleepiness = 91 // 0 から 100 までの数値を代入してください

const isHappy = happiness > 90
const isSleepy = sleepiness > 90

const isNotHappyAndSleepy = !isHappy && isSleepy

// 以下のコメントアウトを外して確認してみましょう
console.log(
  "isNotHappyAndSleepy" + "は" + true + "ですか？",
  isNotHappyAndSleepy,
)
console.log("isHappy", isHappy)
console.log("isSleepy", isSleepy)

// const isHappyAndNotSleepy = isHappy && isSleepy
