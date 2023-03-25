import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { BsCheckCircleFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { IoFitness } from "react-icons/io5";
import { Schema } from "../schemas";
import { FaCrown } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
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
  const handleContact = () => {
    Contact.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleMore = () => {
    More.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-screen font-[Poppins] min-h-screen bg-black text-white">
      <img
        src="Images/bg-gym.jpg"
        className="object-cover w-screen h-screen fixed top-0"
        alt=""
      />
      {/* Landing Page */}
      <div className="w-full h-screen z-50 relative">
        <Navbar />
        <h1 className="uppercase text-4xl lg:text-7xl font-black lg:w-4/6 mt-40 mx-3 lg:mx-10 font-[Oswald]">
          it's all about what you can achieve
        </h1>
        <h1 className="mx-3 lg:mx-10 my-14 text-2xl">
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
        <button>
          <a href="https://wa.me/c/919125225055" target={"_blank"}>
            <IoLogoWhatsapp className="text-4xl lg:text-3xl"/>
          </a>
        </button>
      </div>
      {/* View More */}
      <div ref={More} className="w-full min-h-screen z-50 relative">
        <h1 className="text-3xl lg:text-5xl text-center pt-10 font-extrabold font-serif strokeCustom">
          Ready To Start <span>Your Journey</span> Now With Us
        </h1>
        <div className="lg:flex w-full h-4/5 justify-start p-10 gap-5 xl:gap-10 items-center">
          {/* Image Of Gym */}
          <div className="hidden lg:block">
            <div className="lg:flex gap-5">
              <img
                src="Images/gym2.jpeg"
                className="object-cover w-[240px] xl:w-[290px] xl:h-[200px]"
                alt=""
              />
              <img
                src="Images/gym3.jpeg"
                className="object-cover w-[240px] xl:w-[290px] xl:h-[200px]"
                alt=""
              />
            </div>
            <img
              src="Images/gym1.jpeg"
              className="object-cover w-[500px] xl:w-[600px] xl:h-[280px] mt-5"
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
        className="w-full lg:flex justify-center gap-20 min-h-screen relative p-5 z-50"
      >
        {/* Contact Section */}
        <div>
          <h1 className="text-4xl lg:text-6xl font-extrabold font-serif strokeCustom">
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
            className="bg-orange-600 mt-20 md:w-4/6 mb-5 lg:mb-0 rounded-md p-2"
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
        {/* Location Section */}
        <div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-orange-600 mb-10 underline underline-offset-4">
            Location
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.594221894443!2d80.9167993!3d25.2169033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984af150e00f643%3A0x2de3f16cbe2ed99a!2sIRON%20PARADISE%20GYM!5e0!3m2!1sen!2sin!4v1679719229060!5m2!1sen!2sin"
            className="rounded w-full h-48 lg:w-[600px] md:h-[500px]"
            allowFullScreen=""
            without rel="noreferrer"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
