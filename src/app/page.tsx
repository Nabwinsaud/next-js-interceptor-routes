import Product from "@/components/product";

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
  // force-cache default one
  // this should be cached until manual invalidation is done
  // similar to getStaticProps
  // no-store - should be refetch on every request
  // similar to getServerSideProps
};
export default async function Home() {
  const products = await getProducts();
  return (
    <main className="w-full h-screen px-20 xl:pt-0 max-w-7xl mx-auto">
      <section className="flex h-full flex-col w-full">
        <h1>The app router parallel data fetching and more stuff</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-y-3 sm:gap-x-4  lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xlg:gap-x-6 xlg:gap-y-6">
          {products.map((product) => (
            <div key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
