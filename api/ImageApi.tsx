import Clarifai from "clarifai"
import { CLARIFAI_KEY } from "./Keys"
import firestore from '@react-native-firebase/firestore';

process.nextTick = setImmediate

const app = new Clarifai.App({
    apiKey: CLARIFAI_KEY
})

export interface Recyclable {
    name: String
}

export default {
    async get(image: string): Promise<Recyclable[]> {
        let materials = firestore().collection("materials")

        // let labels = app.models.predict(
        //     Clarifai.GENERAL_MODEL,
        //     { base64: image }
        // ).response.outputs[0].data.concepts

        // let items : Recyclable[] = []

        // for (let label of labels) {
        //     // refs.push( materials.doc(label.name) )
        //     // transaction.get(
        //     //     materials.doc(label.name)
        //     // ).then(() => {
        //         items.push({
        //             name: label.name
        //         })
        //     // })
        // }

        // return items

        return []
    
        // return app.models.predict(Clarifai.GENERAL_MODEL, { base64: image })
    }
}