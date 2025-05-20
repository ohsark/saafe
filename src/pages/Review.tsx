import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom'

export default function Review() {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center'>
        <div className=" px-6 py-12 space-y-4 w-[500px]">
            <CheckCircle className="w-16 h-16 text-green-500" />

            <h1 className="text-4xl font-bold text-gray-800">All done!</h1>

            <p className="text-gray-600 max-w-md">
                <div className='font-semibold text-lg'>You’ll receive an email notification once your data has been successfully processed.</div>
                <div className='mt-3'>If any inconsistencies are detected against the standardised values, you’ll be notified to review and revise the values accordingly.</div>
            </p>

            <button className="btn text-sm mt-6" onClick={() => navigate('/')}>Done</button>
        </div>
    </div>
  );
}