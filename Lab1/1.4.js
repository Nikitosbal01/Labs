const list = [
    true, 'hello', 5, 12, -200, false, false, 'word',
    67, 'КПІЦЕЛЮБОВ', null, 2026, true, '67', undefined
];

const collection = {};

for (const item of list) {
    const type = typeof item;

    if (collection[type] === undefined) {
        collection[type] = 0;
    }

    collection[type]++;
}

console.log(collection);