import type { BalksItems } from '../balks'
import type { BusBanner } from '../bus'
import type { Banner, CodeLinkName, LinkText, Seo, TitleUrl } from '../root'

export interface TrubybuDto {
	data: TrubybuData
	error: string[]
	success: string
}

export interface TrubybuData {
	btnLink: LinkText
	slider: object
	file: string
    priceList: string
	info: Banner
	items: BalksItems[]
	menu: TitleUrl[]
	seo: Seo
	sibar_filter: CodeLinkName[]
	sidebar_banner: BusBanner[]
}
