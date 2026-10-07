// Fonte única dos dados do negócio. Mudou telefone ou horário? Muda só aqui.

export const negocio = {
  nome: 'André Gás',
  site: 'https://andregasapucarana.com.br',
  email: 'andregasapucarana@gmail.com',
  anos: 25,
  prazoMin: 20,
  cidade: 'Apucarana',
  uf: 'PR',
  endereco: {
    rua: 'Rua Rio Tibagi, 269',
    bairro: 'Núcleo Habitacional Papa João Paulo',
    cep: '86801-080',
  },
  geo: { lat: -23.557900371161804, lng: -51.49107361775747 },
  telefone: { exibir: '(43) 3426-2369', link: 'tel:+554334262369', e164: '+554334262369' },
  whatsapp: { exibir: '(43) 99978-9468', numero: '5543999789468' },
  instagram: { usuario: 'andregasapucarana', url: 'https://www.instagram.com/andregasapucarana/' },
  facebook: 'https://www.facebook.com/profile.php?id=100010926222693',
};

// 0 = domingo. Horas em minutos desde 00:00, fuso America/Sao_Paulo.
export const horarios = [
  { dia: 'Domingo', curto: 'Dom', abre: 8 * 60, fecha: 13 * 60 },
  { dia: 'Segunda-feira', curto: 'Seg', abre: 8 * 60, fecha: 21 * 60 },
  { dia: 'Terça-feira', curto: 'Ter', abre: 8 * 60, fecha: 21 * 60 },
  { dia: 'Quarta-feira', curto: 'Qua', abre: 8 * 60, fecha: 21 * 60 },
  { dia: 'Quinta-feira', curto: 'Qui', abre: 8 * 60, fecha: 21 * 60 },
  { dia: 'Sexta-feira', curto: 'Sex', abre: 8 * 60, fecha: 21 * 60 },
  { dia: 'Sábado', curto: 'Sáb', abre: 8 * 60, fecha: 20 * 60 },
];

export const hora = (min: number) => {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`;
};

export const wa = (texto?: string) =>
  `https://wa.me/${negocio.whatsapp.numero}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;

export const mensagemPadrao = 'Olá, André Gás! Quero fazer um pedido. Meu endereço é: ';

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${negocio.geo.lat},${negocio.geo.lng}`;
export const rotaUrl = `https://www.google.com/maps/dir/?api=1&destination=${negocio.geo.lat},${negocio.geo.lng}`;
