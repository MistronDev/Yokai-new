#!/bin/bash

# Nome do repositório remoto no GitHub
repo_name="Yokai-new"
github_user="MistronDev"

# Inicializando o repositório Git local
echo "Inicializando o repositório Git local..."
git init

# Adicionando todos os arquivos ao repositório local
echo "Adicionando arquivos..."
git add .

# Fazendo o primeiro commit
echo "Fazendo o primeiro commit..."
git commit -m "Primeiro commit"

# Associando o repositório remoto
echo "Associando o repositório remoto..."
git remote add origin https://github.com/$github_user/$repo_name.git

# Subindo os arquivos para o GitHub
echo "Subindo os arquivos para o GitHub..."
git push -u origin master

# Finalização
echo "Repositório configurado e arquivos enviados com sucesso!"
