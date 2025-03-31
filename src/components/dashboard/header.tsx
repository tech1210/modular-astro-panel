
import { useState } from "react";
import { Bell, ChevronDown, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  
  const handleReadNotifications = () => {
    setUnreadNotifications(0);
  };

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-card px-4 lg:px-6">
      <div className="flex flex-1 items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {unreadNotifications > 0 && (
                <Badge
                  className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full p-0"
                  variant="destructive"
                >
                  {unreadNotifications}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Notifications</h3>
              {unreadNotifications > 0 && (
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-xs"
                  onClick={handleReadNotifications}
                >
                  Mark all as read
                </Button>
              )}
            </div>
            <div className="mt-2 space-y-2">
              <div className="flex items-start gap-2 rounded-md bg-accent p-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">New Order Received</p>
                  <p className="text-xs text-muted-foreground">
                    Order #1234 has been placed
                  </p>
                  <p className="text-xs text-muted-foreground">5 mins ago</p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-md p-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>SY</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">New User Registration</p>
                  <p className="text-xs text-muted-foreground">
                    Sarah Yang created an account
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-md p-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>SU</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">System Update</p>
                  <p className="text-xs text-muted-foreground">
                    Version 2.4.0 has been released
                  </p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="mt-3 w-full">
              View all notifications
            </Button>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 rounded-full"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="hidden text-left md:block">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">
                  admin@example.com
                </p>
              </div>
              <ChevronDown className="hidden h-4 w-4 md:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
