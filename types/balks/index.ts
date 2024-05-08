import type { BusBanner } from '../bus'
import type { AltSrc, Banner, TitleSrc, Seo, TitleUrl, LinkText, CodeLinkName } from '../root'

export interface BalksDto {
	data: BalksData
	error: string[]
	success: string
}

export interface BalksData {
	info: Banner
	items: BalksItems[]
	text_after: Banner
	file: TitleSrc
	menu: TitleUrl[]
	sidebar_banner: BusBanner[]
	btnLink: LinkText
	sibar_filter: CodeLinkName[]
	seo: Seo
}

export interface BalksItems {
	name: string
	text: string
	picture: AltSrc
	price: string
	photo: AltSrc[]
}
