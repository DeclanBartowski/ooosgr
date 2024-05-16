import type { Seo} from '../root'

export interface ArticleDto {
	data: ArticleDetailData
	error: string[]
	success: string
}

export interface ArticleDetailData {
    title: string
    html: string
    url: string
    img: object
    detailImg: object
    category: object
    back: object
    type: string
    code: string
    video: string
    create: string
	seo: Seo
}
