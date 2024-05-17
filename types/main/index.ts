export interface MainDto {
	data: MainData
	error: string[]
	success: string
}

export interface MainData {
    header: object
    header_email: object
    header_phone: object
    copyright: object
    address: object
    social: object
    menu: object
}
