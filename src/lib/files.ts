import fs from 'fs'
import path from 'path'

export function getPath(parts: string[], filename: string, extension: string): string {
    const file = `${filename}.${extension}`

    const pathName = path.resolve(...parts)

    return path.join(pathName, file)
}

export function writeFile(path: string, content: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, err => {
            if(err)
                reject(err)
            
            resolve(true)
        })
    })
}