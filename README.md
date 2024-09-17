# Kanban-Board
Kanban Board App in FastAPI and react

Para rodar você vai precisar instalar:

python 3.10.6

node 8.12.1

docker desktop

fastapi

uvicorn

tortoise-orm[asyncpg]

psycopg2-binary

passlib[bcrypt]

python-multipart

pyjwt

react-router-dom

styled-components

http-proxy-middleware

Primeiramente execute o comando ( docker-compose up ) no diretório principal

Após isso no diretório backend/env inicie o fastapi com o comando ( uvicorn main:app --reload )

Por fim inicie o react com o comando ( npm start ) no diretório frontend

ATENÇÃO!

Para poder usar o aplicativo você deve:

1º - Criar o usuário do gerente no localhost:3000/register

Lembre-se de sempre deslogar quando você for mudar da conta do gerente para a do funcionário (se não mudar o board é apagado)
2º - Criar o usuário do funcionário no localhost:3000/empregister

Agora você pode acessar todas as funções:

Na conta do gerente ( localhost:3000/login ) você poderá criar as tabelas de serviços para que o hóspede possa ver e criar suas solicitações

O ( localhost:3000/request ) é a parte do hóspede, onde ele poderá realizar suas solicitações baseadas nas tabelas que foram criadas pelo gerente

Na conta do funcionário ( localhost:3000/emplogin ) será possivel ver a solicitação enviada pelo hóspede e resolver
