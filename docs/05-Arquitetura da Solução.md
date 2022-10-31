# Arquitetura da Solução

A arquitetura de solução é uma parte imprescindível do nosso projeto, nela nossa equipe prontamente pensou em uma solução que fará o desenvolvimento de nosso projeto o mais fluido, bonito e organizado possível.

Nossa solução conta com as seguintes tecnologias:

- `HTML`: É uma tecnologia cujo código utilizado serve para estruturar uma página web e seu conteúdo.

- `CSS`: É uma tecnologia cujo código utilizado serve para estilizar  uma página web e seu conteúdo.

- `Javascript`: É uma linguagem de programação interpretada com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.

- `Vercel`: É um serviço de hospedagem de site estático que usa arquivos HTML, CSS e JavaScript diretamente de um repositório no GitHub.

- `IMDb API`: É um serviço web para receber informações de filmes, séries e elencos, e incluem itens como especificações de filmes, imagens, pôsteres, trailers, classificação e muito mais.
Diagrama de componentes

  Segue abaixo os componentes que fazem parte da nossa solução:


![Diagrama de arquitetura drawio](https://user-images.githubusercontent.com/69819769/199082976-3a7d1548-a9d7-478d-8731-7afcb11612e6.png)



## Diagrama de componentes

 Solução implementada conta com os seguintes módulos:
 
 - `Navegador` - Interface básica do sistema.
 
 - `Páginas Web` - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.

+ `Local Storage` - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
	- `Cadastro` - Login e senha do usuário
 
	- `Comentários` - Registro de opiniões dos usuários sobre os filmes.

	- `Perfil` - Informações da pagina de perfil do usuário.

	- `Indicações` - Filmes selecionados pelo site para o usuário.

- `IMDb API` - plataforma que permite o acesso aos filmes exibidos no site.

- `Hospedagem` - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

## Hospedagem

Nosso site utiliza a plataforma Vercel como ambiente de hospedagem. O 
site é mantido no ambiente da URL:

https://vercel.com/

A publicação do site no Vercel é feita por meio de uma submissão do projeto no site do Github.
