# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

## Personas

Personas são exemplos de usuários de sites e aplicativos de streaming que foram usadas para levantar as informações sobre o problema em questão. Apresentando quatro exemplos de diferentes idades e ocupações a fim de tentar abranger o maior espectro possível de usuários de Streamings e consumidores de conteúdo de áudio-visual. 

+ ### Rafaela Andrade

	![Foto representativa](https://user-images.githubusercontent.com/13721147/194158525-bbc9cf21-13af-47a7-ba23-97f21870d676.png) 

	+ **Idade**: 21 anos

	+ **Ocupação**:  
	Estudante universitária de curso em período semi-integral. Divide apartamento com amigas da mesma Universidade

	+ **Aplicativos**:  
Youtube; Netflix; Amazon Prime;

	+ **Motivações**:  
		+ Apaixonada por filmes e séries
		+  Gosta de conversar sobre o conteúdo de filmes com os amigos e a família

	+ **Frustrações**:  
		+ Pouco tempo livre para buscar novos conteúdos
		+  Falta de informações sobre os filmes e séries e não pode deixar opinião ou ver a opinião de outros.
		
	+ **Hobbies, História**:  
		+ Maratonar séries com os amigos e/ou família.
		+  Poder usar o tempo livre com mais qualidade
		


+ ### João Arruda Jr.

	![Foto representativa](https://user-images.githubusercontent.com/13721147/194162795-998632ec-3ce9-4959-bd37-d89d362249cf.png) 

	+ **Idade**: 32 anos

	+ **Ocupação**:  
	Administrador. Gerente de vendas em loja do Shopping Iguatemi. Atua também em treinamento de equipes para a rede desta loja.

	+ **Aplicativos**:  
Youtube; Netflix; Amazon Prime; HBO Prime, Globo Play; Canais digitais de TV aberta;

	+ **Motivações**:  
		+ Gosta de receber recomendações de títulos.
		+  Gosta de recomendações feitas por pessoas

	+ **Frustrações**:  
		+ Chega em casa tarde e perde muito tempo para encontrar filmes de seu gosto.
		+  Mesmo depois de muito tempo perdido, decepciona-se com os filmes que assisti por recomendação do streaming.
		
	+ **Hobbies, História**:  
		+ Era mais realizado com as recomendações do funcionário da loja de DVD, locadoras e conversas com amigos.
	
 
 
 + ### Graça Silva Dias

	![Foto representativa](https://user-images.githubusercontent.com/13721147/194163415-1477a5d7-7985-4c97-bee3-3177eb849e86.png) 

	+ **Idade**: 43 anos

	+ **Ocupação**:  
	Graduada em Ciências Sociais. Longa carreira como Assistente Social no encaminhamento de crianças em situação de risco familiar.

	+ **Aplicativos**:  
Netflix; Amazon Prime; NET On Demand; Globo Play; Canais digitais de TV aberta

	+ **Motivações**:  
		+ Encontrar pessoas que tenham gostos similares.
		+  Algumas histórias reais podem ser usadas no trabalho.

	+ **Frustrações**:  
		+ Não pode trocar informações sobre os conteúdos com outros usuários no streaming.
		+  Não tenho a liberdade de filtrar os resultados de busca como quero
		
	+ **Hobbies, História**:  
		+ Filmes de histórias reais para inspirar a mim mesma e aos outros.



+ ### Emídio Conceição
	![Foto representativa](https://user-images.githubusercontent.com/13721147/194163883-11e63444-74da-4499-884e-13bbf5f50c07.png) 

	+ **Idade**: 67 anos

	+ **Ocupação**:  
	Engenheiro Mecânico, PHD em Astrofísica e Pós Doutorado em Física Quântica.
Engenheiro Sênior no Instituto Nacional de Pesquisas Espaciais INPE.
Atualmente aposentado.

	+ **Aplicativos**:  
Netflix; Disney; NET on Demand; Canais digitais de TV aberta

	+ **Motivações**:  
		+ Ver lugares que não pude ver pessoalmente.
		+  Encontrar filmes que marcaram a minha vida e títulos semelhantes.

	+ **Frustrações**:  
		+ Só saberei se gosto de um filme após vê-lo. O mecanismo entende que: por que vi, gostei. E recomenda similares na minha lista. E eu não gosto..

		
	+ **Hobbies, História**:  
		+ Quando eu era jovem, poucos filmes eram produzidos. Hoje em dia meus filhos e netos comentam sobre tantos filmes e séries a serem produzidos que fico entusiasmado.


## Histórias de Usuários

Partindo das informações que as Personas apresentaram, chegou-se à conclusão das seguintes histórias de usuário relevantes ao problema identificado.
|Eu como... `Persona`| Quero/Preciso ... `Funcionalidade` |Para ... `Motivo/Valor`                 |
|--------------------|------------------------------------|----------------------------------------|
|Rafaela Andrade  | Encontrar com facilidade filmes e séries que venham ao encontro de preferências pessoais.           | Receber resultados mais assertivos de acordo com sugestão (título, ator, autor, etc..) selecionada pelo usuário.               |
|Rafaela Andrade  | Visualizar o pôster e informações dos filmes e séries (ficha técnica) e ver também comentários de pessoas que já assistiram esse conteúdo.           | Assistir conteúdos baseados na opinião de outros usuários.               |
|João Arruda Jr.  | Recomendações personalizadas.          | Escolher características importantes para a seleção de similaridades de títulos de preferência.               |
|João Arruda Jr.  | Recomendações feitas por pessoas.         | Aumentar as chances de encontrar conteúdos alinhados com as expectativas do usuário.               |
|Graça Silva Dias  | Ter um perfil de usuário no streaming que permite trocar experiências e informações com outros usuários.  | Dar e receber recomendações pessoais.  |
|Graça Silva Dias  | Novas opções de gêneros (categorias ou subcategorias) - (tags) de filmes baseadas no conteúdo | Usar no trabalho conteúdos importantes discutidos em filmes e séries.             |
|Emídio Conceição  | Que conteúdos que já tenha visto, mas, não gostou sejam descartados, não sendo utilizados usados nos dados para recomendações de novos conteúdos. | Participar ativamente dos dados que os mecanismos de recomendação de títulos utilizam.           
|Emídio Conceição  | Ter um espaço onde os filmes e séries que tenha visto e mais gostou fossem mantidos. | Uma lista dos conteúdos já vistos e preferidos é até mais importante do que a lista de desejos dos conteúdos que ainda não foram vistos.

## Requisitos

Os requisitos de um projeto são suas pretensões e necessidades. De maneira geral, os requisitos de um projeto são propriedades que refletem as utilidades e funcionalidades do projeto, expectativas de seus criadores e buscam atender a necessidade de seus futuros usuários. Os requisitos são parte fundamental na estruturação de um projeto de software, são utilizados como abstrações de recursos e aplicabilidades, ajudando na formação de um projeto sólido criando propósitos bem definidos e objetivos claros. 

### Requisitos Funcionais

A ideia de requisito funcional vem de requisitos que atendem funcionalidades. Os requisitos funcionais são ações apresentadas pelo projeto criadas para atenderem seus requisitos.

A tabela a seguir apresenta a lista de requisitos funcionais deste projeto, ordenando-os por prioridade.


|     ID       |     Descrição                                                                                                                                                                     |     Prioridade    |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
|     RF-01    |     O site   deve apresentar uma funcionalidade de pesquisa de filmes recomendados   baseados em um título (ator, autor, diretor, TAG, etc..) a critério do   usuário.            |     Alta          |
|     RF-02    |     O usuário   poderá selecionar TAGS para classificar os filmes que já viu.                                                                                                     |     Alta          |
|     RF-03    |     O site   deve obrigatoriamente requisitar ao usuário seu cadastro na plataforma.                                                                                              |     Alta          |
|     RF-04    |     O site deve permitir realizar comentários sobre filmes                                                                                                                        |     Alta          |
|     RF-05    |     O site deve permitir atribuir nota pessoal a filmes já   vistos                                                                                                               |     Alta          |
|     RF-06    |     O site   deve apresentar, para cada filme e serie, a possibilidade de o usuário   visualizar seu pôster e informações (ficha técnica) e comentários de quem já   assistiu.    |     Média         |
|     RF-07    |     O usuário deve ser questionado se gosta ou não de um   conteúdo quando termina de assistir.                                                                                   |     Média         |
|     RF-08    |     O site   deve permitir a correlação de filmes baseadas nos comentários e recomendações   de usuários.                                                                         |     Média         |
|     RF-09    |     O site   deve apresentar um catálogo de títulos (sites e séries) obtidos através de   uma API.                                                                                |     Média         |
|     RF-10    |     O site   deve manter a funcionalidade de perfis de usuários, mantendo para cada   perfil  informações personalizadas (por   exemplo: títulos preferidos).                     |     Média         |
|     RF-11    |     O site   deve apresentar em sua página principal, recomendações personalizadas   baseadas no perfil de cada usuário                                                           |     Baixa         |


### Requisitos não Funcionais

“A forma como o sistema fará para executar um requisito funcional”, esta é normalmente a definição de requisito não funcional. De forma mais ampla, os requisitos não funcionais são funcionalidades que não podem ser atendidas por requisitos funcionais.

A tabela a seguir apresenta a lista de requisitos não funcionais deste projeto, pontuando sua prioridade.


|     ID        |     Descrição                                                                                                            |     Prioridade    |
|---------------|--------------------------------------------------------------------------------------------------------------------------|-------------------|
|     RNF-01    |     O site deve   ser compatível com os principais navegadores do mercado (Google Chrome,   Firefox, Microsoft Edge).    |     Alta          |
|     RNF-02    |     O site deve   ser de fácil navegação entre suas telas                                                                |     Alta          |
|     RNF-03    |     O site   deverá ser responsivo, permitindo a visualização em um celular de forma   adequada                          |     Média         |
|     RNF-04    |     O site   deverá ser de código aberto                                                                                 |     Média         |


## Restrições

Restrições são obrigações claras e objetivas do projeto. A tabela a seguir mostra a lista de restrições do projeto.

|     ID        |     Descrição                                                                                           |
|---------------|---------------------------------------------------------------------------------------------------------|
|     RE-01     |     A equipe   não pode subcontratar o desenvolvimento do trabalho.                                     |
|     RE-02     |     O site não pode   conter conhecimentos além daqueles aprendidos durante o semestre.                 |
|     RE-03     |     O site não   poderá ser utilizado para fins lucrativos durante, ou após o seu   desenvolvimento.    |

> carlos reinis
