
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
  Bitcoin,
  Palette,
  Wrench,
  FileSpreadsheet,
  Layers,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: "CRM",
      isGroup: true,
      items: [
        {
          title: "Dashboard",
          href: "/dashboard",
          icon: <LayoutDashboard className="h-5 w-5" />,
        },
        {
          title: "Projects",
          href: "/projects",
          icon: <FileText className="h-5 w-5" />,
        },
        {
          title: "Projects Description",
          href: "/projects-description",
          icon: <FileText className="h-5 w-5" />,
        },
        {
          title: "Clients",
          href: "/customers",
          icon: <Users className="h-5 w-5" />,
        },
        {
          title: "Reports",
          href: "/reports",
          icon: <FileSpreadsheet className="h-5 w-5" />,
        },
      ],
    },
    {
      title: "Crypto Currency",
      isGroup: true,
      href: "/crypto",
      icon: <Bitcoin className="h-5 w-5" />,
    },
    {
      title: "Analytics",
      isGroup: true,
      href: "/analytics",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Ecommerce",
      isGroup: true,
      href: "/ecommerce",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      title: "UI Elements",
      isGroup: true,
      href: "/ui-elements",
      icon: <Palette className="h-5 w-5" />,
    },
    {
      title: "Utilities",
      isGroup: true,
      href: "/utilities",
      icon: <Wrench className="h-5 w-5" />,
    },
    {
      title: "Forms",
      isGroup: true,
      href: "/forms",
      icon: <FileSpreadsheet className="h-5 w-5" />,
    },
    {
      title: "Advanced UI",
      isGroup: true,
      href: "/advanced-ui",
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: "Apps",
      isGroup: true,
      href: "/apps",
      icon: <Layers className="h-5 w-5" />,
      badge: "New",
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-slate-950 text-white transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex h-16 items-center justify-between border-b border-slate-800 px-3 py-4">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600">
              <span className="text-white">D</span>
            </div>
            <span>Dashlot</span>
          </Link>
        )}
        {collapsed && (
          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-md bg-blue-600">
            <span className="text-white">D</span>
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
          {menuItems.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-2">
              {group.isGroup ? (
                <>
                  {!collapsed && (
                    <div className="mb-2 px-3 pt-2 text-xs font-semibold uppercase text-slate-500">
                      {group.title}
                    </div>
                  )}
                  {group.items ? (
                    group.items.map((item, itemIndex) => (
                      <Link
                        key={`${groupIndex}-${itemIndex}`}
                        to={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white",
                          location.pathname === item.href && "bg-slate-800 text-white",
                          collapsed && "justify-center p-2"
                        )}
                      >
                        {item.icon}
                        {!collapsed && <span>{item.title}</span>}
                      </Link>
                    ))
                  ) : (
                    <Link
                      to={group.href || "#"}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white",
                        location.pathname === group.href && "bg-slate-800 text-white",
                        collapsed && "justify-center p-2"
                      )}
                    >
                      {group.icon}
                      {!collapsed && (
                        <div className="flex flex-1 items-center justify-between">
                          <span>{group.title}</span>
                          {group.badge && (
                            <span className="rounded bg-amber-500 px-1.5 py-0.5 text-xs font-medium text-amber-950">
                              {group.badge}
                            </span>
                          )}
                        </div>
                      )}
                    </Link>
                  )}
                </>
              ) : (
                <Link
                  to={group.href || "#"}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white",
                    location.pathname === group.href && "bg-slate-800 text-white",
                    collapsed && "justify-center px-2"
                  )}
                >
                  {group.icon}
                  {!collapsed && <span>{group.title}</span>}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
      <div className="flex items-center justify-between border-t border-slate-800 p-2">
        <ThemeToggle />
        {!collapsed && (
          <Link to="/logout" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        )}
        {collapsed && (
          <Link
            to="/logout"
            className="flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <LogOut className="h-5 w-5" />
          </Link>
        )}
      </div>
    </div>
  );
}
