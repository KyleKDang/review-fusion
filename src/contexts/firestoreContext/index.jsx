import React, { useState, useContext } from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const FirestoreContext = React.createContext();

export function useFirestore() {
    return useContext(FirestoreContext);
}

export function firestoreProvider({ children }) {
    const auth = useAuth();
    const user = auth.currentUser;

    return (
        <FirestoreContext.Provider>
            {children}
        </FirestoreContext.Provider>
    );
}