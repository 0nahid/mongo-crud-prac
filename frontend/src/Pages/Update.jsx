import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
export default function Update() {
    const [product, setProduct] = useState({});

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5500/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);
    const handleNameChange = (e) => {
        setProduct({ ...product, name: e.target.value });
    };
    const handlePriceChange = (e) => {
        setProduct({ ...product, price: e.target.value });
    }
    const handleDescriptionChange = (e) => {
        setProduct({ ...product, description: e.target.value });
    }
    // update the product
    const handleUpdateProduct = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5500/api/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
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
                    <input type="text" value={product.name || ''} onChange={handleNameChange} className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" value={product.price || ''} onChange={handlePriceChange} className="form-control" id="price" name="price" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" value={product.description || ''} onChange={handleDescriptionChange} className="form-control" id="description" name="description" />
                </div>
                <button type="submit" className="btn btn-secondary mt-2">Update</button>
            </form>
        </div>
    )
}
