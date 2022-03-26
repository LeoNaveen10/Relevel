/**
 * placing N queens in N*N table
 */


//initializing the size of the table
const N=4;



function isSafe(board,row,col){

    //return true if it safe or false if it is not safe


    //check if any queen is placed in same row
    for(let i=0;i<col;i++){
        if(board[row][i]==1) return false;
    }

    //check vertically up
    for(let i=row;i>=0;i--){
        if(board[i][col]==1) return false;
    }

    //upper left diagonal
    for(let i=row,j=col;i>=0 &&j>=0;i--,j--){
        if(board[i][j]==1)
         return false;
    }
    
    // upper right diagonal
    for(let i=row,j=col;j<N &&i>=0;i--,j++){
        if(board[i][j]==1) 
         return false;
    }

    return true;
}

function solveNqueen(board,col){
    
    //check if the rsult is already achieved, all queens are already achieved
    if(col>=N) return true;

    for(let i=0;i<N;i++){
        if(isSafe(board,i,col)==true){
            board[i][col]=1;

            //recursive call to check add other queens
            if(solveNqueen(board,col+1)==true) 
                return true;
            
            //if placing in queen [i][col] is not a solution,then
            //remove the queen from that cell
            board[i][col]=0;
        }
    }
    return false;
}


let board = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
]
if(solveNqueen(board,0)==false) 
    console.log("solution not found");
else
    console.table(board);
