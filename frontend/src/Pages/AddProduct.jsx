
export default function AddProduct() {
    return (
        <div className="mt-3">
            <h3>Add Products</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" className="form-control" id="productName" placeholder="Enter product name" />
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Product Price</label>
                    <input type="text" className="form-control" id="productPrice" placeholder="Enter product price" />
                </div>
                <div className="form-group">
                    <label htmlFor="productDescription">Product Description</label>
                    <textarea className="form-control" id="productDescription" placeholder="Product Description " rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    )
}
