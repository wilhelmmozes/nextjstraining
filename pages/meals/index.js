import React, {useState, useEffect} from 'react';
import Link from 'next/link';

const CsrIndex = () => {
    const [meals, setMeals] = useState(null);
    // const params = useParams();
    const fetchData = async () => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
        const result = await data.json();
        setMeals(result.meals);
        // console.log('result', result);
    }

    useEffect(() => {
        fetchData();
    },[]);
    console.log(meals);

    return (
        <div>
            CSR Page
            <table>
            {
                meals ? (meals.map(meal => (
                    <tbody key={meal.idMeal}>
                        <tr>
                            <td><img src={meal.strMealThumb} width="150" height="150"></img></td>
                            <td><Link href={`/meals/`+meal.idMeal}>{meal.strMeal}</Link></td>
                        </tr>
                    </tbody>
                ))) : (null)
            }
            </table>
        </div>
    )
}

export default CsrIndex;