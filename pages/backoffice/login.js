import React from 'react';

export default function Login(){
    return (
        <div>
            <button onClick={() => {document.cookie=`status=authenticated;path:/backoffice`}}>
                Login as user
            </button>
        </div>
    )
}