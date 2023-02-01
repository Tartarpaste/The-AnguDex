
//? Single Pokemon has a name and url for its attributes
export interface Results {
    results : Pokemon[]
}

export interface Pokemon {
    id : number
    name : string
    url : string
    img: string
}

//? [index: number]: { id: number; label: string; key: any}
