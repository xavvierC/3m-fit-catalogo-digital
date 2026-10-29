# 3M Fit Suplementos — catálogo digital v1

Protótipo estático baseado no catálogo PDF enviado. A página permite pesquisar e filtrar os produtos, selecionar quantidades e montar uma mensagem de pedido para o WhatsApp principal da 3M Fit.

## Rodar localmente

Na raiz do projeto:

```powershell
python -m http.server 4173 --directory .
```

Depois, abra `http://localhost:4173`.

## Publicar na Vercel

Este projeto é estático e não exige build ou instalação de dependências.

1. Importe o repositório `xavvierC/3m-fit-catalogo-digital` na Vercel.
2. Mantenha a raiz do projeto como `/`.
3. Use o framework preset `Other` e deixe os comandos de build vazios.
4. Publique.

O arquivo `index.html` já está na raiz e os assets usam caminhos relativos.

## Observações

## Visual revision v2

- Active stylesheet: `catalog.css`. `styles.css` retains the initial v1 styling and is not loaded by the page.
- Interface palette uses black, white and green; orange is confined to the original product packaging.
- All 63 product images were confirmed decoded in the browser. NewMillen pineapple and orange images were corrected.
- Verified at 390, 768 and 1440 CSS pixels without horizontal document overflow.
- Verified adding quantities, totals, clearing the order, category filters, accent-insensitive search and the empty state. No WhatsApp message was sent during QA.
- CSS and JS use versioned URLs to avoid displaying stale v1 files.

## Catalog source

- Os preços e produtos foram transcritos do PDF de referência.
- O envio usa o número `(11) 99166-2195` e abre uma conversa do WhatsApp com o resumo do pedido.
- A v1 não processa pagamentos nem confirma estoque; a confirmação fica com o atendimento.
