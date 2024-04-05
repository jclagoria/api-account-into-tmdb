export interface ApiError {
    api_status_code: number,
    api_status_text: string,
    success: boolean,
    status_code: number | null,
    status_message: string | null
}
