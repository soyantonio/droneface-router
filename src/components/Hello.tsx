import React, { FunctionComponent, FormEvent, ChangeEvent, useState, useEffect } from 'react';
import firebase from './Firebase/firebase'

type HelloProps = {
  compiler: string,
  framework: string
}

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
const usersRef = db.collection("users");
const build_ngrok = (ngrok_id : string) => `http://${ngrok_id}.ngrok.io/`

export const Hello : FunctionComponent<HelloProps> = ({ compiler, framework, ...props }) => {
  const [url, setURL] = useState("");
  const [fieldState, setFieldState] = useState("Write ngrok id");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {    
    const ngrok_id = event.target.value 
    const ngrok = build_ngrok(ngrok_id)
    setURL(ngrok_id);
    setFieldState(`Press enter to update to ${ngrok}`)
  }
  

  const updateUser = (id: string, user : Object, ngrok : string) => {
    setFieldState(`Updating to ${ngrok}`)
    
    console.log(id, user, ngrok);

    usersRef.doc(id)
    .update({ ngrok:  ngrok })
    .then(() => setFieldState(`New resolver in ${ngrok}`))
    .catch(() => setFieldState(`Can not update to ${ngrok}, try later`))
  }

  const handleSubmit = (e: FormEvent<Element>) => {
    e.preventDefault()
    const ngrok = build_ngrok(url)
    
    usersRef.where('user_id', '==', 2).limit(1).get()
    .then(user => updateUser(user.docs[0].id, user.docs[0].data(), ngrok))
    .catch(error=>{
      setFieldState(`Can not connect with db, try later`)
      console.log(error)
    })
  }


  return (
    <div>
      <h1>Droneface</h1>
      <span>{compiler} and {framework}!</span>
      <form onSubmit={handleSubmit}> 
        <label>
          Address: <input type="text" value={url} onChange={handleChange} />
        </label>
      </form>

      <span>{ fieldState }</span>
    </div>
  );
} 