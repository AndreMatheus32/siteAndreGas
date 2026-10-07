# André Gás

Site da André Gás (Apucarana-PR). Astro, 100% estático, deploy na Vercel.

## Rodar

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # gera dist/

## Onde mexer

Telefone, WhatsApp, endereço, horários, prazo de entrega e anos de casa: `src/data/negocio.ts`. Tudo no site, inclusive o schema.org e o selo "Aberto agora", lê dali.

Fotos: `src/fotos`. São otimizadas no build (WebP, tamanhos responsivos). Para trocar, substitua o arquivo mantendo o nome ou ajuste o import em `src/pages/index.astro`.

Imagem de compartilhamento (WhatsApp, Facebook): `public/og.jpg`, 1200x630.

## JavaScript no cliente

Um único script inline no fim de `index.astro`: selo aberto/fechado, dia atual na tabela de horários, calculadora do botijão, mapa carregado sob demanda e fechar o menu mobile. Sem ele, o site continua funcionando: links de WhatsApp e telefone são HTML puro.

## Mascote

As 6 poses do mascote ficam em `src/fotos/mascote/pose-1.png` a `pose-6.png`, recortadas com fundo transparente. O componente `src/components/Mascote.astro` escolhe a pose pelo número. Para trocar uma pose, substitua o PNG mantendo o nome.
