import { Files, Parser, Transformer } from '../lib'

export async function run(args: string[]): Promise<void> {
    const [componentName, pathName, pathParts] = Parser.getPathParts(args.shift())

    const componentClass = Transformer.createFunctionalComponent(componentName)
    const componentTest = Transformer.createRenderTest(componentName)
    
    const cwd = process.cwd()

    const cwdDir = [cwd]
    const srcDir = [cwd, 'src']
    const srcComponentsDir = [cwd, 'src', 'components']

    let dirToUse: string[]
    
    //Check for component folder first 
    if(await Files.dirExists(srcComponentsDir)) {
        dirToUse = srcComponentsDir
    } else if(await Files.dirExists(srcDir)) {
        dirToUse = srcDir
    } else {
        dirToUse = cwdDir
    }

    await _run([...dirToUse, ...pathParts], componentName, componentClass, componentTest)
}

async function _run(componentPath: string[], componentName: string, componentClass: string, componentTest: string) {
    const testPathParts = [...componentPath, '__tests__']

    const path = Files.getPath(componentPath, componentName, 'js')
    const testPath = Files.getPath(testPathParts, componentName, 'js')

    await Files.writeFile(path, componentPath, componentClass)
    await Files.writeFile(testPath, testPathParts, componentTest)
}