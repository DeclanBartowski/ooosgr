import type { LinkText, Seo, Banner, CodeLinkName, AltSrc } from '../root'

export interface BusDto {
	data: BusData
	error: string[]
	success: string
}

export interface BusData {
	btnLink: LinkText
	info: Banner
	seo: Seo
	sibar_filter: CodeLinkName[]
	sidebar_banner: BusBanner[]
}

export interface BusBanner {
	picture: AltSrc
	style: string
}
