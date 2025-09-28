import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid, List } from "lucide-react";
import ClubCard from "./ClubCard";

const mockClubs = [
  {
    id: "1",
    name: "Computer Science Society",
    description: "Explore the latest in programming, AI, and technology. Weekly coding challenges, guest speakers from tech companies, and hackathon preparation.",
    category: "Technology",
    memberCount: 156,
    nextEvent: "AI Workshop - Dec 15",
    location: "Tech Building Room 101",
    rating: 4.8,
    tags: ["Programming", "AI", "Hackathons", "Career Development"]
  },
  {
    id: "2",
    name: "Drama Club",
    description: "Bring stories to life through acting, directing, and stagecraft. Open to all skill levels with opportunities for both performance and behind-the-scenes work.",
    category: "Arts",
    memberCount: 89,
    nextEvent: "Winter Play Auditions - Dec 10",
    location: "Arts Center Theater",
    rating: 4.9,
    tags: ["Acting", "Theater", "Performance", "Creative Arts"]
  },
  {
    id: "3",
    name: "Environmental Action Group",
    description: "Passionate about sustainability and environmental conservation. Organize campus cleanups, awareness campaigns, and eco-friendly initiatives.",
    category: "Service",
    memberCount: 203,
    nextEvent: "Campus Cleanup - Dec 12",
    location: "Student Center",
    rating: 4.7,
    tags: ["Environment", "Sustainability", "Community Service", "Awareness"]
  },
  {
    id: "4",
    name: "Photography Club",
    description: "Capture moments and express creativity through the lens. Photo walks, workshops, and annual exhibition opportunities for photographers of all levels.",
    category: "Arts",
    memberCount: 127,
    nextEvent: "Night Photography Walk - Dec 14",
    location: "Art Studio 2B",
    rating: 4.6,
    tags: ["Photography", "Visual Arts", "Creative Expression", "Exhibitions"]
  },
  {
    id: "5",
    name: "Debate Society",
    description: "Sharpen your argumentation skills and engage in intellectual discourse. Participate in tournaments and develop critical thinking abilities.",
    category: "Academic",
    memberCount: 78,
    nextEvent: "Regional Tournament - Dec 18",
    location: "Library Conference Room",
    rating: 4.8,
    tags: ["Debate", "Public Speaking", "Critical Thinking", "Tournaments"]
  },
  {
    id: "6",
    name: "Robotics Team",
    description: "Design, build, and program robots for competitions. Hands-on engineering experience with mentorship from industry professionals.",
    category: "Technology",
    memberCount: 92,
    nextEvent: "Robot Demo Day - Dec 16",
    location: "Engineering Lab 3",
    rating: 4.9,
    tags: ["Robotics", "Engineering", "Programming", "Competitions"]
  }
];

const categories = ["All", "Technology", "Arts", "Service", "Academic", "Sports"];

const ClubDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredClubs = mockClubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || club.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="discover" className="py-16 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Discover Amazing Clubs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your community among hundreds of student organizations. Filter by category, search by interests, or explore something completely new.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search clubs, interests, or activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Filter className="h-4 w-4" />
              </Button>
              <div className="flex border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className="h-12 w-12 rounded-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className="h-12 w-12 rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredClubs.length} {filteredClubs.length === 1 ? 'club' : 'clubs'}
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Club Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {filteredClubs.map((club, index) => (
            <div key={club.id} style={{animationDelay: `${index * 0.1}s`}}>
              <ClubCard club={club} />
            </div>
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No clubs found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or selected category
            </p>
            <Button variant="outline" onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClubDirectory;