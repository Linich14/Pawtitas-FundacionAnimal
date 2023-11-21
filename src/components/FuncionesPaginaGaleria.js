import { storage } from "../firebase";
import { v4 } from "uuid";
import {uploadBytes,ref } from '@firebase/storage'


export function uploadFile(file) {
    // const StorageRef = ref (storage, v4())
    const StorageRef = ref(storage, 'ImagenesGaleria/' + v4() + '/' + file.name);
    uploadBytes(StorageRef, file).then(snapshot => {
      console.log(snapshot)
    })
  }    

