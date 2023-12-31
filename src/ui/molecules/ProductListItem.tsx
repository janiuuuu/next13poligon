import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItemType } from "@/ui/types";

type ProductListItemProps = {
	product: ProductItemType;
};
export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductCoverImage
					{...product.coverImage}
					// src={product.coverImage.src}
					// alt={product.coverImage.alt}
				/>
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
