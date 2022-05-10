class newStack {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {

    constructor(value) {
        const newNode = new newStack(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new newStack(value);
        if(this.length==0){
            this.top=newNode;
        }
        else{
        newNode.next = this.top;
        this.top = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        let temp;
        if (this.length == 0) {
            return "undefined stack";
        }
        temp=this.top;
        this.top=this.top.next;
        temp.next=null;
        this.length--;

        if(this.length==0){
            this.top = null;
            this.next=null;
        }
        return temp.data;
    }
}

const obj = new Stack(10);
console.log(obj);

console.log(obj.push(20));
console.log(obj.pop());