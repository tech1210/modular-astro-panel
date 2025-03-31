
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  Settings,
  ShoppingCart,
  FileText,
  BellRing,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

// Define the menu items for the dashboard
const menuItems = [
  {
    title: "Dashboard",
    description: "Overview and key metrics",
    icon: <LayoutDashboard className="h-8 w-8" />,
    href: "/dashboard",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Analytics",
    description: "Traffic and conversion data",
    icon: <BarChart3 className="h-8 w-8" />,
    href: "/analytics",
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Customers",
    description: "Manage customer information",
    icon: <Users className="h-8 w-8" />,
    href: "/customers",
    color: "bg-success/10 text-success",
  },
  {
    title: "Products",
    description: "Inventory and product details",
    icon: <Package className="h-8 w-8" />,
    href: "/products",
    color: "bg-warning/10 text-warning",
  },
  {
    title: "Orders",
    description: "Order processing and history",
    icon: <ShoppingCart className="h-8 w-8" />,
    href: "/orders",
    color: "bg-destructive/10 text-destructive",
  },
  {
    title: "Invoices",
    description: "Billing and payment records",
    icon: <FileText className="h-8 w-8" />,
    href: "/invoices",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Calendar",
    description: "Schedule and appointments",
    icon: <Calendar className="h-8 w-8" />,
    href: "/calendar",
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Notifications",
    description: "Alerts and updates",
    icon: <BellRing className="h-8 w-8" />,
    href: "/notifications",
    color: "bg-success/10 text-success",
  },
  {
    title: "Settings",
    description: "System preferences and configuration",
    icon: <Settings className="h-8 w-8" />,
    href: "/settings",
    color: "bg-warning/10 text-warning",
  },
];

// Recent activity mock data
const recentActivity = [
  {
    action: "New customer registered",
    time: "10 minutes ago",
    user: "John Doe",
    userInitials: "JD",
  },
  {
    action: "Order #1234 was placed",
    time: "25 minutes ago",
    user: "Sarah Smith",
    userInitials: "SS",
  },
  {
    action: "New product added",
    time: "1 hour ago",
    user: "Admin User",
    userInitials: "AU",
  },
];

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-muted/20 px-4 py-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              A comprehensive admin panel for your business
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <Link to={item.href} key={index}>
              <div className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className={cn("rounded-full p-2 w-fit mb-4", item.color)}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground mt-2">{item.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Recent Activity</h2>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="space-y-6">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>{activity.userInitials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{activity.action}</p>
                      <Badge variant="outline">{activity.time}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">by {activity.user}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Button asChild variant="outline">
                <Link to="/dashboard">
                  <span>Go to Dashboard</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Admin Dashboard Template © {new Date().getFullYear()}</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

export default Index;
