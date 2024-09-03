import { BsCurrencyPound } from "react-icons/bs";

const PriceTitle = ({ price, unit, description, title }) => {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <p className="h2 relative inline-block font-extrabold text-primary group-hover:text-warning">
          {price && (
            <>
              <BsCurrencyPound className="absolute -left-7 top-0 size-8 fill-primary group-hover:fill-warning" />
              {price}
            </>
          )}
          {unit && (
            <span className="ms-1 text-2xl font-normal tracking-normal">
              /{unit}
            </span>
          )}
        </p>
      </div>
      <h4 className="text-center text-primary group-hover:text-warning">
        {title}
      </h4>
      {description && <p className="text-center">{description}</p>}
    </div>
  );
};

export default PriceTitle;
