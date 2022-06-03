import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
export default function Update() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5500/api/products")
            .then(res => res.json())
            .then(data => setProducts(data[0]))
    }, [])
    const { id } = useParams();
    // update the product
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const name = data.get("name");
        const description = data.get("description");
        const price = data.get("price");

        fetch(`http://localhost:5500/api/products/${id}`, {
            method: "PUT",
            body: JSON.stringify({ name, description, price }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                data.result.matchedCount === 1 ? Swal.fire("Updated!", "Your product has been updated.", "success") : Swal.fire("Error", "Product not updated", "error");
            });
    }

    return (
        <div>Update page of {id}
            <form onSubmit={handleUpdateProduct} className="w-75 m-auto mt-5">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" required placeholder={products.name} className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" required placeholder={products.price} className="form-control" id="price" name="price" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" required placeholder={products.description} className="form-control" id="description" name="description" />
                </div>
                <button type="submit" className="btn btn-secondary mt-2">Update</button>
            </form>
        </div>
    )
}
