function generateKey(options: {url: string, params?: object}): string {
    return `tmdb:${options.url}:${JSON.stringify(options.params || '')}`
}

export {generateKey}
