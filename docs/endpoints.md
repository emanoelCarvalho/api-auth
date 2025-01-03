
---

# Endpoints da API

Esta API possui os seguintes endpoints. A URL base para todas as rotas é `http://localhost:3000`.

## Logs de Inicialização

Ao iniciar a aplicação, o log do NestJS exibe as seguintes mensagens:

```
[Nest] 17184  - 03/01/2025, 19:08:21     LOG [InstanceLoader] AuthModule dependencies initialized +1ms
[Nest] 17184  - 03/01/2025, 19:08:21     LOG [RoutesResolver] AppController {/}: +5ms
[Nest] 17184  - 03/01/2025, 19:08:21     LOG [RoutesResolver] UsersController {/users}: +0ms
[Nest] 17184  - 03/01/2025, 19:08:21     LOG [RouterExplorer] Mapped {/users, POST} route +3ms
[Nest] 17184  - 03/01/2025, 19:08:21     LOG [RoutesResolver] AuthController {/auth}: +0ms
[Nest] 17184  - 03/01/2025, 19:08:21     LOG [RouterExplorer] Mapped {/auth/signin, POST} route +0ms
[Nest] 17184  - 03/01/2025, 19:08:21     LOG [RouterExplorer] Mapped {/auth/profile, GET} route +1ms
[Nest] 17184  - 03/01/2025, 19:08:21     LOG [NestApplication] Nest application successfully started +2ms
```

## Endpoints Disponíveis

### 1. **POST /auth/signin**

- **Descrição**: Realiza o login do usuário, retornando um **JWT** para autenticação futura.
- **URL**: `http://localhost:3000/auth/signin`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "email": "usuario@exemplo.com",
    "password": "senha_do_usuario"
  }
  ```
- **Resposta de Sucesso**:
  ```json
  {
    "access_token": "token_gerado"
  }
  ```
- **Resposta de Erro**:
  ```json
  {
    "statusCode": 401,
    "message": "Invalid credentials"
  }
  ```

### 2. **GET /auth/profile**

- **Descrição**: Retorna as informações do usuário autenticado. A autenticação é feita através do **JWT** passado no cabeçalho da requisição.
- **URL**: `http://localhost:3000/auth/profile`
- **Método**: `GET`
- **Cabeçalho**:
  - `Authorization: Bearer <JWT>`
- **Resposta de Sucesso**:
  ```json
  {
    "id": 1,
    "email": "usuario@exemplo.com",
    "name": "Nome do Usuário"
  }
  ```
- **Resposta de Erro**:
  ```json
  {
    "statusCode": 401,
    "message": "Unauthorized"
  }
  ```

### 3. **POST /users**

- **Descrição**: Cria um novo usuário no banco de dados.
- **URL**: `http://localhost:3000/users`
- **Método**: `POST`
- **Corpo da Requisição**:
  ```json
  {
    "email": "usuario@exemplo.com",
    "password": "senha_do_usuario",
    "name": "Nome Completo"
  }
  ```
- **Resposta de Sucesso**:
  ```json
  {
    "id": 1,
    "email": "usuario@exemplo.com",
    "name": "Nome Completo"
  }
  ```
- **Resposta de Erro**:
  ```json
  {
    "statusCode": 400,
    "message": "Bad Request",
    "error": "Validation failed"
  }
  ```

## Conclusão

A API está configurada para suportar autenticação e criação de usuários, utilizando **JWT** para autenticação nas rotas protegidas e **PostgreSQL** como banco de dados. A URL base de todos os endpoints é `http://localhost:3000`.

---

### Como Usar

1. **Iniciar o servidor**: 
   Se ainda não iniciou, faça isso com o comando:

   ```bash
   npm run start:dev
   ```

2. **Testar os Endpoints**: 
   Você pode utilizar ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar os endpoints. Não se esqueça de passar o JWT no cabeçalho para rotas protegidas como `/auth/profile`.

---