import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { BsCheckCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { IoFitness,IoLogoWhatsapp} from "react-icons/io5";
import { Schema } from "../schemas";
import { FaCrown } from "react-icons/fa";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import Images from '../Images/index'
import { LazyLoadImage} from 'react-lazy-load-image-component';
export const HomePage = () => {
  // ? Template
  const data = {
    name: "",
    contactDetails: "",
    message: "",
  };
  // ? Handeling Formik...
  const Form = useRef();
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: data,
      validationSchema: Schema,
      onSubmit: (values, action) => {
        emailjs
          .sendForm(
            "service_gxm49ge",
            "template_hr64q6",
            Form.current,
            "pLJS6d0WCzJXu3_og"
          )
          .then(
            (result) => {
              // console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        action.resetForm();
      },
    });
  // ? Scroll Button Function
  const More = useRef();
  const Contact = useRef();
  const Supp = useRef();
  const handleContact = () => {
    Contact.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleMore = () => {
    More.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleSupp = () => {
    Supp.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-screen font-[Poppins] text-white">
      <LazyLoadImage
        src={Images.bg}
        className="object-cover w-screen h-screen fixed top-0"
        alt=""
      />
      {/* Landing Page */}
      <div className="w-full h-screen z-50 relative">
        <Navbar />
        <h1 className="uppercase text-4xl lg:text-7xl font-black lg:w-4/6 mt-40 mx-3 lg:mx-10 font-[Oswald]">
          it's all about what you can achieve
        </h1>
        <h1 className="mx-3 lg:mx-10 my-10 text-2xl">
          Empower yourself to make the changes you need to make.
        </h1>
        <button
          onClick={handleMore}
          className="ml-3 lg:ml-10 outline-none bg-orange-600 p-2 rounded mt-5 text-xl lg:text-lg hover:bg-orange-700"
        >
          View More
        </button>
        <button
          onClick={handleContact}
          className="mx-3 lg:mx-10 bg-orange-600 outline-none p-2 rounded mt-5 text-xl lg:text-lg hover:bg-orange-700"
        >
          Contact Us
        </button>
        <button
          onClick={handleSupp}
          className="mx-3 bg-orange-600 outline-none p-2 rounded mt-5 text-xl lg:text-lg hover:bg-orange-700"
        >
          Supplements
        </button>
      </div>
      {/* View More */}
      <div ref={More} className="w-full min-h-screen z-50 relative">
        <h1 className="text-3xl lg:text-5xl text-center pt-10 font-extrabold font-serif strokeCustom">
          Ready To Start <span>Your Journey</span> Now With Us
        </h1>
        <div className="lg:flex w-full h-4/5 justify-start p-2 md:p-10 gap-5 xl:gap-10 items-center">
          <div className="m-auto w-[340px] lg:w-[600px]">
            <div className="flex gap-3 lg:gap-5">
              <LazyLoadImage
                src={Images.gym3}
                className="object-cover w-[160px] h-[160px] xl:w-[290px] xl:h-[200px]"
                alt=""
              />
              <LazyLoadImage
                src={Images.gym2}
                className="object-cover w-[160px] h-[160px] xl:w-[290px] xl:h-[200px]"
                alt=""
              />
            </div>
            <LazyLoadImage
              src={Images.gym1}
              className="object-cover w-[332px] h-[200px] mb-2 md:mb-0 xl:w-[600px] xl:h-[280px] mt-5"
              alt=""
            />
          </div>
          {/* Basic Plan */}
          <div className="bg-orange-600 md:w-4/5 mx-auto lg:w-1/5 lg:m-0 rounded p-3">
            <div className="flex justify-center gap-2 items-center">
              <IoFitness className="text-3xl" />
              <h1 className="text-[cyan] font-semibold text-2xl my-3">
                Basic Plan
              </h1>
            </div>
            {/* Pricing Box */}
            <div className="flex justify-between text-2xl">
              <div className="text-center">
                <h1>1 Month</h1>
                <h1>&#8377; 600</h1>
              </div>
              <div className="text-center">
                <h1>3 Months</h1>
                <h1>&#8377; 1500</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-5 text-lg">
              <ImCross className="text-red-800" />
              <div>Cardio</div>
            </div>
            <div className="flex items-center gap-2 mt-5 text-lg">
              <BsCheckCircleFill className="text-green-600 bg-white rounded-full" />
              <div>2 hours of Exercise</div>
            </div>
            <div className="flex items-center gap-2 mt-5 text-lg">
              <BsCheckCircleFill className="text-green-600 bg-white rounded-full" />
              <div>Consultation from Coach</div>
            </div>
            <button
              onClick={handleContact}
              className="bg-white text-orange-600 font-bold outline-none p-2 w-full m-auto rounded mt-5 text-lg hover:bg-gray-300"
            >
              Join Now
            </button>
          </div>
          {/* Premium Plan */}
          <div className="bg-orange-600 md:w-4/5 mx-auto lg:w-1/5 mt-5 lg:m-0 rounded p-3">
            <div className="flex justify-center gap-2 items-center">
              <FaCrown className="text-3xl" />
              <h1 className="text-[cyan] font-semibold text-2xl my-3">
                Premium Plan
              </h1>
            </div>
            {/* Pricing Box */}
            <div className="flex justify-between text-2xl">
              <div className="text-center">
                <h1>1 Month</h1>
                <h1>&#8377; 800</h1>
              </div>
              <div className="text-center">
                <h1>3 Months</h1>
                <h1>&#8377; 2000</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-5 text-lg">
              <BsCheckCircleFill className="text-green-600 bg-white rounded-full" />
              <div>Cardio</div>
            </div>
            <div className="flex items-center gap-2 mt-5 text-lg">
              <BsCheckCircleFill className="text-green-600 bg-white rounded-full" />
              <div>3 hours of Exercise</div>
            </div>
            <div className="flex items-center gap-2 mt-5 text-lg">
              <BsCheckCircleFill className="text-green-600 bg-white rounded-full" />
              <div>Consultation from Coach</div>
            </div>
            <button
              onClick={handleContact}
              className="bg-white text-orange-600 font-bold outline-none p-2 w-full m-auto rounded mt-5 text-lg hover:bg-gray-300"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
      <div
        ref={Contact}
        className="w-full lg:flex justify-evenly min-h-screen relative p-5 z-50"
      >
        {/* Contact Section */}
        <div>
          <h1 className="text-4xl md:text-center lg:text-6xl font-extrabold font-serif strokeCustom">
            Ready To{" "}
            <span>
              Level Up
              <br />
              Your Body
            </span>{" "}
            With Us?
          </h1>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            ref={Form}
            className="bg-orange-600 mt-20 md:w-4/6 mb-5 mx-auto lg:mx-0 lg:mb-0 rounded-md p-2"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Name..."
                className="outline-none rounded p-1 w-full text-black font-bold"
              />
              {errors.name && touched.name ? (
                <p className="text-white absolute z-50 top-8">{errors.name}</p>
              ) : null}
            </div>
            <div className="relative">
              <input
                type="text"
                name="contactDetails"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contactDetails}
                placeholder="Phone Number or Gmail..."
                className="w-full outline-none rounded p-1 text-black font-bold my-5"
              />
              {errors.contactDetails && touched.contactDetails ? (
                <p className="text-white absolute z-50 top-12">
                  {errors.contactDetails}
                </p>
              ) : null}
            </div>
            <div className="relative">
              <textarea
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                className="w-full p-1 text-black font-bold rounded outline-none h-20"
                placeholder="Message..."
              ></textarea>
              {errors.message && touched.message ? (
                <p className="text-white absolute z-50 top-20">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="bg-white text-orange-600 p-1 w-full rounded font-semibold text-xl mt-5 hover:bg-gray-200 hover:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
          <div className="md:flex gap-10 justify-center">
            <div className="lg:pt-36 pt-5">
              <LazyLoadImage src={Images.owner} className='w-[300px] mx-auto md:mx-0 h-[300px] rounded-t-md object-cover' alt="" />
              <div className="bg-orange-600 p-1 rounded-b-md w-[300px] mx-auto md:mx-0 font-semibold">
                <h1 className="underline text-lg">Owner</h1>
                <h1>Adv.Ashish Tiwari</h1>
                <div className="flex justify-between items-center">
                  <h1>No.- 9125225055</h1>
                  <a href="https://wa.me/c/919125225055"><IoLogoWhatsapp/></a>
                </div>
              </div>
            </div>
            <div className="lg:pt-36 pt-5">
              <LazyLoadImage src={Images.trainer} className='w-[300px] mx-auto md:mx-0 h-[300px] rounded-t-md object-cover' alt="" />
              <div className="bg-orange-600 p-1 rounded-b-md w-[300px] mx-auto md:mx-0 font-semibold">
                <h1 className="underline text-lg">Trainer</h1>
                <h1>Alok Singh</h1>
                <div className="flex justify-between items-center">
                  <h1>No.- 6386357523</h1>
                  <a href="https://wa.me/qr/NUAVVE27J5MPL1"><IoLogoWhatsapp/></a>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* Supplement Section */}
      <div ref={Supp} className="w-full h-screen relative z-50 p-3">
        <div className="m-auto w-[340px] lg:w-4/5">
        <h1 className="my-10 uppercase text-3xl lg:text-4xl font-bold">fuel your fitness to its fullest potential</h1>
            <div className="flex gap-3 lg:gap-5">
              <LazyLoadImage
                src={Images.sup1}
                className="object-cover w-[160px] h-[160px] xl:w-[290px] xl:h-[200px]"
                alt=""
              />
              <LazyLoadImage
                src={Images.sup2}
                className="object-cover w-[160px] h-[160px] xl:w-[290px] xl:h-[200px]"
                alt=""
              />
            </div>
            <LazyLoadImage
              src={Images.sup3}
              className="object-cover w-[332px] h-[200px] mb-2 md:mb-0 xl:w-[600px] xl:h-[280px] mt-5"
              alt=""
            />
          <button
          onClick={handleContact}
          className="bg-orange-600 outline-none p-2 rounded mt-5 text-xl lg:text-lg hover:bg-orange-700"
        >
          Contact Us
        </button>
          </div>
      </div>
    </div>
  );
};
