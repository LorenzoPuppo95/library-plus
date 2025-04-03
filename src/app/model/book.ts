// export interface Book {
//     id: number;
//     title: string;
//     authors: {}[];
//     summaries: string[];
//     subjects: string[];
//     imagejpeg: string
//   }

export interface Book {
  id: number
  title: string
  authors?: Author[]
  summaries: string[]
  subjects?: string[]
  imagejpeg: string
}

export interface Author {
  name: string
  birth_year: any
  death_year: any
}