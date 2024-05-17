import type { Seo} from '../root'

export interface RepairDto {
	data: RepairData
	error: string[]
	success: string
}

export interface RepairData {
    title: string
    trub: object
    btnLink: object
    sibar_filter: object
    items: object
    restore_main: object
    second_block: object
    trub_by: object
    trub_lejalnie: object
    file: string
    text_link: string
	seo: Seo
}
