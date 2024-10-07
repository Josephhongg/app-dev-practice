console.log('Hello, World!');

{
  //  Write your solution for question 1 here
  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  };
  let number = 2;
  // console.log(isPrime(number))
}

{
  //  Write your solution for question 2 here
  const reverseString = (string) => {
    return string.split('').reverse().join('');
  };
  // console.log(reverseString("Hello"))
}

{
  //  Write your solution for question 3 here
  findMax = (array) => {
    return Math.max(...array);
  };
  // console.log(findMax([1,3,5,2,4]))
}

{
  //  Write your solution for question 4 here
  isPalindrome = (string) => {
    return (
      string.toLowerCase() === string.toLowerCase().split('').reverse().join('')
    );
  };
  // console.log(isPalindrome("rAcEcAr"))
}

{
  //  Write your solution for question 5 here
  factorial = (number) => {
    let result = number;
    if (number === 0 || number === 1) {
      return 1;
    }
    while (number > 1) {
      number--;
      result *= number;
    }
    return result;
  };
  // console.log(factorial(3))
}

{
  //  Write your solution for question 6 here
  const sort = (arr) => {
    return arr.sort();
  };
  // console.log(sort([1,3,5,2,4]))
}

{
  //  Write your solution for question 7 here
  const count = (arr, val) => {
    return arr.filter((item) => item === val).length;
  };
  // console.log(count([1,1,2,3,4,5], 1))
}

{
  //  Write your solution for question 8 here
  const isAnagram = (str1, str2) => {
    const normalize = (str) => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
  };
  // console.log(isAnagram("Hello", "jello"))
}

{
  //  Write your solution for question 9 here
  const findLongestWord = (str) => {
    let words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }

    return longestWord;
  };
  // console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
}

{
  //  Write your solution for question 10 here
  const merge = (arr1, arr2) => {
    return arr1.concat(arr2).sort();
  };
  // console.log(merge([4,5,6], [1,2,3]))
}

{
  //  Write your solution for question 11 here
  // const learners = [
  //   { name: "Alice", age: 21 },
  //   { name: "Bob", age: 19 },
  //   { name: "Charlie", age: 20 },
  // ];
  // const message = learners.map(learner => `${learner.name} is ${learner.age} years old`);
  // console.log(message)
}

{
  //  Write your solution for question 12 here
  // const learners = [
  //   { name: "Alice", age: 21 },
  //   { name: "Bob", age: 19 },
  //   { name: "Charlie", age: 25 },
  //   { name: "David", age: 18 },
  //   { name: "Eve", age: 22 },
  // ];
  // const isOlder = (learner) => {
  //   return learner.age > 20
  // }
  // const filtered = learners.filter(isOlder);
  // console.log(filtered)
}

{
  //  Write your solution for question 13 here
  // const learners = [
  //   { name: "Alice", age: 21 },
  //   { name: "Bob", age: 19 },
  //   { name: "Charlie", age: 25 },
  //   { name: "David", age: 18 },
  //   { name: "Eve", age: 22 },
  // ];
  // const isYoungOld = (learner) => {
  //   return learner.age > 20 && learner.age < 25;
  // }
  // const result = learners.filter(isYoungOld)
  // console.log(result)
}

{
  //  Write your solution for question 14 here
  const words = ['Apple', 'Banana', 'Avocado', 'Strawberry', 'Mango'];

  const startsWithA = () => {
    return words
      .filter((word) => !word.startsWith('A'))
      .map((word) => word.length);
  };
  // console.log(startsWithA())
}

{
  //  Write your solution for question 15 here
  const grades = [85, 90, 78, 92, 88];

  const findAverage = () => {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  };

  // console.log(findAverage())
}

{
  //  Write your solution for question 16 here
  const flavours = [
    'chocolate',
    'vanilla',
    'chocolate',
    'strawberry',
    'vanilla',
  ];

  const flavourCount = () => {
    return flavours.reduce((accumulator, flavour) => {
      if (accumulator[flavour]) {
        accumulator[flavour]++;
      } else {
        accumulator[flavour] = 1;
      }
      return accumulator;
    }, {});
  };
  // console.log(flavourCount())
}

{
  //  Write your solution for question 17 here
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const findMaxValue = (arr) => {
    return Math.max(...arr.flat());
  };

  const max = findMaxValue(matrix);
  // console.log(max)
}

{
  //  Write your solution for question 18 here
  const generateMultiplicationTable = (n) => {
    // Create empty array
    const table = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push((i + 1) * (j + 1));
      }

      table.push(row);
    }
    return table;
  };

  const multiplicationTable = generateMultiplicationTable(3);
  console.log(multiplicationTable);
}

{
  //  Write your solution for question 19 here
}

{
  //  Write your solution for question 20 here
}
