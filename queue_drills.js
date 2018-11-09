class _Node{
  constructor(value){
    this.value=value;
    this.next=null;
    this.previous=null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(value){
    const newNode = new _Node(value);
    if(this.first===null){
      this.first=newNode;
    }
   
    if(this.last){
      newNode.next = this.last;
      this.last.previous = newNode;
    }
    this.last = newNode;
  }

  dequeue(){

    if(this.first===null){
      return;
    }
    const node = this.first;
    this.first = node.previous;

    if(node === this.last){
      this.last =null;
    }

    return node.value;
  }

}

const ourQueue = new Queue();
ourQueue.enqueue(1);
ourQueue.enqueue(2);
ourQueue.enqueue(3);
console.log(ourQueue.dequeue());
console.log(ourQueue);