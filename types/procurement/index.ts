import type { Banner, Seo } from '../root'

export interface ProcurementDto {
	data: ProcurementData
	error: string[]
	success: string
}

export interface ProcurementData {
	info: Banner
	items: DateNamePriceVolume[]
	seo: Seo
	title: string
}

interface DateNamePriceVolume {
	date: string
	name: string
	price: string
	volume: string
}
