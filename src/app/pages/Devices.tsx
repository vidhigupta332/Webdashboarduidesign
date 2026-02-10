import { Radio, Battery, Wifi, Camera, Mic, MapPin, Clock, Sun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";

const devices = [
  {
    id: "DG-001",
    name: "Sensor Node A1",
    field: "Field A-3",
    location: "North Section",
    status: "online",
    battery: 87,
    lastSeen: "2 minutes ago",
    camera: true,
    microphone: true,
    detections: 15,
    uptime: 98,
  },
  {
    id: "DG-002",
    name: "Sensor Node A2",
    field: "Field A-1",
    location: "West Section",
    status: "online",
    battery: 92,
    lastSeen: "1 minute ago",
    camera: true,
    microphone: true,
    detections: 2,
    uptime: 99,
  },
  {
    id: "DG-003",
    name: "Sensor Node B1",
    field: "Field B-1",
    location: "East Section",
    status: "online",
    battery: 76,
    lastSeen: "5 minutes ago",
    camera: true,
    microphone: true,
    detections: 8,
    uptime: 97,
  },
  {
    id: "DG-004",
    name: "Sensor Node B2",
    field: "Field B-3",
    location: "East Section",
    status: "offline",
    battery: 12,
    lastSeen: "2 hours ago",
    camera: true,
    microphone: true,
    detections: 0,
    uptime: 45,
  },
  {
    id: "DG-005",
    name: "Sensor Node C1",
    field: "Field C-2",
    location: "South Section",
    status: "online",
    battery: 68,
    lastSeen: "3 minutes ago",
    camera: true,
    microphone: true,
    detections: 6,
    uptime: 94,
  },
  {
    id: "DG-006",
    name: "Sensor Node C2",
    field: "Field C-4",
    location: "South Section",
    status: "online",
    battery: 81,
    lastSeen: "4 minutes ago",
    camera: true,
    microphone: false,
    detections: 3,
    uptime: 96,
  },
  {
    id: "DG-007",
    name: "Sensor Node D1",
    field: "Field D-4",
    location: "Central Section",
    status: "online",
    battery: 95,
    lastSeen: "1 minute ago",
    camera: true,
    microphone: true,
    detections: 12,
    uptime: 99,
  },
  {
    id: "DG-008",
    name: "Sensor Node D2",
    field: "Field D-2",
    location: "Central Section",
    status: "online",
    battery: 73,
    lastSeen: "6 minutes ago",
    camera: true,
    microphone: true,
    detections: 4,
    uptime: 93,
  },
  {
    id: "DG-009",
    name: "Sensor Node E1",
    field: "Field E-2",
    location: "North Section",
    status: "online",
    battery: 89,
    lastSeen: "2 minutes ago",
    camera: true,
    microphone: true,
    detections: 5,
    uptime: 98,
  },
  {
    id: "DG-010",
    name: "Sensor Node E2",
    field: "Field E-4",
    location: "North Section",
    status: "warning",
    battery: 28,
    lastSeen: "45 minutes ago",
    camera: true,
    microphone: true,
    detections: 1,
    uptime: 82,
  },
];

function getBatteryColor(battery: number) {
  if (battery >= 70) return "text-primary";
  if (battery >= 30) return "text-[#f59e0b]";
  return "text-[#dc2626]";
}

function getStatusColor(status: string) {
  switch (status) {
    case "online":
      return "default";
    case "warning":
      return "secondary";
    default:
      return "destructive";
  }
}

function getStatusDotColor(status: string) {
  switch (status) {
    case "online":
      return "bg-primary";
    case "warning":
      return "bg-[#f59e0b]";
    default:
      return "bg-[#dc2626]";
  }
}

export function Devices() {
  const onlineDevices = devices.filter((d) => d.status === "online").length;
  const offlineDevices = devices.filter((d) => d.status === "offline").length;
  const warningDevices = devices.filter((d) => d.status === "warning").length;
  const averageBattery = Math.round(
    devices.reduce((acc, d) => acc + d.battery, 0) / devices.length
  );

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl mb-1">Edge Devices</h1>
        <p className="text-muted-foreground">Monitor and manage your ESP32-CAM sensor network</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Online Devices</p>
                <p className="text-3xl">{onlineDevices}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wifi className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Warning Status</p>
                <p className="text-3xl">{warningDevices}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center">
                <Radio className="w-6 h-6 text-[#f59e0b]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Offline Devices</p>
                <p className="text-3xl">{offlineDevices}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#dc2626]/10 flex items-center justify-center">
                <Radio className="w-6 h-6 text-[#dc2626]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg Battery</p>
                <p className="text-3xl">{averageBattery}%</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Battery className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Devices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {devices.map((device) => (
          <Card key={device.id} className="overflow-hidden">
            <CardHeader className="bg-accent/30 border-b border-border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-2 h-2 rounded-full ${getStatusDotColor(device.status)} animate-pulse`} />
                    <CardTitle className="text-lg">{device.name}</CardTitle>
                  </div>
                  <p className="text-xs text-muted-foreground">{device.id}</p>
                </div>
                <Badge variant={getStatusColor(device.status)} className="text-xs">
                  {device.status}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-4">
              {/* Location */}
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{device.field} - {device.location}</span>
              </div>

              {/* Last Seen */}
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>Last seen: {device.lastSeen}</span>
              </div>

              {/* Battery */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Battery className={`w-4 h-4 ${getBatteryColor(device.battery)}`} />
                    <span className="text-sm">Battery</span>
                  </div>
                  <span className={`text-sm font-medium ${getBatteryColor(device.battery)}`}>
                    {device.battery}%
                  </span>
                </div>
                <Progress value={device.battery} className="h-2" />
              </div>

              {/* Uptime */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Uptime</span>
                  </div>
                  <span className="text-sm font-medium">{device.uptime}%</span>
                </div>
                <Progress value={device.uptime} className="h-2" />
              </div>

              {/* Sensors */}
              <div className="flex items-center gap-4 pt-2 border-t border-border">
                <div className="flex items-center gap-2">
                  <Camera className={`w-4 h-4 ${device.camera ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-xs text-muted-foreground">Camera</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mic className={`w-4 h-4 ${device.microphone ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-xs text-muted-foreground">Microphone</span>
                </div>
              </div>

              {/* Detections */}
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground mb-1">Total Detections Today</p>
                <p className="text-2xl">{device.detections}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Info */}
      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm text-muted-foreground mb-2">Device Type</h4>
              <p className="mb-1">ESP32-CAM + Microphone</p>
              <p className="text-sm text-muted-foreground">Edge AI Processing</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-2">Power Source</h4>
              <p className="mb-1">Solar Powered</p>
              <p className="text-sm text-muted-foreground">With backup battery</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-2">Network</h4>
              <p className="mb-1">LoRa Mesh Network</p>
              <p className="text-sm text-muted-foreground">Low-power long-range</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
