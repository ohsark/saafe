import { useState } from 'react';
import FormWrapper from '../components/FormWrapper';
import { useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';

export default function AntimicrobialPresenceData() {
  const navigate = useNavigate()
  const [hasMethod, setHasMethod] = useState<'yes' | 'no' | null>(null);
  const [hasConcentration, setHasConcentration] = useState<'yes' | 'no' | null>(null);
  const [metabolites, setMetabolites] = useState<'yes' | 'no' | 'not_sure' | null>(null);

  return (
    <FormWrapper title="Antimicrobial use">
      <div className="space-y-6 max-w-2xl">

        {/* Antimicrobial column */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <label className="font-medium">
              Which column contains antimicrobials information?
            </label>

            <div className="relative w-fit">
              <div className="group w-fit cursor-pointer">
                <Info className="text-sm w-[18px] text-[#aaa]" />

                <div className="absolute top-full left-1/2 -translate-x-1/2 mb-2 w-64 text-sm p-2 bg-black text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                  Antimicrobials may include treatments for water, antifungals or pesticides in horticulture, antibiotics in livestock, and other chemical or physical water treatments.
                </div>
              </div>
            </div>
          </div>
          <input className="input w-full" placeholder="Column name" />
        </div>

        {/* Detection method toggle */}
        {/* <div>
          <label className="block font-medium mb-2">
            Is the detection method recorded?
          </label>
          <div className="flex gap-4">
            <ToggleButtonGroup value={hasMethod} onChange={setHasMethod} />
          </div>
        </div> */}

        {/* Method column if yes */}
        {/* {hasMethod === 'yes' && (
          <div>
            <label className="block font-medium mb-1">
              Which column stores the detection method?
            </label>
            <input className="input w-full" placeholder="Column name" />
          </div>
        )} */}

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

        <div className='flex justify-between mt-5'>
          <button className="btn bg-gray-100 hover:bg-gray-200 text-black " onClick={() => navigate('/sample-type')}>Back</button>
          <button className="btn" onClick={() => navigate('/microorganism')}>Next</button>
        </div>
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
