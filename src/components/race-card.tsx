import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RacingButton } from "@/components/ui/racing-button"
import { Calendar, MapPin, Trophy, Users } from "lucide-react"

interface RaceCardProps {
  title: string
  date: string
  location: string
  category: string
  participants: number
  status: "upcoming" | "live" | "completed"
  prize?: string
}

export function RaceCard({
  title,
  date,
  location,
  category,
  participants,
  status,
  prize
}: RaceCardProps) {
  const statusColors = {
    upcoming: "bg-speed-blue text-white",
    live: "bg-neon-green text-black animate-pulse-neon",
    completed: "bg-racing-silver text-black"
  }

  return (
    <Card className="group gradient-metallic border-border hover:border-primary/50 transition-speed hover:shadow-racing animate-race-slide">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-speed">
              {title}
            </CardTitle>
            <Badge variant="secondary" className="mt-2 text-xs">
              {category}
            </Badge>
          </div>
          <Badge className={statusColors[status]}>
            {status.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{participants} Participants</span>
          </div>
          
          {prize && (
            <div className="flex items-center gap-2 text-sm text-racing-gold">
              <Trophy className="h-4 w-4" />
              <span className="font-semibold">{prize}</span>
            </div>
          )}
        </div>
        
        <div className="pt-4 border-t border-border">
          {status === "upcoming" && (
            <RacingButton variant="hero" size="sm" className="w-full">
              Register Now
            </RacingButton>
          )}
          
          {status === "live" && (
            <RacingButton variant="neon" size="sm" className="w-full">
              Watch Live
            </RacingButton>
          )}
          
          {status === "completed" && (
            <RacingButton variant="metallic" size="sm" className="w-full">
              View Results
            </RacingButton>
          )}
        </div>
      </CardContent>
    </Card>
  )
}