import FormWrapper from '../components/FormWrapper'
import { useNavigate } from 'react-router-dom'

export default function UploadData() {
  const navigate = useNavigate()
  return (
    <FormWrapper title="Upload Data">

      <legend className="block font-medium mt-4 mb-1">Filename</legend>
      <input type="text" className="input" />

      <legend className="block font-medium mt-4 mb-1">Version</legend>
      <input type="text" className="input" />

      <legend className="block font-medium mt-4 mb-1">Date last updated</legend>
      <input type="date" className="input" />

      <button type="button" className="btn mt-5 mb-3">Upload file</button>

      <fieldset className='mt-4'>
        <legend className="block font-medium mt-4 mb-1">Which type of data does the database contain</legend>
        {[
          'Antimicrobial susceptibility testing',
          'Antimicrobial residues',
          'Antimicrobial usage',
          'Antimicrobial resistance genes (ARGs)'
        ].map(label => (
          <label className="flex mt-1 items-center space-x-2" key={label}>
            <input type="checkbox" name="study" />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>

      <fieldset className='mt-4'>
        <legend className="block font-medium mt-4 mb-1">How this pplatform can help you?</legend>
        {[
          'Standardise microorganisms name', 
          'Standardise antimcirobials name',
          'Augment additonal information to the dataset',
          'Add Maximum residue limits to the dataset',
          'Compute summary statistics for the dataset'
        ].map(label => (
          <label className="flex mt-1 items-center space-x-2" key={label}>
            <input type="checkbox" name="study" />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>

      <legend className="block font-medium mt-6 mb-1">In the following sections, we will ask some questions about the data that you uploaded. The answers will help us to map your dataset according to the standardised SAAFE CRC data format for antimicrobials. <a className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' href="/">Learn more</a></legend>
      <button type="button" className="btn mt-3" onClick={() => navigate('/organisation')}>Start mapping</button>
    </FormWrapper>
  )
}
