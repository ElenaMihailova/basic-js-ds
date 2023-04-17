const {NotImplementedError}=require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items=[];
  }
  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop(); //удаляет элемент и возвращает его значение = есть return
  }

  peek() {
    return this.items[this.items.length-1]; // даёт последний элемент = есть return
  }
}

module.exports={
  Stack
};
