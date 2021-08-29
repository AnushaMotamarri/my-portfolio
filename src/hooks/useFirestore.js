import React,{useState,useEffect} from 'react'
import {projectFirestore} from '../firebase/config'

const useFirestore= (collection)=> {
    const [docs,setDocs] = useState([])
    useEffect(()=>{
    const unsub=    projectFirestore.collection(collection).onSnapshot((snap)=>{
            let documents  =[];
            console.log("updated")
            snap.forEach(doc=>{
             documents.push({...doc.data(),id:doc.id})  
           // updateFirestore('images',doc.id,0)
            })
            setDocs(documents)
        })

        return ()=>unsub();
    },[collection])
    return {docs};
}
const updateFirestore = (collection,id,val) => {
   projectFirestore.collection(collection).doc(id).update({likes:val})
}

export {useFirestore,updateFirestore}