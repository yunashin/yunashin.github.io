import MenuBar from "./MenuBar";

const EmptyState = ({
  renderMenuBar = true,
  redirectTo = "/",
  redirectText = "home",
}: {
  renderMenuBar?: boolean;
  redirectTo?: string;
  redirectText?: string;
}) => {
  return (
    <>
      {renderMenuBar && <MenuBar />}
      <div className="flex-box-vertical">
        <span className="page-title">Oops! This page doesn't exist.</span>
        <span>
          Try going back to the <a href={redirectTo}>{redirectText}</a> page.
        </span>
        <img
          className="food-image margin-top"
          src="https://i.imgur.com/wXlWvdI.jpeg"
          alt="404"
        />
      </div>
    </>
  );
};

export default EmptyState;
