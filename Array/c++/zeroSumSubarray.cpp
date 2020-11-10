#include <iostream>
#include <unordered_set>
using namespace std;

bool zeroSumSubarray(int arr[], int n)
{

    //set
    unordered_set<int> set;
    set.insert(0);

    int sum = 0;

    for (int i = 0; i < n; i++)
    {
        sum += arr[i];

        if (set.find(sum) != set.end())
        {
            printf("Found");
            return true;
        }
        set.insert(sum);
    }
    return false;
}


int main() {
   int A[] = {4, 2, -3, -1, 0, 4};
    int n = sizeof(A) / sizeof(A[0]);

    zeroSumSubarray(A, n) ? cout << "Subarray exists" : cout << "Subarray do not exist";

}