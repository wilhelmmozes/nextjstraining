import Image from 'next/Image';
import {chars} from './../../components/data.js';
import { useRouter } from 'next/router'


console.log(chars);
export default function Chars() {
    const router = useRouter();
    console.log(router.query.id);

    return (
        <div>
                {
                    chars.map((char, index) =>(
                        (char._id==router.query.id)?(
                            <table key={index}>
                                <tbody>
                                    <tr>
                                        {/* <td rowSpan="5"><img src={char.photoUrl} width="500" height="500"></img></td> */}
                                        <td><Image
                                            src={char.photoUrl}
                                            width={400}
                                            height={400}
                                        /></td>
                                        <td><h3>Name: {char.name}</h3></td>
                                    </tr>
                                    <tr key={char.profession}>
                                        <td>Profession: {char.profession}</td>
                                    </tr>
                                    <tr key={char.affiliation}>
                                        <td>Affiliation: {char.affiliation}</td>
                                    </tr>
                                    <tr key={char.position}>
                                        <td>Position: {char.position}</td>
                                    </tr>
                                    <tr key={char._id}>
                                        <td>Allies: {char.allies.map(ally => <p key={ally}>{ally}</p>)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ):(
                            null
                        )
                    ))
                }
        </div>
    )
}