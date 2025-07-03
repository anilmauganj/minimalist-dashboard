import {
  FaChartLine,
  FaRupeeSign,
  FaShoppingCart,
  FaUsers,
} from 'react-icons/fa';
import Widget from '../components/Widget';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 space-y-6 dark:bg-gray-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <Widget title="Users" value="200" color="bg-blue-500" icon={FaUsers} />
        <Widget
          title="Revanue"
          value="₹50,000"
          color="bg-green-500"
          icon={FaRupeeSign}
        />
        <Widget
          title="Orders"
          value="320"
          color="bg-yellow-500"
          icon={FaShoppingCart}
        />
        <Widget
          title="Visitors"
          value="2500"
          color="bg-purple-500"
          icon={FaChartLine}
        />
      </div>
    </div>
  );
}
