import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import "./PopUpForm.scss"
const PopUpForm = ({mutation,children,inputs}) => {
    const [formVisability, setFormVisability] = useState(false);
 
  const [MutationFunc, _mutationObj] = useMutation(mutation);
  console.log(inputs)
  const handelMutation = async () => {
    await MutationFunc({
      variables: {
        input:inputs
        

      }
    })
      .then((res) => {
       console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
  };
  return (
    <><i className="fa-solid fa-circle-plus addIcon" onClick={() => {
          formVisability ? setFormVisability(false) : setFormVisability(true);
      } }></i><div className={formVisability ? ' pupUpForm active' : 'pupUpForm'}
      >
              <i className="fa-solid fa-circle-xmark exitIcon" onClick={() => {
                  formVisability ? setFormVisability(false) : setFormVisability(true);
              } }></i>
              <form action="">
                  <h2>add category</h2>
                  <div className="inputRow">
                      {children}
                  
                  </div>
                  <button className="Btn" onClick={()=>{
                    handelMutation()
                  }}>create</button>
              </form>
          </div></>
  )
}

export default PopUpForm
