const NavigationSocial = () => {
  return (
    <div className="relative isolate z-50 flex hidden h-8 items-center border-b-[1px] bg-white/25 backdrop-blur-lg lg:block dark:border-neutral-700 dark:bg-black/25">
      <div className="flex items-center px-6">
        <div className="inline-block">
          <ul className="flex items-center gap-x-2">
            <li>Phone</li>
            <li>Email</li>
            <li>WhatsApp</li>
          </ul>
        </div>
        <div className="inline-block lg:ms-auto">
          <ul className="flex items-center gap-x-2">
            <li>Phone</li>
            <li>Email</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavigationSocial;
