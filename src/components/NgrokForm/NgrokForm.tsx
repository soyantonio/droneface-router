import React, { FunctionComponent, FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { usersRef } from 'src/components/Firebase/firebase'
import { Props } from './NgrokForm.type'
import { Form, Input, Message } from './NgrokFrom.styled'

const build_ngrok = (ngrok_id : string) => `http://${ngrok_id}.ngrok.io/`
const get_ngrok = (user_id : number = 2) => usersRef.where('user_id', '==', user_id).limit(1).get();

const NgrokForm : FunctionComponent<Props> = ({ compiler, framework, ...props }) => {
  const [nid, setNid] = useState("");
  const [nurl, setNURL] = useState("");
  const [fieldState, setFieldState] = useState(`Getting ngrok_id`);

  useEffect(() => {
    get_ngrok()
    .then(user => {
      const data = user.docs[0].data()
      setNid(data.ngrok_id)
      setNURL(data.ngrok)
      setFieldState(`Resolving at ${data.ngrok}`)
    })
    .catch(() => setFieldState("Ngrok id not found"))
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {    
    const ngrok_id = event.target.value.replace(/ |;|:|\[|\]|{|}|\(|\)|'|"/g, '').toLowerCase();
    const ngrok = build_ngrok(ngrok_id)
    setNid(ngrok_id);
    setFieldState(`Press enter to update to ${ngrok}`)
  }
  

  const updateUser = (id: string, user : Object, ngrok_id : string) => {
    const ngrok = build_ngrok(ngrok_id)
    setFieldState(`Updating to ${ngrok}`)
    
    console.log(id, user, ngrok);

    usersRef.doc(id)
    .update({ ngrok:  ngrok,  ngrok_id: ngrok_id })
    .then(() => {
      setNURL(ngrok);
      setFieldState(`New resolver in ${ngrok}`)
    })
    .catch(() => setFieldState(`Can not update to ${ngrok}, try later`))
  }

  const handleSubmit = (e: FormEvent<Element>) => {
    e.preventDefault()
    
    get_ngrok()
    .then(user => updateUser(user.docs[0].id, user.docs[0].data(), nid))
    .catch(error=>{
      setFieldState(`Can not connect with db, try later`)
      console.log(error)
    })
  }


  return (
    <Form onSubmit={handleSubmit}> 
      <label>
        <a href={ nurl } target="_blank" rel="noopener noreferrer">AddressID</a>
        <Input type="text" value={nid} onChange={handleChange} />
      </label>
      <Message>{ fieldState }</Message>
    </Form>
  );
} 

export default NgrokForm;