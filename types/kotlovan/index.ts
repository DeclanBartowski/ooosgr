import type { AltSrc, NameText, Seo, Name, Banner } from '../root'

export interface KotlovanDto {
	data: KotlovanData
	error: string[]
	success: string
}

export interface KotlovanData {
	adv: KotlovanAdv
	banner: Banner
	case: KotlovanCase
	factors: KotlovanFactors
	seo: Seo
	spec: KotlovanSpec
	steps: KotlovanSteps
	techniq: KotlovanTechniq[]
	text_block: KotlovanBlock
	text_block_2: KotlovanBlock
}

export interface KotlovanAdv {
	items: Name[]
	title: string
}



export interface KotlovanCase {
	items: KotlovanCaseItems[]
	title: string
}

interface KotlovanCaseItems {
	image: AltSrc
}

export interface KotlovanFactors {
	items: NameText[],
	title: string
}

export interface KotlovanSpec {
	items: {
		first: KotlovanSpecItems
		second: KotlovanSpecItems
	}
	title: string
}

interface KotlovanSpecItems {
	picture: AltSrc
	text: string
	value: KotlovanSpecItemsValue[]
}

interface KotlovanSpecItemsValue {
	measure: string
	name: string
	product: string
}

export interface KotlovanSteps {
	items: NameText[],
	title: string
}

export interface KotlovanTechniq {
	name: string
	picture: AltSrc
}

export interface KotlovanBlock {
	detail_picture: AltSrc
	detail_text: string
	name: string
	preview_picture: AltSrc
	preview_text: string
}
