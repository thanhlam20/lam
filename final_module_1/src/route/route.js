import Navigo from "navigo";

const route = new Navigo("/");
const initRoute = async () => {
    route.on("/", () => {
        
    })
};

export default initRoute;