import React from 'react'
import Image from 'next/image'
import patientimage from '@/public/patientimage.jpg'
import body from '@/public/body.jpg'
import download from '@/public/download.png'
function page() {
  return (
    <div className="bg-gray-200 p-20">
        <div className="bg-white ">
    <div className="flex justify-around">
        <div className="flex flex-col gap-10 p-16">
            <Image src={patientimage} height="200" width="500"></Image>
            <p className="text-6xl ml-16 text-blue-500">Patient-1</p>
            <p className="text-3xl ml-16 -mt-8">Patient@0000gmail.com</p>
            <p className="text-3xl  ml-16 -mt-8">+91-11111-55555</p>
        <p className="text-3xl ml-16 -mt-8">Gender={'Male'} || Age={'26'}</p>

        <p className="text-xl  text-gray-500 ml-14 ">Suffering from <u className='text-red-400 text-2xl'>{'Lungs Infection'}</u> for last {'30'} days,<br></br>
        and is under your treatment</p>
        </div>
        <div className="p-16 ">
        <div className='border-4 border-blue-300'>
            <p className="text-4xl text-center"><u className="p-10">Patient-Body-Image</u></p>
        <Image src={body}></Image>
        </div>
    </div>
    </div>
    </div>
<hr></hr>
    <div className="bg-white  p-12">
        <p className="text-4xl text-center text-blue-500"><u>Checkout-Details</u></p>
        <div className=" flex justify-around font-semibold rounded-e-3xl shadow-lg rounded-s-3xl">
            <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl ">Basic-Information</p>
        <p className="mt-8 text-2xl text-gray-500 text-center">weight={'55'} kgs</p>
        <p className="mt-8 text-center text-2xl text-gray-500">height={'160'} cms</p>
        <p className="mt-8  text-center text-2xl text-gray-500">Gender={'Male'}</p>
        </div>
        <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl">Symptoms</p>
        <p className="mt-8 text-2xl text-gray-500 text-center">{'Symptom-1'}</p>
        <p className="mt-8 text-center text-2xl text-gray-500">{'Symptom-2'}</p>
        <p className="mt-8  text-center text-2xl text-gray-500">{'Symptom-3'}</p>
        </div>
        
        <div className="p-8  mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl">Allergies</p>
        <p className="mt-8 text-2xl text-gray-500 text-center">{'Allergie-1'}</p>
        <p className="mt-8 text-center text-2xl text-gray-500">{'Allergie-2'}</p>
        <p className="mt-8 text-center text-2xl text-gray-500">{'Allergie-3'}</p>
        </div>
        
       
        </div>
        <hr></hr>
       
       <div className="p-10 rounded-e-3xl shadow-lg rounded-s-3xl">
       <div className="bg-white p-10 rounded-e-3xl rounded-s-3xl">
        <p className="text-4xl text-center text-blue-500"><u>Prescriptions & Reports</u></p>
        <div className=" flex justify-around font-semibold ">
            <div className="p-8 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl p-8">Previous-Prescription</p>
        <Image src={download} height="200" width="500" ></Image>
        </div>
        <div className="p-8 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl p-8">Current-Prescription</p>
        <Image src={download} height="200" width="500"></Image>
        </div>
        
       
        
       
        </div>
     </div></div>

    </div>
    <hr></hr>
    <div className="bg-white p-12 shadow-lg">
        <p className="text-4xl text-center text-blue-500"><u>Medicines</u></p>
        <div className=" flex justify-around font-semibold rounded-e-3xl shadow-lg rounded-s-3xl">
            <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl ">Previous-Medicines</p>
        <p className="mt-8 text-center text-2xl  text-gray-500">Medicine-1</p>
        <p className="mt-8 text-center text-2xl text-gray-500">Medicine-2</p>
        <p className="mt-8  text-center text-2xl text-gray-500">Medicine-3</p>
        </div>
        <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl">Current-Medicines</p>
        <p className="mt-8 text-2xl text-gray-500 text-center">Medicine-1</p>
        <p className="mt-8 text-center text-2xl text-gray-500">Medicine-2</p>
        <p className="mt-8  text-center text-2xl text-gray-500">Medicine-3</p>
        </div>
        
        <div className="p-8 mb-4 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl">Supplementary-Medicine</p>
        <p className="mt-8 text-2xl text-gray-500 text-center">Supplement-1</p>
        <p className="mt-8 text-center text-2xl text-gray-500">Supplement-2</p>
        <p className="mt-8  text-center text-2xl text-gray-500">Supplement-3</p>
        </div>
        
       
        </div></div>

        <div className="bg-white p-12 shadow-lg">
        <p className="text-4xl text-center text-blue-500"><u>Visits</u></p>
        <div className=" flex justify-around font-semibold rounded-e-3xl shadow-lg rounded-s-3xl">
            <div className="p-8 rounded-e-3xl shadow-lg rounded-s-3xl">
        <div className="p-8 rounded-e-3xl shadow-lg rounded-s-3xl">
        <p className="text-3xl">Visited-dates</p>
        <p className="mt-8 text-2xl text-gray-500 text-center">{'01/02/20XX'}</p>
        <p className="mt-8 text-center text-2xl text-gray-500">{'01/02/20XX'}</p>
        <p className="mt-8  text-center text-2xl text-gray-500">{'01/02/20XX'}</p>
        </div>
    </div>
    </div></div></div>
    
  )
}

export default page;