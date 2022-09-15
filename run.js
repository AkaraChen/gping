import { fileURLToPath } from 'url'
import { createServer } from 'vite'
import { execa } from 'execa';

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const run = async () => {
    execa("node", ["server.cjs"])
    const server = await createServer({
        root: __dirname,
        server: {
            open: true
        }
    })
    await server.listen()
    server.printUrls()
}

run()