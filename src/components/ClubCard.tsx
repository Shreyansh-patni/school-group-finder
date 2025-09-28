import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Star } from "lucide-react";

interface ClubCardProps {
  club: {
    id: string;
    name: string;
    description: string;
    category: string;
    memberCount: number;
    nextEvent?: string;
    location: string;
    rating: number;
    image?: string;
    tags: string[];
  };
}

const ClubCard = ({ club }: ClubCardProps) => {
  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border animate-scale-in">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="text-xs">
                {club.category}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-current text-yellow-500" />
                <span>{club.rating}</span>
              </div>
            </div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {club.name}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="line-clamp-2">
          {club.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{club.memberCount} members</span>
          </div>
          
          {club.nextEvent && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Next: {club.nextEvent}</span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{club.location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          {club.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {club.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{club.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">
            Learn More
          </Button>
          <Button variant="hero" className="flex-1">
            Join Club
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ClubCard;