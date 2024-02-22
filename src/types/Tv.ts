export interface Tvinfo {
    banner: Banner
    cor_base: string
    Nome: string
    titulo: string
    descricao: string
    icone: Icone
  }
  
  export interface Banner {
    width: number
    height: number
    id: string
  }
  
  export interface Icone {
    width: number
    height: number
    id: string
  }
  