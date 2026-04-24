'use client';

import { useState, useEffect } from 'react';
import { User, Phone, Mail, MapPin, X } from 'lucide-react';
import { useAuth } from '@/src/context/AuthContext';
import axios from 'axios';
import { State, City } from 'country-state-city';

type Props = {
  onClose: () => void;
};

export default function AddCustomerDialog({ onClose }: Props) {

  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    description: '',
    address: '',
    state: '',
    city: '',
    country: 'India',
  });


  /* ================= LOAD STATES ================= */

  useEffect(() => {

    const indianStates = State.getStatesOfCountry('IN');

    setStates(indianStates);

  }, []);



  /* ================= LOAD CITIES ================= */

  useEffect(() => {

    if (!formData.state) return;

    const selectedState = states.find(
      (s) => s.name === formData.state
    );

    if (!selectedState) return;

    const citiesList = City.getCitiesOfState(
      'IN',
      selectedState.isoCode
    );

    setCities(citiesList);

  }, [formData.state, states]);



  /* ================= HANDLE CHANGE ================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {

    const { name, value } = e.target;

    // name validation (characters only)
    if (name === 'fullName') {

      if (!/^[a-zA-Z\s]*$/.test(value)) return;

    }

    // phone validation (numbers only)
    if (name === 'phone') {

      if (!/^\d*$/.test(value)) return;

    }

    setFormData({

      ...formData,
      [name]: value,

    });

  };



  /* ================= VALIDATION ================= */

  const validateForm = () => {

    if (!formData.fullName.trim())
      return 'Full name is required';

    if (formData.fullName.length < 3)
      return 'Name must be at least 3 characters';

    if (!formData.phone || formData.phone.length !== 10)
      return 'Phone must be 10 digits';

    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      return 'Invalid email format';

    if (!formData.address.trim())
      return 'Address required';

    if (!formData.state)
      return 'State required';

    if (!formData.city)
      return 'City required';

    if (!user?._id)
      return 'User authentication failed';

    return '';

  };



  /* ================= SUBMIT ================= */

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {

      setError(validationError);
      return;

    }

    try {

      setLoading(true);

      const formDataObj = new FormData();

      Object.entries(formData).forEach(([key, value]) => {

        formDataObj.append(key, value);

      });

      formDataObj.append('user', user._id);


      const response = await axios.post(

        'https://api.fetchtrue.com/api/service-customer',

        formDataObj,

        {

          headers: {

            'Content-Type': 'multipart/form-data',

          },

        }

      );


      if (response.status === 200 || response.status === 201) {

        alert('Customer added successfully 🎉');

        onClose();

      }

    } catch (err: any) {

      setError(

        err?.response?.data?.message ||

        err.message ||

        'Something went wrong'

      );

    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative bg-white w-[90%] max-w-2xl rounded-xl shadow-lg p-6 z-10">

        {/* header */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-xl font-semibold">

            Add New Customer

          </h2>

          <button onClick={onClose}>

            <X className="w-5 h-5" />

          </button>

        </div>


        {/* error UI */}
        {

          error &&

          <div className="bg-red-100 text-red-600 px-4 py-2 mb-4 rounded">

            {error}

          </div>

        }


        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />


          {/* PHONE */}
          <input
            name="phone"
            maxLength={10}
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />


          {/* EMAIL */}
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />


          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />


          {/* ADDRESS */}
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />


          {/* STATE */}
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          >

            <option value="">Select State</option>

            {

              states.map((state) => (

                <option key={state.isoCode}>

                  {state.name}

                </option>

              ))

            }

          </select>


          {/* CITY */}
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          >

            <option value="">Select City</option>

            {

              cities.map((city) => (

                <option key={city.name}>

                  {city.name}

                </option>

              ))

            }

          </select>


          {/* COUNTRY */}
          <input
            value="India"
            readOnly
            className="w-full border rounded-md px-3 py-2 bg-gray-100"
          />


          {/* ACTION BUTTONS */}
          <div className="flex gap-3">

            <button
              type="button"
              onClick={onClose}
              className="w-1/2 border rounded-md py-2"
            >

              Cancel

            </button>


            <button
              disabled={loading}
              className="w-1/2 bg-blue-600 text-white rounded-md py-2"
            >

              {loading ? 'Saving...' : 'Save Data'}

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}