/*

asddffddsa

asddfxfddsa

Algorithm:
If we have even number of letters, each letter should have an even count
If we have odd number of letters, 1 letter will have odd count, and the rest should be even

*/

function HasPalindrome(input_string) {
    let letter_dict = {}
    let letters = input_string.split("")
    letters.forEach( x => {
        if (x in letter_dict) {
            letter_dict[x] += 1;
        } else {
            letter_dict[x] = 1
        }
    });
    if (letters.length % 2 === 0) {
        // Each one should be even
        let even_count = 0;
        let odd_count = 0;
        for(let key in letter_dict) {
            if (letter_dict[key] % 2 === 0) {
                ++even_count;
            } else {
                ++odd_count;
            }
        }
        if (odd_count === 0) {
            return true;
        } else {
            return false;
        }
    } else {
        // Each except one should be odd
        let even_count = 0;
        let odd_count = 0;
        for(let key in letter_dict) {
            if (letter_dict[key] % 2 === 0) {
                ++even_count;
            } else {
                ++odd_count;
            }
        }
        if (odd_count === 1) {
            return true;
        } else {
            return false;
        }        
    }
}
function TestHasPalindrome(inputString) {
    console.log(`HasPalindrome("${inputString}): ${HasPalindrome(inputString)}`)
}
TestHasPalindrome("aaaabbbcc");
TestHasPalindrome("aaaabbbccc");