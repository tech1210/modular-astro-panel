
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/projects" element={<Dashboard />} />
            <Route path="/projects-description" element={<Dashboard />} />
            <Route path="/reports" element={<Dashboard />} />
            <Route path="/crypto" element={<Dashboard />} />
            <Route path="/ecommerce" element={<Dashboard />} />
            <Route path="/ui-elements" element={<Dashboard />} />
            <Route path="/utilities" element={<Dashboard />} />
            <Route path="/forms" element={<Dashboard />} />
            <Route path="/orders" element={<Dashboard />} />
            <Route path="/invoices" element={<Dashboard />} />
            <Route path="/calendar" element={<Dashboard />} />
            <Route path="/notifications" element={<Dashboard />} />
            <Route path="/advanced-ui" element={<Dashboard />} />
            <Route path="/apps" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
