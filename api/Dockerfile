FROM oven/bun:latest AS base

WORKDIR /app

# Copia o arquivo de dependências da API
COPY package.json package.json

# Instala as dependências usando Bun
RUN bun install

# Copia os arquivos do Prisma (schema) e gera o Prisma Client
COPY prisma prisma
RUN bunx prisma generate

# Copia o código-fonte e o tsconfig (necessário para os paths alias tipo @/lib)
COPY tsconfig.json tsconfig.json
COPY src src

# Define que estamos rodando em produção
ENV NODE_ENV=production

# Expõe a porta que a API do Elysia usa
EXPOSE 3000

# Inicia a aplicação usando o Bun
# (Evitamos o `bun build --compile` aqui porque o Prisma utiliza arquivos binários nativos que dão conflito no binário compilado único ou com o distroless)
CMD ["bun", "run", "src/index.ts"]
