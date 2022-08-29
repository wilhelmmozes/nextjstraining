import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import ButtonSubscribe from '@material-ui/core/Button';

export default function Sub() {
    const [subscribeData, setDataSubscribe] = useState(null);
    let input;
    

    const SUBSCRIBE = gql`
        mutation subscribeEmail($email: String!){
            subscribeEmailToNewsletter(
                email: $email
            ) {
                status
            }
        }
    `;

    const [dataSubscribe, error, data] = useMutation(SUBSCRIBE, { errorPolicy: "all" });

    const handleSubmit = async (val) => {
        console.log(val)
        const responseData = await dataSubscribe({
            variables: {
                email: val
            }
        })
        if (responseData) {
            console.log(val);
            setDataSubscribe(responseData);
        }
    };

    return (
        <div>
            <form
            onSubmit={e => {
                e.preventDefault();
                handleSubmit(input.value);
                input.value = '';
            }}>

                <input
                    ref={node => {
                        input = node;
                }}/>

                <button type="submit">subscribe</button>
                <p>{(!error.error)?"Subscribed":error.error.message}</p>
            </form>
        </div>
    );
}