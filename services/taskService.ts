import { getAuth } from "firebase/auth"
import { addDoc, collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "./firebase.config"

const auth = getAuth()
const taskCollection = collection(db,"tasks")
export const addTask = async(title:string , description:string, isCompleted:false) => {
    const user = auth.currentUser
    if(!user) return;

    addDoc(taskCollection,{
        title,
        description,
        isCompleted,
        userId : user.uid ,
        createdAt: new Date().toISOString
    })
}

export const getAllTasks = async() => {
    const user = auth.currentUser
    if(!user) return;

    const q = query(taskCollection,where("userId", "==" , user.uid),orderBy("createdAt","desc"))
    const snapshot = await getDocs(q)
    snapshot.docs.map((dataSet) => {
        const data = dataSet.data()
        return{
            id:dataSet.id,
            title: data.title as string,
            description : data.description as string,
            isCompleted : data.isCompleted as boolean || false,
            createdAt : data.createdAt as string
        }
    })
}