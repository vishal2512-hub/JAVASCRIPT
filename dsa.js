// Sort Characters by frequency

// const frequency = (s) => {
//     const frequencyMap ={};
//     for (const char of s) {
//         frequencyMap[char] =(frequencyMap[char] || 0) +1;
//     }
//     const sorted = Object.entries(frequencyMap).sort((a,b) => b[1]- a[1]);

//     let result ="";
//     sorted.forEach(([char, freq]) => {
//         result += char.repeat(freq);
//     })
//     return result;
// }
// const s = "tree"
// console.log(frequency(s));
























// let s='aba', k=2;

// function substring(s,k) {
//     let count =0;
//     for(let i=0;i<s.length;i++) {
//         let charcount ={};
//         for(let j=i;j<s.length;j++) {
//             charcount[s[j]] = (charcount[s[j]] || 0)+1;
//             if  (Object.keys(charcount).length === k) 
//             {
//                 count++;
//             }
//         }
//     }
//     return count;
// }

// console.log(substring(s,k));
// //---------------------------------------------------------------------------
// //anagram in string
// // function isAnagram(s, t) {
// //     if (s.length !== t.length) return false;
// //     const charCount = {};
// //     // Count frequency of each character in s
// //     for (let char of s) {
// //         charCount[char] = (charCount[char] || 0) + 1;
// //     }
// //     // Decrease frequency based on characters in t
// //     for (let char of t) {
// //         if (!charCount[char]) return false; // Character not found or count is 0
// //         charCount[char]--;
// //     }
// //     return true;
// // }

// //----------------------------------------------------------------------------

// // reverse a string

// // function reverseWords(s) {
// //     // Step 1: Split the string into an array of words, filtering out empty strings caused by extra spaces
// //     const words = s.trim().split(/\s+/);

// //     // Step 2: Reverse the array of words
// //     const reversedWords = words.reverse();

// //     // Step 3: Join the words with a single space
// //     return reversedWords.join(" ");
// // }

// // // Example
// // const input = "a good   example";
// // console.log(reverseWords(input)); // Output: "example good a"



// //------------------------------------------------------------------------

// // // prefix of string

// // function prefix(str) {
// //     let ans= str[0];
// //     for(let i=0;i<str.length;i++) {
// //      while (str[i].indexOf(ans) !== 0) {
// //          ans=ans.substring(0,ans.length-1);
// //      }
// //     }
 
// //     return ans;
// //  }
 
// //  const str=['flower','flow','floght']
// //  console.log(prefix(str));
 
// // ------------------------------------------------------------------------------------------


// //largest odd number in string 

// // function oddnumber(s) {

// //     let num='';
// //     for(let i=0;i<s.length;i++) {
// //         if (s[i] % 2 != 0) {
// //             num += s[i]
// //         }
// //     } 
// //     return num;
// // }
// // let s='22';
// // console.log(oddnumber(s));


// //----------------------------------------------------------------------------------------------
// // reverse word in string 

// // function reverseword(s) {
// //     s=s.split(' ');
// //     let res=[]; 

// //     for(let i=s.length-1; i>=0;i--) {
// //         if (s[i] != ' ') {
// //             res.push(s[i]);
// //         }
// //     }
// //     return res.join(' ');
// // }

// // let s="this is an amazing man";
// // console.log(reverseword(s));



// // ---------------------------------------------------------------------------------------------------


// // // remove outermost parenthesis

// // function removeparenthesis(s) {
// //   let returns = "";
// //   let depth = 0;
// //   for (let i = 0; i < s.length; i++) {
// //     if (s[i] === "(") {
// //       if (depth > 0) {
// //         returns += s[i];
// //       }
// //       depth++;
// //     } else {
// //       depth--;
// //       if (depth > 0) {
// //         returns += s[i];
// //       }
// //     }
// //   }
// //   return returns;
// // }
// // const s = "(()())(())";
// // console.log(removeparenthesis(s));
