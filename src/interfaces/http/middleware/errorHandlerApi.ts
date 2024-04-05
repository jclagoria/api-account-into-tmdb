import {Request, Response, NextFunction} from 'express'
import httpStatus from 'http-status'
import {AxiosError} from 'axios'
import {ApiError} from '../../../domain/models/ApiError'

function buildApiErrorFromException(error: Error): { statusCode: number; apiError: ApiError } {
    if (error instanceof AxiosError && error.response) {
        return {
            statusCode: error.response.status,
            apiError: {
                api_status_code: error.response.status,
                api_status_text: error.response.statusText,
                success: error.response.data.success,
                status_code: error.response.data.status_code,
                status_message: error.response.data.status_message
            }
        };
    }

    // Default to internal server error for non-operational errors
    return {
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        apiError: {
            api_status_code: httpStatus.INTERNAL_SERVER_ERROR,
            api_status_text: error.message,
            success: false,
            status_code: null,
            status_message: null
        }
    };
}

export function errorHandlerApi(err: Error, req:Request, res:Response, next:NextFunction) : void {
    console.log(`Error: ${err}`)

    const { statusCode, apiError } = buildApiErrorFromException(err);

    res.status(statusCode).send(apiError)
}
