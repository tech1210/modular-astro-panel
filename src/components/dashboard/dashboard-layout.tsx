
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { ThemeProvider } from "@/components/theme-provider";

export function DashboardLayout() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 overflow-auto bg-slate-50 dark:bg-slate-900 p-4 lg:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
