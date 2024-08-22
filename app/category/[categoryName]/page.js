import CategoryList from '@/app/components/CategoryList';
import { products } from '@/app/data/products';

const Category = ({ params }) => {
    const { categoryName } = params;
    const sameCategoryProduct = products.filter(item => item.category === categoryName);
    const categories = [...new Set(products.map(p => p.category))];

    return (
        <div className='flex justify-between'>
            <div>
                {
                    categories.map(category =>
                        <div key={category}>
                            <CategoryList path={`/category/${category}`} >
                            {category}
                        </CategoryList>
                        </div>

                    )
                }
            </div>
            <div className='grid grid-cols-3 gap-3'>
                {
                    sameCategoryProduct && sameCategoryProduct.map(({ id, category, rating, price, description, minimumOrderQuantity }) => <div key={id} className="card bg-slate-800 w-96 shadow-xl mt-12 mx-auto">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="card-title">
                                    ratings : {rating}
                                </h2>
                                <h2 className="card-title">
                                    {category}
                                </h2>
                                <h2 className="card-title text-yellow-500">
                                </h2>
                            </div>
                            <p>{description}</p>

                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{minimumOrderQuantity}</div>
                                <div className="badge badge-outline">${price}</div>
                            </div>
                            <button className='btn btn-primary  w-1/2 mt-2'>Buy Now</button>
                        </div>
                    </div>)
                }

            </div>
        </div>

    )
}

export default Category