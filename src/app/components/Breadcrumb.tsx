import { Link } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: {
    label: string;
    path?: string;
  }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 md:mb-8 overflow-x-auto whitespace-nowrap hide-scrollbar">
      <ol className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-slate-500">
        <li>
          <Link to="/" className="hover:text-primary transition-colors flex items-center">
            <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-300" />
            {item.path ? (
              <Link to={item.path} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}