# Página de obrigado — Vigília Sagrada + Abertura de Caminhos 01/11

Site estático completo em HTML, CSS e JavaScript. Não precisa instalar pacotes ou executar build. O `index.html` está na raiz para evitar a duplicação de pastas da publicação anterior.

## Publicação

Endereço previsto: **https://www.institutobenegr.com.br/obrigadovigilia/**.

1. Crie o repositório separado `obrigadovigilia`, seguindo a forma de publicação usada nos outros sites do Instituto.
2. Extraia o ZIP e envie o **conteúdo extraído diretamente à raiz do repositório**, não o ZIP nem uma pasta externa.
3. Confira na raiz: `index.html`, `styles.css`, `script.js`, `config.js`, as duas páginas legais e `assets/`.
4. Publique pela hospedagem usada no domínio do Instituto e confira a URL prevista. A configuração de hospedagem não foi alterada por este pacote.
5. Se usar outro endereço, ajuste `og:image` e `twitter:image` em `index.html` para a URL absoluta de `assets/images/og-vigilia.jpg` nesse endereço.

Também pode ser instalado em uma pasta como `obrigado/` dentro do repositório da VSL, sem substituir os arquivos da VSL. Nesse caso, configure no checkout a URL efetiva, por exemplo `/vigiliavsl/obrigado/`, e atualize as duas referências absolutas da imagem social.

## Configurar na Kiwify

Depois de publicar e testar, entre no produto **Vigília Sagrada 11:11**, em **Produtos → editar o produto → Configurações → Páginas de obrigado / Página de obrigado e upsell**, e informe a URL publicada na opção de página externa para vendas aprovadas. A nomenclatura pode variar no painel.

A documentação da Kiwify informa que páginas externas podem ser usadas para vendas aprovadas no cartão e no Pix; telas de boleto e Pix apenas gerados ficam com a própria plataforma. Não configure este grupo como destino de pagamentos ainda pendentes.

Essa versão oferece o produto adicional abrindo o **checkout informado**. Não é uma integração nativa de cobrança em um clique. Para usar o upsell nativo da Kiwify, será necessário gerar a configuração e o código de aceite/recusa no painel e adaptar a página a esse fluxo. O link de checkout comum, sozinho, não habilita esse recurso.

No produto Abertura de Caminhos 01/11, mantenha o pós-compra próprio e as orientações do grupo desse produto; não redirecione a compra adicional de volta para a mesma oferta sem necessidade.

## Links já configurados

- Grupo da Vigília: https://chat.whatsapp.com/CY70fQHPCHnFihdlZTp3QD
- Checkout da oferta adicional: https://pay.kiwify.com.br/mjIZGaO
- Atendimento humano: https://wa.me/5583999935710

`config.js` centraliza os links usados pelo JavaScript. Os mesmos links também estão escritos no HTML para funcionar sem JavaScript; ao trocar uma URL, atualize ambos. Se o checkout mudar, atualize também o link em `termos-de-uso.html`.

## Oferta e conteúdo

- Abertura de Caminhos: edição **01/11/2026**, processo reservado, coletivo, sem transmissão ou gravação do procedimento e sem devolutiva individual.
- Resultado geral e direcionamentos no grupo do Abertura. Nome de batismo e data de nascimento são preenchidos no checkout.
- Preço regular de referência: **R$ 97,00**. Oferta: **R$ 67,90 à vista**. Economia: **R$ 29,10**, equivalente a **30%**.
- A compra é adicional e opcional, para uma edição. Não foi anunciada assinatura, renovação automática ou nova quantidade de vagas.
- O horário da edição 01/11 não foi definido nesta página. A referência anterior indicava 03h para outra edição; a data foi atualizada conforme sua orientação, sem transferir automaticamente o horário ou o limite de 30 participantes.
- Vigília: **11/11/2026, 03h da manhã, horário de Brasília**, na madrugada do dia 10 para o dia 11.

A página de referência do Abertura ainda apresentava a edição de outubro na consulta. O conteúdo desta oferta foi adaptado para novembro. Não usamos o checkout antigo da referência.

## Organização comercial

A página acolhe a participante e destaca primeiro o botão verde do grupo. Em seguida, apresenta a sequência 01/11 → 11/11, a oferta complementar, o preço regular comparado ao preço especial e a economia concreta. Explica a continuidade mensal, responde às dúvidas e repete o botão de compra ao final.

O grupo permanece acessível sem comprar o adicional. Não há contador, redirecionamento forçado, preço que desaparece ao recarregar ou alegação de vagas limitadas. A expressão "adicionar agora" apresenta a condição desta página, sem inventar uma duração de oferta.

A condição de preço depende de manter o checkout configurado com R$ 67,90. Uma página estática não restringe o checkout exclusivamente a uma sessão nem impede compartilhamento da URL da oferta.

## Recursos e verificação

Botões externos abrem em outra aba. FAQ usa controles nativos acessíveis. As animações de entrada são discretas e respeitam a preferência de movimento reduzido; o conteúdo funciona sem JavaScript. Fontes, imagens, logo original do Abertura e ícones são locais. Não há dependências externas, pixels, coleta de dados pessoais ou armazenamento do pedido nesta página.

O conteúdo é genérico: a página não consulta o pedido, verifica pagamento ou afirma aprovação com base em dados do navegador. A plataforma deve encaminhar a participante após aprovação. `noindex` foi usado para não apresentar esta página pós-compra como uma landing page de tráfego; isso não é autenticação.

Foram conferidos os links, referências dos arquivos, cálculo do desconto, sintaxe JavaScript, comportamento dos links e das animações em simulação e integridade do ZIP. O checkout informado respondeu e apresentou o produto Abertura de Caminhos com os dois campos de inscrição.

A aparência em navegador real e o fluxo de compra real ainda precisam ser conferidos após publicação. Teste celular e computador, o botão do grupo, os dois botões da oferta e o retorno à página. Não é necessário concluir uma compra para conferir a abertura do checkout.

Para repetir o teste JavaScript, a partir desta pasta:

```sh
node tests/links-motion.test.cjs
```

`tests/` e este README são arquivos de apoio. Não são necessários para servir a página.

## Referências consultadas

- Conteúdo e logo do Abertura: https://aberturadecaminhos.institutobenegr.com.br/
- Páginas de obrigado Kiwify: https://ajuda.kiwify.com.br/pt-br/article/o-que-e-e-como-funcionam-as-paginas-de-obrigado-dsy5hb/
- Upsell nativo: https://ajuda.kiwify.com.br/pt-br/article/como-configurar-upsell-de-1-clique-12ei26e/
