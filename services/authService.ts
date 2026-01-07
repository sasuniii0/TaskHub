import { createUserWithEmailAndPassword, updateProfile ,signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth, db  } from "./firebase.config"
import { doc, setDoc } from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const registerUser = async (name: string , email: string , password: string) =>{
    //Authentication saves only the email and password only.
    const userCredentials = await createUserWithEmailAndPassword(auth,email,password)

    //saving firestore
    // we need to save other details in firestore(works as the Database)
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
export const loginUser = async (email: string , password: string) =>{
    return signInWithEmailAndPassword(auth,email,password)
}
export const logoutUser = async () => {
    await signOut(auth);
    AsyncStorage.clear();
    return;
}