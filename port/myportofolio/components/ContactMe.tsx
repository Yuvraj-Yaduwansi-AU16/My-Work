import React from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  MapPinIcon,
  BeakerIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    window.location.href = `mailto:yuvraj.mark3@gmail.com?subject=${formdata.subject}&body=Hi, my name is${formdata.name}. ${formdata.message}`;
  };
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="underline decoration-[#F7AB0A]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-[4%] w-[4%] animate-pulse" />
            <p className="text-2xl">+1234567890</p>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-[4%] w-[4%] animate-pulse" />
            <p className="text-2xl">yuvraj.mark3@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-[4%] w-[4%] animate-pulse" />
            <p className="text-2xl">
              162 Cedarwoods Crescent, Kitchener, N2C 2J8
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register('name')}
              className="contactInput"
              placeholder="Name"
              type="text"
            />
            <input
              {...register('email')}
              className="contactInput"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register('subject')}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register('message')}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
