import { AppBreadcrumbs } from "@/components/custom/AppBreadcrumbs";

const WomenShirt = () => {
  return (
    <section className="pt-5 p-4 lg:p-0 lg:px-10 lg:pt-5">
      <AppBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Women", href: "/shop/women" },
          { label: "T-Shirts" }, 
        ]}
      />
    </section>
  );
};

export default WomenShirt;
