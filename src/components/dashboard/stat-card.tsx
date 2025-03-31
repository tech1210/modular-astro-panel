
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

const statCardVariants = cva("stats-card", {
  variants: {
    variant: {
      default: "",
      primary: "border-primary/20 bg-primary/5",
      success: "border-success/20 bg-success/5",
      warning: "border-warning/20 bg-warning/5",
      destructive: "border-destructive/20 bg-destructive/5",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type StatCardIconProps = {
  Icon: LucideIcon;
  variant?: "default" | "primary" | "success" | "warning" | "destructive";
};

const StatCardIcon = ({ Icon, variant = "default" }: StatCardIconProps) => {
  const iconColorMap = {
    default: "text-muted-foreground bg-muted",
    primary: "text-primary bg-primary/10",
    success: "text-success bg-success/10",
    warning: "text-warning bg-warning/10",
    destructive: "text-destructive bg-destructive/10",
  };

  return (
    <div
      className={cn(
        "absolute right-5 top-5 rounded-full p-2",
        iconColorMap[variant]
      )}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
};

interface StatCardProps extends VariantProps<typeof statCardVariants> {
  title: string;
  value: string;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: LucideIcon;
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  trend,
  icon: Icon,
  variant,
  className,
}: StatCardProps) {
  return (
    <div className={cn(statCardVariants({ variant }), className)}>
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
      
      {description && (
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      )}
      
      {trend && (
        <div className="mt-2 flex items-center gap-1">
          <span
            className={cn(
              "text-xs font-medium",
              trend.isPositive ? "text-success" : "text-destructive"
            )}
          >
            {trend.isPositive ? "+" : "-"}
            {Math.abs(trend.value)}%
          </span>
          <span className="text-xs text-muted-foreground">from last month</span>
        </div>
      )}
      
      {Icon && <StatCardIcon Icon={Icon} variant={variant} />}
    </div>
  );
}
