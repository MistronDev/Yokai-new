# YokaiScan - Front-End

Este repositório contém a base do front-end desenvolvida para a plataforma **YokaiScan**, focada na leitura de mangás. O projeto foi desenvolvido de forma modular e responsiva, com uma estrutura clara e pronta para integração dinâmica com o back-end.

## Objetivo

O foco principal foi construir um front-end funcional e esteticamente agradável, com destaque para a experiência do usuário e a facilidade de navegação. Todo o layout foi construído visando a futura integração com APIs e banco de dados, com áreas sinalizadas para renderização dinâmica de conteúdo (como a listagem de mangás, capítulos e dados de usuários).

## Funcionalidades Implementadas

- Estrutura completa das páginas principais: `home`, `projetos`, `login`, `register`, `support`, `manga`.
- Estilos personalizados com `home.css`, `background.css`, `topbarsidebar.css`.
- Barra de navegação lateral e topo reutilizáveis com lógica em `topbarsidebar.js`.
- Marcações claras nas páginas para que o back-end possa renderizar conteúdo via JavaScript (ex: sessão de mangás gerada dinamicamente).
- Design adaptável para mobile e desktop.
- Integração de ícones do Google Fonts (Material Icons).
- Inclusão do avatar da Yokai pronta para ser implementada.

## Observações Importantes

- A **página `manga.html` funciona corretamente no desktop**, mas apresenta um problema de cache/atualização no mobile, onde o sidebar antigo é carregado. É uma falha pequena, que pode ser corrigida pelo back-end ou com cache busting.
- A **página de suporte foi deixada para depois da integração com banco de dados**, por depender de dados dinâmicos.
- As demais páginas estão entregues com estrutura sólida, respeitando a responsividade e fluidez da navegação.

## Considerações Finais

Entreguei o melhor possível dentro da minha responsabilidade com o front-end, estruturando toda a base da plataforma para facilitar o trabalho da equipe de back-end.

Devido ao foco no meu projeto pessoal , este foi o limite da minha contribuição por ora. Acredito que o material entregue fornece uma base clara e organizada para que o restante da equipe finalize os ajustes dinâmicos e operacionais.

A responsividade está boa, os componentes estão separados e reutilizáveis, e os comentários no código ajudam a guiar as próximas etapas.

## obs: 
Parte do home sera a parte onde havera a sessao dos mangas, similar a da Valkyrie Scan, a parte dos projetos, sao partes mais filtradas contando com sessao de mangas.
 Duvidas, comentarios, contactar via zap.
