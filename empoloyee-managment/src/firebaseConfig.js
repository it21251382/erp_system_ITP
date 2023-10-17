// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBHYVdVbEyJYit3-siJ9WhALXzpguIW9E",
    authDomain: "task-manager-38b6f.firebaseapp.com",
    projectId: "task-manager-38b6f",
    storageBucket: "task-manager-38b6f.appspot.com",
    messagingSenderId: "169531577774",
    appId: "1:169531577774:web:a4e3f096d02803efc9a43f",
    measurementId: "G-1ZBN8RT6NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Upload a document
const uploadDocument = async (collectionName, file) => {
    try {
        const fileName = file.name;
        const fileUrl = await uploadFile(file); // Assuming you have an uploadFile function
        // console.log(fileUrl);
        return fileUrl;
    } catch (error) {
        console.error("Error adding document: ", error);
        return null;
    }
};


// Upload an image and get the download URL
const uploadImage = async (file) => {
    const storageRef = ref(storage, `ITP/images/${file.name}`);
    try {
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Error uploading image: ", error);
        return null;
    }
};

// Delete a document
const deleteDocument = async (collectionName, docId) => {
    try {
        await deleteDoc(doc(db, collectionName, docId));
        return true;
    } catch (error) {
        console.error("Error deleting document: ", error);
        return false;
    }
};

// Update a document
const updateDocument = async (collectionName, docId, newData) => {
    try {
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, newData);
        return true;
    } catch (error) {
        console.error("Error updating document: ", error);
        return false;
    }
};

const uploadFile = async (file) => {
    const storageRef = ref(storage, `files/${file.name}`);
    try {
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        console.error("Error uploading file: ", error);
        return null;
    }
};

const deleteFileByUrl = async (url) => {
    // Assuming the URL follows the pattern and you can extract the file path
    const filePath = url.split(".com/")[1]; // Extract path after ".com/"

    const storageRef = ref(storage, filePath);

    try {
        await deleteObject(storageRef);
        console.log("File deleted successfully");
    } catch (error) {
        console.error("Error deleting file: ", error);
    }
};

// Export the functions
export { uploadDocument, uploadImage, deleteDocument, updateDocument, uploadFile, deleteFileByUrl };