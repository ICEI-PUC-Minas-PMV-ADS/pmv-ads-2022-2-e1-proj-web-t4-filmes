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
|Passo 2 | Digitar o nome de conteúdo conhecido, que sabe-se existir no banco de dados| 
|Títulos Usados para Procura  | south park, rick and morty, love death robots, primal               |
|Resultado  | O título pesquisado foi entregue no resultado da busca.               |

Sem outras observações a apresentar.


|Caso de Teste 7| Busca de Conteúdo sem Sucesso |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verificar se o sistema de busca entrega resultados consistentes.         |
|Passo 1 | Acessar a tela de busca              |
|Passo 2 | Digitar o nome de conteúdo conhecido, que sabe-se não existir no banco de dados| 
|Títulos Usados para Procura  | sauth pork, riqui and morthy, love deth robots, brimal               |
|Resultado  | Não foram apresentados resultados.               |

Sem outras observações a apresentar.


|Caso de Teste 8| Busca de Conteúdo com Sucesso |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verificar se o sistema de busca entrega o resultado esperado quando um texto é colado ao invés de ser digitado.           |
|Passo 1 | Acessar a tela de busca              |
|Passo 2 | Colar um texto na área de Busca com o nome de um título que sabe-se existir no banco de dados| 
|Títulos Usados para Procura  | south park, rick and morty, love death robots, primal               |
|Resultado  | O título pesquisado foi entregue no resultado da busca.               |

Sem outras observações a apresentar.


|Caso de Teste 9| Busca de Conteúdo sem Sucesso |
|--------------------|------------------------------------|
|Objetivo do Teste  | Verificar se o sistema de busca entrega o resultado esperado quando um texto é colado ao invés de ser digitado.         |
|Passo 1 | Acessar a tela de busca              |
|Passo 2 | Colar um texto na área de Busca com o nome de um título que sabe-se existir no banco de dados| 
|Títulos Usados para Procura  | sauth pork, riqui and morthy, love deth robots, brimal               |
|Resultado  | Não foram apresentados resultados.               |

Sem outras observações a apresentar.


Observações Gerais para o Campo de Busca / Pesquisa:
 - O campo não apresenta limitação de quantidade de caracteres a serem digitados ou colados;
 - O campo aceita dados alfa-numéricos e caracteres especiais







