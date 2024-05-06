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
