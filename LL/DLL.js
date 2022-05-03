class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedlist {

    constructor(data) {
        let newNode = new Node(data);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }


    unshift(data) {
        //adding node in start
        let newNode = new Node(data);

        if (!this.head) {                     //empty list
            this.head = newNode;
            this.tail = newNode;


        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    push(data) {

        let newNode = new Node(data);
        if (this.lenght == 0) {
            this.head = newNode;
            this.tail = newNode;
            this.prev = null;
            this.next = null;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        let temp;
        if (!this.head) {
            return "empty list";
        } else {
            temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
            this.length--;
        }

        if (this.length == 0) {   //after  decrementing if only one  node remaining
            this.head = null;
            this.tail = null;
        }
        return temp;

    }

    shift() {
        let temp;

        if (!this.head) {
            return "empty list altogether";
        }
        else {
            temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
            this.length--;
        }

        if (this.length == 0) {     //if length is 0 after decrementing
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    /**
     * get the  node at particular index
     * 
     */


    get(index) {
         let temp = this.head;
            if(index<0||index>this.length){
                return "wrong request"
            }
            else if(this.length==1){
                return temp;
            }
            else{
                for(let i=0;i<index;i++){
                    temp=temp.next;
                }
            }
        return temp.next;
    }

    print(){
        let temp=this.head;
        while(temp){
            console.log(temp);
            temp=temp.next;
        }
    }

    set(index,data){
        let newNode= new Node(data);
        let temp;
        let front;

        if(index<0||index>this.length){
            return "wrong request";
        } else {
            temp=this.head;
            front=temp.next;

            for(let i=0;i<index;i++){
              temp=front;
              front=front.next;
            }

            temp.next=newNode;
            newNode.prev=temp;
            front.prev=newNode;
            newNode.next=front;

            return this;
        }

        }
    
}

let obj = new DoublyLinkedlist(10);

// console.log(obj);

console.log(obj.push(20));

// console.log(obj.push(30));
// console.log(obj.push(40));
// console.log("pop is ",obj.pop());

console.log("unshift is", obj.unshift(100));
// console.log("shift is", obj.shift());

// console.log("get value is",obj.get(1));

// obj.print();

console.log(obj.set(1,99));

console.log("getting after setting is",obj.get(1));




