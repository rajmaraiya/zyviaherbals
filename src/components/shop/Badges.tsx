import { Badge } from "@/components/ui/badge"
import { Shield, Leaf, Award, Heart, FlaskConical } from "lucide-react"

interface BadgesProps {
  badges?: string[]
  className?: string
}

const badgeConfig = {
  organic: {
    label: "USDA Organic",
    icon: Leaf,
    className: "bg-green-100 text-green-800 hover:bg-green-200"
  },
  "lab-tested": {
    label: "Lab Tested",
    icon: FlaskConical,
    className: "bg-blue-100 text-blue-800 hover:bg-blue-200"
  },
  vegan: {
    label: "Vegan",
    icon: Heart,
    className: "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
  },
  gmp: {
    label: "GMP Certified",
    icon: Award,
    className: "bg-purple-100 text-purple-800 hover:bg-purple-200"
  },
  "no-sugar": {
    label: "No Added Sugar",
    icon: Shield,
    className: "bg-red-100 text-red-800 hover:bg-red-200"
  }
}

export function Badges({ badges = [], className }: BadgesProps) {
  if (!badges.length) return null

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {badges.map((badge) => {
        const config = badgeConfig[badge as keyof typeof badgeConfig]
        if (!config) return null

        const Icon = config.icon

        return (
          <Badge
            key={badge}
            variant="secondary"
            className={`flex items-center gap-1.5 ${config.className}`}
          >
            <Icon className="h-3 w-3" />
            {config.label}
          </Badge>
        )
      })}
    </div>
  )
}
