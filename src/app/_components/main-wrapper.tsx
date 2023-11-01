import { cn } from "@/utils";

export default function MainWrapper({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.ComponentProps<"main">>) {
  return (
    <main
      className={cn("min-h-screen pt-12 sm:pt-[60px]", className)}
      {...props}
    >
      {children}
    </main>
  );
}
