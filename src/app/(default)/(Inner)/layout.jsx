import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

const layout = ({ children }) => {
  return (
    <div>
      <Breadcrumbs />
      {children}
    </div>
  );
};
export default layout;
