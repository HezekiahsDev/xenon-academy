import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: BlogLayout,
});

function BlogLayout() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-grid mask-[radial-gradient(ellipse_50%_40%_at_50%_20%,black,transparent_70%)]" />
      <Outlet />
    </main>
  );
}
