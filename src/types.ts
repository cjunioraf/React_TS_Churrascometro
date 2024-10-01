export type Alimento = 'carne' | 'salsichao' | 'frango' | 'paoAlho';

export const quantidadePorPessoas: Record<Alimento, number> = {
    carne: 400,
    salsichao: 200, 
    frango: 300, 
    paoAlho: 150
};

export const nomesAlimentos: Record<string, string> = {
    carne: "Carne", 
    salsichao: "Salsichão", 
    frango: "Frango", 
    paoAlho: "Pão de Alho"
};