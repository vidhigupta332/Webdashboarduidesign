import { MapPin, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const pestHotspots = [
  {
    id: 1,
    field: "Field A-3",
    zone: "North Zone",
    severity: "critical",
    pestCount: 15,
    mainPest: "Fall Armyworm",
    coords: { x: 25, y: 30 },
  },
  {
    id: 2,
    field: "Field D-4",
    zone: "Central Zone",
    severity: "critical",
    pestCount: 12,
    mainPest: "Whitefly",
    coords: { x: 50, y: 50 },
  },
  {
    id: 3,
    field: "Field B-1",
    zone: "East Zone",
    severity: "warning",
    pestCount: 8,
    mainPest: "Aphids",
    coords: { x: 70, y: 35 },
  },
  {
    id: 4,
    field: "Field C-2",
    zone: "South Zone",
    severity: "warning",
    pestCount: 6,
    mainPest: "Leafhopper",
    coords: { x: 45, y: 70 },
  },
  {
    id: 5,
    field: "Field E-2",
    zone: "North Zone",
    severity: "warning",
    pestCount: 5,
    mainPest: "Cutworm",
    coords: { x: 30, y: 25 },
  },
  {
    id: 6,
    field: "Field A-1",
    zone: "West Zone",
    severity: "safe",
    pestCount: 2,
    mainPest: "Stem Borer",
    coords: { x: 20, y: 55 },
  },
];

function getHotspotColor(severity: string) {
  switch (severity) {
    case "critical":
      return "#dc2626";
    case "warning":
      return "#f59e0b";
    default:
      return "#4a7c3a";
  }
}

function getHotspotSize(severity: string) {
  switch (severity) {
    case "critical":
      return 60;
    case "warning":
      return 45;
    default:
      return 30;
  }
}

export function MapView() {
  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-1">Pest Activity Map</h1>
        <p className="text-muted-foreground">Geospatial view of pest hotspots across your farm</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Visualization */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Farm Heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-[500px] bg-gradient-to-br from-[#e8f5e9] to-[#f1f8e9] rounded-lg border-2 border-border overflow-hidden">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4a7c3a" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Farm boundary illustration */}
              <div className="absolute inset-8 border-2 border-dashed border-primary/30 rounded-lg" />

              {/* Zone labels */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                North Zone
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                South Zone
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground -rotate-90">
                West Zone
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground rotate-90">
                East Zone
              </div>

              {/* Hotspot markers */}
              {pestHotspots.map((hotspot) => {
                const size = getHotspotSize(hotspot.severity);
                const color = getHotspotColor(hotspot.severity);
                
                return (
                  <div
                    key={hotspot.id}
                    className="absolute group cursor-pointer"
                    style={{
                      left: `${hotspot.coords.x}%`,
                      top: `${hotspot.coords.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Pulsing ring effect */}
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        backgroundColor: color,
                      }}
                    />
                    
                    {/* Main hotspot */}
                    <div
                      className="relative rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        backgroundColor: color,
                        opacity: 0.7,
                      }}
                    >
                      <MapPin className="w-1/2 h-1/2 text-white" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      <div className="bg-card border border-border rounded-lg p-3 shadow-lg whitespace-nowrap">
                        <p className="font-medium text-sm">{hotspot.field}</p>
                        <p className="text-xs text-muted-foreground">{hotspot.mainPest}</p>
                        <p className="text-xs text-muted-foreground">{hotspot.pestCount} detections</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <h4 className="font-medium">Severity Level:</h4>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#dc2626]" />
                <span className="text-sm">Critical</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#f59e0b]" />
                <span className="text-sm">Warning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary" />
                <span className="text-sm">Safe</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hotspots List */}
        <Card>
          <CardHeader>
            <CardTitle>Hotspot Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pestHotspots
                .sort((a, b) => b.pestCount - a.pestCount)
                .map((hotspot) => (
                  <div
                    key={hotspot.id}
                    className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{hotspot.field}</h4>
                        <p className="text-xs text-muted-foreground">{hotspot.zone}</p>
                      </div>
                      <Badge
                        variant={
                          hotspot.severity === "critical"
                            ? "destructive"
                            : hotspot.severity === "warning"
                            ? "secondary"
                            : "default"
                        }
                        className="text-xs"
                      >
                        {hotspot.severity}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-2">
                      <AlertCircle className="w-4 h-4 text-muted-foreground" />
                      <span>{hotspot.mainPest}</span>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {hotspot.pestCount} detections
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Zone Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <h4 className="text-sm text-muted-foreground mb-2">North Zone</h4>
            <p className="text-2xl mb-1">2 hotspots</p>
            <Badge variant="destructive" className="text-xs">High Activity</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h4 className="text-sm text-muted-foreground mb-2">East Zone</h4>
            <p className="text-2xl mb-1">1 hotspot</p>
            <Badge variant="secondary" className="text-xs">Moderate</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h4 className="text-sm text-muted-foreground mb-2">South Zone</h4>
            <p className="text-2xl mb-1">1 hotspot</p>
            <Badge variant="secondary" className="text-xs">Moderate</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h4 className="text-sm text-muted-foreground mb-2">West Zone</h4>
            <p className="text-2xl mb-1">1 hotspot</p>
            <Badge variant="default" className="text-xs">Low Activity</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
