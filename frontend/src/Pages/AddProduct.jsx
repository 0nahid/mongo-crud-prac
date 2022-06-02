import { useRef } from "react";
import Swal from "sweetalert2";
export default function AddProduct() {
    const nameRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();

    const handleAddProduct = (e) => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const newProduct = { name, price, description };
        console.log(newProduct);
        fetch("http://localhost:5500/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                // show alert after successful insert
                data.productId ? Swal.fire("Success", "Product added successfully", "success") : Swal.fire("Error", "Product not added", "error");
                e.target.reset();
            });
        e.preventDefault();

    };
    return (
        <div className="mt-3">
            <h3>Add Products</h3>
            <form onSubmit={handleAddProduct}>
                <div className="form-group">
                    <input type="text" ref={nameRef} required className="form-control mt-2" id="productName" placeholder="Enter product name" />
                </div>
                <div className="form-group">
                    <input type="number" ref={priceRef} required className="form-control mt-2" id="productPrice e" placeholder="Enter product price" />
                </div>
                <div className="form-group">
                    <textarea className="form-control mt-2" required ref={descriptionRef} id="productDescription" placeholder="Product Description " rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}
