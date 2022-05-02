class newNode  {
    constructor(newvalue){
        this.value = newvalue;
        this.next = null
    }
}

class linkedlist {

    constructor(value){
        let node = new newNode(value);
        this.length=1;
        this.head= node;
        this.tail=this.head;
    }

    push(value){
        let node = new newNode(value);
        if(!this.head){                     //if the list is empty
            this.head=node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){    //if list is not defined
            return undefined;
        }else{
            let pre=this.head,temp=this.head;

            while(temp.next){
                pre = temp;
                temp = temp.next;
            }
            this.tail=pre;               //setting the last before element to tail
            this.tail.next=null;
            this.length--;

            if(this.length==0){  //only having one element in list,then after decrementing len will be 0
                this.head =null;
                this.tail=null;
            }
            return temp;
        }
    }

    unshift(value){  //adding element in first o(1)   //adding  element

        const newnode = new newNode(value);  //create new node
      
        if(!this.head){             //if list is empty
            this.head= newnode;
            this.tail = this.head;
        }else{                      //if list is not empty
            newnode.next=this.head;
            this.head=newnode;
            this.length++;
        }
        return this;
    }
    shift(){   //remove first item
        if(!this.head){             //empty list
            return "list is undefined"
        }else{
            let temp=this.head;
            this.head = this.head.next;
            temp.next=null;
            this.length--;

            if(this.length==0){         //only one element is present in the list
                this.tail=null;         //this.head=null is not needed coz if it has 1 element
                                        // then the this.head.next statement already set head to null
            }
            return temp;
        }
    }

    get(index){
        if(index<0 || index>=this.length) 
            return undefined; //index should be within the range
        else {
            let temp=this.head;
            for(let i=0;i<index;i++)
                    temp=temp.next;
            return temp;
        }
    }

    set(index,value){
        let temp = this.get(index);     //getting the index from get method
        if(temp){
            temp.value = value;
            return temp;
        }
        return undefined;
    }

    insert(index,value){

        if(index==0) 
          return this.unshift(value);
     
        else if(index==this.length-1) 
          return this.push(value);
     
        else if(index<0 || index>=this.length) 
           return undefined; //index should be within the range
     
        else {
            const newnode = new newNode(value);

            let temp=  this.get(index-1);       //pointing to previous node
        
            newnode.next = temp.next;     
            temp.next =newnode;
            this.length++;
            return newnode;
        }
    }

    remove(index){
        if(index==0) 
           return this.shift();
        else if(index==this.length-1) 
           return this.pop()
        
        else {
          let pre = this.head,temp=this.head;

          for(let i=0;i<index;i++){
              pre = temp;
              temp=temp.next;
          }

          pre.next=temp.next;
          temp.next=null;
          this.length--;
          return temp;
        }
    }

    reverse(){

        //reverse the value of head and tail              
        let temp=this.head;


        
        this.head=this.tail;
        this.tail=temp;

        //need 3 variables to iterate through and reverse the list
        let next = temp.next;
        let prev = null;
        
        for(let i=0;i<this.length;i++){
            next = temp.next;
            temp.next=prev;
            prev = temp;
            temp= next;
        }
        return this;
    }
}
let mylist = new linkedlist(5);

// console.log(mylist.push(8));
// mylist.push(19);
// mylist.push(78);

//  console.log("popping out last element",mylist.pop());          //length is 1 after this
// // console.log(mylist.pop());        //length is 0 after this
// // console.log(mylist.pop());        // no list is present after this

// console.log("after unshift      ",mylist.unshift(1)); 
// console.log("after shift     ",mylist.shift());

// console.log("get value ",mylist.get(2));

// console.log("set or update values  ",mylist.set(0,200));

// console.log("insert value at index ",mylist.insert(1,100));

// console.log("removing element ",mylist.remove(1));

// console.log(mylist);

mylist.push(8);
mylist.push(19);

console.log(mylist.reverse());

