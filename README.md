# Portfólio · Caio Bispo

Projetos de desenvolvimento web, inteligência artificial e infraestrutura caseira. Reúno aqui o que cada projeto resolve, como funciona e onde ver a versão pública.

| Projeto | O que ver | Status |
| --- | --- | --- |
| [Gerador de Prompts MBA TJTO](https://mbatjto.com.br/) | Refinamento de ideias em uma interface de conversa | Protótipo acadêmico |
| [Shekinah Estética](https://shekinahestetica.com.br/) | Catálogo com filtros e pedido de agendamento em etapas | No ar |
| [Máyra Advocacia](https://mayraadv.com.br/) | Site institucional e formulário de primeiro contato | No ar |
| [Caio Bispo](https://caiobispo.com.br/) | Portal de ferramentas com visual inspirado em hardware e jogos | No ar |
| Dell OptiPlex 3070 Micro | Servidor Linux para serviços de uso pessoal | Em preparação |

## Gerador de Prompts MBA TJTO

Uma pessoa começa com uma ideia, responde a perguntas para esclarecer o que precisa e recebe um prompt estruturado para copiar. O protótipo usa Gemini e oferece categorias como imagem, jurídico, administrativo e desenvolvimento. É um projeto acadêmico independente criado no contexto do MBA em Inteligência Artificial Aplicada ao Poder Judiciário.

**Exemplo com dados fictícios:** a ideia “quero organizar minhas tarefas da semana” vira uma instrução com objetivo, público, restrições e formato de entrega. [Ver demonstração local](demo/gerador-prompt.mjs).

## Shekinah Estética

A pessoa filtra os procedimentos por categoria, escolhe o serviço e informa o horário desejado. O site prepara o pedido para envio pelo WhatsApp, onde a equipe confirma o horário. O destaque é a navegação do catálogo até o pedido de atendimento.

## Máyra Advocacia

Site institucional de um escritório de Direito Previdenciário. A página organiza os serviços por tema e oferece um formulário que prepara a mensagem de primeiro contato pelo WhatsApp.

## Caio Bispo

Página inicial em HTML, CSS e JavaScript, com um banner de hardware e cartões para ferramentas de PDF, programas e IA. A [página do conversor de vídeo](https://caiobispo.com.br/conversor.html) está publicada e aguarda a configuração do servidor.

## Servidor caseiro Dell 3070

O projeto começa com um OptiPlex 3070 Micro, Intel Core i5 de 9ª geração, 16 GB de RAM e SSD NVMe de 250 GB. A primeira meta é instalar Ubuntu Server e Docker, testar o MeTube na rede de casa e depois configurar acesso privado.

## Executar a demonstração

Com o Node.js instalado, execute o exemplo a partir da pasta do repositório:


```sh
node demo/gerador-prompt.mjs
```

O exemplo monta um prompt a partir de dados fictícios e roda localmente, sem dependências ou chamadas a serviços externos.
