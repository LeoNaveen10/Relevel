#include<iostream>

using namespace std;

int main()
{  cout<<"gasgs";
    int a[10],b[10];
    int i,j,x;

    cout<<"enter no of elements in a array\t";
    cin>>i;

    for(x=0;x<i;x++)
      cin>>a[x];

    for(x=0,j=i-1;x<i;x++,j--)
       b[j]=a[x];

    for(int x=0;x<i;x++)
      cout<<b[x];

return 0;
}
