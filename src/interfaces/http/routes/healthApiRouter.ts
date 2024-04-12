import {NextFunction, Response, Request, Router} from 'express'

export const healthApiRouter = Router()

healthApiRouter.get('/health', async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json({message: 'API is UP'})
    } catch (error) {
        next(error)
    }
})
