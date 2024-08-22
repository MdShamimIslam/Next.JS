import React from 'react'
import { products } from '../../data/products';
import Link from 'next/link';

const ProductDetails = ({ params }) => {
    const { id } = params;
    const product = products.find(item => item.id === parseInt(id));
    const { category, rating, price, description, minimumOrderQuantity } = product;
    
    
    return (
        <div className="card bg-slate-800 w-3/5 shadow-xl mt-12 mx-auto">
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">
                        ratings : {rating}
                    </h2>
                    <h2 className="card-title text-yellow-500">
                        <Link href={`/category/${category}`}>{category}</Link>
                    </h2>
                </div>
                <p>{description}</p>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{minimumOrderQuantity}</div>
                    <div className="badge badge-outline">${price}</div>
                </div>
                <button className='btn btn-primary  w-1/2 mt-2'>Buy Now</button>
            </div>
        </div>
    )
}

export default ProductDetails