import Clarifai from "clarifai"
import { CLARIFAI_KEY } from "./Keys";

const app = new Clarifai.App({
    apiKey: CLARIFAI_KEY
})



export default {
    get(image: string) {
        return app.models.predict(Clarifai.GENERAL_MODEL, { base64: image })
    }
}