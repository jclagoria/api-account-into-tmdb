import {NextFunction, Request, Response} from 'express'

// @ts-ignore
export function validateAccountID(req: Request, res: Response, next: NextFunction) {
    const accountId = req.params.accountId;
    if (!accountId || isNaN(Number(accountId)) || !Number.isInteger(Number(accountId))) {
        return res.status(400).json({
            codeMessage: 'TMDB0001',
            message: 'AccountId is required and must be an integer.'
        });
    }
    next();
}

// @ts-ignore
export function validatePageNumber(req: Request, res: Response, next: NextFunction) {
    const numberPage = req.query.page;
    if (numberPage && (isNaN(Number(numberPage)) || !Number.isInteger(Number(numberPage)))) {
        return res.status(400).json({
            codeMessage: 'TMDB0002',
            message: 'Invalid page: Pages start at 1 and max at 500. They are expected to be an integer.'
        });
    }
    next();
}
