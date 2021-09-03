import Filter from "../components/Filter";
import Search from "../components/Search";
import SideNav from "./../components/SideNav";
import TopNav from "./../components/TopNav";
import { useRestaurant } from "./../restaurant-context/RestaurandProvider";

function Base({ children, className, rpage }) {
  const { state } = useRestaurant();
  return (
    <div className="max-w-screen">
      {state.openFilter && <Filter />}
      <div
        className={`flex filter max-w-full ${
          state.openFilter && "blur-sm bg-gray-300"
        }`}
      >
        <SideNav />
        <div className="flex-grow">
          <TopNav rpage={rpage} />
          <Search />
          <div className={className}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Base;
