import { storage } from "../firebase";
import { v4 } from "uuid";
import {uploadBytes,ref } from '@firebase/storage'


export function Subirimg(file) {
    // const StorageRef = ref (storage, v4())
    const StorageRef = ref(storage, 'Animal_Image/' + v4() + '/' + file.name);
    uploadBytes(StorageRef, file).then(snapshot => {
      console.log(snapshot)
    })
  }   