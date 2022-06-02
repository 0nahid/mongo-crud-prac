import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <>
            <Nav defaultActiveKey="/" as="ul"  >
                <Nav.Item as="li">
                    <Link to="/" className="m-2">Home</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/products" className="m-2">Products</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/addProduct" className="m-2">Add Product</Link>
                </Nav.Item>
            </Nav>
        </>
    )
}
