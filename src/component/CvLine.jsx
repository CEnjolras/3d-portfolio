import Tag from "./Tag";

export default function CvLine({ children, title, dates, tags }) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
        aria-label="2024 to Present"
      >
        {dates}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <a
              className="inline-flex items-baseline font-bold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
              href="https://www.klaviyo.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>{title}</span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{children}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {tags.map((tagName) => (
            <li key={tagName} className="mr-1.5 mt-2">
              <Tag>{tagName}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
