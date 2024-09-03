import Breadcrumbs from "@/components/breadcrumbs";

const layout = ({ children }) => {
  return (
    <div>
      <Breadcrumbs />
      {children}
    </div>
  );
};
export default layout;
