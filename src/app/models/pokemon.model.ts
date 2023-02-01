//? Single Pokemon has a name and url for its attributes
export interface Results {
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

//? [index: number]: { id: number; label: string; key: any}
