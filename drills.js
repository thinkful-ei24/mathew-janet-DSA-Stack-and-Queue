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
      throw new Error('The stack is empty');
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

function reverseStack(stack){
  const newStack = new Stack();
  let tempPosition = stack.top;


  while (tempPosition) {
    // push tempPosition.data into newStack
    // save stack.next into tempPosition
    newStack.push(tempPosition.data);
    tempPosition = tempPosition.next;
  }

  return newStack;

}

function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // your code goes here
  //convert string into a stack 'strStack'
  //call the function that reverses the stack
  //create a new stack that is the 'string' stack reversed 'strStackRev'
  //create a variable call tempPosition = strStack.top
  //create another cariable called tempPositionRev = strStackRev.top
  //loop through 1 stack and check to see if tempPosition.data is equal to tempPositionRev.data
  //if there are not, break the loop and return false
  //if they are equal, reassign both positions to their next value (ex tempPositionRev.next)

  const strStack = new Stack();

  for(let i = 0; i<str.length; i++){
    strStack.push(str[i]);
  }

  const strStackRev = reverseStack(strStack);

  let tempPosition = strStack.top;
  let tempPositionRev = strStackRev.top;

  while (tempPosition){
    if(tempPosition.data!==tempPositionRev.data){
      return false;
    }

    tempPosition = tempPosition.next;
    tempPositionRev = tempPositionRev.next;

  }

  return true;
}

function matchParenthesis(expression) {
  //input: 5 + (4*2 + 7*(4 + 23) - 7/(43-42+23(23*76 + 5)))
  //  stack: 5 + (4*2 + 7*(4 + 23) - 7/(43-42+23(23*76 + 5)))
  //output: true

  //input: 5 + (4*2 + 7*(4 + 23) - 7/(43-42+23(23*76 + 5)
  //  stack: (()(()
  //output: false
  // ())(
  // countL: 1   countR: 2    if countR > countL, wrong
  // count: -1   if count < 0, wrong
  // stack: true...empty...if error, return error
  // stack: push when seeing (, pop when seeing )

  const newStack = new Stack();

  for(let i=0; i<expression.length; i++) {
    if (expression[i] === '(') {
      newStack.push(i);
      console.log(display(newStack))
    } else if (expression[i] === ')') {
      try {
        newStack.pop();
        console.log(display(newStack))
      } catch(error) {
        console.log('The thing is an error')
        return i;
      }
    }
  }

  if (newStack.top) {
    return newStack.top.data;
  }

  return true;
}

// function sortStack(stack){
//////////////////Need to come back to this
// }



console.log(matchParenthesis('5 + (4*2 + 7*(4 + 23) - 7/(43-42+23(23*76 + 5)'));

// const stack = new Stack();
// stack.push(5);
// stack.push(4);
// stack.push(3);
// // console.log(stack.pop());
// // console.log(peek(stack))
// console.log(is_palindrome('hello'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('Tauhida'));
// console.log(is_palindrome('1001'));
// console.log(display(reverseStack(stack)));
// display(stack)
// console.log(stack);







