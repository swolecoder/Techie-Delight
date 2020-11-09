#include <iostream>
#include <stdio.h>

using namespace std;

void findPair(int arr[], int sum, int n)
{

    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (arr[i] + arr[j] == sum)
            {
                printf("Pair found at index %d and %d", i, j);
                cout << "Done" << endl;
                return;
            }
        }
    }

    cout << "No pair found" << endl;
}

//map

void findPairMethod2(int arr[], int sum, int n){

   std::unordered_map<int,int>map;

   for(int i =0;i < n; i++){
     int y = sum - arr[i];
     if(map.find(y)!= map.end()){
       printf("Pair found at index %d and %d", map[y],i);
       return;
     }else{
       map[arr[i]] = i;
     }
   }



  cout <<"No pair found"<<endl;

}

int main()
{
    std::cout << "Hello World!\n";
    int arr[] = {8, 7, 2, 5, 3, 1};
    int sum = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
    findPair(arr, sum, n);
    findPairMethod2(arr,sum,n);
    return 0;
}
