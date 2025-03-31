
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";
import { Users, ShoppingCart, CreditCard, ArrowUpRight, ArrowDownRight, Package, DollarSign, Calendar, Bell } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { DataCard } from "@/components/dashboard/data-card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Mock data
const revenueData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
  { name: "Aug", value: 4000 },
  { name: "Sep", value: 3200 },
  { name: "Oct", value: 2800 },
  { name: "Nov", value: 3300 },
  { name: "Dec", value: 4200 },
];

const salesData = [
  { name: "Jan", revenue: 4000, orders: 240 },
  { name: "Feb", revenue: 3000, orders: 138 },
  { name: "Mar", revenue: 2000, orders: 98 },
  { name: "Apr", revenue: 2780, orders: 120 },
  { name: "May", revenue: 1890, orders: 85 },
  { name: "Jun", revenue: 2390, orders: 114 },
];

const productPerformance = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 200 },
];

const COLORS = ["#6E59A5", "#0EA5E9", "#84cc16", "#facc15"];

const recentOrders = [
  { id: "#ORD-001", customer: "John Doe", date: "Apr 24, 2023", status: "Delivered", amount: "$345.00" },
  { id: "#ORD-002", customer: "Jane Smith", date: "Apr 22, 2023", status: "Processing", amount: "$145.00" },
  { id: "#ORD-003", customer: "Robert Johnson", date: "Apr 21, 2023", status: "Pending", amount: "$435.00" },
  { id: "#ORD-004", customer: "Emily Davis", date: "Apr 20, 2023", status: "Delivered", amount: "$250.00" },
  { id: "#ORD-005", customer: "Michael Brown", date: "Apr 19, 2023", status: "Cancelled", amount: "$550.00" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "success";
    case "Processing":
      return "primary";
    case "Pending":
      return "warning";
    case "Cancelled":
      return "destructive";
    default:
      return "secondary";
  }
};

const topProducts = [
  { id: 1, name: "Wireless Headphones", sales: 245, stock: 45, price: "$149.99" },
  { id: 2, name: "Smart Watch", sales: 186, stock: 32, price: "$299.99" },
  { id: 3, name: "Bluetooth Speaker", sales: 152, stock: 0, price: "$89.99" },
  { id: 4, name: "Laptop Pro", sales: 132, stock: 12, price: "$1299.99" },
];

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline">Download Report</Button>
          <Button>
            <ArrowUpRight className="mr-2 h-4 w-4" />
            View Analytics
          </Button>
        </div>
      </div>

      <div className="grid-stats">
        <StatCard 
          title="Total Revenue" 
          value="$45,231.89" 
          trend={{ value: 20.5, isPositive: true }}
          description="Revenue this month"
          icon={DollarSign}
          variant="primary"
        />
        <StatCard 
          title="New Customers" 
          value="2,845" 
          trend={{ value: 15.2, isPositive: true }}
          description="New users this month"
          icon={Users}
          variant="success"
        />
        <StatCard 
          title="Orders" 
          value="1,456" 
          trend={{ value: 5.1, isPositive: false }}
          description="Orders this month"
          icon={ShoppingCart}
          variant="warning"
        />
        <StatCard 
          title="Active Products" 
          value="456" 
          trend={{ value: 12.5, isPositive: true }}
          description="Products in inventory"
          icon={Package}
          variant="destructive"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <DataCard 
          title="Revenue Overview" 
          description="Monthly revenue trends"
          className="lg:col-span-2"
        >
          <Tabs defaultValue="monthly">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="monthly" className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#6E59A5" strokeWidth={2} dot={{ stroke: '#6E59A5', strokeWidth: 2, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="weekly" className="h-[300px]">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-muted-foreground">Weekly data not available</p>
              </div>
            </TabsContent>
            <TabsContent value="yearly" className="h-[300px]">
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-muted-foreground">Yearly data not available</p>
              </div>
            </TabsContent>
          </Tabs>
        </DataCard>

        <DataCard 
          title="Product Performance" 
          description="Top products by sales"
        >
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={productPerformance}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={(entry) => entry.name}
                  labelLine={false}
                >
                  {productPerformance.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </DataCard>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <DataCard 
          title="Sales Analytics" 
          description="Revenue vs Orders"
          className="lg:col-span-2"
        >
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#6E59A5" />
                <YAxis yAxisId="right" orientation="right" stroke="#0EA5E9" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="revenue" fill="#6E59A5" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="orders" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DataCard>

        <DataCard 
          title="Recent Activity" 
          description="Latest system events"
        >
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-primary/10 p-2 text-primary">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">New user registered</p>
                <p className="text-xs text-muted-foreground">5 mins ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-success/10 p-2 text-success">
                <ShoppingCart className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">New order placed</p>
                <p className="text-xs text-muted-foreground">15 mins ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-warning/10 p-2 text-warning">
                <Package className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Low stock alert</p>
                <p className="text-xs text-muted-foreground">30 mins ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-destructive/10 p-2 text-destructive">
                <CreditCard className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">Payment failed</p>
                <p className="text-xs text-muted-foreground">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-muted p-2 text-muted-foreground">
                <Bell className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium">System update completed</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="mt-4 w-full">View All Activity</Button>
        </DataCard>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <DataCard 
          title="Recent Orders" 
          description="Latest 5 orders in the system"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2 text-left text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="border-b py-2 text-left text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="border-b py-2 text-left text-sm font-medium text-muted-foreground">Date</th>
                  <th className="border-b py-2 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="border-b py-2 text-right text-sm font-medium text-muted-foreground">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="py-3 text-sm font-medium">{order.id}</td>
                    <td className="py-3 text-sm">{order.customer}</td>
                    <td className="py-3 text-sm text-muted-foreground">{order.date}</td>
                    <td className="py-3 text-sm">
                      <Badge variant={getStatusColor(order.status) as any}>
                        {order.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-right text-sm font-medium">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button variant="outline" className="mt-4 w-full">View All Orders</Button>
        </DataCard>

        <DataCard 
          title="Top Products" 
          description="Best selling products this month"
        >
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div key={product.id} className="flex justify-between border-b pb-3 last:border-0">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge variant="outline">{product.sales} sales</Badge>
                    {product.stock === 0 ? (
                      <Badge variant="destructive">Out of stock</Badge>
                    ) : product.stock < 20 ? (
                      <Badge variant="warning">Low stock</Badge>
                    ) : (
                      <Badge variant="success">In stock</Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{product.price}</p>
                  <div className="mt-1 flex items-center justify-end gap-1">
                    {product.stock > 0 ? (
                      <>
                        <Progress className="h-2 w-16" value={product.stock > 50 ? 100 : (product.stock * 2)} />
                        <span className="text-xs text-muted-foreground">{product.stock}</span>
                      </>
                    ) : (
                      <span className="text-xs text-destructive">0 left</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="mt-4 w-full">View All Products</Button>
        </DataCard>
      </div>
    </div>
  );
};

export default Dashboard;
