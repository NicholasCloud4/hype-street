import Stripe from "stripe";
import ProductCard from "./ProductCard";

interface Props {
    products: Stripe.Product[];
}

export default function ProductList({ products }: Props) {
    return (
        <div>
            <div>
                <input type="text" placeholder="Search Products" />
            </div>
            <ul>
                {products.map((product, key) => {
                    return (
                        <li key={key}>
                            <ProductCard product={product} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
