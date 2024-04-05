import {Request, Response, NextFunction} from 'express'
import helmet, {HelmetOptions} from 'helmet'

export function securityMiddleware(req: Request, res: Response, next: NextFunction) {
    const helmetOptions: HelmetOptions = {
        contentSecurityPolicy: {
            useDefaults: true,
            directives: {
                defaultSrv: ["'self"],
                scriptSrc: ["'self", "'unsafe-inline'"],
                styleSrv: ["'self", "'https:'", "'unsafe-inline'"]
            },
        },
        dnsPrefetchControl: {allow: false},
        frameguard: {action: 'deny'},
        hsts: {
            maxAge: 60 * 60 * 24 * 365,
            includeSubDomains: true,
            preload: true,
        },
        ieNoOpen: true,
        noSniff: true,
        permittedCrossDomainPolicies: {permittedPolicies: 'none'},
        referrerPolicy: {policy: 'no-referrer'}
    }

    helmet(helmetOptions)(req, res, next)
    res.setHeader('X-XSS-Protection', '1; mode=block')
}
