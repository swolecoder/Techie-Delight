//
//  main.cpp
//  Test1
//
//  Created by Ashish Ranjan on 11/10/20.
//

#include <iostream>
#include <unordered_map>

using namespace std;

//method 1
void sort(int arr[], int n)
{
    int zeros = 0;

    for (int i = 0; i < n; i++)
    {
        if (arr[i] == 0)
            zeros++;
    }

    int k = 0;

    while (zeros > 0)
    {
        arr[k++] = 0;
        zeros--;
    }

    while (k < n)
    {
        arr[k++] = 1;
    }
}

//method 2
void sortMthod2(int arr[], int n)
{

    int k = 0;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == 0)
        {
            arr[k++] = 0;
        }
    }

    for (int i = k; i < n; i++)
    {
        arr[i] = 1;
    }
}

//method3

void swap(int arr[], int i, int j)
{
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

void sortMthod3(int arr[], int n)
{
    int pivot = 1;
    int j = 0;

    for (int i = 0; i < n; i++)
    {
        if (arr[i] < pivot)
        {
            swap(arr, i, j);
            j++;
        }
    }
}

int main(int argc, const char *argv[])
{
    // insert code here...
    int A[] = {0, 0, 1, 0, 1, 1, 0, 1, 0, 0};
    int n = sizeof(A) / sizeof(A[0]);

    sortMthod3(A, n);

    // print the rearranged array
    for (int i = 0; i < n; i++)
    {
        printf("%d ", A[i]);
    }

    return 0;
}
