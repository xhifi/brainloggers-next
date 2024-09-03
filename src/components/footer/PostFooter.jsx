const PostFooter = () => {
  return (
    <div className="text-foreground/75 text-content-dark/75 border-t border-primary-light/25 bg-primary py-2 text-center text-sm">
      Brainloggers &reg; All rights reserved | 2013 - {new Date().getFullYear()}{" "}
      | Registered in England & Wales #12010298
    </div>
  );
};
export default PostFooter;
