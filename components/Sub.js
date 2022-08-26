import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

export default function Sub() {

    const SUBSCRIBE = gql`
        mutation subscribeEmail($mail: String!){
            subscribeEmailToNewsletter(
                email: $mail
            ) {
                status
            }
        }
    `;

    const [subscribe, { data, loading, error }] = useMutation(SUBSCRIBE);


    const submitHandler = async(ev) => {
        console.log('submitting')
        let { target: form } = ev;
        let email = form.querySelector('#email').value;
        
        // subscribe({ variables: { mail: email } })
        subscribe({variables: {mail: email}})
        console.log('ini emial',email);
    }

    return (
        <div>
            {
                !data ?
                    <p></p>
                :
                    <p>{data.subscribeEmailToNewsletter.status}</p>
            }
            <form onSubmit={(ev) => {ev.preventDefault(); submitHandler(ev)}}>
                <label >Email address</label>
                <input type="email" id="email" name="email" placeholder="Email address" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}