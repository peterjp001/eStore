import ProductsContainer from '@/components/products/ProductsContainer';

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout: string; search: string }>;
}) {
  const { layout, search } = await searchParams;

  return <ProductsContainer layout={layout} search={search} />;
}
