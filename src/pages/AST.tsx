import { useState } from 'react';
import FormWrapper from '../components/FormWrapper';
import { useNavigate } from 'react-router-dom'
import { Info } from 'lucide-react';

export default function ASTPage() {
  const navigate = useNavigate()
  const [guideline, setGuideline] = useState('');
  const [version, setVersion] = useState('');
  const [method, setMethod] = useState('');
  const [hasMIC, setHasMIC] = useState<'yes' | 'no' | null>(null);

  const [columns, setColumns] = useState({
    total: '',
    susceptible: '',
    intermediate: '',
    resistant: '',
    noInterpretation: '',
    nonSusceptible: '',
    wildType: '',
    nonWildType: '',
  });

  const handleColumnChange = (field: string, value: string) => {
    setColumns({ ...columns, [field]: value });
  };

  return (
    <FormWrapper title="Antimicrobial Susceptibility Testing">
      <div className="space-y-8 max-w-2xl">

        {/* Section 1: AST Setup */}
        <section className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="font-medium">
                What guideline was followed for AST?
              </label>

              <div className="relative w-fit">
                <div className="group w-fit cursor-pointer">
                  <Info className="text-sm w-[18px] text-[#aaa]" />

                  <div className="absolute top-full left-1/2 -translate-x-1/2 mb-2 w-64 text-sm p-2 bg-black text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    (e.g. CLSI, EUCAST)
                  </div>
                </div>
              </div>
            </div>
            <input
              className="input w-full"
              value={guideline}
              onChange={(e) => setGuideline(e.target.value)}
              placeholder=""
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              What version of the guideline was used?
            </label>
            <input
              className="input w-full"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
              placeholder="xx.xx"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="font-medium">
                Which AST method was used? 
              </label>

              <div className="relative w-fit">
                <div className="group w-fit cursor-pointer">
                  <Info className="text-sm w-[18px] text-[#aaa]" />

                  <div className="absolute top-full left-1/2 -translate-x-1/2 mb-2 w-64 text-sm p-2 bg-black text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    (e.g. Disc diffusion, MIC)
                  </div>
                </div>
              </div>
            </div>
            <input
              className="input w-full"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              placeholder=""
            />
          </div>

          {/* MIC Info */}
          <div>
            <label className="block font-medium mb-2">Is MIC (minimum inhibitory concentration) info present?</label>
            <YesNoButtons value={hasMIC} onChange={setHasMIC} />
          </div>

          {hasMIC === 'yes' && (
            <div>
              <label className="block font-medium mb-1">
                Which column has MIC values?
              </label>
              <input className="input w-full" placeholder="Column name" />
            </div>
          )}
        </section>

        {/* Section 2: AST Result Columns */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">
            AST result columns
          </h2>

          <Field
            label="Total isolates"
            value={columns.total}
            onChange={(v) => handleColumnChange('total', v)}
          />
          <Field
            label="Susceptible isolates"
            value={columns.susceptible}
            onChange={(v) => handleColumnChange('susceptible', v)}
          />
          <Field
            label="Intermediate isolates"
            value={columns.intermediate}
            onChange={(v) => handleColumnChange('intermediate', v)}
          />
          <Field
            label="Resistant isolates"
            value={columns.resistant}
            onChange={(v) => handleColumnChange('resistant', v)}
          />
          <Field
            label="No interpretation isolates"
            value={columns.noInterpretation}
            onChange={(v) => handleColumnChange('noInterpretation', v)}
          />
          <Field
            label="Non-susceptible isolates"
            value={columns.nonSusceptible}
            onChange={(v) => handleColumnChange('nonSusceptible', v)}
          />
          <Field
            label="Wild-type isolates"
            value={columns.wildType}
            onChange={(v) => handleColumnChange('wildType', v)}
          />
          <Field
            label="Non-wild-type isolates"
            value={columns.nonWildType}
            onChange={(v) => handleColumnChange('nonWildType', v)}
          />
        </section>
        <div className='flex justify-between mt-5'>
          <button className="btn bg-gray-100 hover:bg-gray-200 text-black " onClick={() => navigate('/microorganism')}>Back</button>
          <button className="btn" onClick={() => navigate('/residues')}>Next</button>
        </div>
      </div>
    </FormWrapper>
  );
}

// ✅ Compact inline label + input layout
function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <label className="whitespace-nowrap font-medium w-64">{label}:</label>
      <input
        className="input w-48"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Column name"
      />
    </div>
  );
}

// Yes/No toggle component
function YesNoButtons({
  value,
  onChange,
}: {
  value: 'yes' | 'no' | null;
  onChange: (val: 'yes' | 'no') => void;
}) {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        onClick={() => onChange('yes')}
        className={buttonClass(value === 'yes')}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => onChange('no')}
        className={buttonClass(value === 'no')}
      >
        No
      </button>
    </div>
  );
}

// Shared button style
function buttonClass(active: boolean) {
  return `px-4 py-2 border rounded ${active ? 'bg-saafe text-white' : 'bg-white text-gray-800'}`;
}