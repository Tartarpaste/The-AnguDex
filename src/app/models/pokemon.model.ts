
//? Single Pokemon has a name and url for its attributes
export interface Pokemon {
    name: string
    url: string
}

//? Represents two attributes, the name and sprite
export interface PokemonAttributes {
    name: string
    sprites: PokemonImage 
}

//? Represents image of the pokemon
export interface PokemonImage {
    front_default: string
}