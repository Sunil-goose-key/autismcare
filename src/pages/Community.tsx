import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Heart, 
  Users, 
  TrendingUp,
  Pin,
  Clock,
  Plus
} from "lucide-react";

const forumCategories = [
  { id: "general", name: "General Discussion", count: 234, color: "bg-blue-500" },
  { id: "support", name: "Parent Support", count: 189, color: "bg-purple-500" },
  { id: "education", name: "Education & Learning", count: 156, color: "bg-green-500" },
  { id: "therapy", name: "Therapy & Treatment", count: 143, color: "bg-orange-500" },
  { id: "success", name: "Success Stories", count: 98, color: "bg-pink-500" }
];

const topics = [
  {
    id: 1,
    title: "Tips for managing sensory overload in public spaces",
    author: "Sarah M.",
    authorInitials: "SM",
    category: "Support",
    replies: 23,
    likes: 45,
    views: 234,
    isPinned: true,
    timeAgo: "2 hours ago",
    excerpt: "I wanted to share some strategies that have really helped us when visiting crowded places..."
  },
  {
    id: 2,
    title: "Success! My son made his first friend at school",
    author: "Michael P.",
    authorInitials: "MP",
    category: "Success Stories",
    replies: 67,
    likes: 189,
    views: 456,
    isPinned: false,
    timeAgo: "5 hours ago",
    excerpt: "After months of social skills practice, I'm thrilled to share that my son has made his first real friend..."
  },
  {
    id: 3,
    title: "Looking for ABA therapy recommendations in California",
    author: "Jennifer L.",
    authorInitials: "JL",
    category: "Therapy",
    replies: 15,
    likes: 12,
    views: 89,
    isPinned: false,
    timeAgo: "1 day ago",
    excerpt: "We're new to the area and looking for recommendations for quality ABA therapy providers..."
  },
  {
    id: 4,
    title: "Visual schedule templates that work!",
    author: "David K.",
    authorInitials: "DK",
    category: "Education",
    replies: 34,
    likes: 78,
    views: 312,
    isPinned: true,
    timeAgo: "2 days ago",
    excerpt: "I've created some visual schedule templates that have been really effective. Sharing them here..."
  },
  {
    id: 5,
    title: "Dealing with meltdowns during transitions",
    author: "Emily R.",
    authorInitials: "ER",
    category: "Support",
    replies: 41,
    likes: 56,
    views: 267,
    isPinned: false,
    timeAgo: "3 days ago",
    excerpt: "Transitions have always been challenging. What strategies have worked for your family?"
  },
  {
    id: 6,
    title: "IEP meeting preparation checklist",
    author: "Robert T.",
    authorInitials: "RT",
    category: "Education",
    replies: 28,
    likes: 92,
    views: 401,
    isPinned: false,
    timeAgo: "4 days ago",
    excerpt: "After attending dozens of IEP meetings, here's my comprehensive preparation checklist..."
  }
];

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTopics = selectedCategory === "all" 
    ? topics 
    : topics.filter(t => t.category.toLowerCase().includes(selectedCategory));

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  Community Forum
                </h1>
                <p className="text-muted-foreground">
                  Connect, share experiences, and support each other
                </p>
              </div>
              <Button size="lg">
                <Plus className="w-4 h-4 mr-2" />
                New Discussion
              </Button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12.4K</p>
                  <p className="text-sm text-muted-foreground">Members</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">820</p>
                  <p className="text-sm text-muted-foreground">Discussions</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3.2K</p>
                  <p className="text-sm text-muted-foreground">Helpful Posts</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-sm text-muted-foreground">Active Today</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4 pb-8">
          <Card>
            <CardHeader>
              <CardTitle>Forum Categories</CardTitle>
              <CardDescription>Browse discussions by topic</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {forumCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="p-4 rounded-lg border hover:border-primary transition-colors text-left"
                  >
                    <div className={`w-10 h-10 rounded-lg ${category.color} mb-3`} />
                    <p className="font-medium mb-1">{category.name}</p>
                    <p className="text-sm text-muted-foreground">{category.count} topics</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Topics */}
        <section className="container mx-auto px-4 pb-16">
          <Tabs defaultValue="recent" className="space-y-6">
            <TabsList>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
            </TabsList>

            <TabsContent value="recent" className="space-y-4">
              {filteredTopics.map((topic) => (
                <Card key={topic.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                          {topic.authorInitials}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {topic.isPinned && (
                                <Pin className="w-4 h-4 text-primary" />
                              )}
                              <h3 className="text-lg font-semibold hover:text-primary transition-colors">
                                {topic.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                              <span>{topic.author}</span>
                              <span>•</span>
                              <Badge variant="outline">{topic.category}</Badge>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {topic.timeAgo}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {topic.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-4 h-4" />
                            <span>{topic.replies} replies</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{topic.likes} likes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{topic.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="popular" className="text-center py-16">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Most Popular Topics</h3>
              <p className="text-muted-foreground">Showing the most engaged discussions</p>
            </TabsContent>

            <TabsContent value="trending" className="text-center py-16">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Trending Now</h3>
              <p className="text-muted-foreground">Hot topics in the community</p>
            </TabsContent>

            <TabsContent value="unanswered" className="text-center py-16">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Unanswered Questions</h3>
              <p className="text-muted-foreground">Help the community by answering these questions</p>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
