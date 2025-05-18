import { useState } from 'react';
import FormWrapper from '../components/FormWrapper';
import { useNavigate } from 'react-router-dom'

export default function AntimicrobialPresenceData() {
  const navigate = useNavigate()
  const [hasMethod, setHasMethod] = useState<'yes' | 'no' | null>(null);
  const [hasConcentration, setHasConcentration] = useState<'yes' | 'no' | null>(null);
  const [metabolites, setMetabolites] = useState<'yes' | 'no' | 'not_sure' | null>(null);

  return (
    <FormWrapper title="Antimicrobial presence data">
      <div className="space-y-6 max-w-2xl">

        {/* Antimicrobial column */}
        <div>
          <label className="block font-medium mb-1">
            Which column lists the antimicrobials?
          </label>
          <input className="input w-full" placeholder="Column name" />
        </div>

        {/* Detection method toggle */}
        <div>
          <label className="block font-medium mb-2">
            Is the detection method recorded?
          </label>
          <div className="flex gap-4">
            <ToggleButtonGroup value={hasMethod} onChange={setHasMethod} />
          </div>
        </div>

        {/* Method column if yes */}
        {hasMethod === 'yes' && (
          <div>
            <label className="block font-medium mb-1">
              Which column stores the detection method?
            </label>
            <input className="input w-full" placeholder="Column name" />
          </div>
        )}

        {/* Concentration toggle */}
        <div>
          <label className="block font-medium mb-2">
            Is concentration data available?
          </label>
          <div className="flex gap-4">
            <ToggleButtonGroup value={hasConcentration} onChange={setHasConcentration} />
          </div>
        </div>

        {/* Concentration column if yes */}
        {hasConcentration === 'yes' && (
          <div>
            <label className="block font-medium mb-1">
              Which column has the concentration values?
            </label>
            <input className="input w-full" placeholder="Column name" />
          </div>
        )}

        {/* Metabolites question */}
        <div>
          <label className="block font-medium mb-1">
            Are metabolites or derivatives included?*
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setMetabolites('yes')}
              className={buttonClass(metabolites === 'yes')}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setMetabolites('no')}
              className={buttonClass(metabolites === 'no')}
            >
              No
            </button>
            <button
              type="button"
              onClick={() => setMetabolites('not_sure')}
              className={buttonClass(metabolites === 'not_sure')}
            >
              Not sure
            </button>
          </div>
        </div>
        <div className='text-gray-400 text-sm'>* This will help us to search additional lists of anticmirobials </div>
        <button className="btn mt-5 mb-1" onClick={() => navigate('/microorganism')}>Next</button>
      </div>
    </FormWrapper>
  );
}

// Reusable Toggle Button Group for Yes/No
function ToggleButtonGroup({
  value,
  onChange,
}: {
  value: 'yes' | 'no' | null;
  onChange: (val: 'yes' | 'no') => void;
}) {
  return (
    <>
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
    </>
  );
}

// Styling helper
function buttonClass(active: boolean) {
  return `px-4 py-2 border rounded ${
    active ? 'bg-saafe text-white' : 'bg-white text-gray-800'
  }`;
}
