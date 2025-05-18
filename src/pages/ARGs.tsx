import { useState } from 'react';
import FormWrapper from '../components/FormWrapper';

export default function ARGsPage() {
  const [hasARGs, setHasARGs] = useState<'yes' | 'no' | null>(null);
  const [hasMethod, setHasMethod] = useState<'yes' | 'no' | null>(null);
  const [hasResistance, setHasResistance] = useState<'yes' | 'no' | null>(null);

  const [argCol, setArgCol] = useState('');
  const [methodCol, setMethodCol] = useState('');
  const [resistanceCol, setResistanceCol] = useState('');

  return (
    <FormWrapper title="ARGs (Antimicrobial Resistance Genes)">
      <div className="space-y-8 max-w-2xl">

        {/* ARG info */}
        <div>
          <label className="block font-medium mb-2">
            Does this dataset contain ARG (antimicrobial resistance gene) information?
          </label>
          <YesNoButtons value={hasARGs} onChange={setHasARGs} />
          {hasARGs === 'yes' && (
            <div>
              <label className="block font-medium mb-1">
                Which column contains the ARGs? e.g. arg_gene_col
              </label>
              <input
                className="input mt-2 w-full"
                value={argCol}
                onChange={(e) => setArgCol(e.target.value)}
                placeholder="Which column contains the ARGs? e.g. arg_gene_col"
              />
            </div>
          )}
        </div>

        {/* Detection method - only show if hasARGs === 'yes' */}
        {hasARGs === 'yes' && (
          <div>
            <label className="block font-medium mb-2">
              Is there a column showing the detection method used (e.g. PCR, sequencing)?
            </label>
            <YesNoButtons value={hasMethod} onChange={setHasMethod} />
            {hasMethod === 'yes' && (
              <input
                className="input mt-2 w-full"
                value={methodCol}
                onChange={(e) => setMethodCol(e.target.value)}
                placeholder="Which column contains the method? e.g. detection_method_col"
              />
            )}
          </div>
        )}

        {/* Resistance class - only show if hasARGs === 'yes' */}
        {hasARGs === 'yes' && (
          <div>
            <label className="block font-medium mb-2">
              Is there a column indicating the antimicrobial class or resistance type?
            </label>
            <YesNoButtons value={hasResistance} onChange={setHasResistance} />
            {hasResistance === 'yes' && (
              <input
                className="input mt-2 w-full"
                value={resistanceCol}
                onChange={(e) => setResistanceCol(e.target.value)}
                placeholder="Which column shows the class/type? e.g. class_col"
              />
            )}
          </div>
        )}
      </div>
      <button className="btn mt-5 mb-1">Submit</button>
    </FormWrapper>
  );
}

// ✅ Shared Yes/No Button UI
function YesNoButtons({
  value,
  onChange,
}: {
  value: 'yes' | 'no' | null;
  onChange: (val: 'yes' | 'no') => void;
}) {
  return (
    <div className="flex gap-4 mt-1">
      <button
        type="button"
        onClick={() => onChange('yes')}
        className={`px-4 py-2 border rounded ${value === 'yes' ? 'bg-saafe text-white' : 'bg-white text-gray-800'}`}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => onChange('no')}
        className={`px-4 py-2 border rounded ${value === 'no' ? 'bg-saafe text-white' : 'bg-white text-gray-800'}`}
      >
        No
      </button>
    </div>
  );
}

