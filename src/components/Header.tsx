import { Button } from "@/components/ui/button";
import { Users, Search, Bell, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">ClubHub</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" asChild>
              <a href="#discover">Discover Clubs</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#events">Events</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#about">About</a>
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="hero" className="hidden md:flex">
            Join Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;