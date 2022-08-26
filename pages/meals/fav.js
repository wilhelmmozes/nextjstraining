import Link from 'next/link';

function SsgFav({ mealDetails }) {
    console.log('ini meal', mealDetails.meals);
    return (
        <div className="app">
            <h3>SSG</h3>
            <table>
                {
                    mealDetails.meals.map(md =>(
                        <tbody key={md.idMeal}>
                            <tr>
                                <td rowSpan="4"><img src={md.strMealThumb} width="500" height="500"></img></td>
                                <td>{md.strMeal}</td>
                            </tr>
                            <tr>
                                <td>{md.strInstructions}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://www.themealdb.com/api/json/v1/1/lookup.php?i=52928');
    const mealDetails = await res.json();
    return {
        props: {
            mealDetails,
        },
    }
}

export default SsgFav