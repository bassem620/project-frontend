import { useState } from "react";
import { storage } from "../firbase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Sell = () => {

    const [imageUpload, setImageUpload] = useState(null);
    const uploadImage = () => {
        if(imageUpload === null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then( _ => {
            alert("Image uploaded");
        })
    }

    return (
        <>
        <section className="sell">
            <div className="container-lg">
                <br />
                <br />
                <br />
                <br />
                <input type="file" onChange={ (event) => {setImageUpload(event.target.files[0])}}/> <br />
                <button onClick={uploadImage}>Upload</button>
            </div>
        </section>
        </>
    );
}

export default Sell;