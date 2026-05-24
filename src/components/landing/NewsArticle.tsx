import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface NewsArticleProps {
  title: string;
  summary: string;
  source: string;
  category: string;
  date: string;
  url: string;
  index: number;
}

export function NewsArticle({
  title,
  summary,
  source,
  category,
  date,
  url,
  index,
}: NewsArticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="group block">
        <Card className="glass-strong border-white/[0.06] transition-all duration-300 hover:border-white/[0.15] hover:shadow-elevated">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/20 text-[11px] text-primary-glow"
                  >
                    {category}
                  </Badge>
                  <span className="text-[11px] text-white/40">{date}</span>
                </div>
                <h3 className="font-display text-[15px] font-semibold leading-snug text-white transition-colors group-hover:text-primary-glow">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{summary}</p>
                <div className="flex items-center gap-1.5 pt-1 text-xs text-white/40">
                  <span>{source}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 text-primary-glow transition-transform group-hover:translate-x-0.5">
                    Read more →
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}
