"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findWords_1 = require("../findWords");
test("findWords tests", () => {
    const inputString1 = "ate", dictionary1 = ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"], result1 = ["ate", "eat", "tea"], inputString2 = "oogd", result2 = ["dog", "do", "god", "goo", "go", "good"], inputString3 = 'abcde', dictionary3 = ['ab', 'de', 'abcdefg', 'zyx', 'jklabc'], result3 = ['ab', 'de'];
    expect((0, findWords_1.findWords)(inputString1, dictionary1)).toEqual(expect.arrayContaining(result1));
    expect((0, findWords_1.findWords)(inputString2, dictionary1)).toEqual(expect.arrayContaining(result2));
    expect((0, findWords_1.findWords)(inputString3, dictionary3)).toEqual(expect.arrayContaining(result3));
});
test("findWords empty inputString or empty dictionary", () => {
    const emptyInputString = '', emptyDictionary = [], inputString = 'abc', dictionary = ['aasdf', 'bsadf', 'dsf', 'easdf'], emptyResult = [];
    expect((0, findWords_1.findWords)(emptyInputString, dictionary)).toEqual(expect.arrayContaining(emptyResult));
    expect((0, findWords_1.findWords)(inputString, emptyDictionary)).toEqual(expect.arrayContaining(emptyResult));
    expect((0, findWords_1.findWords)(emptyInputString, emptyDictionary)).toEqual(expect.arrayContaining(emptyResult));
});
//# sourceMappingURL=findWords.test.js.map