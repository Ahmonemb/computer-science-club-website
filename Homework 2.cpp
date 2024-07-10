#include <iostream>
using namespace std;

int main() {
    int a, b, c;


    cout << "Enter three integers: ";
    cin >> a >> b >> c;

    int largest = a;
    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }

    cout << "The largest number is: " << largest << endl;

    return 0;
}
