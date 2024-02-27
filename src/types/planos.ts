export interface Plano {
  id: string
  nome: string
  recomendado: boolean
  servicos: Servico[]
  svas: Sva[]
}

export interface Servico {
  servicos_id: ServicosId
}

export interface ServicosId {
  id: string
  nome: string
  icone_personalizado: Element
}

export interface Sva {
  sva_id: SvaId
}

export interface SvaId {
  nome: string
  destaque: boolean
  categoria_em_plano: string
  color_de_fundo: string
  icone: Icone
}

export interface Icone {
  width: number
  height: number
  id: string
}