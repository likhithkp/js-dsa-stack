// Stack

// Functions on stacks
// push() 
// pop() 
// peek() 
// isEmpty() 
// size() 

class Stack {
    constructor() {
        this.stack = [];
    };

    push(element) {
        return this.stack.push(element);
    };

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        };
        return this.stack.pop();
    };

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        };
        return this.stack[this.size() - 1];
    };

    isEmpty() {
        return this.stack.length === 0;
    };

    size() {
        return this.stack.length;
    };
};

// Ques 1 : Reverse the order of the word
function reverseOrder(string){
    const items = string.split(" ");
    const stack = [];

    for(let i in items){
        stack.push(items[i]);
    };

    let finalString = "";

    while(stack.length){
        const current = stack.pop();

        if(current){
            finalString += " " + current;
        }
    }

    return finalString.trim();
}

console.log(reverseOrder("Good Morning"));