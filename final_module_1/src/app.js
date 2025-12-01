import Home from "./pages/home"
export const app = async () => {
    return `
    ${await Home()}
    `
};