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
