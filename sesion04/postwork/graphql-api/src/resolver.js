export const resolvers = {
    Query: {
        getAllLives: () => lives,
        getLive: (_, { id }) => {
            return lives.find(e => e.id == id)
        },
    },
}

let lives = [
    {
        id: '966e943b-b112-4eed-92eb-24c1ff9b2972',
        title: 'Salud Mental',
        subtitle: 'El componente necesario en tu organización',
        date: '15 de Marzo',
        time: '19h',
        mode: 'online',
        img: 'https://bedu.org/_next/image?url=https%3A%2F%2Fimg.evbuc.com%2Fhttps%253A%252F%252Fcdn.evbuc.com%252Fimages%252F245075949%252F185160745410%252F1%252Foriginal.20220310-180313%3Fh%3D200%26w%3D450%26auto%3Dformat%252Ccompress%26q%3D75%26sharp%3D10%26rect%3D0%252C0%252C2160%252C1080%26s%3D1a1324c3061e0517dba0b93e204ee5e5&w=2048&q=75'
    },
    {
        id: '966e943b-b112-4eed-92eb-24c1ff9b2972',
        title: 'Empresas más ágiles con Product Discovery',
        subtitle: '',
        date: '17 de Marzo',
        time: '19h',
        mode: 'online',
        img: 'https://bedu.org/_next/image?url=https%3A%2F%2Fimg.evbuc.com%2Fhttps%253A%252F%252Fcdn.evbuc.com%252Fimages%252F232938469%252F185160745410%252F1%252Foriginal.20220219-014720%3Fh%3D200%26w%3D450%26auto%3Dformat%252Ccompress%26q%3D75%26sharp%3D10%26rect%3D0%252C0%252C2160%252C1080%26s%3D1f48b306478b097a888f26ee02142239&w=2048&q=75'
    },
    {
        id: '966e943b-b112-4eed-92eb-24c1ff9b2972',
        title: 'DevOps',
        subtitle: 'El puente Tech que necesita tu empresa',
        date: '22 de Marzo',
        time: '19h',
        mode: 'online',
        img: 'https://bedu.org/_next/image?url=https%3A%2F%2Fimg.evbuc.com%2Fhttps%253A%252F%252Fcdn.evbuc.com%252Fimages%252F232944139%252F185160745410%252F1%252Foriginal.20220219-015817%3Fh%3D200%26w%3D450%26auto%3Dformat%252Ccompress%26q%3D75%26sharp%3D10%26rect%3D0%252C0%252C2160%252C1080%26s%3Dd7d1b4644c12479aed0640957f798899&w=2048&q=75'
    },
    {
        id: '14eb0c95-d3c3-4740-900d-7324c5e36c58',
        title: 'Data Driven',
        subtitle: 'en Programmatic Advertising',
        date: '24 de Marzo',
        time: '19h',
        mode: 'online',
        img: 'https://bedu.org/_next/image?url=https%3A%2F%2Fimg.evbuc.com%2Fhttps%253A%252F%252Fcdn.evbuc.com%252Fimages%252F232945379%252F185160745410%252F1%252Foriginal.20220219-021708%3Fh%3D200%26w%3D450%26auto%3Dformat%252Ccompress%26q%3D75%26sharp%3D10%26rect%3D0%252C0%252C2160%252C1080%26s%3Da7713072ec29c99de45172cedd005974&w=2048&q=75'
    }
]