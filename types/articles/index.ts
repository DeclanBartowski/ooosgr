import type { Seo} from '../root'

export interface ArticleDto {
	data: ArticlesData
	error: string[]
	success: string
}

export interface ArticlesData {
    title: string
    menu: object
    items: object
	seo: Seo
}
