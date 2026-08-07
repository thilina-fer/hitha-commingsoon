import { Badge } from "@/components/ui/badge";
import { ShieldCheck, UserCheck, Heart } from "lucide-react";

export function TrustBadgesRow() {
  const badges = [
    { text: "100% Confidential", icon: ShieldCheck },
    { text: "Verified Professionals", icon: UserCheck },
    { text: "For Everyone", icon: Heart },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8">
      {badges.map((badge, idx) => (
        <Badge
          key={idx}
          variant="secondary"
          className="bg-white/50 hover:bg-white/60 text-[var(--navy)]/70 backdrop-blur-sm border-none shadow-sm px-3 py-1.5 rounded-full flex gap-1.5 items-center font-medium"
        >
          <badge.icon className="w-4 h-4 text-[var(--teal)]/80" />
          {badge.text}
        </Badge>
      ))}
    </div>
  );
}
