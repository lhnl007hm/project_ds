#include "stdio.h"
#include <locale.h>

int main() {
   setlocale(LC_ALL, "Portuguese"); // Habilitar a acentuação

   printf("\===============\n");
   int ano, aula, edicao;
   printf("Digite o ano atual: ");
   scanf("%i", &ano);

   printf("Digite a edição que está assistindo: ");
   scanf("%i", &edicao);

   printf("Digite a aula que está assistindo: ");
   scanf("%i", &aula);
   printf("\n================\n");


   printf("CFB Cursos - %i° Edição\n\nAno: %i\n\nAula atual: %i", edicao, ano, aula);
   printf("\n================\n");

   return 0;
}
