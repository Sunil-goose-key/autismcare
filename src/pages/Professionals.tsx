import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Calendar, Search } from "lucide-react";

const professionals = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Developmental Pediatrician",
    location: "New York, NY",
    rating: 4.9,
    reviews: 127,
    experience: "15+ years",
    description: "Specializes in early childhood autism diagnosis and intervention planning.",
    availability: "Available"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Clinical Psychologist",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviews: 94,
    experience: "12+ years",
    description: "Expert in behavioral therapy and family counseling for autism spectrum disorders.",
    availability: "Available"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Speech-Language Pathologist",
    location: "Chicago, IL",
    rating: 4.9,
    reviews: 156,
    experience: "10+ years",
    description: "Focuses on communication development and social skills training.",
    availability: "Limited"
  },
  {
    id: 4,
    name: "Dr. James Williams",
    specialty: "Occupational Therapist",
    location: "Houston, TX",
    rating: 4.7,
    reviews: 83,
    experience: "8+ years",
    description: "Specializes in sensory integration therapy and daily living skills.",
    availability: "Available"
  },
  {
    id: 5,
    name: "Dr. Lisa Anderson",
    specialty: "Board Certified Behavior Analyst",
    location: "Phoenix, AZ",
    rating: 4.9,
    reviews: 112,
    experience: "14+ years",
    description: "Expert in Applied Behavior Analysis (ABA) therapy and treatment planning.",
    availability: "Available"
  },
  {
    id: 6,
    name: "Dr. Robert Taylor",
    specialty: "Child Psychiatrist",
    location: "Philadelphia, PA",
    rating: 4.8,
    reviews: 91,
    experience: "18+ years",
    description: "Specializes in autism diagnosis and medication management when needed.",
    availability: "Limited"
  }
];

const Professionals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredProfessionals = professionals.filter(prof => {
    const matchesSearch = prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialtyFilter === "all" || prof.specialty === specialtyFilter;
    const matchesLocation = !locationFilter || prof.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Find Trusted Autism Professionals
              </h1>
              <p className="text-xl text-muted-foreground">
                Connect with verified specialists who understand your needs
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or expertise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specialties</SelectItem>
                    <SelectItem value="Developmental Pediatrician">Developmental Pediatrician</SelectItem>
                    <SelectItem value="Clinical Psychologist">Clinical Psychologist</SelectItem>
                    <SelectItem value="Speech-Language Pathologist">Speech-Language Pathologist</SelectItem>
                    <SelectItem value="Occupational Therapist">Occupational Therapist</SelectItem>
                    <SelectItem value="Board Certified Behavior Analyst">BCBA</SelectItem>
                    <SelectItem value="Child Psychiatrist">Child Psychiatrist</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Location..."
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Professionals Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((prof) => (
              <Card key={prof.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl">{prof.name}</CardTitle>
                      <CardDescription className="font-medium text-primary">
                        {prof.specialty}
                      </CardDescription>
                    </div>
                    <Badge variant={prof.availability === "Available" ? "default" : "secondary"}>
                      {prof.availability}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {prof.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{prof.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({prof.reviews} reviews)
                    </span>
                    <span className="text-sm text-muted-foreground">
                      • {prof.experience}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {prof.description}
                  </p>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Button>
                    <Button variant="outline">View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProfessionals.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No professionals found matching your criteria.
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Professionals;
