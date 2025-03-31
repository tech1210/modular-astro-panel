
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { DataCard } from "@/components/dashboard/data-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Settings = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveProfile = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully",
      });
    }, 1000);
  };

  const handleSavePassword = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Password updated",
        description: "Your password has been updated successfully",
      });
    }, 1000);
  };

  const handleSaveNotifications = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Notification preferences updated",
        description: "Your notification settings have been saved",
      });
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <DataCard title="Profile Settings" description="Manage your profile information">
            <form onSubmit={handleSaveProfile} className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button type="button" variant="outline" size="sm">
                        Upload Photo
                      </Button>
                      <Button type="button" variant="ghost" size="sm" className="text-destructive">
                        Remove Photo
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Recommended: Square JPG or PNG, at least 200x200 pixels
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" defaultValue="Admin" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" defaultValue="User" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" defaultValue="admin@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" defaultValue="+1 (123) 456-7890" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="admin">
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="Tell us about yourself"
                    defaultValue="System administrator with 5+ years of experience managing enterprise applications."
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          </DataCard>
        </TabsContent>

        <TabsContent value="password">
          <DataCard title="Change Password" description="Update your password">
            <form onSubmit={handleSavePassword} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" name="currentPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" name="newPassword" type="password" />
                  <p className="text-xs text-muted-foreground">
                    Password must be at least 8 characters long and include a mix of uppercase, 
                    lowercase, numbers, and special characters.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" name="confirmPassword" type="password" />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Updating..." : "Update Password"}
                </Button>
              </div>
            </form>
          </DataCard>
        </TabsContent>

        <TabsContent value="notifications">
          <DataCard title="Notification Preferences" description="Manage how you receive notifications">
            <form onSubmit={handleSaveNotifications} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  {[
                    { id: "email-orders", label: "New orders" },
                    { id: "email-customers", label: "New customer registrations" },
                    { id: "email-products", label: "Low stock alerts" },
                    { id: "email-security", label: "Security alerts" },
                    { id: "email-updates", label: "System updates" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between space-x-2">
                      <Label htmlFor={item.id} className="flex-1">
                        {item.label}
                      </Label>
                      <Switch id={item.id} defaultChecked={item.id !== "email-updates"} />
                    </div>
                  ))}
                </div>

                <Separator />

                <h3 className="text-sm font-medium">Push Notifications</h3>
                <div className="space-y-2">
                  {[
                    { id: "push-orders", label: "New orders" },
                    { id: "push-customers", label: "New customer registrations" },
                    { id: "push-products", label: "Low stock alerts" },
                    { id: "push-security", label: "Security alerts" },
                    { id: "push-updates", label: "System updates" },
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between space-x-2">
                      <Label htmlFor={item.id} className="flex-1">
                        {item.label}
                      </Label>
                      <Switch id={item.id} defaultChecked={["push-orders", "push-security"].includes(item.id)} />
                    </div>
                  ))}
                </div>

                <Separator />

                <h3 className="text-sm font-medium">Notification Summary</h3>
                <div className="space-y-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="summary-frequency">Email Summary Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger id="summary-frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Preferences"}
                </Button>
              </div>
            </form>
          </DataCard>
        </TabsContent>

        <TabsContent value="account">
          <DataCard title="Account Settings" description="Manage your account settings">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Account Access</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between space-x-2">
                    <div>
                      <Label htmlFor="twoFactorAuth" className="block">
                        Two-Factor Authentication
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch id="twoFactorAuth" defaultChecked={true} />
                  </div>
                </div>

                <Separator />

                <h3 className="text-sm font-medium">Connected Accounts</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between space-x-2">
                    <div>
                      <p className="font-medium">Google</p>
                      <p className="text-xs text-muted-foreground">
                        Not connected
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <div>
                      <p className="font-medium">Microsoft</p>
                      <p className="text-xs text-muted-foreground">
                        Connected as admin@example.com
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Disconnect
                    </Button>
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-xs text-muted-foreground">
                        Not connected
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                </div>

                <Separator />

                <h3 className="text-sm font-medium text-destructive">Danger Zone</h3>
                <div className="space-y-4 rounded-md border border-destructive/10 bg-destructive/5 p-4">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <p className="font-medium">Delete Account</p>
                      <p className="text-xs text-muted-foreground">
                        Permanently delete your account and all associated data
                      </p>
                    </div>
                    <Button variant="destructive" size="sm">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DataCard>
        </TabsContent>

        <TabsContent value="billing">
          <DataCard title="Billing Information" description="Manage your billing and subscription">
            <div className="space-y-6">
              <div className="rounded-md border bg-muted/50 p-4">
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <h3 className="font-medium">Current Plan: Enterprise</h3>
                    <p className="text-sm text-muted-foreground">
                      Your plan renews on May 15, 2023
                    </p>
                    <div className="mt-2 flex gap-2">
                      <Badge>Unlimited Users</Badge>
                      <Badge>Priority Support</Badge>
                      <Badge>Custom Features</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm">
                      Upgrade Plan
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      Cancel Subscription
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Payment Method</h3>
                <div className="rounded-md border p-4">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <div className="rounded-md border bg-card p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-credit-card"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 1234</p>
                        <p className="text-xs text-muted-foreground">
                          Expires 06/2025
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Add Payment Method
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Billing History</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border-b py-2 text-left text-sm font-medium text-muted-foreground">
                          Invoice
                        </th>
                        <th className="border-b py-2 text-left text-sm font-medium text-muted-foreground">
                          Date
                        </th>
                        <th className="border-b py-2 text-left text-sm font-medium text-muted-foreground">
                          Amount
                        </th>
                        <th className="border-b py-2 text-left text-sm font-medium text-muted-foreground">
                          Status
                        </th>
                        <th className="border-b py-2 text-right text-sm font-medium text-muted-foreground">
                          Download
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: "#INV-1234", date: "Apr 15, 2023", amount: "$99.00", status: "Paid" },
                        { id: "#INV-1233", date: "Mar 15, 2023", amount: "$99.00", status: "Paid" },
                        { id: "#INV-1232", date: "Feb 15, 2023", amount: "$99.00", status: "Paid" },
                      ].map((invoice, index) => (
                        <tr key={index} className="hover:bg-muted/50">
                          <td className="py-3 text-sm font-medium">{invoice.id}</td>
                          <td className="py-3 text-sm">{invoice.date}</td>
                          <td className="py-3 text-sm">{invoice.amount}</td>
                          <td className="py-3 text-sm">
                            <Badge variant="outline">{invoice.status}</Badge>
                          </td>
                          <td className="py-3 text-right">
                            <Button variant="ghost" size="sm">
                              Download
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </DataCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
