const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
  ];
  
  const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  
  // Milestone 2
  function duplicate(x) {
      for (i=0; i<x.length-1; i++) {
          if (x[i]==x[i+1]) {
              return true;
          }
      }
      return false;
  }
  
  function prime(x) {
      for (i=2; i<Math.sqrt(x); i++) {
          if (x%i==0) {
              return false;
          }
      }
      return x>1;
  }
  
  let startsA = inventors.filter(name => name.startsWith('A'))
  let containsN = inventors.filter(name => name.includes('n'))
  let duplicateLetter = inventors.filter(duplicate)
  let oddNum = numbers.filter(num => num%2==1)
  let twoDigits = numbers.filter(num => (num>9&&num<100))
  let primeNum = numbers.filter(prime)
  
  console.log("The following inventors have names starting with 'A':",startsA)
  console.log("The following inventors have names containing 'n':", containsN)
  console.log("The following inventors have duplicate letters in their names:", duplicateLetter)
  console.log("The following numbers are odd:", oddNum)
  console.log("The following numbers have two digits:", twoDigits)
  console.log("The following numbers are prime:", primeNum)
  
  // Milestone 3
  let firstName = inventors.map(name => name.split(' ').slice(0, -1).join(' '))
  let nameLength = inventors.map(name => name.length)
  let initials = inventors.map(name => name.split(" ").map((n)=>n[0]).join(".") + ".")
  let upperCase = inventors.map(name => name.toUpperCase())
  let mult100 = numbers.map(num => num*100)
  
  console.log("The first names of each inventor are:", firstName)
  console.log("The lengths of each inventor's names are:", nameLength)
  console.log("The following names are in uppercase:", upperCase)
  console.log("The initials of each inventor are:", initials)
  console.log("Each number multiplied by 100 equals:", mult100)
  
  // Milestone 4
  let sortAZ = inventors.sort((a,b)=>{
    if(a<b){
      return -1
    } else if(a>b) {
      return 1
    } else {
      return 0
    }
  })
  let sortZA = inventors.sort((a,b) => {
    if(a<b){
      return 1
    } else if(a>b) {
      return -1
    } else {
      return 0
    }
  })
  
  let shortLength = inventors.sort((a,b) => {
    if(a.length<b.length) {
      return -1
    } else if (a.length>b.length) {
      return 1
    } else {
      return 0
    }
  })
  
  let longLength = inventors.sort((a,b) => {
    if(a.length<b.length) {
      return 1
    } else if (a.length>b.length) {
      return -1
    } else {
      return 0
    }
  })
  
  console.log("The inventors listed alphabetically are:", sortAZ)
  console.log("The inventors listed reverse-alphabetically are:", sortZA)
  console.log("The inventors listed by shortest name first are:", shortLength)
  console.log("The inventors listed by longest name first are:",longLength)
  
  // Milestone 5
  let sum = numbers.reduce((total,num) => {
    return total += num
  })
  let sumEven = numbers.reduce((total, num) => {
      if (num%2==0) {
          return total + num;
      }
     return total
  }, 0);
  let firstNameString = inventors.reduce((total, num) => {
      return total + num.split(" ")[0]
  }, "")
  
  console.log("The sum of all numbers is:", sum)
  console.log("The sum of all even numbers is:", sumEven)
  console.log("The inventors' first names combined are:", firstNameString)
  
  // Milestone 6
  let letterY = inventors.some(name => name.includes('y'))
  let letterE = inventors.every(name => name.includes('e'))
  let fourLetters = inventors.every(name => name.split(' ')[0].length > 4)
  
  console.log("Does any inventor have the letter 'y' in their name?", letterY)
  console.log("Does every inventor have the letter 'e' in their name?", letterE)
  console.log("Does every inventor have first name that's longer than 4 characters?", fourLetters)
  
  // Milestone 7
  
  let middleName = inventors.find(name => name.split(' ').length >= 3)
  let noMiddleName = inventors.filter(name => name.split(' ').length <= 2)
  let divisible7 = numbers.find(num => num%7==0)
  let notDivisible = numbers.filter(num => num%7!==0)
  
  console.log(middleName, "has a middle name.")
  console.log("The following inventors do not have middle names:", noMiddleName)
  console.log(divisible7, "is divisible by 7.")
  console.log("The following numbers are not divisible by 7:", notDivisible)
  
  // Rocket
  
  function fib(n) {
    if (n < 2){
      return n
    }
    return fib(n - 1) + fib (n - 2)
  }