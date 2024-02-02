import React from "react";
const Form = () => {
  return (
    <form className="flex flex-col gap-4 mb-10">
      <div className="w-full flex gap-4 items-center">
        <label htmlFor="name">
          Name: <span className="font-bold text-sm">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="your name..."
          required
          className="border border-gray-500 rounded-md py-1 px-2"
        />
      </div>
      <div className="w-full flex gap-4 items-center">
        <label htmlFor="email">
          Email: <span className="font-bold text-sm">*</span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="your email..."
          required
          className="border border-gray-500 rounded-md py-1 px-2"
        />
      </div>
      <div className="w-full flex gap-4 items-center">
        <label htmlFor="text">
          Text message: <span className="font-bold text-sm">*</span>
        </label>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="your text..."
          required
          className="border border-gray-500 rounded-md py-1 px-2"
        />
      </div>
      <button
        className="py-1 px-2 bg-indigo-500 text-white font-semibold"
        type="submit"
      >
        Create
      </button>
    </form>
  );
};

export default Form;
