import { BsCheckLg, BsXLg } from "react-icons/bs";

const PriceFeature = ({ title, included = true }) => {
  return (
    <span className="flex items-center">
      <span className="me-2 inline-block">
        {included ? (
          <BsCheckLg className="" />
        ) : (
          <BsXLg className="opacity-75" />
        )}
      </span>
      {title}
    </span>
  );
};

export default PriceFeature;
