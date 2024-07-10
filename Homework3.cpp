#include <iostream>
#include <string>
using namespace std;

int main() {
    string Numbers;
    string SaveNumbers;
    string Continue;
    int counter = 0;

    do {
        cout << "Enter numbers: ";
        cin >> Numbers;
        SaveNumbers += Numbers;
        counter += Numbers.length();
        cout << "Would you like to continue? ";
        cin >> Continue;
    } while (Continue != "NO" && Continue != "no" && Continue != "No");

    int OriginalArray[counter];
    int ReverseArray[counter];

    cout << "These are the saved numbers: " << SaveNumbers << endl;

    for (int i = 0; i < SaveNumbers.length(); i++) {
        if (isdigit(SaveNumbers[i])) {
            int ConvertInteger = SaveNumbers[i] - '0';
            OriginalArray[i] = ConvertInteger;
        }
    }

    cout << "This is the original input: ";
    for (int i = 0; i < counter; i++) {
        cout << OriginalArray[i] << " ";
    }
    cout << endl;

    for (int i = 0; i < counter; i++) {
        ReverseArray[i] = OriginalArray[counter - 1 - i];
    }

    cout << "This is the output: ";
    for (int i = 0; i < counter; i++) {
        cout << ReverseArray[i] << " ";
    }
    cout << endl;

    return 0;
}
