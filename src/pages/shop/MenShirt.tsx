import { AppBreadcrumbs } from "@/components/custom/AppBreadcrumbs";

const MenShirt = () => {
  return (
    <section className="pt-5 p-4 lg:p-0 lg:px-10 lg:pt-5">
      <AppBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Men", href: "/shop/men" },
          { label: "T-Shirts" }, 
        ]}
      />
    </section>
  );
};

export default MenShirt;
