import React from 'react';

export default function Login(){
    return (
        <div>
            <button onClick={() => {document.cookie=`status=authenticated;path:/backoffice;role="admin"`}}>
                Login as user
            </button>
            <button onClick={() => {document.cookie=`status=authenticated;path:/backoffice;role="super"`}}>
                Login as superadmin
            </button>
        </div>
    )
}