# Use uma imagem base mais completa para evitar problemas de dependências nativas
FROM node:18-bullseye AS base

# Instale dependências somente quando necessário
FROM base AS deps
WORKDIR /app

# Copie os arquivos de lock e instale as dependências
COPY package.json package-lock.json ./

# Instale dependências do sistema e da aplicação
RUN apt-get update && apt-get install -y \
    python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Instale as dependências com npm
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desabilitar a telemetria do Next.js durante o build
ENV NEXT_TELEMETRY_DISABLED=1

# Execute o build da aplicação
RUN npm run build

# Imagem de produção, copia todos os arquivos e executa o Next.js
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copie os arquivos de build do estágio anterior
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Configure permissões
USER nextjs

# Exponha a porta da aplicação
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Inicie a aplicação
CMD ["node", "server.js"]
