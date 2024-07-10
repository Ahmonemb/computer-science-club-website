#include <iostream>
using namespace std;


int LargestNumber(int num1, int num2, int num3) {
    int largest = num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    return largest;
}

int SmallestNumber(int num1, int num2, int num3) {
    int smallest = num1;
    if (num2 < smallest) {
        smallest = num2;
    }
    if (num3 < smallest) {
        smallest = num3;
    }
    return smallest;
}

int main() {
    int num1, num2, num3;
    cout << "Enter three integers: ";
    cin >> num1 >> num2 >> num3;

    int largest = LargestNumber(num1, num2, num3);
    int smallest = SmallestNumber(num1, num2, num3);

    cout << "largest: " << largest << endl;
    cout << "smallest: " << smallest << endl;

    return 0;
}
