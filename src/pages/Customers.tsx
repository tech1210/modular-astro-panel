
import { useState } from "react";
import { Search, Filter, Plus, MoreHorizontal, ArrowUpDown, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataCard } from "@/components/dashboard/data-card";

// Mock data
const customers = [
  { 
    id: 1, 
    name: "John Doe", 
    email: "john@example.com", 
    phone: "+1 (123) 456-7890", 
    status: "Active",
    totalSpent: "$2,453.00",
    orders: 12,
    lastOrder: "Apr 23, 2023",
    avatar: ""
  },
  { 
    id: 2, 
    name: "Jane Smith", 
    email: "jane@example.com", 
    phone: "+1 (234) 567-8901", 
    status: "Active",
    totalSpent: "$1,250.00",
    orders: 8,
    lastOrder: "Apr 21, 2023",
    avatar: ""
  },
  { 
    id: 3, 
    name: "Michael Johnson", 
    email: "michael@example.com", 
    phone: "+1 (345) 678-9012", 
    status: "Inactive",
    totalSpent: "$985.00",
    orders: 5,
    lastOrder: "Mar 15, 2023",
    avatar: ""
  },
  { 
    id: 4, 
    name: "Emily Wilson", 
    email: "emily@example.com", 
    phone: "+1 (456) 789-0123", 
    status: "Active",
    totalSpent: "$3,125.00",
    orders: 19,
    lastOrder: "Apr 19, 2023",
    avatar: ""
  },
  { 
    id: 5, 
    name: "David Brown", 
    email: "david@example.com", 
    phone: "+1 (567) 890-1234", 
    status: "Blocked",
    totalSpent: "$145.00",
    orders: 1,
    lastOrder: "Jan 05, 2023",
    avatar: ""
  },
  { 
    id: 6, 
    name: "Sarah Lee", 
    email: "sarah@example.com", 
    phone: "+1 (678) 901-2345", 
    status: "Active",
    totalSpent: "$567.00",
    orders: 3,
    lastOrder: "Apr 10, 2023",
    avatar: ""
  },
  { 
    id: 7, 
    name: "Robert Davis", 
    email: "robert@example.com", 
    phone: "+1 (789) 012-3456", 
    status: "Active",
    totalSpent: "$1,876.00",
    orders: 10,
    lastOrder: "Apr 18, 2023",
    avatar: ""
  },
  { 
    id: 8, 
    name: "Jennifer Miller", 
    email: "jennifer@example.com", 
    phone: "+1 (890) 123-4567", 
    status: "Inactive",
    totalSpent: "$432.00",
    orders: 2,
    lastOrder: "Feb 12, 2023",
    avatar: ""
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Blocked":
      return "destructive";
    default:
      return "secondary";
  }
};

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.phone.includes(searchQuery)
  );
  
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCustomers = filteredCustomers.slice(startIndex, endIndex);

  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <DataCard className="overflow-hidden">
        <div className="mb-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex w-full max-w-sm items-center gap-2">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search customers..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>All Customers</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Active Customers</DropdownMenuItem>
                <DropdownMenuItem>Inactive Customers</DropdownMenuItem>
                <DropdownMenuItem>Blocked Customers</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Newest Customers</DropdownMenuItem>
                <DropdownMenuItem>Oldest Customers</DropdownMenuItem>
                <DropdownMenuItem>Highest Spenders</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
            <Select defaultValue={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(parseInt(value))}>
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Show" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">Show 6</SelectItem>
                <SelectItem value="12">Show 12</SelectItem>
                <SelectItem value="24">Show 24</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-left text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-1">
                    Customer
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </th>
                <th className="py-3 text-left text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-1">
                    Status
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </th>
                <th className="py-3 text-right text-sm font-medium text-muted-foreground">
                  <div className="flex items-center justify-end gap-1">
                    Total Spent
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </th>
                <th className="py-3 text-right text-sm font-medium text-muted-foreground">
                  <div className="flex items-center justify-end gap-1">
                    Orders
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </th>
                <th className="py-3 text-left text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-1">
                    Last Order
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </th>
                <th className="py-3 text-right text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.map((customer) => (
                <tr key={customer.id} className="border-b last:border-0 hover:bg-muted/50">
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={customer.avatar} />
                        <AvatarFallback>{customer.name.charAt(0)}{customer.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-xs text-muted-foreground">{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3">
                    <Badge variant={getStatusColor(customer.status) as any}>
                      {customer.status}
                    </Badge>
                  </td>
                  <td className="py-3 text-right font-medium">{customer.totalSpent}</td>
                  <td className="py-3 text-right">{customer.orders}</td>
                  <td className="py-3 text-sm text-muted-foreground">{customer.lastOrder}</td>
                  <td className="py-3 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete Customer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredCustomers.length)} of {filteredCustomers.length} customers
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              // Show current page, first, last, and one page before and after current
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <Button
                    key={pageNumber}
                    variant={currentPage === pageNumber ? "default" : "outline"}
                    size="icon"
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </Button>
                );
              } else if (
                pageNumber === currentPage - 2 ||
                pageNumber === currentPage + 2
              ) {
                return (
                  <Button
                    key={pageNumber}
                    variant="outline"
                    size="icon"
                    disabled
                  >
                    ...
                  </Button>
                );
              }
              return null;
            })}
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DataCard>
    </div>
  );
};

export default Customers;
