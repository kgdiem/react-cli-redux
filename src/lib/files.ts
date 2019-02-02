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

export async function write(path: string, dirParts: string[], content: string): Promise<boolean> {
    try {
        return await (new Promise((resolve, reject) => {
            fs.writeFile(path, content, async err => {
                if(err) {
                    await handleWriteFileError(err, dirParts)

                    await write(path, dirParts, content)

                    resolve(true)
                } else {
                    resolve(true)
                }
            })
        }))
    } catch(e) {
        return Promise.reject(e)
    }
}

export function mkdir(path: string, pathParts: string[]): Promise<string> {
    try{
        return new Promise((resolve, reject) => {
            fs.mkdir(path, async err => {
                if(err) {
                    const resolvePath = await handleWriteDirError(err, path, pathParts)
                    
                    if(resolvePath) {
                        resolve(path)

                        return
                    }

                    resolve(mkdir(path, pathParts))
                } else {
                    resolve(path)
                }
            })
        })
    } catch(e) {
        return Promise.reject(e)
    }
}

async function handleWriteFileError(e: NodeJS.ErrnoException, dirParts: string[]) {
    if(e.code === 'ENOENT') {
        await mkdir(path.resolve(...dirParts), dirParts)
    } else {
        throw new Error(e.message)
    }
}

async function handleWriteDirError(e: NodeJS.ErrnoException, pathName: string, pathParts: string[]) {
    const code = e.code

    if(code === 'ENOENT') {
        const updir = pathParts.slice(0, pathParts.length-1)

        await mkdir(path.resolve(...updir), updir)

        mkdir(pathName, pathParts)
    } else if(e.code === 'EEXIST') {
        return true
    } else {
        throw new Error(e.message)
    }
}