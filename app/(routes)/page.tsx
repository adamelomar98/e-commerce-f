import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;
export const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard(`1247246c-d867-420e-8410-e6559fe673b2`);
  return (
    <Container>
      {" "}
      <div className="space-y=10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Product" items={products} />
      
      </div>
    </Container>
  );
};

export default HomePage;
