import fs from 'fs'
import path from 'path'

export function dirExists(parts: string[]): Promise<boolean> {
    try{
        const pathName = path.resolve(...parts)

        return new Promise((resolve, reject) => {
            try {
                fs.exists(pathName, exists => {
                    resolve(exists)
                })
            } catch(e) {
                reject(e)
            }
        })
    } catch(e) {
        return Promise.reject(e)
    }
}

export function getPath(parts: string[], filename: string, extension: string): string {
    const file = `${filename}.${extension}`

    const pathName = path.resolve(...parts)

    return path.join(pathName, file)
}

export function writeFile(path: string, content: string): Promise<boolean> {
    try {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, content, err => {
                if(err)
                    reject(err)
                
                resolve(true)
            })
        })
    } catch(e) {
        return Promise.reject(e)
    }
}