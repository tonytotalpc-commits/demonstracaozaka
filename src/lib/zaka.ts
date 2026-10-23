export const WHATSAPP_NUMBER = "5513991489622";
export const WHATSAPP_DISPLAY = "+55 13 99148-9622";
export const INSTAGRAM_HANDLE = "barbearia_zaka";
export const INSTAGRAM_URL = "https://instagram.com/barbearia_zaka";
export const ADDRESS_LINE = "Rua Nove, 97 — Centro";
export const ADDRESS_CITY = "Bertioga — SP";
export const ADDRESS_CEP = "CEP 11250-000";
export const HOURS = "09h30 às 21h";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Rua Nove, 97, Centro, Bertioga - SP, 11250-000");

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function serviceMessage(serviceName: string) {
  return `Olá, Barbearia Zaka! Gostaria de consultar valores e agendar: ${serviceName}.`;
}

export type Service = { id: string; name: string; description: string };

export const SERVICES: Service[] = [
  { id: "corte", name: "Corte masculino", description: "Do clássico ao moderno, do seu jeito." },
  { id: "barba", name: "Barba", description: "Alinhamento e acabamento." },
  { id: "sobrancelha", name: "Sobrancelha", description: "Mais expressão para o seu olhar." },
  { id: "combo", name: "Combo", description: "Corte + barba + sobrancelha." },
];
