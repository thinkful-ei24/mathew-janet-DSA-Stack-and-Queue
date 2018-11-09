'use strict';

//stack class drills

class _Node {
  constructor(data, next){
    this.data= data;
    this.next= next;
  }
}

class Stack {
  constructor(){
    this.top=null;
  }

  push(data){
  //create new Node
  // pass in data as argument
  // Our pointer (next) needs to equal whatever our top is currently
  //Reassign top to be this new node

    const node = new _Node(data, this.top);
    this.top = node;

  }

  pop(){
    //Create a variable node that points to this.top
    //Reassign this.top to node.next (which is the item below the current node)
    //return node
    if (this.top===null){
      return null;
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  return stack.top.data;
}

function display(stack) {
  //input: 5, 4, 3
  //output: 5...4...top is 3

  //create a new stack
  //loop through old stack
  //  push each value from old stack to new stack
  //  stop when top == null
  // new stack is 3, 4, 5
  //loop through new stack
  //  pop item from new stack
  //  concat to string (num...) (each popped value)
  // print: 5, 4, 3
  const newStack = new Stack();
  let outputString = '';
  let tempPosition = stack.top;


  while (tempPosition) {
    // push tempPosition.data into newStack
    // save stack.next into tempPosition
    newStack.push(tempPosition.data);
    tempPosition = tempPosition.next;
  }

  while (newStack.top) {
    outputString += newStack.pop() + '...';
  }

  outputString += 'finished!!!';
  return outputString;
}

const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
// console.log(stack.pop());
// console.log(peek(stack))
console.log(display(stack))
// display(stack)
// console.log(stack);


