class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next =null;
    }
}

class DoublyLinkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }


    unshift(data){
        let newNode=new Node(data);

        if(this.length==0||this.head==0){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.head.prev=newNode;
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;

        return this;
    }
}

let obj= new DoublyLinkedlist();
obj.unshift(10);
obj.unshift(20);
console.log(obj.unshift(30));
