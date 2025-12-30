type AccordionItem = {
  title: string
  content: React.ReactNode
  defaultOpen?: boolean
}

type AccordionProps = {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="mx-auto max-w-lg">
      <div className="space-y-0 ">
        {items.map((item, index) => (
        <details
        key={index}
        className={`
            group bg-slate-800/30 backdrop-blur-md px-3 py-1
            ${index === 0 ? "rounded-t-lg" : ""}
            ${index === items.length - 1 ? "rounded-b-lg" : ""}
        `}
        >

        <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-lg font-medium text-secondary-900 hover:text-blue-500/85">
            {item.title}

            <div className="text-secondary-500">
            {/* Plus icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block h-5 w-5 group-open:hidden"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>

            {/* Minus icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="hidden h-5 w-5 group-open:block"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            </div>
        </summary>

            <div className="px-6 pb-4 text-secondary-500">
              {item.content}
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}
