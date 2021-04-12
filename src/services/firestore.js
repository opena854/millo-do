import firebase from "firebase/app";
import { useEffect, useState } from "react";

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const PREFLEN = 4
const salt = ( a = new Date() ) => [a.getFullYear()%2000 - 20, a.getMonth(), a.getDate()].map( val => CHARS.charAt(val % CHARS.length) ).join("")

const newId = (collName = "") => {
  collName = (collName ? collName.substring(0, PREFLEN) + "-" : "m") + salt();

  const len = 20 - collName.length;
  const Arr = new Array(len).fill("");
  const Arr2 = Arr.map( () => CHARS.charAt( Math.floor(Math.random() * CHARS.length )))
  return collName.concat(Arr2.join(""));
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
  const [doc] = useState(firebase.firestore().doc(pathstr))
  
  useEffect(() => {
    if (_id === _last)
      doc.get().then(
        (_data) => {
          console.log("loaded", pathstr);
          if (!_data.exists) setError({ ...Error("Not Found"), name:"Database Error" });
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
      collectionReference || firebase.firestore().collection(pathstr);

    coll.get().then(
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
