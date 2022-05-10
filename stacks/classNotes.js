class Stack{
    constructor(){
        this.data = [];
        this.top = -1;
        this.maxSize = 100;
    }

    size(){
        return this.top+1;
    }

    isEmpty(){
        return this.top <= -1;
    }

    push(element){ //insert
        if(this.top + 1 >= this.maxSize){
            throw new Error("Stack Overflow");
        }
        this.top++;
        this.data[this.top] = element;
    }

    pop(){//remove
        if(this.isEmpty()){
            throw new Error("Stack Underflow");
        }
        this.top--;
    }

    peek(){//top element
        if(this.isEmpty()){
            throw new Error("Stack Empty");
        }
        return this.data[this.top];
    }

    insertElementAtBottom(value){
        if(this.isEmpty()){//base case, only if empty stack then we can push
            this.push(value);
            return;
        }

        let x = this.peek(); //get top element, if not empty create  a new stack to store popped values
        this.pop();
        this.insertElementAtBottom(value); //when empty push values in popped recursive call stack
        this.push(x);
    }


    //using call stack to stroe temp values at each call
    //while pushing the temp values, push at bottom using insrtAtBottom func
    
    reverse(){
        if(this.isEmpty()){
            return;
        }
        let temp = this.peek();
        this.pop();
        this.reverse();
        this.insertElementAtBottom(temp);
    }
}

let myStack = new Stack();
myStack.push(10);
//console.log(myStack.peek());
myStack.push(20);
//console.log(myStack.peek());
myStack.push(30);
//console.log(myStack.peek());

// console.log(myStack.peek());
myStack.pop();
// console.log(myStack.peek());
myStack.pop();
// console.log(myStack.peek());
myStack.push(100);
// console.log(myStack.peek());
myStack.pop();
// console.log("size", myStack.size());
// console.log(myStack.peek());
myStack.pop();
//console.log("size", myStack.size());
if(!myStack.isEmpty()){
    myStack.pop();
    console.log(myStack.peek());
}

myStack.push(200);
myStack.push(201);
myStack.push(202);
myStack.push(203);
//myStack.push(204);

// myStack.push(205);

//console.log(myStack.peek());
//console.log("size",myStack.size());
myStack.insertElementAtBottom(500);

myStack.reverse();
console.log(myStack.peek());
//console.log("size",myStack.size());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
//console.log(myStack.peek());



function checkParentheses(str){
    const st = new Stack();

    for(const ch of str){
        if(ch == '(' || ch == '{' || ch == '['){
            st.push(ch);
        }else if(ch == ')'){
            if(st.peek() == '('){
                st.pop();
            }
            else{
                return false;
            }
        }
        else if(ch == ']'){
            if(st.peek() == '['){
                st.pop();
            }
            else{
                return false;
            }
            
        }
        else if(ch == '}'){
            if(st.peek() == '{'){
                st.pop();
            }
            else{
                return false;
            }
        }
    }

    return st.isEmpty();
}

// console.log(checkParentheses("[{()}{}]"));
// console.log(checkParentheses("[{(}}{}]"));






function nextGreater(arr, n){
    let st = new Stack();

    for(let idx = 0; idx < n; idx++){
        let currEle = arr[idx];
        
        if(!st.isEmpty()){ //stack is not empty
            let topEle = st.peek();
            while(topEle < currEle){
                console.log(topEle, "-->", currEle);
                st.pop();
               
                if(st.isEmpty()){
                    break;
                }
                topEle = st.peek();
            }
        }
        st.push(currEle);
    }

    while(!st.isEmpty()){
        let topEle = st.peek();
        console.log(topEle, "-->", -1);
        st.pop();
    }
}

// let arr = [2, 7, 3, 5, 4, 6, 8];
let arr = [9, 8, 7, 6, 5, 5, 4];
let n = 7;
nextGreater(arr, n);



function nextGreaterReturnArray(arr, n){
    let st = new Stack();
    let resultArray = new Array(n);

    for(let idx = 0; idx < n; idx++){
        let currEle = arr[idx];
        
        if(!st.isEmpty()){ //stack is not empty
            let topEleIdx = st.peek();
            while(arr[topEleIdx] < currEle){
                console.log(arr[topEleIdx], "-->", currEle);
                resultArray[topEleIdx] = currEle;
                st.pop();
               
                if(st.isEmpty()){
                    break;
                }
                topEle = st.peek();
            }
        }
        st.push(idx);
    }

    while(!st.isEmpty()){
        let topEleIdx = st.peek();
        console.log(arr[topEleIdx], "-->", -1);
        resultArray[topEleIdx] = -1;
        st.pop();
    }
    return resultArray
}

// let arr = [2, 7, 3, 5, 4, 6, 8];
let arr1 = [9, 8, 7, 6, 5, 5, 4];
let n1 = 7;
let result = nextGreaterReturnArray(arr1, n1);
console.log(result);