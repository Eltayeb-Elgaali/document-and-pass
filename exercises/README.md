<!-- BEGIN TITLE -->
# Document and Pass
<!-- END TITLE -->

<!-- BEGIN TOC -->
> 7/16/2020, 6:58:57 PM

- [0-hello-world](#0-hello-world)
- [1-remove-from-array](#1-remove-from-array)
- [1-repeat-string](#1-repeat-string)
- [1-reverse-string](#1-reverse-string)
- [1-sum-all](#1-sum-all)
- [2-fibonacci](#2-fibonacci)
- [2-get-the-titles](#2-get-the-titles)
- [2-leap-years](#2-leap-years)
- [2-palindromes](#2-palindromes)
- [3-caesar](#3-caesar)
- [3-find-the-oldest](#3-find-the-oldest)
- [3-pig-latin](#3-pig-latin)
- [3-snake-case](#3-snake-case)
<!-- END TOC -->

<!-- BEGIN DOCS -->
---

## [./0-hello-world](./0-hello-world)

<a name="hello"></a>

## hello(thing) ⇒ <code>string</code>
A very simple function, it greets whatever you tell it to


**Returns**: <code>string</code> - a friendly greeting  

| Param | Type | Description |
| --- | --- | --- |
| thing | <code>string</code> | the thing to greet |

**Example**  
```js
const greeting = hello('World');
console.log(greeting); // 'Hello, World!'
```
**Test Report**
```
Started
......


2 specs, 0 failures
Finished in 0.013 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-remove-from-array](./1-remove-from-array)

<a name="removeFromArray"></a>

## removeFromArray(arr, ...value) ⇒ <code>object</code>
This function takes an array and some other arguments 
then removes the other arguments from that array


**Returns**: <code>object</code> - arr  after deletion  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>object</code> | the array from which the other arguments will be removed |
| ...value | <code>object</code> | other arguments to be removed from the array |

**Example**  
```js
const arr = removeFromArray([1, 2, 3, 4], 3);
console.log(arr); // [1,2,4]
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.012 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-repeat-string](./1-repeat-string)

<a name="repeatString"></a>

## repeatString(str, num) ⇒ <code>string</code>
This function simply repeats the string a given number of times


**Returns**: <code>string</code> - repeatedStr  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the array from which the other arguments will be removed |
| num | <code>number</code> | other arguments to be removed from the array |

**Example**  
```js
const str = repeatString('hey', 3)
console.log(str); // 'heyheyhey'
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.009 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-reverse-string](./1-reverse-string)

<a name="reverseString"></a>

## reverseString(str) ⇒ <code>string</code>
This function simply reverse a given string


**Returns**: <code>string</code> - reversedStr  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | string to be reversed |

**Example**  
```js
const result = reverseString('hello there');
console.log(result); // 'ereht olleh'
```
**Test Report**
```
Started
............


4 specs, 0 failures
Finished in 0.004 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-sum-all](./1-sum-all)

<a name="sumAll"></a>

## sumAll(firstNumber, lastNumber) ⇒ <code>number</code>
This function takes 2 numbers and returns the sum of every number between(and including) them:


**Returns**: <code>number</code> - result - the returned summation  

| Param | Type | Description |
| --- | --- | --- |
| firstNumber | <code>number</code> | first number in the range |
| lastNumber | <code>number</code> | last number in the range |

**Example**  
```js
const result = sumAll(1, 4) 
console.log(result); // 10
```
**Test Report**
```
Started
..................


6 specs, 0 failures
Finished in 0.008 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-fibonacci](./2-fibonacci)

<a name="fibonacci"></a>

## fibonacci(max) ⇒ <code>number</code>
This function returns a specific member of the fibonacci sequence
Fibonacci is a a series of numbers in which each number ( Fibonacci number ) 
is the sum of the two preceding numbers.


**Returns**: <code>number</code> - nextNumber - the returned member (Fibonacci number)  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>number</code> | the order of the member to be returned |

**Example**  
```js
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
```
**Test Report**
```
Started
...........................


9 specs, 0 failures
Finished in 0.011 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-get-the-titles](./2-get-the-titles)

<a name="getTheTitles"></a>

## getTheTitles(arr) ⇒ <code>object</code>
This function take an array of objects that represent books with an author and a title as an argument
It returns an array of titles.


**Returns**: <code>object</code> - titlesArr - array of titles  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>object</code> | array of objects |

**Example**  
```js
getTheTitles(books) // ['Book','Book2']
```
**Test Report**
```
Started
...


1 spec, 0 failures
Finished in 0.001 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-leap-years](./2-leap-years)

<a name="leapYears"></a>

## leapYears(year) ⇒ <code>boolean</code>
This function determines whether or not a given year is a leap year. Leap years are determined by the following rules:
Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) 
unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).


**Returns**: <code>boolean</code> - true if leap year and false if not.  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>number</code> | the year to be checked |

**Example**  
```js
const year2003 = leapYears(2003);
console.log(year2003); // false
```
**Test Report**
```
Started
..................


6 specs, 0 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-palindromes](./2-palindromes)

<a name="palindromes"></a>

## palindromes(str) ⇒ <code>boolean</code>
This function determines whether a string is a palindrome.
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.


**Returns**: <code>boolean</code> - true if palindromes and false if not.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to be checked |

**Example**  
```js
const isStrPalindrome = palindromes('hah');
console.log(isStrPalindrome); // true
```
**Test Report**
```
Started
...............


5 specs, 0 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-caesar](./3-caesar)

<a name="caesar"></a>

## caesar(str, chr) ⇒ <code>string</code>
This function substitute each letter in the plaintext by a letter in a fixed number of positions down the alphabet.


**Returns**: <code>string</code> - new encrypted string.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the string to be encrypted |
| chr | <code>number</code> | how many letters to shift |

**Example**  
```js
caesar('A', 1) // simply shifts the letter by 1: returns 'B'
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.008 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-find-the-oldest](./3-find-the-oldest)

<a name="findTheOldest"></a>

## findTheOldest()

**Test Report**
```
Started
.F..F..F.

Failures:
1) findTheOldest finds the oldest person!
.    TypeError: Cannot read property 'name' of undefined.

2) findTheOldest finds the oldest person if someone is still living
.    TypeError: Cannot read property 'name' of undefined.

3) findTheOldest finds the oldest person if the OLDEST is still living
.    TypeError: Cannot read property 'name' of undefined.

3 specs, 3 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-pig-latin](./3-pig-latin)

<a name="translate"></a>

## translate()

**Test Report**
```
Started
.F..F..F..F..F..F..F..F..F.

Failures:
1) #translate translates a word beginning with a vowel
.    Expected undefined to equal 'appleay'..

2) #translate translates a word beginning with a consonant
.    Expected undefined to equal 'ananabay'..

3) #translate translates a word beginning with two consonants
.    Expected undefined to equal 'errychay'..

4) #translate translates two words
.    Expected undefined to equal 'eatay iepay'..

5) #translate translates a word beginning with three consonants
.    Expected undefined to equal 'eethray'..

6) #translate counts "sch" as a single phoneme
.    Expected undefined to equal 'oolschay'..

7) #translate counts "qu" as a single phoneme
.    Expected undefined to equal 'ietquay'..

8) #translate counts "qu" as a consonant even when its preceded by a consonant
.    Expected undefined to equal 'aresquay'..

9) #translate translates many words
.    Expected undefined to equal 'ethay ickquay ownbray oxfay'..

9 specs, 9 failures
Finished in 0.016 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-snake-case](./3-snake-case)

<a name="snakeCase"></a>

## snakeCase()

**Test Report**
```
Started
.F..F..F..F..F..F.

Failures:
1) snakeCase works with simple lowercased phrases
.    Expected undefined to equal 'hello_world'..

2) snakeCase works with Caps and punctuation
.    Expected undefined to equal 'hello_world'..

3) snakeCase works with longer phrases
.    Expected undefined to equal 'this_is_the_song_that_never_ends'..

4) snakeCase works with camel case
.    Expected undefined to equal 'snake_case'..

5) snakeCase works with kebab case
.    Expected undefined to equal 'snake_case'..

6) snakeCase works with WTF case
.    Expected undefined to equal 'snake_case_is_awesome'..

6 specs, 6 failures
Finished in 0.008 seconds

```

[TOP](#Document-and-Pass)

<!-- END DOCS -->
