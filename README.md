# Instruções de uso:

- **PRIMEIRO PASSO:** Rodar o comando `npm install` para instalar todas as dependencias do projeto.

- **SEGUNDO PASSO:** Rodar o comando `npm run dev` para verificar se o servidor inicia sem demais problemas.

- **TERCEIRO PASSO:** Rodar o comando `docker-compose up -d` para subir o container docker junto com as configurações necessárias para utilizar o postgres.

# Configuração do Postgres:

Em seu SGDB após realizar todos os passos da instrução de uso, realize a conexão com os seguintes parâmetros:

`HOST:` *localhost*
`PORT:` *5432*
`USER:` *wgb-code*
`PASSWORD:` *abc1234*
`DATABASE:` *polls*