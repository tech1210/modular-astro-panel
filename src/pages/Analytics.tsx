
import { useState } from "react";
import { ResponsiveContainer, LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Download, Filter } from "lucide-react";
import { DataCard } from "@/components/dashboard/data-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for analytics
const trafficData = [
  { name: "Jan", value: 4000, previous: 2400 },
  { name: "Feb", value: 3000, previous: 1398 },
  { name: "Mar", value: 2000, previous: 9800 },
  { name: "Apr", value: 2780, previous: 3908 },
  { name: "May", value: 1890, previous: 4800 },
  { name: "Jun", value: 2390, previous: 3800 },
  { name: "Jul", value: 3490, previous: 4300 },
  { name: "Aug", value: 4000, previous: 2400 },
  { name: "Sep", value: 3200, previous: 1398 },
  { name: "Oct", value: 2800, previous: 2800 },
  { name: "Nov", value: 3300, previous: 3800 },
  { name: "Dec", value: 4200, previous: 4300 },
];

const conversionData = [
  { name: "Jan", value: 2.4 },
  { name: "Feb", value: 3.3 },
  { name: "Mar", value: 2.8 },
  { name: "Apr", value: 4.2 },
  { name: "May", value: 3.5 },
  { name: "Jun", value: 5.4 },
  { name: "Jul", value: 4.8 },
  { name: "Aug", value: 5.2 },
  { name: "Sep", value: 4.3 },
  { name: "Oct", value: 3.8 },
  { name: "Nov", value: 4.1 },
  { name: "Dec", value: 4.9 },
];

const deviceData = [
  { name: "Desktop", value: 40 },
  { name: "Mobile", value: 45 },
  { name: "Tablet", value: 15 },
];

const sourceData = [
  { name: "Direct", value: 30 },
  { name: "Organic Search", value: 25 },
  { name: "Referral", value: 20 },
  { name: "Social Media", value: 15 },
  { name: "Email", value: 10 },
];

const browserData = [
  { name: "Chrome", users: 2500 },
  { name: "Safari", users: 1800 },
  { name: "Firefox", users: 950 },
  { name: "Edge", users: 750 },
  { name: "Opera", users: 350 },
];

const topPages = [
  { page: "/products", views: 12450, conversion: 4.5 },
  { page: "/checkout", views: 8320, conversion: 3.2 },
  { page: "/landing-page", views: 6540, conversion: 7.8 },
  { page: "/blog", views: 4230, conversion: 2.1 },
  { page: "/about", views: 2180, conversion: 1.5 },
];

const DEVICE_COLORS = ["#6E59A5", "#0EA5E9", "#84cc16"];
const SOURCE_COLORS = ["#6E59A5", "#0EA5E9", "#84cc16", "#facc15", "#f43f5e"];

const Analytics = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left sm:w-auto"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Last 7 days</DropdownMenuItem>
              <DropdownMenuItem>Last 30 days</DropdownMenuItem>
              <DropdownMenuItem>This Month</DropdownMenuItem>
              <DropdownMenuItem>Last Month</DropdownMenuItem>
              <DropdownMenuItem>This Year</DropdownMenuItem>
              <DropdownMenuItem>Custom Range</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid-stats">
        <StatCard 
          title="Total Visits" 
          value="2,845,192" 
          trend={{ value: 12.5, isPositive: true }}
          description="vs previous period"
        />
        <StatCard 
          title="Unique Visitors" 
          value="1,257,930" 
          trend={{ value: 8.2, isPositive: true }}
          description="vs previous period"
        />
        <StatCard 
          title="Bounce Rate" 
          value="42.3%" 
          trend={{ value: 3.1, isPositive: false }}
          description="vs previous period"
        />
        <StatCard 
          title="Avg. Session" 
          value="3m 12s" 
          trend={{ value: 1.5, isPositive: true }}
          description="vs previous period"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <DataCard 
          title="Website Traffic" 
          description="Visitor trends over time"
        >
          <Tabs defaultValue="yearly">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
              <Select defaultValue="users">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="users">Users</SelectItem>
                  <SelectItem value="sessions">Sessions</SelectItem>
                  <SelectItem value="pageviews">Pageviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <TabsContent value="yearly" className="h-[300px] pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6E59A5" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#6E59A5" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#6E59A5" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    name="Current"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="previous" 
                    stroke="#0EA5E9" 
                    fillOpacity={1} 
                    fill="url(#colorPrevious)"
                    name="Previous"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="monthly" className="h-[300px] pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trafficData.slice(0, 6)} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#6E59A5"
                    strokeWidth={2} 
                    name="Current"
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="previous" 
                    stroke="#0EA5E9"
                    strokeWidth={2} 
                    name="Previous"
                  />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </DataCard>

        <DataCard 
          title="Conversion Rate" 
          description="Percentage of visitors who take action"
        >
          <div className="h-[300px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conversionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis unit="%" />
                <Tooltip formatter={(value) => [`${value}%`, "Conversion Rate"]} />
                <Bar dataKey="value" fill="#6E59A5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DataCard>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <DataCard 
          title="Traffic by Device" 
          description="Distribution of visitors by device type"
        >
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={DEVICE_COLORS[index % DEVICE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 space-y-2">
            {deviceData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: DEVICE_COLORS[index % DEVICE_COLORS.length] }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </DataCard>

        <DataCard 
          title="Traffic Sources" 
          description="Where your visitors are coming from"
        >
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={SOURCE_COLORS[index % SOURCE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 space-y-2">
            {sourceData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: SOURCE_COLORS[index % SOURCE_COLORS.length] }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </DataCard>

        <DataCard 
          title="Browser Usage" 
          description="Distribution of visitors by browser"
        >
          <div className="space-y-3 pt-2">
            {browserData.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-medium">{item.users.toLocaleString()}</span>
                </div>
                <Progress 
                  value={item.users / browserData[0].users * 100} 
                  className="h-2"
                  style={{ 
                    background: "hsl(var(--muted))",
                    "--progress-background": SOURCE_COLORS[index % SOURCE_COLORS.length] 
                  } as any}
                />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <Button variant="outline" size="sm">View Detailed Report</Button>
          </div>
        </DataCard>
      </div>

      <DataCard 
        title="Top Pages" 
        description="Most visited pages and their conversion rates"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b py-3 text-left text-sm font-medium text-muted-foreground">Page URL</th>
                <th className="border-b py-3 text-right text-sm font-medium text-muted-foreground">Page Views</th>
                <th className="border-b py-3 text-center text-sm font-medium text-muted-foreground">Conversion Rate</th>
                <th className="border-b py-3 text-right text-sm font-medium text-muted-foreground">Visit Duration</th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((page, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="py-3 text-sm font-medium">{page.page}</td>
                  <td className="py-3 text-right text-sm">{page.views.toLocaleString()}</td>
                  <td className="py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Progress 
                        value={page.conversion * 10} 
                        className="h-1.5 w-16"
                        style={{ 
                          background: "hsl(var(--muted))",
                          "--progress-background": page.conversion > 5 
                            ? "hsl(var(--success))" 
                            : page.conversion > 2.5 
                            ? "hsl(var(--warning))"
                            : "hsl(var(--muted-foreground))"
                        } as any}
                      />
                      <span className="text-sm">{page.conversion}%</span>
                    </div>
                  </td>
                  <td className="py-3 text-right text-sm">
                    {Math.floor(Math.random() * 5) + 1}m {Math.floor(Math.random() * 50) + 10}s
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DataCard>
    </div>
  );
};

export default Analytics;
