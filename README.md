# weekend-health-take-home
Take home assignment for Weekend Health

## Getting started
```
npm install
npm run start
```

## Run tests
```
npm run test
```

## Thought process
The idea behind solving this problem was first mapping out the counts of each letter in the input string and storing them for reference.
Each word in the dictionary would then have its own letter count map (created same way as the input string). Each character in the word 
would be compared to the inputString map to see if it satisfies each condition:

 - if the word is equal or less than the input string in length
 - if the word's character is in the inputString map
 - if the count of the word's character is less than or equal to the count of the same letter in inputString map

If each of these conditions are met, then we can add it to our results array.

Time complexity: `O((N * M) + K)` where N is the average length of each word in dictionary, M is the number of words in the dictionary, and K is the number of characters in inputString

Space complexity: `O((N * M) + K)` where N is the average length of each word in dictionary, M is the number of words in the dictionary, and K is the number of characters in inputString

