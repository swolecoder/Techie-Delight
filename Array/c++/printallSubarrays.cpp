//
//  main.cpp
//  Test1
//
//  Created by Ashish Ranjan on 11/10/20.
//

#include <iostream>
#include<unordered_map>

using namespace std;

/*

   Brute Force

 */
void findSum(int arr[], int n){

    for(int i =0; i < n; i++){
        int sum =0;
        // consider all sub-arrays ending at j
        for(int j = i; j < n;j++){
            sum+= arr[j];

            if(sum ==0){
                printf("Number are %d and %d",i,j);
                printf("\n");
                
            }
        }
    }
}

void findSumMethod2(int arr[], int n){

    unordered_map<int, int> map;
    map.insert(pair<int,int>(0,-1));

    int sum =0;

    for(int i =0; i < n; i++){

        sum += arr[i];

        if(map.find(sum) != map.end()){
            auto j = map.find(sum);
            while(j != map.end() && j->first == sum){
                printf("NUmber are %d and %d",j->second +1,i);
                printf("\n");
                j++;
            }
        }
        map.insert(pair<int,int>(sum,i));
    }

}

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    int arr[] = { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 };
    int size = sizeof(arr)/sizeof(arr[0]);
    findSumMethod2(arr, size);
    return 0;
}
