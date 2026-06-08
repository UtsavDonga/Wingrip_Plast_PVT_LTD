import { Quote } from 'lucide-react'
import type { ArticleBlock } from '@/types'

/** Renders an article's structured content blocks as semantic, styled HTML. */
export default function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={i} className="mt-4 text-2xl font-black text-neutral-dark md:text-3xl">
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="mt-2 text-xl font-bold text-neutral-dark">
                {block.text}
              </h3>
            )
          case 'p':
            return (
              <p key={i} className="text-base leading-relaxed text-gray-700">
                {block.text}
              </p>
            )
          case 'ul':
            return (
              <ul key={i} className="flex flex-col gap-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-base leading-relaxed text-gray-700">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i} className="flex flex-col gap-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-base leading-relaxed text-gray-700">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {j + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            )
          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-4 border-primary bg-primary/5 px-6 py-4 text-lg font-medium italic text-neutral-dark"
              >
                {block.text}
              </blockquote>
            )
          case 'callout':
            return (
              <div
                key={i}
                className="flex gap-4 rounded-2xl border border-accent/20 bg-accent/5 p-5"
              >
                <Quote size={22} className="mt-0.5 flex-shrink-0 text-accent" aria-hidden="true" />
                <p className="text-base font-medium leading-relaxed text-neutral-dark">{block.text}</p>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
