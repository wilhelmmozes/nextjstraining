import React, {useState, useEffect} from 'react';


function SsrDetails({details}) {
    console.log('ini details', details);
    return (
        <div>
            SSR Page
            <table>
                <tbody>
                {
                    details.map(detail =>(
                        <tr key={detail.idMeal}>
                            <td><img src={detail.strMealThumb} width="200" height="200"></img></td>
                            <td>{detail.strMeal}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export async function getServerSideProps(context) {
    console.log("ini contextid",context.params.id);
    const res = await fetch('http://www.themealdb.com/api/json/v1/1/lookup.php?i='+context.params.id);
    const details = await res.json();
    return { props: {details: details.meals}}
}

export default SsrDetails
// export default function Details() {
//     return(
//         <>default</>
//     )
// }