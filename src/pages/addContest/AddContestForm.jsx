/* eslint-disable react/prop-types */
import  { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { TbFidgetSpinner } from "react-icons/tb";
import Heading from "../../components/Shared/Heading";

const AddContestForm = ({
    setEndDate,
    setStartDate,
    startDate,
    endDate,
    handleDates,
    handleSubmit,
    setImagePreview,
    imagePreview,
    imageText,
    handleImage,
    loading,
  }) => {

const categories = ["Software Development", "Artificial Intelligence and Machine Learning", "Cybersecurity", "Cloud Computing", "Internet of Things (IoT)", "Data Science and Big Data", "Blockchain Technology", "IT Infrastructure and Networking", "Tech-driven Business Solutions" ]
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center  rounded-xl '>

          <Heading center={true} subtitle =' Adding a "Contest Form" under a specific subheading can be a great way to engage your audience and gather valuable information.' title='Add Contest Form'></Heading>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10'>
            <div className='space-y-6'>

            <div className='space-y-1 text-sm'>
                <label htmlFor='title' className='block text-gray-400'>
                  Title
                </label>
                <input
                  className='w-full bg-slate-200 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='title'
                  id='title'
                  type='text'
                  placeholder='Title'
                  required
                />
              </div>
              <div className='space-y-1 text-sm'>
                <label htmlFor='category' className='block text-gray-400'>
                  Category
                </label>
                <select
                  required
                  className='w-full bg-slate-200 px-4 py-3 border-rose-300  focus:outline-rose-500 rounded-md '
                  name='category'
                >
                  {categories.map(category => (
                    <option value={category} key={category} >
                      {category}
                    </option>
                  ))}
                  
                </select>
              </div>
  
              <div className='space-y-1'>
                <label htmlFor='location' className='block text-gray-600'>
                  Select Availability Range
                </label>
                {/* Calender */}
                <div className="flex flex-row">
                <div className="flex flex-col">
                <label  className='block text-gray-400' ><p>Select start date</p></label>
                
                <DatePicker
                className="bg-slate-200 mr-10 p-2 rounded-md"
                 required
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Select start date"
            />
                </div>
           <div className="flex flex-col">
           <label htmlFor=""  className='block text-gray-400'> <p>Select end date</p></label>
            <DatePicker
            className="bg-slate-200 mr-10 p-2 rounded-md"
            required
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="Select end date"
            />
           </div>
                </div>
            
              </div>
            </div>
            <div className='space-y-6'>
             
              <div className='space-y-1 text-sm'>
                <label htmlFor='type' className='block text-gray-400'>
                  Contest Type
                </label>
                <input
                  className='w-full bg-slate-200 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='type'      
                  type='text'
                  placeholder='Contest Type'
                  required
                />
              </div>
  
              <div className=' p-4  w-full  m-auto rounded-lg flex justify-between items-center bg-slate-200'>
                <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                  <div className='flex flex-col w-max mx-auto text-center'>
                    <label>
                      <input
                        className='text-sm cursor-pointer w-36 hidden bg-slate-200'
                        type='file'
                        onChange={e => handleImage(e.target.files[0])}
                        name='image'
                        id='image'
                        accept='image/*'
                        hidden
                      />
                      <div className='bg-[#FF6F61] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                        {/* {imageText} */}
                        {imageText.length > 20
                          ? imageText.split('.')[0].slice(0, 15) +
                            '....' +
                            imageText.split('.')[1]
                          : imageText}
                      </div>
                    </label>
                  </div>
                </div>
                <div className='h-16 w-16 object-cover overflow-hidden flex items-center'>
                  {imagePreview && <img src={imagePreview} />}
                </div>
              </div>
              <div className='flex justify-between gap-2'>
                <div className='space-y-1 text-sm'>
                  <label htmlFor='price' className='block text-gray-400'>
                    Price
                  </label>
                  <input
                    className='bg-slate-200 w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='price'
                    id='price'
                    type='number'
                    placeholder='Price'
                    required
                  />
                </div>
  
                <div className='space-y-1 text-sm'>
                  <label  className='block text-gray-400'>
                    Prize money
                  </label>
                  <input
                    className='w-full bg-slate-200 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                    name='prizeMoney'
                    id='guest'
                    type='number'
                    placeholder='Prize money'
                    required
                  />
                </div>
              </div>
  
             
                <div className='space-y-1 text-sm'>
                  <label  className='block text-gray-400'>
                  Task Submission text instruction
                  </label>
                  <textarea
                    className='block bg-slate-200 rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                    name='instruction'
                    
                    type='text'
                    placeholder='Task Submission text instruction'
                    required
                  />
                </div>
  
              <div className='space-y-1 text-sm'>
                <label htmlFor='description' className='block text-gray-400'>
                  Description
                </label>
  
                <textarea
                  id='description'
                  className='block bg-slate-200 rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                  name='description'
                ></textarea>
              </div>
            </div>
          </div>
  
          <button
            disabled={loading}
            type='submit'
            className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#FF6F61]'
          >
            {loading ? (
              <TbFidgetSpinner className='animate-spin m-auto' />
            ) : (
              ' Save & Continue'
            )}
          </button>
        </form>
      </div>
    );
};

export default AddContestForm;