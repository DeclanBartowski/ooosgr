import type { Seo} from '../root'

export interface SearchDto {
    data: SearchData
    error: string[]
    success: string
}

export interface SearchData {
    items: object
    pagination: Pagination
    count: string
    seo: Seo
}

interface Pagination {
	itemsCount: number;
	pageCount: string;
	pageCurrent: string;
	pageSize: number;
}