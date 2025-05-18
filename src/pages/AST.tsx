import { useState } from 'react';
import FormWrapper from '../components/FormWrapper';
import { useNavigate } from 'react-router-dom'

export default function ASTPage() {
  const navigate = useNavigate()
  const [guideline, setGuideline] = useState('');
  const [version, setVersion] = useState('');
  const [method, setMethod] = useState('');

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
            <label className="block font-medium mb-1">
              What guideline was followed for AST? (e.g. CLSI, EUCAST)
            </label>
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
            <label className="block font-medium mb-1">
              Which AST method was used? (e.g. Disc diffusion, MIC)
            </label>
            <input
              className="input w-full"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              placeholder=""
            />
          </div>
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
        <button className="btn mt-5 mb-1" onClick={() => navigate('/args')}>Next</button>
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
