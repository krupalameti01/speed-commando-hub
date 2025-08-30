const stats = [
  {
    value: "2,456",
    label: "Active Racers",
    color: "text-neon-green"
  },
  {
    value: "148",
    label: "Racing Events",
    color: "text-primary"
  },
  {
    value: "$2.1M",
    label: "Prize Money",
    color: "text-racing-gold"
  },
  {
    value: "89",
    label: "Racing Tracks",
    color: "text-speed-blue"
  }
]

export function StatsSection() {
  return (
    <section className="py-16 gradient-metallic border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-speed`}>
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}