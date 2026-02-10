import { Camera, Volume2, MapPin, Calendar, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const allAlerts = [
  {
    id: 1,
    pest: "Fall Armyworm",
    method: "camera",
    field: "Field A-3",
    location: "North Section",
    severity: "critical",
    timestamp: "2024-02-10 08:30 AM",
    description: "High infestation detected on maize leaves",
    confidence: 95,
  },
  {
    id: 2,
    pest: "Aphids",
    method: "sound",
    field: "Field B-1",
    location: "East Section",
    severity: "warning",
    timestamp: "2024-02-10 06:15 AM",
    description: "Unusual insect activity sounds detected",
    confidence: 82,
  },
  {
    id: 3,
    pest: "Leafhopper",
    method: "camera",
    field: "Field C-2",
    location: "South Section",
    severity: "warning",
    timestamp: "2024-02-10 04:20 AM",
    description: "Multiple leafhoppers spotted on rice plants",
    confidence: 88,
  },
  {
    id: 4,
    pest: "Stem Borer",
    method: "sound",
    field: "Field A-1",
    location: "West Section",
    severity: "safe",
    timestamp: "2024-02-10 02:45 AM",
    description: "Low-level pest activity detected",
    confidence: 71,
  },
  {
    id: 5,
    pest: "Whitefly",
    method: "camera",
    field: "Field D-4",
    location: "Central Section",
    severity: "critical",
    timestamp: "2024-02-09 10:30 PM",
    description: "Large swarm detected near tomato crops",
    confidence: 92,
  },
  {
    id: 6,
    pest: "Cutworm",
    method: "camera",
    field: "Field E-2",
    location: "North Section",
    severity: "warning",
    timestamp: "2024-02-09 08:15 PM",
    description: "Caterpillar damage on young seedlings",
    confidence: 79,
  },
  {
    id: 7,
    pest: "Mealybug",
    method: "sound",
    field: "Field B-3",
    location: "East Section",
    severity: "safe",
    timestamp: "2024-02-09 06:00 PM",
    description: "Minor pest sounds detected",
    confidence: 68,
  },
];

function getSeverityBadgeVariant(severity: string): "default" | "destructive" | "secondary" {
  switch (severity) {
    case "critical":
      return "destructive";
    case "warning":
      return "secondary";
    default:
      return "default";
  }
}

function getSeverityColor(severity: string) {
  switch (severity) {
    case "critical":
      return "bg-[#dc2626]";
    case "warning":
      return "bg-[#f59e0b]";
    default:
      return "bg-primary";
  }
}

export function Alerts() {
  const criticalAlerts = allAlerts.filter((a) => a.severity === "critical");
  const warningAlerts = allAlerts.filter((a) => a.severity === "warning");

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-1">Pest Alerts</h1>
        <p className="text-muted-foreground">Monitor and manage pest detection alerts</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-l-4 border-l-[#dc2626]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Critical Alerts</p>
                <p className="text-3xl mt-1">{criticalAlerts.length}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-[#dc2626]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#f59e0b]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Warning Alerts</p>
                <p className="text-3xl mt-1">{warningAlerts.length}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-[#f59e0b]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Today</p>
                <p className="text-3xl mt-1">{allAlerts.length}</p>
              </div>
              <Calendar className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="all">All Alerts</TabsTrigger>
          <TabsTrigger value="critical">Critical</TabsTrigger>
          <TabsTrigger value="warning">Warning</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {allAlerts.map((alert) => (
            <Card key={alert.id} className="overflow-hidden">
              <div className="flex">
                <div className={`w-2 ${getSeverityColor(alert.severity)}`} />
                <CardContent className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-lg ${getSeverityColor(alert.severity)} bg-opacity-10 flex items-center justify-center`}>
                          {alert.method === "camera" ? (
                            <Camera className={`w-6 h-6 ${getSeverityColor(alert.severity).replace('bg-', 'text-')}`} />
                          ) : (
                            <Volume2 className={`w-6 h-6 ${getSeverityColor(alert.severity).replace('bg-', 'text-')}`} />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl mb-1">{alert.pest}</h3>
                          <p className="text-sm text-muted-foreground">{alert.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{alert.field} - {alert.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>{alert.timestamp}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col gap-2 items-start">
                      <Badge variant={getSeverityBadgeVariant(alert.severity)} className="text-xs">
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {alert.confidence}% confidence
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {alert.method === "camera" ? "Camera" : "Sound"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="critical" className="space-y-4 mt-6">
          {criticalAlerts.map((alert) => (
            <Card key={alert.id} className="overflow-hidden">
              <div className="flex">
                <div className={`w-2 ${getSeverityColor(alert.severity)}`} />
                <CardContent className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-lg ${getSeverityColor(alert.severity)} bg-opacity-10 flex items-center justify-center`}>
                          {alert.method === "camera" ? (
                            <Camera className={`w-6 h-6 ${getSeverityColor(alert.severity).replace('bg-', 'text-')}`} />
                          ) : (
                            <Volume2 className={`w-6 h-6 ${getSeverityColor(alert.severity).replace('bg-', 'text-')}`} />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl mb-1">{alert.pest}</h3>
                          <p className="text-sm text-muted-foreground">{alert.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{alert.field} - {alert.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>{alert.timestamp}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col gap-2 items-start">
                      <Badge variant={getSeverityBadgeVariant(alert.severity)} className="text-xs">
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {alert.confidence}% confidence
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {alert.method === "camera" ? "Camera" : "Sound"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="warning" className="space-y-4 mt-6">
          {warningAlerts.map((alert) => (
            <Card key={alert.id} className="overflow-hidden">
              <div className="flex">
                <div className={`w-2 ${getSeverityColor(alert.severity)}`} />
                <CardContent className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-lg ${getSeverityColor(alert.severity)} bg-opacity-10 flex items-center justify-center`}>
                          {alert.method === "camera" ? (
                            <Camera className={`w-6 h-6 ${getSeverityColor(alert.severity).replace('bg-', 'text-')}`} />
                          ) : (
                            <Volume2 className={`w-6 h-6 ${getSeverityColor(alert.severity).replace('bg-', 'text-')}`} />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl mb-1">{alert.pest}</h3>
                          <p className="text-sm text-muted-foreground">{alert.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{alert.field} - {alert.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>{alert.timestamp}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col gap-2 items-start">
                      <Badge variant={getSeverityBadgeVariant(alert.severity)} className="text-xs">
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {alert.confidence}% confidence
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {alert.method === "camera" ? "Camera" : "Sound"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
