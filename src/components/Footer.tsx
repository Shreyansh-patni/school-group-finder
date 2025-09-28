import { Button } from "@/components/ui/button";
import { Users, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ClubHub</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Connecting students with their perfect clubs and communities.
            </p>
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
                Discover Clubs
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
                Events Calendar
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
                For Club Leaders
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
                Student Resources
              </Button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
                Help Center
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
                Contact Support
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
                Community Guidelines
              </Button>
              <Button variant="ghost" size="sm" className="justify-start p-0 h-auto">
                Privacy Policy
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@clubhub.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Student Center, Room 200</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ClubHub. All rights reserved. Built with ❤️ for students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;