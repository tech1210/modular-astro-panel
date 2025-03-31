
import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  Users,
  ShoppingCart,
  DollarSign,
  FileText,
  Calendar,
  Share2,
  Download,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { DataCard } from "@/components/dashboard/data-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// Data for stats cards
const statsData = [
  {
    title: "Active Clients",
    value: "25K",
    icon: <Users className="h-6 w-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    change: {
      value: 0.35,
      isPositive: true
    }
  },
  {
    title: "Total Revenue",
    value: "$365",
    icon: <DollarSign className="h-6 w-6" />,
    color: "text-amber-500",
    bgColor: "bg-amber-100",
    change: {
      value: 0.54,
      isPositive: false
    }
  },
  {
    title: "Total Sales",
    value: "1,589",
    icon: <ShoppingCart className="h-6 w-6" />,
    color: "text-emerald-500",
    bgColor: "bg-emerald-100",
    change: {
      value: 0.96,
      isPositive: true
    }
  },
  {
    title: "Total Deals",
    value: "256",
    icon: <DollarSign className="h-6 w-6" />,
    color: "text-rose-500",
    bgColor: "bg-rose-100",
    change: {
      value: 0.42,
      isPositive: false
    }
  },
  {
    title: "Total Projects",
    value: "46",
    icon: <FileText className="h-6 w-6" />,
    color: "text-cyan-500",
    bgColor: "bg-cyan-100",
    change: {
      value: 0.42,
      isPositive: true
    }
  }
];

// Mock data for charts
const monthlyData = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 35 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 45 },
  { name: "May", value: 25 },
  { name: "Jun", value: 55 },
  { name: "Jul", value: 35 },
  { name: "Aug", value: 40 },
  { name: "Sep", value: 65 },
  { name: "Oct", value: 40 },
  { name: "Nov", value: 55 },
  { name: "Dec", value: 35 },
];

const lastMonthData = [
  { name: "Jan", value: 15 },
  { name: "Feb", value: 25 },
  { name: "Mar", value: 20 },
  { name: "Apr", value: 35 },
  { name: "May", value: 15 },
  { name: "Jun", value: 45 },
  { name: "Jul", value: 25 },
  { name: "Aug", value: 30 },
  { name: "Sep", value: 55 },
  { name: "Oct", value: 30 },
  { name: "Nov", value: 45 },
  { name: "Dec", value: 25 },
];

// Upcoming events data
const upcomingEvents = [
  {
    title: "Strategy Planning",
    date: "16 Aug",
    day: "Tue",
    description: "Duo et et rebum kasd talk",
  },
  {
    title: "Hiring Employees",
    date: "18 Aug",
    day: "Thu",
    description: "Accusam diam est eos vel",
  },
];

// Welcome message state
const Dashboard = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">CRM Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-blue-600">CRM</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Dashboard</span>
        </div>
      </div>

      {showWelcome && (
        <div className="relative rounded-md bg-blue-50 p-4">
          <button
            onClick={() => setShowWelcome(false)}
            className="absolute right-2 top-2 rounded-full bg-white p-1 text-gray-500 hover:bg-gray-100"
          >
            <span className="text-lg">×</span>
          </button>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-shrink-0">
              <img
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20viewBox%3D%220%200%2064%2064%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20fill%3D%22%234285F4%22%20cx%3D%2232%22%20cy%3D%2232%22%20r%3D%2232%22%2F%3E%3Cpath%20d%3D%22M17.17%2033.99l9.46-16.37c.43-.75%201.53-.75%201.95%200l9.46%2016.37c.43.75-.11%201.68-.97%201.68H18.15c-.86%200-1.39-.93-.98-1.68z%22%20fill%3D%22%23FFF%22%2F%3E%3Cpath%20d%3D%22M29.41%2017.62l9.46%2016.37c.43.75-.11%201.68-.97%201.68h-9.46%22%20fill%3D%22%23EAEAEA%22%2F%3E%3Cpath%20d%3D%22M38.22%2039.78L28.76%2056.15c-.43.75-1.53.75-1.95%200l-9.46-16.37c-.43-.75.11-1.68.97-1.68h18.92c.86%200%201.4.93.98%201.68z%22%20fill%3D%22%23FFF%22%2F%3E%3Cpath%20d%3D%22M37.24%2038.1h-9.46l-9.46%2016.36c-.43.75.11%201.69.97%201.69h18.92c.86%200%201.41-.94.98-1.69L37.24%2038.1z%22%20fill%3D%22%23EAEAEA%22%2F%3E%3Cpath%20d%3D%22M26.53%2033.99l-9.46-16.37c-.43-.75.11-1.68.97-1.68h18.92c.86%200%201.4.93.98%201.68l-9.46%2016.37c-.42.75-1.52.75-1.95%200z%22%20fill%3D%22%23DADADA%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Welcome"
                className="h-20 w-20"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Welcome back! Dashlot</h2>
              <p className="text-gray-600">Want to be the first to know about Dashlot updates? Subscribe Now!</p>
            </div>
            <div className="ml-auto">
              <Button className="bg-rose-500 hover:bg-rose-600">Upgrade Account</Button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {statsData.map((stat, index) => (
          <div key={index} className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className={cn("rounded-full p-2", stat.bgColor)}>
                <div className={stat.color}>{stat.icon}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="h-12">
                {index === 0 && (
                  <svg viewBox="0 0 100 20" className="w-full h-full text-blue-500">
                    <path
                      d="M0,10 L10,15 L20,5 L30,10 L40,0 L50,10 L60,5 L70,10 L80,5 L90,15 L100,10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                )}
                {index === 1 && (
                  <svg viewBox="0 0 100 20" className="w-full h-full text-amber-500">
                    <path
                      d="M0,10 L10,5 L20,15 L30,10 L40,15 L50,5 L60,10 L70,5 L80,15 L90,10 L100,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                )}
                {index === 2 && (
                  <svg viewBox="0 0 100 20" className="w-full h-full text-emerald-500">
                    <path
                      d="M0,15 L10,10 L20,12 L30,8 L40,10 L50,5 L60,8 L70,5 L80,8 L90,3 L100,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                )}
                {index === 3 && (
                  <svg viewBox="0 0 100 20" className="w-full h-full text-rose-500">
                    <path
                      d="M0,5 L10,8 L20,5 L30,12 L40,8 L50,15 L60,10 L70,12 L80,5 L90,10 L100,8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                )}
                {index === 4 && (
                  <svg viewBox="0 0 100 20" className="w-full h-full text-cyan-500">
                    <path
                      d="M0,10 L10,5 L20,8 L30,3 L40,10 L50,5 L60,12 L70,8 L80,15 L90,8 L100,12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </div>
              <div className="mt-1 flex items-center text-xs">
                <span className={cn(
                  "flex items-center",
                  stat.change.isPositive ? "text-emerald-500" : "text-rose-500"
                )}>
                  {stat.change.isPositive ? "+" : "-"}{Math.abs(stat.change.value)}%
                </span>
                <span className="ml-1 text-muted-foreground">Since Last Month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
        <div className="lg:col-span-5">
          <DataCard title="Revenue Statistics" className="h-full">
            <div className="mb-4 flex items-center justify-between">
              <Tabs defaultValue="thisMonth" className="w-full">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="thisMonth">This Month</TabsTrigger>
                    <TabsTrigger value="lastMonth">Last Month</TabsTrigger>
                  </TabsList>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>Export</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                  </div>
                </div>
                <TabsContent value="thisMonth" className="mt-4 h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyData}
                      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid stroke="#f5f5f5" vertical={false} />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                      />
                      <YAxis axisLine={false} tickLine={false} tickMargin={10} />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="This Month"
                        stroke="#fbbf24"
                        strokeWidth={3}
                        dot={{ stroke: '#fbbf24', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="lastMonth" className="mt-4 h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={lastMonthData}
                      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid stroke="#f5f5f5" vertical={false} />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                      />
                      <YAxis axisLine={false} tickLine={false} tickMargin={10} />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="Last Month"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ stroke: '#3b82f6', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </div>
          </DataCard>
        </div>

        <div className="lg:col-span-2">
          <DataCard title="Upcoming Events" className="h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium">Upcoming Events</h3>
              <Button variant="link" size="sm" className="flex items-center gap-1 text-sm text-blue-600 p-0">
                Show All
              </Button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="bg-blue-100 text-blue-600 rounded px-2 py-1 text-xs font-semibold">
                      {event.day}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{event.date}</div>
                  </div>
                  <div className="flex-grow border-b pb-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{event.title}</h4>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
