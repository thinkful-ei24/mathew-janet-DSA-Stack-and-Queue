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

const stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
console.log(stack.pop());
console.log(stack);

