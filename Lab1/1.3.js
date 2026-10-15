const list = [
    true, 'hello', 5, 12, -200, false, false, 'word',
    67, 'КПІЦЕЛЮБОВ', null, 2026, true, '67', undefined
];

const collection = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0
};

for (const item of list) {
    const type = typeof item;
    collection[type]++;

}

console.log(collection);