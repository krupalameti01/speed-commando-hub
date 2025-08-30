import { RaceCard } from "@/components/race-card"
import { RacingButton } from "@/components/ui/racing-button"

const upcomingRaces = [
  {
    title: "Night Thunder Circuit",
    date: "Dec 15, 2024",
    location: "Silverstone Circuit, UK",
    category: "Formula Racing",
    participants: 24,
    status: "upcoming" as const,
    prize: "$25,000"
  },
  {
    title: "Desert Storm Rally",
    date: "Dec 12, 2024",
    location: "Mojave Desert, USA",
    category: "Rally Racing",
    participants: 18,
    status: "live" as const,
    prize: "$15,000"
  },
  {
    title: "Street Kings Drift",
    date: "Dec 20, 2024",
    location: "Tokyo Bay, Japan",
    category: "Drift Competition",
    participants: 32,
    status: "upcoming" as const,
    prize: "$10,000"
  },
  {
    title: "Speed Demons GP",
    date: "Dec 8, 2024",
    location: "Nürburgring, Germany",
    category: "Grand Prix",
    participants: 20,
    status: "completed" as const,
    prize: "$35,000"
  },
  {
    title: "Midnight Rush",
    date: "Dec 25, 2024",
    location: "Monaco Street Circuit",
    category: "Street Racing",
    participants: 16,
    status: "upcoming" as const,
    prize: "$20,000"
  },
  {
    title: "Turbo Challenge",
    date: "Dec 30, 2024",
    location: "Spa-Francorchamps, Belgium",
    category: "Endurance",
    participants: 28,
    status: "upcoming" as const,
    prize: "$40,000"
  }
]

export function RacesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Racing</span>{" "}
            <span className="gradient-primary bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the most exciting motorsport events around the world. 
            From street racing to professional circuits.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <RacingButton variant="neon" size="sm">All Races</RacingButton>
          <RacingButton variant="outline" size="sm">Upcoming</RacingButton>
          <RacingButton variant="outline" size="sm">Live Now</RacingButton>
          <RacingButton variant="outline" size="sm">Completed</RacingButton>
        </div>

        {/* Race Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingRaces.map((race, index) => (
            <RaceCard
              key={index}
              {...race}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <RacingButton variant="hero" size="lg">
            View All Racing Events
          </RacingButton>
        </div>
      </div>
    </section>
  )
}