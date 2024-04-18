const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

grape * 5
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const getUniqueValues = array => [...new Set(array)];
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
orange - apple
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const removeDuplicates = array => Array.from(new Set(array));
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
grape

const sum = (a, b) => a + b;

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
0 - 
const reverseString = str => str.split("").reverse().join("");

