import FormWrapper from '../components/FormWrapper'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'

export default function Organisation() {
  const navigate = useNavigate()
  return (
    <FormWrapper title="Organisation details">
      <fieldset className="space-y-2">
        <legend className="font-medium mb-1">Sector</legend>
        {['Water', 'Waste', 'Horticulture', 'Wine'].map(label => (
          <label className="flex items-center space-x-2" key={label}>
            <input type="radio" name="sector" />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>
      <label className="block font-medium mt-5 mb-1">Name</label>
      <input type="text" className="input mt-1" />
      <label className="block font-medium mt-5 mb-1">Mailing address</label>
      <input type="text" placeholder='Search' className="input mb-3" />
      <MapContainer center={[-27.47, 153.02]} zoom={10} className="h-56 w-full rounded" scrollWheelZoom={false}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <label className="block font-medium mt-5 mb-1">Contact Name</label>
      <input type="text" className="input" />
      <label className="block font-medium mt-5 mb-1">Email</label>
      <input type="email" className="input" />
      <label className="block font-medium mt-5 mb-1">Telephone / Mobile</label>
      <input type="tel" className="input" />
      <div className='flex justify-between mt-5'>
        <button className="btn bg-gray-100 hover:bg-gray-200 text-black " onClick={() => navigate('/upload')}>Back to upload data</button>
        <button className="btn" onClick={() => navigate('/sample-type')}>Next</button>
      </div>
    </FormWrapper>
  )
}
