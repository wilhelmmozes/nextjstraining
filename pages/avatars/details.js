import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react';


function Details({details}) {
    console.log(details);
    const router = useRouter();
    // console.log(router.query.id);

    return (
        <div>
            {
                details.map(detail =>(
                    <img key={detail._id} src={detail.photoUrl} width="200" height="200"></img>
                ))
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    console.log("ini contextid",context.query.id);
    const res = await fetch('http://localhost:3000/api/avatars/'+context.query.id);
    const details = await res.json();
    console.log("ini detail", details);
    
    if(details.hasOwnProperty('error')) {
        return {notFound: true}
    }

    return { props: {details: details}}
}

export default Details