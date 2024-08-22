
import Link from 'next/link';


const ProductItem = ({ product }) => {
    const { brand, title,category, price } = product;
    return (
        <div className="card bg-slate-800 w-96 shadow-xl">
            <div className="card-body">
                <Link href={`/category/${category}`}><p className='text-yellow-600 text-xl'>{category}</p></Link>
                <h2 className="text-3xl">Brand : {brand}</h2>
                <h2 className="card-title">{title}</h2>
                <p>${price}</p>
                <div className="card-actions ">
                    <Link href={`/products/${product.id}`}>
                        <button className="btn btn-primary w-full">Show Details</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default ProductItem