import SideNav from "./../components/SideNav";
import TopNav from "./../components/TopNav";

function Base({ children, className, rpage }) {
  return (
    <div>
      <div className="flex">
        <SideNav />
        <div className="flex flex-col w-full">
          <TopNav rpage={rpage} />
          <div className={className}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Base;
