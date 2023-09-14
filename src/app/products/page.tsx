import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		name: "kubek",
		price: 10,
		coverImage: {
			alt: "",
			src: "/kubek.png",
		},
	},
	{
		id: "2",
		category: "Accessories",
		name: "motocykl",
		price: 10,
		coverImage: {
			alt: "",
			src: "/motocykl.png",
		},
	},
	{
		id: "3",
		category: "Accessories",
		name: "rower",
		price: 10,
		coverImage: {
			alt: "",
			src: "/rower.png",
		},
	},
	{
		id: "4",
		category: "Accessories",
		name: "torba",
		price: 10,
		coverImage: {
			alt: "",
			src: "/torba.png",
		},
	},
];
export default function Home() {
	return (
		<section className="sm:max-2xl lg:max--w-7xl mx-auto  max-w-md p-12 sm:py-16 md:max-w-4xl">
			{/* <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}
			<ProductList products={products} />
			{/* </ul> */}
		</section>
	);
}
