import Head from 'next/head';
import Link from 'next/link';
import {chars} from './../../components/data.js';


// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
console.log(chars);
export default function Chars() {
    return (
        <div className="app">
            <table>
                {
                    chars.map(char =>(
                        <tbody key={char._id}>
                            <tr>
                                <td rowSpan="4"><img src={char.photoUrl} width="200" height="200"></img></td>
                                <td><h3>Name: {char.name} <Link href={{pathname: "/chars/details", query:{id:char._id}}}> (Detail)</Link></h3></td>
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
                        </tbody>
                    ))
                }
            </table>
        </div>
    )
}
