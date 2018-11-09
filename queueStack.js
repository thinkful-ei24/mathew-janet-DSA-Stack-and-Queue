'use strict';

class _Node{
  constructor(value){
    this.value=value;
    this.next=null;
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

class QueueStack{
  constructor(){
    this.top = null;
  }

  enqueue(value){
    const node = new _Node(value, this.top);
    this.top = node;
  }

  _reverse() {
    const stackRev = new QueueStack;
    //To Reverse: 
    //    pop current stack
    //    push StackRev
    //    stackRev is done
    //stackRev.top = this.QueueStack.top;
    // console.log(stackRev.top)
  }

  dequeue(){
    // Reverse current stack and store in StackRev
    // To Reverse: 
    //    pop current stack
    //    push StackRev
    //    stackRev is done
    // Pop top off = Popvalue
    // Reverse StackRev and store in this.QueueStack
    // return value
    this._reverse();

    //return node.value;
  }

}

const queStack = new QueueStack;
queStack.enqueue('A')
queStack.enqueue('B')
queStack.enqueue('C')

console.log(queStack)