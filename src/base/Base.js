import Filter from "../components/Filter";
import SideNav from "./../components/SideNav";
import TopNav from "./../components/TopNav";
import { useRestaurant } from "./../restaurant-context/RestaurandProvider";

function Base({ children, className, rpage }) {
  const { state } = useRestaurant();
  return (
    <div className="max-w-screen">
      <div
        className={`flex filter max-w-full ${state.openFilter && "blur-sm bg-gray-300"}`}
      >
        <SideNav />
        <div className="flex-grow">
          <TopNav rpage={rpage} />
          <div className={className}>{children}</div>
        </div>
      </div>
      {state.openFilter && <Filter />}
    </div>
  );
}

export default Base;
