import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
            items {
                id
                name
            }
        }
    }
`;

const CategoriesIndex = () => {
    const response = useQuery(GET_CATEGORIES);
    const {data: dataCategory, loading, error} = response;

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;

    console.log(dataCategory.categories.items);

    return (
        <div>
            Category List
            {
                dataCategory.categories.items.map(cat => (
                    <p>
                        <Link href={`/categories/`+cat.id}>
                            {cat.name}
                        </Link>
                    </p>
                ))
            }
            
        </div>
    )
}

export default CategoriesIndex;