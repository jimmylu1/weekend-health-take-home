import {findWords} from '../findWords'

test("findWords tests", () => {
    const inputString1: string = "ate",
          dictionary1: string[] = ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"],
          result1: string[] = ["ate", "eat", "tea"],
          inputString2: string = "oogd",
          result2: string[] = ["dog", "do", "god", "goo", "go", "good"],
          inputString3: string = 'abcde',
          dictionary3: string[] = ['ab', 'de', 'abcdefg', 'zyx', 'jklabc'],
          result3: string[] = ['ab', 'de'];

    expect(findWords(inputString1, dictionary1)).toEqual(expect.arrayContaining(result1));
    expect(findWords(inputString2, dictionary1)).toEqual(expect.arrayContaining(result2));
    expect(findWords(inputString3, dictionary3)).toEqual(expect.arrayContaining(result3));
})

test("findWords empty inputString or empty dictionary", () => {
    const emptyInputString: string = '',
          emptyDictionary: string[] = [],
          inputString: string = 'abc',
          dictionary: string[] = ['aasdf', 'bsadf', 'dsf', 'easdf'],
          emptyResult: string[] = [];

    expect(findWords(emptyInputString, dictionary)).toEqual(expect.arrayContaining(emptyResult));
    expect(findWords(inputString, emptyDictionary)).toEqual(expect.arrayContaining(emptyResult));
    expect(findWords(emptyInputString, emptyDictionary)).toEqual(expect.arrayContaining(emptyResult));
})