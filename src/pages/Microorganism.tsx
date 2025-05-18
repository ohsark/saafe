import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import FormWrapper from '../components/FormWrapper';
import { useNavigate } from 'react-router-dom'

export default function MicroorganismPage() {
  const navigate = useNavigate()
  const [hasMicroorganism, setHasMicroorganism] = useState<'yes' | 'no' | null>(null);
  const [dataFormat, setDataFormat] = useState<'long' | 'wide' | null>(null);
  const [longColumn, setLongColumn] = useState('');

  const [organisms, setOrganisms] = useState<{ name: string; column: string }[]>([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');

  const [hasExtraInfo, setHasExtraInfo] = useState<'yes' | 'no' | null>(null);
  const [hasPhenotype, setHasPhenotype] = useState<'yes' | 'no' | null>(null);

  const addOrganism = () => {
    if (!name.trim() || !column.trim()) return;
    setOrganisms([...organisms, { name, column }]);
    setName('');
    setColumn('');
  };

  const removeOrganism = (index: number) => {
    setOrganisms(organisms.filter((_, i) => i !== index));
  };

  return (
    <FormWrapper title="Microorganism">
      <div className="space-y-6 max-w-2xl">

        {/* 1. Presence */}
        <div>
          <label className="block font-medium mb-2">Does the dataset contain microorganism information?</label>
          <YesNoButtons value={hasMicroorganism} onChange={setHasMicroorganism} />
        </div>

        {/* 2. Format selection */}
        {hasMicroorganism === 'yes' && (
          <div>
            <label className="block font-medium mb-2">What format is the data recorded in?</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setDataFormat('long')}
                className={buttonClass(dataFormat === 'long')}
              >
                Long
              </button>
              <button
                type="button"
                onClick={() => setDataFormat('wide')}
                className={buttonClass(dataFormat === 'wide')}
              >
                Wide
              </button>
            </div>
          </div>
        )}

        {/* 3. Long format column input */}
        {dataFormat === 'long' && (
          <div>
            <label className="block font-medium mb-1">Which column contains microorganism names?</label>
            <input
              className="input w-full"
              value={longColumn}
              onChange={(e) => setLongColumn(e.target.value)}
              placeholder="e.g. organism_name_col"
            />
          </div>
        )}

        {/* 4. Wide format organism + column entry */}
        {dataFormat === 'wide' && (
          <div>
            <label className="block font-medium mb-1">Add microorganisms and their column</label>
            <div className="flex gap-4 mb-2">
              <input
                className="input flex-1"
                placeholder="Organism name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="input flex-1"
                placeholder="Column name"
                value={column}
                onChange={(e) => setColumn(e.target.value)}
              />
              <button
                type="button"
                onClick={addOrganism}
                className="bg-saafe-light text-white px-4 rounded hover:opacity-90 transition"
              >
                Add
              </button>
            </div>
            {organisms.length > 0 && (
              <ul className="space-y-2">
                {organisms.map((entry, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center border px-4 py-2 rounded"
                  >
                    <span><strong>{entry.name}</strong> → <code>{entry.column}</code></span>
                    <button
                      type="button"
                      onClick={() => removeOrganism(i)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* 5. Additional Info */}
        {/* <div>
          <label className="block font-medium mb-2">Is there additional information for microorganisms?</label>
          <YesNoButtons value={hasExtraInfo} onChange={setHasExtraInfo} />
        </div> */}

        {/* 6. Phenotype Info */}
        <div>
          <label className="block font-medium mb-2">Is resistance phenotype data present?</label>
          <YesNoButtons value={hasPhenotype} onChange={setHasPhenotype} />
        </div>

        <button className="btn mt-5 mb-1" onClick={() => navigate('/ast')}>Next</button>

      </div>
    </FormWrapper>
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
