# ursoteca-node-mongodb

## Sistema de biblioteca com cadastro de livros (CRUD completo usando MongoDB) e cadastro de usuários com login, no padrão MVC.

### Tecnologias usadas:
- HTML
- CSS
- Bootstrap
- Node.js
- Express
- MongoDB

### Página cadastrar usuário:
/cadastrar-usuario <br/>
Há dois cadastros, um para usuário comum e outro para administrador, ambos com usuário e senha. <br/>
![Cadastrar Usuário](https://i.imgur.com/eZ3AZsl.png) <br/>

### Página login:
/login <br/>
Quando feito login com sucesso, caso o usuário logado seja admin, a página redireciona para a rota /livros-adm, ou para a rota /livros, caso o usuário logado seja um usuário comum. <br/>
![Login](https://i.imgur.com/9KHerL1.png)

### Página de listagem de livros para o administrador
/livros-adm <br/>
Nessa página o admin logado pode visualizar os livros cadastrados, editar informações sobre os livros, cadastrar um livro novo e deletar livros. <br/>
![Livros ADM](https://i.imgur.com/Pp6kJjk.png)

### Página cadastrar livro
/cadastrar-livro <br/>
Nessa página o admin pode cadastrar um novo livro no sistema.
A página possui validação de campos no cadastro, deixando as bordas verdes (se tiver correto) e vermelhas (se tiver errado). <br/>
![Cadastrar Livro](https://i.imgur.com/nIb6cKb.png)

### Página editar livro
Nessa página o admin pode editar as informações do livro selecionado <br/>
![Editar Livro](https://i.imgur.com/w5ucKws.png)

### Página de listagem de livros para o usuário comum
/livros <br/>
Nessa página o usuário logado pode só ver os livros cadastrado e suas informações. <br/>
![Livros](https://i.imgur.com/SVoZ1pa.png)

**Observação:**
A aplicação não possui sistema de autenticação/autorização de rotas, ou seja, qualquer usuário que acessar as rotas de admin (/livros-adm, /cadastrar-livro) manualmente digitando no navegador conseguirá acessar as páginas.

## Instruções para rodar o projeto:
- Tenha certeza de que tem o node instalado.
- Digite npm install no terminal, dentro da pasta raíz do projeto para instalar as dependências.
- Como a aplicação usa um cluster do MongoDB Atlas para o banco de dados, na linha 9 do arquivo app.js terá que substituir "${process.env.MONGO_DB_CONNECTION}" por uma string de conexão do MongoDB, com o seu próprio username, password e collection.
- Digite node app.js para rodar a aplicação.
- A aplicação rodará na porta 3000, ex: http://localhost:3000/login

## Sobre o Autor
***Rafael Pontes*** <br/>
[GitHub](https://github.com/leafarpontes) | [Linkedin](https://www.linkedin.com/in/rafael-p/)
