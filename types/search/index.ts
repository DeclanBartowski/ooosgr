import type { Seo} from '../root'

export interface SearchDto {
    data: SearchData
    error: string[]
    success: string
}

export interface SearchData {
    items: object
    pagination: object
    count: string
    seo: Seo
}
