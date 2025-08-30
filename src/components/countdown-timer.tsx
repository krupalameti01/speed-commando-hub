import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
  title?: string
}

export function CountdownTimer({ targetDate, title = "Next Race" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-muted-foreground mb-4">{title}</h3>
      <div className="flex justify-center gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="gradient-metallic border border-border rounded-lg p-4 min-w-[70px] shadow-racing">
              <div className="text-2xl font-bold text-neon-green">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs uppercase text-muted-foreground mt-1">
                {unit}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}