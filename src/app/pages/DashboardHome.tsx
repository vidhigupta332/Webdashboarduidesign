import { Sprout, AlertTriangle, Radio, Activity, Camera, Volume2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const statsCards = [
  {
    title: "Active Fields",
    value: "12",
    subtitle: "3 monitored today",
    icon: Sprout,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Pest Alerts Today",
    value: "7",
    subtitle: "3 critical",
    icon: AlertTriangle,
    bgColor: "bg-[#f59e0b]/10",
    iconColor: "text-[#f59e0b]",
  },
  {
    title: "Devices Online",
    value: "18/20",
    subtitle: "90% uptime",
    icon: Radio,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Crop Health",
    value: "Good",
    subtitle: "85% healthy",
    icon: Activity,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const recentAlerts = [
  {
    id: 1,
    pest: "Fall Armyworm",
    method: "Camera",
    time: "2 hours ago",
    severity: "critical",
    field: "Field A-3",
  },
  {
    id: 2,
    pest: "Aphids",
    method: "Sound",
    time: "4 hours ago",
    severity: "warning",
    field: "Field B-1",
  },
  {
    id: 3,
    pest: "Leafhopper",
    method: "Camera",
    time: "6 hours ago",
    severity: "warning",
    field: "Field C-2",
  },
  {
    id: 4,
    pest: "Stem Borer",
    method: "Sound",
    time: "8 hours ago",
    severity: "safe",
    field: "Field A-1",
  },
];

const cropHealthData = [
  { field: "Field A", health: 92 },
  { field: "Field B", health: 78 },
  { field: "Field C", health: 85 },
  { field: "Field D", health: 95 },
  { field: "Field E", health: 68 },
];

const statusData = [
  { name: "Safe", value: 8, color: "#4a7c3a" },
  { name: "Warning", value: 3, color: "#f59e0b" },
  { name: "Critical", value: 1, color: "#dc2626" },
];

function getSeverityColor(severity: string) {
  switch (severity) {
    case "critical":
      return "bg-[#dc2626] text-white";
    case "warning":
      return "bg-[#f59e0b] text-white";
    default:
      return "bg-primary text-primary-foreground";
  }
}

export function DashboardHome() {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-1">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your farm status.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-3xl mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Alerts Panel */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Pest Detections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getSeverityColor(alert.severity)}`}>
                    {alert.method === "Camera" ? (
                      <Camera className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{alert.pest}</p>
                    <p className="text-sm text-muted-foreground">{alert.field}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                      <Clock className="w-3 h-3" />
                      {alert.time}
                    </div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Status Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Field Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {statusData.map((status) => (
                <div key={status.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }} />
                    <span className="text-sm">{status.name}</span>
                  </div>
                  <span className="text-sm font-medium">{status.value} fields</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Crop Health Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Crop Health by Field</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cropHealthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="field" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="health" fill="#4a7c3a" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 space-y-3">
            {cropHealthData.map((field) => (
              <div key={field.field}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{field.field}</span>
                  <span className="text-sm font-medium">{field.health}%</span>
                </div>
                <Progress value={field.health} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
