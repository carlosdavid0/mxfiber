# Use a imagem base Node.js mais leve para a produção
FROM node:lts-alpine AS base

# Estágio de dependências
FROM base AS deps
WORKDIR /app

# Copie os arquivos de lock e instale as dependências
COPY package.json package-lock.json ./
RUN npm ci

# Estágio de build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desabilitar a telemetria do Next.js durante o build
ENV NEXT_TELEMETRY_DISABLED=1

# Execute o build da aplicação
RUN npm run build

# Estágio de produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Crie um usuário para rodar a aplicação
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copie os arquivos de build do estágio anterior
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Configure permissões
USER nextjs

# Exponha a porta da aplicação
EXPOSE 3000

# Inicie a aplicação
CMD ["node", "server.js"]
