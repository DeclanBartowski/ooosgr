import type { AltSrc, NameValue, Seo } from '../root'

export interface ContactDto {
	data: ContactData
	error: string[]
	success: string
}

export interface ContactData {
	banner: AltSrc
	list: NameValue[]
	seo: Seo
}
