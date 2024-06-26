export interface calculatorValue {
    name: string
    link: string
}

export interface menuItem {
    title: string
    link: string
}

export interface ImgText {
    img: AltSrc
    text: string
}

export interface AltSrc {
    alt: string
    src: string
}

export interface Text {
    text: string
}

export interface Name {
    name: string
}

export interface NameTypeValue {
    name: string
    type: string
    value: string
}

export type NameValue = Omit<NameTypeValue, 'type'>

export interface Seo {
    canonical: string
    description: string
    keywords: string
    title: string
}

export interface NameText {
    name: string
    text: string
}

export interface Banner {
	detail_picture: AltSrc
	detail_text: string
	name: string
	preview_picture: AltSrc
	preview_text: string
}

export interface LinkText {
    link: string
    text: string
}

export interface CodeLinkName {
    code: string
    link: string
    name: string
}

export interface TitleSrc {
    title: string
    src: string
}

export interface TitleUrl {
    title: string
    url: string
}

export interface NamePictureText {
    name: string
    picture: AltSrc
    text: string
}
