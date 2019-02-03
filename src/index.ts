import Router from './router'

try{
    Router(process.argv)
        .then(message => {
            console.info(message)

            process.exit(0)
        })
} catch(e) {
    console.warn(e)

    process.exit(1)
}