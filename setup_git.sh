#!/bin/bash

# 1. Nome do repositório
REPO_NAME="Yokai-new"
GITHUB_USER="MistronDev"
SSH_KEY="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC48Qdd5sFfti0zh/386mM9BDJzJ5bF6ME6gkXu2yzRSMAh7v1v8JgBWUUqcltEp9mVjU+315uGrYlmlW6QWYKOc5YIwa9Rh270sOBPadIkI9Vclhal4N7swBF/pkhoBgeDZT6ZSUisXGtb04JXA6a/lmfL+ADBz+h6BVuhu/QeQIjNI+eNKJO+6qJ+vt/z4ZgwPi+Cp25ftyhSrF/7YKNRb17QL3/hE3w4wqyf12oaW/rGbDpXPKa36sHlXPtIbepVASzKyRfePvSMblBQjIk4yInEoCsch1UHPTcmZOggrRekn/G6ycgVPrrL8Y+w7MLZuWA4HPqRRM52kV7ynWRDwQvsF9kvCfcPYW3a9zJjVPG3+BtkwE37jWBlV0PUzTx4yqIIR95eXq3KgaJXRnUtzYe0x6mltNGXPifaYSrsJi5p0gCDpedflk9iGD/Ntvx6VbtXOdwSfLZeb3bbIKvji+R0RGCszc0CBVxp4I4AlY5j9ECD7Js/y3+XRHR1Q4/vVZlfOEsLaJWmmkRB8gIZ4egiuy7SMe0Uzi9it6dBTbZ9mzqtWSPMxJYjPcCjKb9U2+lYwfthAM0Ox4NjuYrtZgEF/kkol2iKVh7OOjJcHeCoX8JfFrCxMYbQwhBj1yXFL1IC6w4jb+84Aq6QOVkS82ljQdjLDlSjm8jp2YYO7Q== mistron35@gmail.com"

# 2. Criar pasta se não existir
mkdir -p $REPO_NAME
cd $REPO_NAME

# 3. Inicializar repositório Git
git init

# 4. Configurar chave SSH (temporária no script)
mkdir -p ~/.ssh
echo "$SSH_KEY" > ~/.ssh/id_rsa.pub
chmod 644 ~/.ssh/id_rsa.pub

# 5. Configurar Git
git config --global user.name "$GITHUB_USER"
git config --global user.email "mistron35@gmail.com"
git remote add origin git@github.com:$GITHUB_USER/$REPO_NAME.git

# 6. Criar commit inicial
touch README.md
git add .
git commit -m "Commit inicial do projeto"

# 7. Subir para o GitHub
git branch -M main
git push -u origin main
