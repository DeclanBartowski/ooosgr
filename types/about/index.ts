import type { AltSrc, ImgText, Text, NameTypeValue, Seo } from '../root'

export interface AboutDto {
	data: AboutData
	error: string[]
	success: string
}

export interface AboutData {
	banner: AboutBanner
	discount_list: AboutDiscount
	garant_list: AboutGarant
	partners: AboutPartner
	seo: Seo
}

export interface AboutBanner {
	detail: AltSrc
	preview: AltSrc
	title: string
}

export interface AboutDiscount {
	items: ImgText[]
	title: string
}

export interface AboutGarant {
	items: Text[]
	title: string
}

export interface AboutPartner {
	img: AltSrc
	phone: string
	reqFile: string
	reqItems: NameTypeValue[]
	reqTitle: string
	text: string
	title: string
	warning: string
}
