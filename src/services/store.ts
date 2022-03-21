import { collection, doc, onSnapshot, query, DocumentData } from "firebase/firestore"
import { useEffect, useState } from "react";
import { useSession } from "../components/user"


export interface Third {
    document_id?: string,
    id: string,
    tipo_id: 0 | 1 | 2,
    nombre: string
}


export const useThirds = () => {
    const session = useSession();
    const realm = session?.realm;
    const [docs, setDocs] = useState< Third[] >([])
    
    useEffect(() => {
        if (realm) {
            const q = query(collection(realm, "terceros"));
            onSnapshot(q, (querySnapshot) => {
                
                setDocs(
                  querySnapshot.docs
                    .map((doc) => ({
                      document_id: doc.id,
                      data: doc.data(),
                    }))
                    .map(({ document_id, data: { id, tipo_id, nombre } }) => ({
                      document_id: document_id,
                      id: id,
                      tipo_id: tipo_id,
                      nombre: nombre,
                    }))
                );
                
            })
        }
    },[realm])

    return docs;
}


export const useThird = (id: string | undefined) => {
    const session = useSession();
    const realm = session?.realm;
    const [third, setThird] = useState< Third | undefined>(undefined)
    
    useEffect(() => {
        if (realm && id) {
            const d = doc(realm, `terceros/${id}`)
            
            onSnapshot(d, (docSnapshot) => {
                const data = docSnapshot.data();
                
                setThird(data ? {
                    document_id: docSnapshot.id,
                    id: data.id,
                    tipo_id: data.tipo_id,
                    nombre: data.nombre,
                } : undefined)
            })
        }
    },[realm, id])

    return third;
}



export const useCollection = (path: string) :[DocumentData[], boolean] => {
    const session = useSession();
    const realm = session?.realm;
    const [docs, setDocs] = useState<DocumentData[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (realm) {
            const q = query(collection(realm, path));
            
            return onSnapshot(q, (querySnapshot) => {
                
                setDocs(
                  querySnapshot.docs
                    .map((doc) => ({
                      document_id: doc.id,
                      ...(doc.data()),
                    }))
                );
                
                setLoading(false);
            })
        }
    },[realm, path])

    return [docs, loading];
}


export const useDocument = (path: string, id: string | undefined): [DocumentData | undefined, boolean] => {
    const session = useSession();
    const realm = session?.realm;
    const [document, setDocument] = useState< DocumentData | undefined>(undefined)
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (realm && id) {
            const d = doc(realm, path, id)
            
            onSnapshot(d, (docSnapshot) => {
                const data = docSnapshot.data();
                
                setDocument(data ? {
                    document_id: docSnapshot.id,
                    ...data,
                } : undefined)
                setLoading(false);
            })
        }
    },[realm, path, id])

    return [document, loading];
}
