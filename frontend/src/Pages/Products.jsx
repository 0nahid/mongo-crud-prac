import { useEffect, useState } from "react"
import Swal from "sweetalert2"
export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5500/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDeleteUser = (id) => {
        // add user confirmation for delete
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5500/api/products/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        data.count ? Swal.fire("Deleted!", "Your file has been deleted.", "success") : Swal.fire("Error", "Product not deleted", "error");
                        setProducts(products.filter((product) => product._id !== id))
                    });
            }
        });
    };
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
                            <button className="btn btn-primary">Update</button>
                            <button onClick={() => handleDeleteUser(product._id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
