import { Leaf, Droplets, Wind, Sun, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const remedies = [
  {
    id: 1,
    pest: "Fall Armyworm",
    severity: "critical",
    remedy: "Neem Oil Spray",
    ingredients: ["Neem oil", "Water", "Liquid soap"],
    steps: [
      "Mix 2 tablespoons neem oil with 1 liter of water",
      "Add a few drops of liquid soap as emulsifier",
      "Spray on affected plants early morning or evening",
      "Repeat every 7-10 days until infestation clears",
    ],
    applicationTime: "Early morning or late evening",
    effectiveness: 85,
    cost: "Low",
    icon: Leaf,
  },
  {
    id: 2,
    pest: "Aphids",
    severity: "warning",
    remedy: "Garlic-Chili Spray",
    ingredients: ["Garlic cloves (5-6)", "Hot chili peppers (2-3)", "Water", "Liquid soap"],
    steps: [
      "Blend garlic and chili peppers with water",
      "Strain the mixture and add liquid soap",
      "Dilute with water (1:5 ratio)",
      "Spray directly on aphids and plant leaves",
    ],
    applicationTime: "Morning",
    effectiveness: 78,
    cost: "Very Low",
    icon: Droplets,
  },
  {
    id: 3,
    pest: "Whitefly",
    severity: "critical",
    remedy: "Sticky Yellow Traps",
    ingredients: ["Yellow cardboard/plastic sheets", "Petroleum jelly or sticky adhesive"],
    steps: [
      "Cut yellow cardboard into 6x6 inch squares",
      "Apply a thick layer of petroleum jelly on both sides",
      "Hang traps near affected plants at canopy level",
      "Replace traps weekly or when fully covered",
    ],
    applicationTime: "Anytime",
    effectiveness: 82,
    cost: "Low",
    icon: Wind,
  },
  {
    id: 4,
    pest: "Leafhopper",
    severity: "warning",
    remedy: "Tobacco Leaf Solution",
    ingredients: ["Tobacco leaves (dried)", "Water", "Liquid soap"],
    steps: [
      "Soak dried tobacco leaves in water overnight",
      "Strain and dilute the solution (1:10 ratio)",
      "Add liquid soap for better adhesion",
      "Spray on plants, focusing on undersides of leaves",
    ],
    applicationTime: "Evening",
    effectiveness: 75,
    cost: "Low",
    icon: Leaf,
  },
  {
    id: 5,
    pest: "Cutworm",
    severity: "warning",
    remedy: "Wood Ash Barrier",
    ingredients: ["Wood ash", "Lime (optional)"],
    steps: [
      "Sprinkle wood ash around the base of plants",
      "Create a 2-3 inch wide barrier ring",
      "Mix with lime for enhanced effectiveness",
      "Reapply after rain or heavy dew",
    ],
    applicationTime: "Evening",
    effectiveness: 70,
    cost: "Very Low",
    icon: Sun,
  },
  {
    id: 6,
    pest: "Stem Borer",
    severity: "safe",
    remedy: "Trichogramma Wasps (Biological)",
    ingredients: ["Trichogramma wasp eggs/cards from supplier"],
    steps: [
      "Purchase biological control cards from local agricultural office",
      "Release wasps during early crop stage",
      "Place cards at 20-meter intervals in field",
      "Repeat releases every 2 weeks during vulnerable period",
    ],
    applicationTime: "Morning",
    effectiveness: 88,
    cost: "Medium",
    icon: Wind,
  },
];

function getSeverityColor(severity: string) {
  switch (severity) {
    case "critical":
      return "destructive";
    case "warning":
      return "secondary";
    default:
      return "default";
  }
}

export function Remedies() {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-1">Organic Remedies</h1>
        <p className="text-muted-foreground">Natural, low-cost pest control solutions for your farm</p>
      </div>

      {/* Info Banner */}
      <Card className="bg-accent border-primary/20">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2">Safe & Sustainable Solutions</h3>
              <p className="text-sm text-muted-foreground">
                All remedies listed here are organic, environmentally friendly, and safe for you and your crops. 
                These solutions use locally available materials and traditional knowledge combined with modern practices.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Remedies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {remedies.map((remedy) => {
          const Icon = remedy.icon;
          return (
            <Card key={remedy.id} className="overflow-hidden">
              <CardHeader className="border-b border-border bg-accent/30">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <CardTitle className="text-xl">{remedy.remedy}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">For: {remedy.pest}</p>
                  </div>
                  <Badge variant={getSeverityColor(remedy.severity)}>
                    {remedy.severity}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                {/* Effectiveness & Cost */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Effectiveness</p>
                    <p className="font-medium">{remedy.effectiveness}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Cost</p>
                    <p className="font-medium">{remedy.cost}</p>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <h4 className="text-sm mb-2 text-muted-foreground">Ingredients:</h4>
                  <ul className="space-y-1">
                    {remedy.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Steps */}
                <div>
                  <h4 className="text-sm mb-2 text-muted-foreground">Application Steps:</h4>
                  <ol className="space-y-2">
                    {remedy.steps.map((step, index) => (
                      <li key={index} className="flex gap-3 text-sm">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
                          {index + 1}
                        </span>
                        <span className="flex-1 pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Application Time */}
                <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                  <Sun className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Best application time</p>
                    <p className="text-sm font-medium">{remedy.applicationTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Tips */}
      <Card>
        <CardHeader>
          <CardTitle>General Tips for Organic Pest Control</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="mb-1">Regular Monitoring</h4>
                <p className="text-sm text-muted-foreground">
                  Check your crops daily. Early detection makes treatment easier and more effective.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="mb-1">Timing is Key</h4>
                <p className="text-sm text-muted-foreground">
                  Apply sprays during cooler hours to prevent leaf burn and improve effectiveness.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="mb-1">Crop Rotation</h4>
                <p className="text-sm text-muted-foreground">
                  Rotate crops each season to break pest life cycles naturally.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="mb-1">Healthy Soil</h4>
                <p className="text-sm text-muted-foreground">
                  Strong, healthy plants grown in good soil resist pests better.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
