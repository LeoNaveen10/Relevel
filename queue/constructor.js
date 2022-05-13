class List  {
    constructor(value){
        this.data = value;
        this.next  = null;
    }
}

class queue {
    constructor(value){
        const newNode = new List(value);
        this.first = newNode;
        this.last=newNode;
        this.length=1;

        console.log(this.length);
    }

    enqueue(value){   //always push in end of list -->  O(1)
            const newNode = new List(value);

            if(this.length==0){
                this.first=newNode;
                this.last = newNode;
            }else{

                this.last.next = newNode;
                this.last=newNode;
            }
            this.length++;
            return this;

    }

    dequeue(){  //always remove from first of list -->  O(1)

        if(this.length==0){
            return "queue not defined"
        } 
        let temp=this.first;

        if(this.length==1){
            this.last = null;
        }

        this.first=this.first.next;
         temp.next=null;
        this.length--;

        return temp.data;
    }

}
 const obj =new  queue(10);

console.log(obj);

console.log(obj.enqueue(20));
console.log(obj.enqueue(30));

console.log(obj.dequeue());
console.log(obj.dequeue());
console.log(obj.dequeue());
console.log(obj.dequeue());






