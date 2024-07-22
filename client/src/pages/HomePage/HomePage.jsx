import styled from "styled-components";

import {useEffect, useState} from "react";
import axios from "axios";


const HomePage = () => {


    useEffect(() => {
        axios.get('http://localhost:3000/api/items/getAllProductInfo/').then((res) => {
            setData(res.data);

        })
    }, []);

    const [data, setData] = useState([])


    return (
        <MainContainer>


            <ProductTable>
                <tr>
                    <th>Product Name</th>
                    <th>Product Description</th>
                    <th>Product Price</th>
                </tr>
                {data && data.map((product) => {

                    return <>
                        <tr>

                            <td>
                                <div style={{fontWeight:"bold"}}>{product.productName}</div>
                                <div style={{fontSize:"0.8rem"}}>{product._id}</div>

                                </td>
                            <td>{product.productDescription}</td>
                            <td>Rs. {product.productPrice}</td>
                        </tr>
                    </>

                })


                }


            </ProductTable>

            {/*<FormContainer>*/}
            {/*    <InputContainer/>*/}

            {/*</FormContainer>*/}


        </MainContainer>
    );
};

const MainContainer = styled.div`
    display:flex;
    width: 100%;
    position: fixed;
    inset: 0;
    justify-content: center;
    align-items: center;
`

const ProductTable = styled.table`

    border: 1px solid black;
    border-collapse: collapse;

    & {
        tr, th {
            border: 1px solid black;
            padding: 1rem;
            

        }

        td {
            border: 1px solid black;
            padding: 1rem;
            
        }


    }

    //td,th,tr{
    //    border: 1px solid black;
    //    border-collapse: collapse;
    //    padding: 1rem;
    //    
    //}

`

const FormContainer = styled.form`
    
`



export default HomePage;