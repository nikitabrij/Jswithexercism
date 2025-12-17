//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);

    if(!this.tail){
      this.head = this.tail = node;
    }else{
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (!this.tail) return undefined;

    const value = this.tail.value
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return value
  }

  shift() {
    if(!this.head) return undefined;

    const value = this.head.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return value
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  delete(value) {
    let current = this.head;

    while (current) {
      if (current.value === value){
        if (current === this.head){
          this.shift();
        } else if (current === this.tail){
          this.pop();
        } else{
          current.prev.next = current.next;
          current.next.prev = current.prev;
          this.length--;
        }
        return;
      }
      current = current.next;
    }
  }

  count() {
    return this.length;
  }
}
