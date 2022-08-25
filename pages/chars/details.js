import Image from 'next/Image';
import {chars} from './../../components/data.js';
import { useRouter } from 'next/router'


console.log(chars);
export default function Chars() {
    const router = useRouter();
    console.log(router.query.id);

    return (
        <div className="app">
            <table>
                {
                    chars.map(char =>(
                        (char._id==router.query.id)?(
                            <tbody key={char._id}>
                                <tr>
                                    {/* <td rowSpan="5"><img src={char.photoUrl} width="500" height="500"></img></td> */}
                                    <td><Image
                                        src={char.photoUrl}
                                        width={400}
                                        height={400}
                                    /></td>
                                    <td><h3>Name: {char.name}</h3></td>
                                </tr>
                                <tr>
                                    <td>Profession: {char.profession}</td>
                                </tr>
                                <tr>
                                    <td>Affiliation: {char.affiliation}</td>
                                </tr>
                                <tr>
                                    <td>Position: {char.position}</td>
                                </tr>
                                <tr>
                                    <td>Allies: {char.allies.map(ally => <p>{ally}</p>)}</td>
                                </tr>
                            </tbody>
                        ):(
                            <thead key={char._id}></thead>
                        )
                    ))
                }
            </table>
        </div>
    )
}