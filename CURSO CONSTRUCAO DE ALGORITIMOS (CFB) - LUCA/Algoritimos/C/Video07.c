#include "stdio.h"
#include <locale.h>

int main() {
   setlocale(LC_ALL, "Portuguese"); // Habilitar a acentua��o

   printf("\===============\n");
   int ano, aula, edicao;
   printf("Digite o ano atual: ");
   scanf("%i", &ano);

   printf("Digite a edi��o que est� assistindo: ");
   scanf("%i", &edicao);

   printf("Digite a aula que est� assistindo: ");
   scanf("%i", &aula);
   printf("\n================\n");


   printf("CFB Cursos - %i� Edi��o\n\nAno: %i\n\nAula atual: %i", edicao, ano, aula);
   printf("\n================\n");

   return 0;
}
