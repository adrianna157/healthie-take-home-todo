import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'

export default defineConfig({
    plugins: [react(), jsconfigPaths()],
    test: {
        dir: 'src/tests',
        include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        environment: 'jsdom'
    },
})