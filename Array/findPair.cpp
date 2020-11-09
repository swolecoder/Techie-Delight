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

int main()
{
    std::cout << "Hello World!\n";
    int arr[] = {8, 7, 2, 5, 3, 1};
    int sum = 10;
    int n = sizeof(arr) / sizeof(arr[0]);
    findPair(arr, sum, n);
    return 0;
}
