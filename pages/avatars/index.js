import Link from 'next/link';
function Avatars({ avatars }) {
    console.log(avatars);
    return (
        <div className="app">
            <table>
                {
                    avatars.map(avatar =>(
                        <tbody key={avatar._id}>
                            <tr>
                                <td rowSpan="4"><img src={avatar.photoUrl} width="200" height="200"></img></td>
                                <td><h3>Name: {avatar.name} <Link href={{pathname: "/avatars/details", query:{id:avatar._id}}}> (Detail)</Link></h3></td>
                            </tr>
                            <tr>
                                <td>Profession: {avatar.profession}</td>
                            </tr>
                            <tr>
                                <td>Affiliation: {avatar.affiliation}</td>
                            </tr>
                            <tr>
                                <td>Position: {avatar.position}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/avatars');
    const avatars = await res.json();

    return {
        props: {
            avatars,
        },
    }
}

export default Avatars

// export default function Index() {
//     return(
//         <>default</>
//     )
// }