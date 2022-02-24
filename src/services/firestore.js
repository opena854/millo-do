
import { getDoc, getDocs, doc as firestoreDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const ALLOWED_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const PREFIX_LEN = 4
const ID_LENGHT = 20

const salt = ( a = new Date() ) => [a.getFullYear()%2000 - 20, a.getMonth(), a.getDate()].map( val => ALLOWED_CHARS.charAt(val % ALLOWED_CHARS.length) ).join("")
const randomChar = () => ALLOWED_CHARS.charAt( Math.floor(Math.random() * ALLOWED_CHARS.length ))

const newId = (collectionName = "") => {
  let newId = (collectionName ? collectionName.substring(0, PREFIX_LEN) + "-" : "m") + salt();
  
  while (newId.length < ID_LENGHT) newId.concat(randomChar())

  return newId
};

export const useDocument = ({ /* documentReference, */ path = [] }) => {
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  
  const _path = [...path]; //new path
  const _last = _path.pop();
  const [_id] = useState(_last || newId(_path.slice(-1)[0] ));
  _path.push(_id);

  const pathstr = (_path?.join && _path.join("/")) || _path;
  const [doc] = useState(getDoc(firestoreDoc(getFirestore(), pathstr)) )
  
  useEffect(() => {
    if (_id === _last)
      doc.then(
        (_data) => {
          console.log("loaded", pathstr);
          if (!_data.exists()) setError({ ...Error("Not Found"), name:"Database Error" });
          setResult({
            ..._data.data(),
          });
          setLoading(false);
        },
        (_error) => setError(_error)
      );
    else {
      console.log("new doc", pathstr);
      setLoading(false);
      setResult({});
    }

  }, [doc, pathstr, _last, _id]);

  return {
    loading: isLoading,
    result,
    error,
    doc,
  };
};

export const useCollection = ({ collectionReference, path = [] }) => {
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const pathstr = (path?.join && path.join("/")) || path;

  useEffect(() => {
    console.log("loading", pathstr);
    const coll =
      collectionReference || getDocs(collection(getFirestore(),pathstr));

    coll.then(
      (_data) => {
        setLoading(false);
        setResult(
          _data.docs.map((doc) => ({
            _id: doc.id,
            _path: doc.ref.path,
            ...doc.data(),
          }))
        );
      },
      (_error) => setError(_error)
    );
  }, [collectionReference, pathstr]);

  return {
    loading: isLoading,
    result,
    error,
  };
};
