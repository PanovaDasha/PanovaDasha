const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

76,50,55,41,89,58,97,79,28,97,81,81,70,71,11,23,21,15,20,2,90,85,85,92,89,51,56,58,43,2,9,69,35,11,1,44,43 / grape
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
kiwi

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const formatDate = date => new Date(date).toLocaleDateString();
const reverseString = str => str.split("").reverse().join("");

50 - true
const getRandomIndex = array => Math.floor(Math.random() * array.length);

false / orange
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

65 - apple

const findSmallestNumber = numbers => Math.min(...numbers);
45,5,13,18,0,89,8,48,14,62,21,42,84,65,8,5,81,68,36,55,38,56,89,5,51,36,41,56,72,81,65,9,6,6,86,62,9,92,43,36,56,1,5,69,77,32,70,71,15,62,7,60,65,51,70,17,74,65,60,72,26,82,69,45,49,93,22,94,22,66,30,33,3,80,72,17,65,24,17,76,21,45,95,11,75,7 * 25,79,29,81,13,12,63,91,10,28,93,54,57,60,74,93,46,34
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
apple

const capitalizeString = str => str.toUpperCase();
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
43 + apple

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const formatDate = date => new Date(date).toLocaleDateString();

kiwi * kiwi
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
grape

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
let array = getRandomArray(); array.forEach(item => console.log(item));
