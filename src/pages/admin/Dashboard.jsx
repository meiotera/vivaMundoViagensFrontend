import { queryClient } from "../../App";
import { getAllDestinos } from "../../services/apiDestinations";
import Dash from "../../features/dashboard/Dash";

const Dashboard = () => {
  return <Dash />;
};

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  try {
    await queryClient.ensureQueryData({
      queryKey: ["destinos"],
      queryFn: getAllDestinos,
    });
  } catch (error) {
    console.error(error);
  }

  return null;
}

export default Dashboard;
