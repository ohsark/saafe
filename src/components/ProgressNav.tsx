import { Link } from 'react-router-dom';

export const steps = [
  // { label: 'Upload Data',              path: '/upload'  },
  { label: 'Organisation',              path: '/organisation'  },
  { label: 'Sample type',               path: '/sample-type'   },
  { label: 'Antimicrobial presence',    path: '/antimicrobial' },
  { label: 'Microorganisms',            path: '/microorganism' },
  { label: 'AST',                       path: '/ast'           },
  { label: 'Residues',                  path: '/residues'           },
  { label: 'ARGs',                      path: '/args'          }
] as const;

type Props = { activeIndex: number };

export default function ProgressNav({ activeIndex }: Props) {
  return (
    <nav className="w-50 shrink-0 pt-5 pl-8 sticky top-4 self-start">
      <ul>
        {steps.map((step, idx) => {
          const reached = idx <= activeIndex;
          return (
            <li key={step.path} className="relative pl-6 mt-1">
              {/* circle */}
              <span
                className={`absolute left-0 top-2 w-3 h-3 rounded-full border-[3px] ${
                  reached ? 'bg-saafe border-saafe' : 'bg-white border-gray-300'
                }`}
              />
              {/* connector to the next node */}
              {idx < steps.length - 1 && (
                <span
                  className={`absolute left-1 top-5 w-1 h-full ${
                    idx < activeIndex ? 'bg-saafe' : 'bg-gray-300'
                  }`}
                />
              )}
              {/* label */}
              <Link
                to={step.path}
                className={`text-sm font-medium ${
                  reached ? 'text-saafe' : 'text-gray-400'
                } hover:text-saafe transition-colors`}
              >
                {step.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
