import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { gql, useMutation, useQuery } from '@apollo/client';
import {useRouter} from 'next/router';
import Sub from '../../../components/Sub';

const SUBSCRIBE = gql`
    mutation subscribeEmail($mail: String){
        subscribeEmailToNewsletter(
            email: $mail
        ) {
            status
        }
    }
`;

const GET_PRODUCT_BY_SKU = gql`
    query getProductBySKU($sku: String){
        products(filter: { sku: { in: [ $sku] }}, pageSize: 1) {
            items {
                image {
                    url
                }
                name
                description {
                    html
                }
                price {
                    regularPrice {
                        amount {
                            value
                        }
                    }
                }
            }
        }
    }
`;

const ProductList = () => {
    const router = useRouter();
    console.log(router.query.sku);

    const response = useQuery(GET_PRODUCT_BY_SKU, {
        variables: {
            sku: router.query.sku
        }
    });
    const {data: dataCategory, loading, error} = response;
    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;
    const products = dataCategory.products.items;
    const price = dataCategory.products.items[0].price.regularPrice.amount.value
    console.log(dataCategory.products.items);

    // const [submitMutation, { loading1, error1, data1 }] = useMutation(SUBSCRIBE);
    // const responseMutation = useMutation(SUBSCRIBE, {
    //     variables: {
    //         mail: "mail@mail.com"
    //     }
    // })
    // const {data: dataMutation, loadingMutation, errorMutation} = responseMutation;
    // if (loadingMutation) return <p>Loading ...</p>;
    // if (errorMutation) return `Error! ${error}`;

    // console.log(dataCategory.products.items[0].price.regularPrice.amount.value);

    return (
        <div>
            <table>
                {
                    products.map(product => (
                        <tbody>
                            <tr>
                                <td rowSpan="3"><img src={product.image.url} width="300px" height="300px"></img></td>
                                <td><h3>{product.name}</h3></td>
                            </tr>
                            <tr>
                                <td>{price}</td>
                            </tr>
                            <tr>
                                <td>{product.description.html}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
            <div>
                <Sub/>
            </div>
        </div>
    )
}

export default ProductList;