import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import {useRouter} from 'next/router';

const GET_CATEGORY_BY_ID = gql`
    query getCategoryById($categoryId: Int) {
        category(id: $categoryId) {
            id
            name
            products {
                items {
                    id
                    sku
                    name
                }
            }
        }
    }
`;

const ProductList = () => {
    const router = useRouter();
    console.log(router.query.id);
    
    const response = useQuery(GET_CATEGORY_BY_ID, {
        variables: {
            categoryId: router.query.id
        }
    });
    const {data: dataCategory, loading, error} = response;
    // const products = dataCategory.category.products.items;
    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;

    console.log(dataCategory.category.products.items);
    return (
        <div>
            <ul>
                {
                    dataCategory.category.products.items.map(product => (
                        <li><Link href={`/categories/product/`+product.sku}>{product.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductList;