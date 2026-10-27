export const dynamic = "force-dynamic";

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
      id: "ps5-god-of-war-ragnarok",
      titulo: "God of War Ragnarök",
      plataforma: "PS5",
      categoria: "PlayStation",
      preco: 180.00,
      estado: "Seminovo",
      detalhes: "Completo com caixa original",
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/GOW%20Ragnarok.png"
    },
    {
      id: "xboxseries-elden-ring",
      titulo: "Elden Ring",
      plataforma: "Xbox Series",
      categoria: "Xbox",
      preco: 160.00,
      estado: "Usado",
      detalhes: "Disco em perfeito estado.",
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/Elden%20Ring.jpg"
    },
    {
      id: "nintendoswitch-zelda-totk",
      titulo: "Zelda: Tears of The Kingdom",
      plataforma: "Nintendo Switch",
      categoria: "Nintendo",
      preco: 250.00,
      estado: "Seminovo",
      detalhes: "Cartucho impecável.",
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/Zelda%20TOK.png"
    },
    {
      id: "ps3-god-of-war-3",
      titulo: "God of War III",
      plataforma: "PS3",
      categoria: "PlayStation",
      preco: 89.90,
      estado: "Seminovo",
      detalhes: "Mídia física original com encarte e manual intactos.",
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/God%20of%20War%203.jpg"
    },
    {
      id: "ps3-the-last-of-us",
      titulo: "The Last of Us",
      plataforma: "PS3",
      categoria: "PlayStation",
      preco: 95.00,
      estado: "Usado",
      detalhes: "Edição de lançamento, disco em excelente estado.",
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/The%20Last%20of%20Us.png"
    },
    {
      id: "ps2-gta-san-andreas",
      titulo: "GTA: San Andreas",
      plataforma: "PS2",
      categoria: "PlayStation",
      preco: 120.00,
      estado: "Relíquia",
      detalhes: "Acompanha o mapa original do jogo em papel.",
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/GTA%20SA.png"
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
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/Halo3.png"
    },
    {
      id: "x360-gears-of-war-2",
      titulo: "Gears of War 2",
      plataforma: "Xbox 360",
      categoria: "Xbox",
      preco: 55.00,
      estado: "Usado",
      detalhes: "Testado e funcionando perfeitamente.",
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/Gears%20of%20War%202.png"
    },
    {
      id: "x360-red-dead-redemption",
      titulo: "Red Dead Redemption",
      plataforma: "Xbox 360",
      categoria: "Xbox",
      preco: 110.00,
      estado: "Seminovo",
      detalhes: "Inclui mapa do mapa de New Austin/Nuevo Paraíso.",
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/RDR.png"
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
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/Mario%20Galaxy.png"
    },
    {
      id: "ds-pokemon-black",
      titulo: "Pokémon Black Version",
      plataforma: "Nintendo DS",
      categoria: "Nintendo",
      preco: 280.00,
      estado: "Raro",
      detalhes: "Cartucho original e salvando normalmente.",
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/Pokemon%20Black.png"
    },
    {
      id: "gc-zelda-wind-waker",
      titulo: "The Legend of Zelda: The Wind Waker",
      plataforma: "GameCube",
      categoria: "Nintendo",
      preco: 350.00,
      estado: "Colecionador",
      detalhes: "Completo na caixa preta com manual.",
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/Zelda%20Wind%20Waker.png"
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
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/Diablo%202.png"
    },
    {
      id: "pc-half-life-2",
      titulo: "Half-Life 2",
      plataforma: "PC DVD-ROM",
      categoria: "PC",
      preco: 75.00,
      estado: "Seminovo",
      detalhes: "Edição de colecionador em caixa de papelão.",
      imagem: "https://8mtqmpzlqsnurcck.public.blob.vercel-storage.com/Half%20Life%202.jpg"
    }
  ];