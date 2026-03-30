export type ProjectItem = {
  id: number
  title: string
  location: string
  cover: string
  images: string[]
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: 'Jardim Moderno 1',
    location: 'São Paulo - SP',
    cover: '/images/IMG-20230213-WA0016.jpeg',
    images: [
      '/images/IMG-20230213-WA0016.jpeg',
      '/images/IMG-20230213-WA0016.jpeg',
      '/images/IMG-20230213-WA0016.jpeg'
    ]
  },
  {
    id: 2,
    title: 'Jardim Moderno 2',
    location: 'Campinas - SP',
    cover: '/images/IMG-20230213-WA0028.jpeg',
    images: [
      '/images/IMG-20230213-WA0028.jpeg',
      '/images/IMG-20230213-WA0029.jpeg',
      '/images/IMG-20230213-WA0030.jpeg'
    ]
  },
  {
    id: 3,
    title: 'Jardim Tropical',
    location: 'Belo Horizonte - MG',
    cover: '/images/IMG-20230213-WA0032.jpeg',
    images: [
      '/images/IMG-20230213-WA0032.jpeg',
      '/images/IMG-20230213-WA0033.jpeg',
      '/images/IMG-20230213-WA0034.jpeg'
    ]
  },
  {
    id: 4,
    title: 'Jardim Moderno 1',
    location: 'São Paulo - SP',
    cover: '/images/IMG-20230213-WA0016.jpeg',
    images: [
      '/images/IMG-20230213-WA0016.jpeg',
      '/images/IMG-20230213-WA0017.jpeg',
      '/images/IMG-20230213-WA0018.jpeg'
    ]
  },
  {
    id: 5,
    title: 'Jardim Moderno 2',
    location: 'Campinas - SP',
    cover: '/images/IMG-20230213-WA0028.jpeg',
    images: [
      '/images/IMG-20230213-WA0028.jpeg',
      '/images/IMG-20230213-WA0029.jpeg',
      '/images/IMG-20230213-WA0030.jpeg'
    ]
  },
  {
    id: 6,
    title: 'Jardim Tropical',
    location: 'Belo Horizonte - MG',
    cover: '/images/IMG-20230213-WA0032.jpeg',
    images: [
      '/images/IMG-20230213-WA0032.jpeg',
      '/images/IMG-20230213-WA0033.jpeg',
      '/images/IMG-20230213-WA0034.jpeg'
    ]
  }
]

// export const projectsData: ProjectItem[] = [
//   { id: 1, title: 'Jardim Moderno 1', location: 'S�o Paulo - SP', url: '/images/IMG-20230213-WA0016.jpeg' },
//   { id: 2, title: 'Jardim Moderno 2', location: 'Campinas - SP', url: '/images/IMG-20230213-WA0028.jpeg' },
//   { id: 3, title: 'Jardim Tropical', location: 'Belo Horizonte - MG', url: '/images/IMG-20230213-WA0032.jpeg' },
//   { id: 4, title: 'Projeto Verde', location: 'Ribeir�o Preto - SP', url: '/images/IMG-20230213-WA0036.jpeg' },
//   { id: 5, title: 'Paisagismo Urbano', location: 'S�o Jos� dos Campos - SP', url: '/images/IMG-20230217-WA0034.jpeg' },
//   { id: 6, title: 'Horta Vertical', location: 'Curitiba - PR', url: '/images/IMG-20230217-WA0036.jpeg' },
//   { id: 7, title: 'Deck com Jardins', location: 'Florian�polis - SC', url: '/images/IMG-20230227-WA0024.jpeg' },
//   { id: 8, title: 'Ref�gio Verde', location: 'Porto Alegre - RS', url: '/images/IMG_20231209_110618.jpg' },
//   { id: 9, title: 'Jardim de Inverno', location: 'Fortaleza - CE', url: '/images/IMG_20231209_110624.jpg' },
//   { id: 10, title: 'Parque Residencial', location: 'Recife - PE', url: '/images/IMG_20231209_110650.jpg' },
//   { id: 11, title: 'Circuito de Plantas', location: 'Natal - RN', url: '/images/IMG_20231209_110659.jpg' },
//   { id: 12, title: 'Espa�o Zen', location: 'Salvador - BA', url: '/images/IMG_20240130_094600.jpg' },
//   { id: 13, title: 'Mini Jardim', location: 'Manaus - AM', url: '/images/IMG_20240130_094614.jpg' },
//   { id: 14, title: 'Jardim de Frutas', location: 'Bel�m - PA', url: '/images/IMG_20240130_094624.jpg' },
//   { id: 15, title: 'Pra�a Verde', location: 'Jo�o Pessoa - PB', url: '/images/IMG_20240130_094658.jpg' },
//   { id: 16, title: 'Lago Artificial', location: 'Cuiab� - MT', url: '/images/IMG_20240130_094839.jpg' },
//   { id: 17, title: 'Varanda Verde', location: 'Porto Velho - RO', url: '/images/IMG_20240207_154438.jpg' },
//   { id: 18, title: 'Alameda de �rvores', location: 'Campo Grande - MS', url: '/images/IMG_20240207_154458.jpg' },
//   { id: 19, title: 'Canteiro Estilizado', location: 'Vit�ria - ES', url: '/images/IMG_20240207_154507.jpg' },
//   { id: 20, title: 'Jardim de Pedras', location: 'Macei� - AL', url: '/images/IMG_20240207_154509.jpg' },
//   { id: 21, title: 'Pra�a de Conv�vio', location: 'Teresina - PI', url: '/images/IMG_20240207_160747.jpg' },
//   { id: 22, title: 'Cimento com Verde', location: 'S�o Lu�s - MA', url: '/images/IMG_20240207_160755.jpg' },
//   { id: 23, title: 'Caminho Coletivo', location: 'Aracaju - SE', url: '/images/IMG_20240207_160808.jpg' },
//   { id: 24, title: 'Jardim Vertical', location: 'Macap� - AP', url: '/images/IMG_20240207_160847.jpg' },
//   { id: 25, title: 'Vale Verde', location: 'Boa Vista - RR', url: '/images/IMG_20240207_161015.jpg' },
//   { id: 26, title: 'O�sis Residencial', location: 'Rio Branco - AC', url: '/images/IMG_20240207_161021.jpg' },
//   { id: 27, title: '�rea de Lazer', location: 'Bras�lia - DF', url: '/images/IMG_20240207_161039.jpg' }
// ]
