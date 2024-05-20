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
	pagination: Pagination;
	seo: Seo
}

export interface Pagination {
	itemsCount: number;
	pageCount: number;
	pageCurrent: number;
	pageSize: number;
}