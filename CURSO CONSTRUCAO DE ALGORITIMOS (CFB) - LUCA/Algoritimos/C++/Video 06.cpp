#include <iostream>

using namespace std;

int main() {

    int valor_variavel1 = 10; //primeiro valor da variavel
     cout << valor_variavel1 << endl; //exibindo tal valor na tela do usuario

     valor_variavel1 = 20; //por ser uma VARIAVEL mudei seu valor
     cout << valor_variavel1 << endl; // exibindo tal valor na tela do usuario

     const int valor2 = 40; // valor constante, nao tem como muda-lo
     cout << valor2 << endl; // exibindo o valor na tela do usuario

   return 0;
}
