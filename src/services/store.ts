import { collection, doc, onSnapshot, query, DocumentData, CollectionReference, setDoc, addDoc, DocumentReference } from "firebase/firestore"
import { useEffect, useMemo, useState } from "react";
import { useSession } from "../components/user"

type  UseCollection = (path: string) => [DocumentData[], boolean, SaveDocument | undefined]

export const useCollection : UseCollection = path => {
    const session = useSession();
    const realm = session?.realm;
    const [docs, setDocs] = useState<DocumentData[]>([])
    const [loading, setLoading] = useState(true);

    const [reference, saveDoc] = useMemo( () => {
        if (realm)  {
            const ref = collection(realm, path)
            return [ref, saveDocument(ref)]
        } else return [undefined, undefined]
    }, [realm, path])
    
    useEffect(
      () =>
        reference &&
        onSnapshot(query(reference), (querySnapshot) => {
          setDocs(
            querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );

          setLoading(false);
        }),

      [reference]
    );

    return [docs, loading, saveDoc];
}

type  UseDocument = (path: string, id: string | undefined) => [DocumentData | undefined, boolean, SaveDocument | undefined]

export const useDocument :  UseDocument = (path, id) => {
    const session = useSession();
    const realm = session?.realm;
    const [document, setDocument] = useState< DocumentData | undefined>(undefined)
    const [loading, setLoading] = useState(true);
    
    const [reference, saveDoc] = useMemo( () => {
        if (!realm)
            return [undefined, undefined]
        else if (!id)
            return [undefined, saveDocument(collection(realm, path))]
        else {
            const ref =  doc(realm, path, id)
            return [ref, saveDocument(ref)]
        }
    }, [realm, path, id])
    
    useEffect(
      () =>
        reference &&
        onSnapshot(reference, (docSnapshot) => {
          const data = docSnapshot.data();

          setDocument(
            data
              ? {
                  ...data,
                  id: docSnapshot.id,
                }
              : undefined
          );
          setLoading(false);
        }),

      [reference]
    );

    return [document, !!id && loading, saveDoc];
}

type SaveDocument = ((document: DocumentData) => Promise<string>) 

type SaveDocumentOverload = {
    ( doc: DocumentReference ): SaveDocument;
    ( collection: CollectionReference ): SaveDocument;
}

const saveDocument : SaveDocumentOverload = reference => document => {
    const { id, ...data } = document;

    if (id && typeof id === "string" && reference.type === "document") {
        return setDoc(reference, data).then( () => reference.id )
    } else if (reference.type === "collection") {
        return addDoc(reference, data).then( value => value.id )
    } else throw Error("Incorrect document data or origin to save.");
}


