//
//  main.cpp
//  Test1
//
//  Created by Ashish Ranjan on 11/10/20.
//

#include < iostream >
using namespace std;

int findDuplicate(int arr[], int n){
    bool visited[n];
    fill(visited, visited + n, 0);


    for (int i = 0; i < n; i++) {

        if (visited[arr[i]]) {
            return arr[i];
        }

        visited[arr[i]] = true;
    }

    return -1;
}

int main(int argc, const char * argv[]) {
    // insert code here...
    int A[] = { 1, 1, 2, 3 };
    int n = sizeof(A) / sizeof(A[0]);
    printf("Ans %d", findDuplicate(A, n));


    return 0;
}
