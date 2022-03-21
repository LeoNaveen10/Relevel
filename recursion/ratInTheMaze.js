let printSol=(sol)=>{
    console.table(sol);
}


//check the values of row and col are within boundaries
let isSafe = (board,row,col,n) =>{

    if(row>=0 && row<=n-1&&col>=0 && col<=n-1&& board[row][col]==1){
        return true;
    }
}

//just a starting point to implement sol array to store results
let solveMaze = (board,n)=>{
    let sol = new Array(n);

    for(let i=0;i<n;i++){
        sol[i]=new Array(n);
        for(let j=0;j<n;j++){
            sol[i][j]=0;
        }
    }

    if(findPath(board,0,0,sol,n)==false){
        console.log("path not found")

    }
    else 
      printSol(sol);
}


//actual path finding is done here
let findPath = (board,row,col,sol,n)=>{

    //base condition to check whether the answers are reached
    if(row==n-1 && col==n-1 &&board[row][col]==1){
        sol[row][col]=1;
        return true;
    }

    if(isSafe(board,row,col,n)){
        //check if the path is already crossed by us
        if(sol[row][col]==1){
            return false;
        }

        //if path is not crossed already we are setting one on the path
        sol[row][col]=1;
        
        //move forward in left side
        if(findPath(board,row,col+1,sol,n))
            return true;

            //move downward
        if(findPath(board,row+1,col,sol,n))
            return true;

        //backtrack move right side
        if(findPath(board,row,col-1,sol,n))
            return true;
        
        //backtrack move upward
        if(findPath(board,row-1,col,sol,n))
            return true;

      //if no path is present then
        sol[row][col]=0;
        return false;
    }
    return false;
}

let board=[[ 1, 0, 0, 0 ], [ 1, 1, 0, 1 ],[ 0, 1, 0, 0 ],[ 1, 1, 1, 1 ] ];
let n = board.length;

solveMaze(board,n);
