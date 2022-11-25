# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
- Site publicado na Internet 
- Navegador da Internet - Chrome, Firefox ou Edge 
- Conectividade de Internet para acesso às plataformas (APISs) 


## Testes de Navegabilidade

Tem por objetivo verificar se todos os links são navegáveis, estão corretos e levam o usuário a uma outra tela existente na aplicação.

Foram feitos testes automatizados e testes manuais, como seguem os resultados abaixo.

Os Testes automatizados foram realizados através de: https://datayze.com/site-navigability-analyzer

Resultado:
![Datayze](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t4-filmes/blob/main/docs/img/Teste_Navegabilidade_Pipoco.png)

Também foi feito teste de forma manual navegando pela aplicação somente para exemplificar o procedimento manual, visto que, os testes automatizados foram positivos e não apresentaram problemas de navegabilidade na aplicação.


## Tela de Busca / Procura:
Na tela de Busca existem os seguintes links para outras telas desta aplicação

- No cabeçalho, na área central, existem dois links: “Inicio”, que liga a página á homepage; e “Procurar” que liga a aplicação à área de busca de conteúdos na aplicação;
- No cabeçalho à direita existe área para a foto do usuário logado com seu nome. Ao clicar sobre a foto é aberto menu de navegação com as opções: “Perfil” ou “Sair”. Ao clicar em sair é direcionado à tela inicial de login. Ao clicar em “Perfil” é direcionado à tela de perfil de usuário;
- Logo abaixo do cabeçalho existe a área “Pesquisar” para a busca de conteúdo na aplicação. Desde a primeira letra digitada na área de “Pesquisa” o sistema de busca já começa a filtrar as possibilidades de resposta e automaticamente a apresentar resultados na área central / principal da tela. O filtro de resultados é aplicado a cada letra digitada, até que o usuário termine a digitação.
- Os resultados são apresentados na forma de imagens com os “Posters” / “Capas” dos títulos de séries e/ou filmes e estas imagens são links para a tela de detalhes daquela conteúdo;
- Ao clicar na imagem de um conteúdo, filme ou série, é direcionado à tela de detalhes daquele título. Nesta tela é apresentado: Poster / Capa do título com o ranking (em estrelas) logo abaixo; à direita é apresentada uma Estrela onde o usuário poderá “favoritas” aquele título; e na área central é apresentada a sinopse deste título, com as informações do mesmo. Na área inferior é apresentada área de “Relacionados”, vou seja, área dedicada á títulos outros que são relacionados àquele resultado da busca do usuário;
- Na tela de detalhes de um título de filme ou série também é apresentado o mesmo cabeçalho da tela de busca, contendo: logo marca; foto do usuário e nome, com a possibilidade de menu navegador para áreas de: perfil ou log-out; link para “Inicio” e para “Procurar”; 

Resultado: 
Todos os links levam à área ou tela esperada.


## Teste de Responsividade

Os testes de responsividade foram automatizados por Google: Teste de compatibilidade com dispositivos móveis
https://search.google.com/test/mobile-friendly?hl=pt

Link para os resultados:
https://search.google.com/test/mobile-friendly/result?id=z2V-iNwESInPOrz9Okacew

![Google](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t4-filmes/blob/main/docs/img/Teste_Responsividade_Pipoco.png)



Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

## Plano de Testes Login

![Caso1](https://user-images.githubusercontent.com/13721147/200649267-96756d94-8f51-4a1a-baab-fd7bb942c621.png)

![Caso2](https://user-images.githubusercontent.com/13721147/200649292-b173ec8b-a78e-4df7-8ace-34e26ed9a06f.png)

![Caso3](https://user-images.githubusercontent.com/13721147/200648485-7af65b80-9966-4281-8c2a-24c06deb3939.png)

![Caso4](https://user-images.githubusercontent.com/13721147/200648626-4cee6164-8329-4dd6-802d-30d604e879bc.png)

![Caso5](https://user-images.githubusercontent.com/13721147/200648785-e3710614-6293-4a5f-abc4-c2fbd3c897a7.png)

## Plano de Testes Tela de Busca / Procura

|Caso de Teste 6| Busca de Conteúdo com Sucesso |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verificar se o sistem de busca entrega o resultado esperado           |
|Passo 1 | Acessar a tela de busca              |
|        | Digitar o nome south park, conteúdo que sabe-se existir no banco de dados| 
|        | Espera-se receber como resultado o título digitado no campo de busca             |
|Resultado  | O título pesquisado foi entregue no resultado da busca.               |

Sem outras observações a apresentar.


|Caso de Teste 7| Busca de Conteúdo sem Sucesso |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verificar se o sistema de busca entrega resultados consistentes.         |
|Passo 1 | Acessar a tela de busca              |
|        | Digitar o nome riqui e morthy, conteúdo que sabe-se não existir no banco de dados| 
|        | Espera-se receber como resultado nenhum título.              |
|Resultado  | Não foram apresentados resultados.               |

Sem outras observações a apresentar.


|Caso de Teste 8| Busca de Conteúdo com Sucesso |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verificar se o sistema de busca entrega o resultado esperado quando um texto é colado ao invés de ser digitado.           |
|Passo 1 | Acessar a tela de busca              |
|        | Colar um texto na área de Busca com o nome do título south park que sabe-se existir no banco de dados| 
|        | Espera-se receber como resultado o título inserido por comendo de calagem no campo de busca              |
|Resultado  | O título pesquisado foi entregue no resultado da busca.               |

Sem outras observações a apresentar.


|Caso de Teste 9| Busca de Conteúdo sem Sucesso |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verificar se o sistema de busca entrega o resultado esperado quando um texto é colado ao invés de ser digitado.         |
|Passo 1 | Acessar a tela de busca              |
|        | Colar um texto na área de Busca com o nome do título riqui and morthi que sabe-se não existir no banco de dados| 
|        | Espera-se receber como resultado nenhum título.               |
|Resultado  | Não foram apresentados resultados.               |

Sem outras observações a apresentar.


Observações Gerais para o Campo de Busca / Pesquisa:
 - O campo não apresenta limitação de quantidade de caracteres a serem digitados ou colados;
 - O campo aceita dados alfa-numéricos e caracteres especiais


## Plano de Testes Tela inicial / tela do filme
![10](https://user-images.githubusercontent.com/69819769/202446480-9c9ae31a-2697-4f1a-a629-7cbc5340b780.png)
![11](https://user-images.githubusercontent.com/69819769/202447037-78d4d28e-5127-4421-99e1-c66183b4a3dd.png)
![12](https://user-images.githubusercontent.com/69819769/202447063-0145df36-1413-41b3-98f0-562d026f247a.png)

## Plano de Testes tela de registro
|Caso de Teste 10| Preenchimento incorreto do formulário |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verficar se a partir dos dados fornecidos a funcionalidade de registrar usuário não é possivel de ser concluída |
|Passo 1 | Acessar a página de registrar-se |
|Passo 2 | Preencher os dados incorretamente, por exemplo: nome: vitor - email: vitor@gmail.com - senha: 1234 - confirmação de senha: 4321 |
|Passo 3 | Clicar no botão "registrar" |
|Resultado  | Ao clicar no botão "registrar" o programa não deverá criar um perfil para o usuário e deverá indicar qual campo está incorreto |


|Caso de Teste 11| Preenchimento correto do formulário |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verficar se a partir dos dados fornecidos a funcionalidade de registrar usuario é possivel de ser concluida |
|Passo 1 | Acessar a página de registrar-se |
|Passo 2 | Preencher os dados corretamente, por exemplo: nome: vitor - email: vitor@gmail.com - senha: 1234 - confirmação de senha: 1234 |
|Passo 3 | Clicar no botão "registrar" |
|Resultado  | Ao clicar no botão "registrar" o programa deverá criar um perfil para o usuário e redirecioná-lo para a página de login |


## Plano de Testes tela de perfil

|Caso de Teste 12| Alterar foto de perfil |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verificar se o usuário tem possibilidade de alterar a sua foto de perfil |
|Passo 1 | Acessar a página de perfil |
|Passo 2 | Clicar na foto de perfil |
|Passo 3 | Clicar no botão "upload" |
|Passo 4 | Selecionar uma imagem do computador |
|Passo 5 | Clicar em "OK" |
|Resultado  | O site deve editar o perfil do usuario, atualizando sua foto de perfil e também a foto de preview no cabeçalho |


|Caso de Teste 13| Alterar banner do perfil |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verificar se o usuário tem possibilidade de alterar o banner do seu perfil |
|Passo 1 | Acessar a página de perfil |
|Passo 2 | Clicar no banner do perfil |
|Passo 3 | Clicar no botão "upload" |
|Passo 4 | Selecionar uma imagem do computador |
|Passo 5 | Clicar em "OK" |
|Resultado  | O site deve editar o perfil do usuario, atualizando o banner da página |


|Caso de Teste 14| Editar nome do perfil |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verificar se o usuário tem possibilidade de alterar o seu nome na página de usuário |
|Passo 1 | Acessar a página de perfil |
|Passo 2 | Clicar no nome de usuário do perfil |
|Passo 3 | Digitar um novo nome de usuário |
|Passo 5 | Clicar em "OK" |
|Resultado  | O site deve editar o perfil do usuario, atualizando o nome do usuário na página e no preview do cabeçalho |


|Caso de Teste 15| Editar bio do usuário |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verificar se o usuário tem possibilidade de alterar o sua biografia na página de usuário |
|Passo 1 | Acessar a página de perfil |
|Passo 2 | Clicar na bio |
|Passo 3 | Digitar uma nova bio |
|Passo 5 | Clicar em "OK" |
|Resultado  | O site deve editar o perfil do usuario, atualizando a bio do usuário na página |
