
export interface Svas {
  nome: string
  destaque: boolean
  categoria_em_plano: string
  color_de_fundo: string
  capa: img
  descricao: string
  icone: img
}

export interface img {
  width: number
  height: number
  id: string
}
