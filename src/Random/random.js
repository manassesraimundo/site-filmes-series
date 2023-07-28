// Gerar um numero aliatorio com base no tamanho da lista dos filmes
export function randoBanner(movies){
    return Math.floor(Math.random() * movies.length)
}
