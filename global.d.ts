declare global {
    namespace NodeJS {
        interface ProcessEnv {
            KOFIO_USERNAME: string;
            KOFIO_PASSWORD: string;
        }
    }
}
export { };