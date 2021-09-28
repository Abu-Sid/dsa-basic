//A linked list is a way to represent… well, a list of items.
// A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list.

// Each element (commonly called nodes) contains two items: the data stored and a link to the next node. The data can be any valid data type. You can see this illustrated in the diagram below.
// The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference.
// Adv: Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. This is one advantage it has over arrays.
// DisAdv: Search operations are slow in linked lists.uses more memory than arrays because of pointer
//There are three types of linked lists: Singly Linked Lists: Each node contains only one pointer to the next node. This is what we have been talking about so far.
// Doubly Linked Lists: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.
// Circular Linked Lists: Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop. 
class Node {
    constructor(value){
        this.value = value;
        this.next=null;
    }
}

class LinkedList {
    constructor(head){
        this.head= head
    }
    add(value){
        const newNode = new Node(value);
        // this.head.next= newNode;
        let current = this.head;
        while(current.next !=null){
            current = current.next;
        }
        current.next = newNode;
    }
}
const head = new Node(20);
const listPeople= new LinkedList(head)
listPeople.add(30)
listPeople.add(40)
console.log( listPeople.head);
//Node { value: 20, next: Node { value: 30, next: Node { value: 40, next: null } }}