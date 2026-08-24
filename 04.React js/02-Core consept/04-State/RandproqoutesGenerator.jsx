import React, { useState } from 'react'

function RandproqoutesGenerator() {
  let [num , ubdater]=useState(0)
  const randomqou=()=>{
    let randomnum= Math.floor(Math.random()*Qoutes.length)
    ubdater(randomnum)
  }
      let Qoutes =['time is most we want but we mostly use wrost','i didnt dream i realy work on it','learn 10000 kicks person i am afraid for him but i afraid for who is learn one kick 10000 times',
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It is never too late to be what you might have been. - George Eliot",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Everything you've ever wanted is on the other side of fear. - George Addair",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Whether you think you can or you think you can't, you're right. - Henry Ford",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "You learn more from failure than from success. Don't let it stop you. - Unknown"]
 
  return (
    <div>
  <h3>{Qoutes[num]}</h3>
  <button onClick={randomqou}>Choose Your Number</button>
  <h4>{`Quore no #${num} out of 23`}</h4>
    </div>
  )
}

export default RandproqoutesGenerator;