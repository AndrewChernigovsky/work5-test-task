import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

interface Ihref {
	hrefIn: string;
}

const BreadCrumbs = ({ hrefIn }: Ihref) => {
	const items = [
		{ href: "/", name: "house" },
		{ href: "/cart", name: "cart" },
		{ href: "/promo", name: "promo" },
		{ href: "/support", name: "support" },
	];

	return (
		<Breadcrumb>
			{items.map((item) =>
				item.href === hrefIn ? (
					<Breadcrumb.Item active>{item.name}</Breadcrumb.Item>
				) : (
					<Breadcrumb.Item linkProps={{ to: item.href }} linkAs={Link}>
						{item.name}
					</Breadcrumb.Item>
				)
			)}
		</Breadcrumb>
	)
}

export default BreadCrumbs