export interface Jogo {
    id: string;
    titulo: string;
    plataforma: string;
    categoria: 'PlayStation' | 'Xbox' | 'Nintendo' | 'PC';
    preco: number;
    estado: string;
    detalhes: string;
    imagem: string;
  }
  
  export const catalogoJogos: Jogo[] = [
    // PLAYSTATION (PS3 / PS2 / PS1)
    {
      id: "ps3-god-of-war-3",
      titulo: "God of War III",
      plataforma: "PS3",
      categoria: "PlayStation",
      preco: 89.90,
      estado: "Seminovo",
      detalhes: "Mídia física original com encarte e manual intactos.",
      imagem: "/capas/god-of-war-3.jpg"
    },
    {
      id: "ps3-the-last-of-us",
      titulo: "The Last of Us",
      plataforma: "PS3",
      categoria: "PlayStation",
      preco: 95.00,
      estado: "Usado",
      detalhes: "Edição de lançamento, disco em excelente estado.",
      imagem: "/capas/tlou-ps3.jpg"
    },
    {
      id: "ps2-gta-san-andreas",
      titulo: "GTA: San Andreas",
      plataforma: "PS2",
      categoria: "PlayStation",
      preco: 120.00,
      estado: "Relíquia",
      detalhes: "Acompanha o mapa original do jogo em papel.",
      imagem: "/capas/gta-sa.jpg"
    },
  
    // XBOX (Xbox 360 / Xbox Classic)
    {
      id: "x360-halo-3",
      titulo: "Halo 3",
      plataforma: "Xbox 360",
      categoria: "Xbox",
      preco: 65.00,
      estado: "Seminovo",
      detalhes: "Caixa metálica (Steelbook) em ótimo estado.",
      imagem: "/capas/halo-3.jpg"
    },
    {
      id: "x360-gears-of-war-2",
      titulo: "Gears of War 2",
      plataforma: "Xbox 360",
      categoria: "Xbox",
      preco: 55.00,
      estado: "Usado",
      detalhes: "Testado e funcionando perfeitamente.",
      imagem: "/capas/gears-2.jpg"
    },
    {
      id: "x360-red-dead-redemption",
      titulo: "Red Dead Redemption",
      plataforma: "Xbox 360",
      categoria: "Xbox",
      preco: 110.00,
      estado: "Seminovo",
      detalhes: "Inclui mapa do mapa de New Austin/Nuevo Paraíso.",
      imagem: "/capas/rdr1.jpg"
    },
  
    // NINTENDO (Wii / GameCube / DS / 3DS)
    {
      id: "wii-mario-galaxy",
      titulo: "Super Mario Galaxy",
      plataforma: "Nintendo Wii",
      categoria: "Nintendo",
      preco: 130.00,
      estado: "Seminovo",
      detalhes: "Capa e disco sem arranhões.",
      imagem: "/capas/mario-galaxy.jpg"
    },
    {
      id: "ds-pokemon-black",
      titulo: "Pokémon Black Version",
      plataforma: "Nintendo DS",
      categoria: "Nintendo",
      preco: 280.00,
      estado: "Raro",
      detalhes: "Cartucho original e salvando normalmente.",
      imagem: "/capas/pokemon-black.jpg"
    },
    {
      id: "gc-zelda-wind-waker",
      titulo: "The Legend of Zelda: The Wind Waker",
      plataforma: "GameCube",
      categoria: "Nintendo",
      preco: 350.00,
      estado: "Colecionador",
      detalhes: "Completo na caixa preta com manual.",
      imagem: "/capas/zelda-windwaker.jpg"
    },
  
    // PC (Edições Físicas em Caixas / Big Boxes)
    {
      id: "pc-diablo-2",
      titulo: "Diablo II: Lord of Destruction",
      plataforma: "PC CD-ROM",
      categoria: "PC",
      preco: 140.00,
      estado: "Usado",
      detalhes: "Caixa acrílica com manuais e chaves de CD.",
      imagem: "/capas/diablo-2.jpg"
    },
    {
      id: "pc-half-life-2",
      titulo: "Half-Life 2",
      plataforma: "PC DVD-ROM",
      categoria: "PC",
      preco: 75.00,
      estado: "Seminovo",
      detalhes: "Edição de colecionador em caixa de papelão.",
      imagem: "/capas/half-life-2.jpg"
    }
  ];