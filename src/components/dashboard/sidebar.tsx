
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  BarChart3,
  Home,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Package,
  Settings,
  ShoppingCart,
  Users,
  ChevronLeft,
  ChevronRight,
  BellRing,
  CalendarDays,
  FileText,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: "Overview",
      href: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Customers",
      href: "/customers",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Products",
      href: "/products",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Orders",
      href: "/orders",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      title: "Invoices",
      href: "/invoices",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Calendar",
      href: "/calendar",
      icon: <CalendarDays className="h-5 w-5" />,
    },
    {
      title: "Notifications",
      href: "/notifications",
      icon: <BellRing className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: "Help",
      href: "/help",
      icon: <LifeBuoy className="h-5 w-5" />,
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-card transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex h-14 items-center justify-between border-b px-3 py-4">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
              <span className="text-primary-foreground">A</span>
            </div>
            <span>Admin Panel</span>
          </Link>
        )}
        {collapsed && (
          <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <span className="text-primary-foreground">A</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn("ml-auto", collapsed && "mx-auto")}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-1 p-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "sidebar-item",
                location.pathname === item.href && "active",
                collapsed && "justify-center px-2"
              )}
            >
              {item.icon}
              {!collapsed && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="flex items-center justify-between border-t p-2">
        <ThemeToggle />
        {!collapsed && (
          <Link to="/logout" className="sidebar-item text-destructive">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        )}
        {collapsed && (
          <Link
            to="/logout"
            className="sidebar-item justify-center px-2 text-destructive"
          >
            <LogOut className="h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  );
}
