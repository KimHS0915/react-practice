const { produce } = require("immer");

const baseState = [
    {
        todo: "Learn ES6",
        done: true
    },
    {
        todo: "Try immer",
        done: false
    }
];

const newState = produce(baseState, draft => {
    draft[1].done = true;
    draft.splice(2, 2, {todo: 'Tweet about it'});
});

const newState1 = [
    ...baseState.map((tweet, index) => 
        index === 1 ? {...tweet, done: true} : tweet
    ),
    { todo: 'Tweet about it'},
];

const newState2 = produce(baseState, draft => {
    draft[1].done = true;
    draft.push({ todo: 'Tweet about it'});
});

console.log(baseState);
console.log(newState);
console.log(newState1);
console.log(newState2);
