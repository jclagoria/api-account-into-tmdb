import NodeCache from 'node-cache'

class APICache {
    private static instance: APICache
    private cache: NodeCache

    private constructor(ttlSecond: number) {
        this.cache = new NodeCache({stdTTL: ttlSecond})
    }

    public static initialize(ttlSeconds: number = 3000) {
        if (!APICache.instance) {
            APICache.instance = new APICache(ttlSeconds);
        } else {
            console.warn("APICache has already been initialized. Subsequent calls to initialize() will be ignored.");
        }
    }

    public static getInstance(ttlSeconds: number = 3000): APICache{
        if(!APICache.instance){
            APICache.instance = new APICache(ttlSeconds)
        }

        return APICache.instance
    }

    get<T>(key: string): T | undefined {
        return this.cache.get<T>(key)
    }

    set<T>(key: string, value: T): void {
        this.cache.set(key, value)
    }

}

export {APICache}
