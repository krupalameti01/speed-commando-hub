import { RacingButton } from "@/components/ui/racing-button"
import { CountdownTimer } from "@/components/countdown-timer"
import racingHero from "@/assets/racing-hero.jpg"

export function HeroSection() {
  // Set next race date to 30 days from now
  const nextRaceDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={racingHero} 
          alt="High-speed racing car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Speed Lines Animation */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-speed-line opacity-30" />
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green to-transparent animate-speed-line opacity-20" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-speed-blue to-transparent animate-speed-line opacity-25" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">SPEED</span>
                <br />
                <span className="gradient-primary bg-clip-text text-transparent">COMMANDO</span>
                <br />
                <span className="text-neon-green">HUB</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Experience the ultimate racing platform. Register for events, track live races, 
                and join the most thrilling motorsport community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <RacingButton variant="hero" size="lg" className="text-lg px-8 py-4">
                Register for Races
              </RacingButton>
              <RacingButton variant="outline" size="lg" className="text-lg px-8 py-4">
                Watch Live
              </RacingButton>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span>12 Live Races</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>2,456 Active Racers</span>
              </div>
            </div>
          </div>

          {/* Right Column - Countdown */}
          <div className="lg:text-center">
            <div className="gradient-metallic border border-border rounded-2xl p-8 shadow-speed">
              <CountdownTimer 
                targetDate={nextRaceDate}
                title="Championship Grand Prix"
              />
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Prize Pool</p>
                <p className="text-2xl font-bold text-racing-gold">$50,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}