import { Dirent } from "fs"

const fsP = require("fs").promises

/**
 * メソッドが対応しているものか判定する
 * @param {string} method - メソッド名
 * @return {boolean} 対応している場合true 
 */
 function checkValidMethod(method: string): boolean {
    return method.indexOf(method) >= 0
}

/**
 * 
 * @param path - 
 */
export function parsePath(uri: string): {method: string, path: string} {
    const array: string[] = uri.split(':')
    if (array.length <= 2) {
        return
    }
    const method = array[0]
    const path = array[1]
    if (!checkValidMethod(method)) {
        return
    }

    return {
        method,
        path
    }
}

/**
 * controllerのapiを読み込む
 * @param rootDir {string} - ルートで
 */
export async function setupApi(rootDir: string): Promise<Dirent[]> {
    const options = {
        withFileTypes: true
    }
    const files = await fsP.readdir(rootDir, options)
    console.log(files)

    console.log(1)
    files.forEach((file: Dirent) => {
        console.log(file)
        console.log(file.isDirectory())
    })
    return files
}