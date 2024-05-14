import type { NamePictureText, Seo } from '../root'

export interface PromosDto {
	data: PromosData
	error: string[]
	success: string
}

export interface PromosData {
	items: NamePictureText[]
	page: PromosPage
	seo: Seo
	title: string
}

interface PromosPage {
	itemsCount: number
	pageCount: number
	pageCurrent: number
	pageSize: number
}
