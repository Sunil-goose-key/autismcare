import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Does your child make eye contact when you talk to them?",
    options: ["Always", "Usually", "Sometimes", "Rarely", "Never"]
  },
  {
    id: 2,
    question: "Does your child respond to their name when called?",
    options: ["Always", "Usually", "Sometimes", "Rarely", "Never"]
  },
  {
    id: 3,
    question: "Does your child show interest in other children?",
    options: ["Always", "Usually", "Sometimes", "Rarely", "Never"]
  },
  {
    id: 4,
    question: "Does your child engage in pretend play?",
    options: ["Always", "Usually", "Sometimes", "Rarely", "Never"]
  },
  {
    id: 5,
    question: "Does your child have repetitive behaviors or routines?",
    options: ["Never", "Rarely", "Sometimes", "Usually", "Always"]
  },
  {
    id: 6,
    question: "Does your child have difficulty with changes in routine?",
    options: ["Never", "Rarely", "Sometimes", "Usually", "Always"]
  },
  {
    id: 7,
    question: "Does your child use gestures (pointing, waving)?",
    options: ["Always", "Usually", "Sometimes", "Rarely", "Never"]
  },
  {
    id: 8,
    question: "Does your child have unusual reactions to sounds, textures, or lights?",
    options: ["Never", "Rarely", "Sometimes", "Usually", "Always"]
  }
];

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">Assessment Complete</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Thank you for completing the screening questionnaire.
              </p>
            </div>
            <Card className="text-left">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
                <CardDescription>Based on your responses, here's what we recommend:</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-medium mb-2">📋 Review Your Results</p>
                  <p className="text-sm text-muted-foreground">
                    A detailed report has been generated. Please note this is a screening tool, not a diagnostic assessment.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-medium mb-2">👨‍⚕️ Consult a Professional</p>
                  <p className="text-sm text-muted-foreground">
                    We recommend discussing these results with a qualified healthcare professional for proper evaluation.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-medium mb-2">📚 Access Resources</p>
                  <p className="text-sm text-muted-foreground">
                    Explore our library of resources and activities to support your child's development.
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleRestart} variant="outline" size="lg">
                Take Another Assessment
              </Button>
              <Button asChild size="lg">
                <a href="/professionals">Find a Professional</a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const isAnswered = !!answers[currentQuestion.id];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Autism Screening Assessment
            </h1>
            <p className="text-muted-foreground">
              This screening tool helps identify early signs. It is not a diagnosis.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQuestion.id] || ""}
                onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
                className="space-y-3"
              >
                {currentQuestion.options.map((option) => (
                  <div key={option} className="flex items-center space-x-3 p-4 rounded-lg border hover:border-primary transition-colors cursor-pointer">
                    <RadioGroupItem value={option} id={`${currentQuestion.id}-${option}`} />
                    <Label
                      htmlFor={`${currentQuestion.id}-${option}`}
                      className="flex-1 cursor-pointer"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="lg"
              disabled={currentStep === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              size="lg"
              disabled={!isAnswered}
            >
              {currentStep === questions.length - 1 ? "Complete" : "Next"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;
