import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Brain, 
  Heart, 
  Users, 
  Target,
  PlayCircle,
  Clock,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Emotion Recognition Cards",
    category: "Social Skills",
    duration: "15 min",
    difficulty: "Beginner",
    progress: 75,
    completed: 3,
    total: 4,
    description: "Practice identifying and naming different emotions through interactive cards.",
    icon: Heart
  },
  {
    id: 2,
    title: "Turn-Taking Games",
    category: "Social Skills",
    duration: "20 min",
    difficulty: "Beginner",
    progress: 50,
    completed: 2,
    total: 4,
    description: "Learn the importance of taking turns through fun, engaging activities.",
    icon: Users
  },
  {
    id: 3,
    title: "Sensory Exploration",
    category: "Sensory Development",
    duration: "25 min",
    difficulty: "Intermediate",
    progress: 25,
    completed: 1,
    total: 4,
    description: "Explore different textures, sounds, and sensations in a safe environment.",
    icon: Sparkles
  },
  {
    id: 4,
    title: "Pattern Recognition",
    category: "Cognitive Skills",
    duration: "15 min",
    difficulty: "Beginner",
    progress: 100,
    completed: 5,
    total: 5,
    description: "Develop pattern recognition skills through matching and sequencing activities.",
    icon: Brain
  },
  {
    id: 5,
    title: "Daily Routine Builder",
    category: "Life Skills",
    duration: "30 min",
    difficulty: "Intermediate",
    progress: 40,
    completed: 2,
    total: 5,
    description: "Create and practice daily routines to build independence and confidence.",
    icon: Target
  },
  {
    id: 6,
    title: "Communication Pictures",
    category: "Communication",
    duration: "20 min",
    difficulty: "Beginner",
    progress: 60,
    completed: 3,
    total: 5,
    description: "Use picture cards to enhance communication and express needs.",
    icon: Users
  }
];

const stats = [
  { label: "Activities Completed", value: "12", change: "+3 this week", icon: CheckCircle2 },
  { label: "Total Practice Time", value: "4.5h", change: "+45 min this week", icon: Clock },
  { label: "Current Streak", value: "7 days", change: "Keep it up!", icon: TrendingUp },
  { label: "Skills Mastered", value: "8", change: "+2 this month", icon: Sparkles }
];

const Activities = () => {
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
                  Your Activities Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Track progress and discover new activities personalized for your child
                </p>
              </div>
              <Button size="lg">
                <PlayCircle className="w-4 h-4 mr-2" />
                Start New Activity
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-xs text-primary">{stat.change}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Activities Section */}
        <section className="container mx-auto px-4 pb-16">
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full max-w-2xl grid-cols-4">
              <TabsTrigger value="all">All Activities</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((activity) => {
                  const Icon = activity.icon;
                  const isCompleted = activity.progress === 100;
                  
                  return (
                    <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          {isCompleted && (
                            <Badge variant="default" className="bg-green-500">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Completed
                            </Badge>
                          )}
                        </div>
                        <CardTitle>{activity.title}</CardTitle>
                        <CardDescription>{activity.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {activity.description}
                        </p>
                        
                        <div className="flex gap-2 text-sm text-muted-foreground">
                          <Badge variant="outline">
                            <Clock className="w-3 h-3 mr-1" />
                            {activity.duration}
                          </Badge>
                          <Badge variant="outline">{activity.difficulty}</Badge>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">
                              {activity.completed}/{activity.total} sessions
                            </span>
                          </div>
                          <Progress value={activity.progress} className="h-2" />
                        </div>

                        <Button className="w-full">
                          {isCompleted ? "Review" : "Continue"}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="in-progress" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.filter(a => a.progress > 0 && a.progress < 100).map((activity) => {
                  const Icon = activity.icon;
                  
                  return (
                    <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle>{activity.title}</CardTitle>
                        <CardDescription>{activity.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          {activity.description}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">
                              {activity.completed}/{activity.total} sessions
                            </span>
                          </div>
                          <Progress value={activity.progress} className="h-2" />
                        </div>

                        <Button className="w-full">Continue</Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="text-center py-16">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h3 className="text-2xl font-bold mb-2">Great Progress!</h3>
              <p className="text-muted-foreground mb-6">
                You've completed {activities.filter(a => a.progress === 100).length} activities
              </p>
              <Button>View All Achievements</Button>
            </TabsContent>

            <TabsContent value="recommended" className="text-center py-16">
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Personalized Recommendations</h3>
              <p className="text-muted-foreground mb-6">
                Complete the assessment to get activities tailored to your child's needs
              </p>
              <Button asChild>
                <a href="/assessment">Take Assessment</a>
              </Button>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Activities;
