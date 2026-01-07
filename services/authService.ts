import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db } from "./firebase.config"
import { doc, setDoc } from "firebase/firestore"

export const registerUser = async (name: string , email: string , password: string) =>{
    const userCredentials = await createUserWithEmailAndPassword(auth,email,password)

    //saving firestore
    await updateProfile(userCredentials.user,{
        displayName: name
    })
    await setDoc(
        doc(db,"users",userCredentials.user.uid),{
            name,
            role:"",
            email,
            createdAt: new Date(),
        }
    );
    return userCredentials.user
}
export const loginUser = (email: string , password: string) =>{}