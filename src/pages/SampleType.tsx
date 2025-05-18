import { useState } from 'react';
import FormWrapper from '../components/FormWrapper';
import { useNavigate } from 'react-router-dom'

export default function SampleType() {
  const [locationInfo, setLocationInfo] = useState<'yes' | 'no' | null>(null);
  const [locationFormat, setLocationFormat] = useState('');
  const [latCol, setLatCol] = useState('');
  const [longCol, setLongCol] = useState('');
  const navigate = useNavigate()

  const locationFormats = [
    'Decimal Degrees (e.g. -27.4698, 153.0251)',
    'Degrees Minutes Seconds (DMS)',
    'Degrees Decimal Minutes (DDM)',
    'GeoJSON Point',
    'WKT (Well-Known Text)',
    'Latitude and Longitude stored in separate columns',
    'Other',
  ];

  return (
    <FormWrapper title="Sample type">
      <div className="space-y-8 max-w-2xl">

        {/* 1: Sample type column */}
        <div>
          <label className="block font-semibold mb-1">
            Sample type column
          </label>
          <input className="input w-full" placeholder="Column name" />
        </div>

        {/* 2: Specimen column */}
        <div>
          <label className="block font-semibold mb-1">
            Specimen used column
          </label>
          <input className="input w-full" placeholder="Column name" />
        </div>

        {/* 3: Sample collection date */}
        <div>
          <label className="block font-semibold mb-1">
            Sample collection date column
          </label>
          <input className="input w-full" placeholder="Column name" />
        </div>

        {/* Location information toggle */}
        <div>
          <label className="block font-semibold mb-2">
            Is location information available?
          </label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setLocationInfo('yes')}
              className={`px-4 py-2 border rounded ${
                locationInfo === 'yes' ? 'bg-saafe text-white' : 'bg-white text-gray-800'
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => {
                setLocationInfo('no');
                setLocationFormat('');
              }}
              className={`px-4 py-2 border rounded ${
                locationInfo === 'no' ? 'bg-saafe text-white' : 'bg-white text-gray-800'
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* If location info is Yes */}
        {locationInfo === 'yes' && (
          <>
            {/* Location format dropdown */}
            <div>
              <label className="block font-semibold mb-1">Location format</label>
              <select
                value={locationFormat}
                onChange={e => setLocationFormat(e.target.value)}
                className="input w-full"
              >
                <option value="">Select a format</option>
                {locationFormats.map((format, idx) => (
                  <option key={idx} value={format}>
                    {format}
                  </option>
                ))}
              </select>
            </div>

            {/* Latitude/Longitude input if "separate columns" is selected */}
            {locationFormat === 'Latitude and Longitude stored in separate columns' && (
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-semibold mb-1">Latitude column</label>
                  <input
                    className="input w-full"
                    value={latCol}
                    onChange={e => setLatCol(e.target.value)}
                    placeholder="Column name"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-semibold mb-1">Longitude column</label>
                  <input
                    className="input w-full"
                    value={longCol}
                    onChange={e => setLongCol(e.target.value)}
                    placeholder="Column name"
                  />
                </div>
              </div>
            )}

            {/* Single location column (only shown when NOT separate fields) */}
            {locationFormat &&
              locationFormat !== 'Latitude and Longitude stored in separate columns' && (
                <div>
                  <label className="block font-semibold mb-1">Location column</label>
                  <input
                    className="input w-full"
                    placeholder="Column name"
                  />
                </div>
              )}
          </>
        )}
        <button className="btn mt-5 mb-1" onClick={() => navigate('/antimicrobial')}>Next</button>
      </div>
    </FormWrapper>
  );
}
