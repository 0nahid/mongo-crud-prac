import { useEffect, useState } from "react"

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5500/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="mt-3">
            <h3>Products</h3>
            {
                products.map(product => (
                    <div className="card mt-2" key={product.id}>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{product.price}</p>
                            <div className="btn btn-primary">Update</div>
                            <div className="btn btn-danger">Delete</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
