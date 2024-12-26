import { notFound } from "next/navigation";
import { parse } from "path";

export default function ProductReview({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.productId) > 100) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
}
