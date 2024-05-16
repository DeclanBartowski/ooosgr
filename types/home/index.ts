import type { Seo} from '../root'

export interface HomeDto {
	data: HomeData
	error: string[]
	success: string
}

export interface HomeData {
    newsLink: object
    news: object
    about: object
    trub: object
    btnLink: object
    file: object
    sibar_filter: object
    sliders: object
    list: object
	seo: Seo
}
