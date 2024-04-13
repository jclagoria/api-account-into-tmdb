import {NextFunction, Response, Request, Router} from 'express'

export const healthApiRouter = Router()

healthApiRouter.get('/health', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({message: 'API is UP'})
    } catch (error) {
        next(error)
    }
})
