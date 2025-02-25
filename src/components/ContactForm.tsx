import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission (e.g., send data to an API)
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="px-4 py-2 rounded border border-gray-300 bg-gray-800 text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="px-4 py-2 rounded border border-gray-300 bg-gray-800 text-white"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className="px-4 py-2 rounded border border-gray-300 bg-gray-800 text-white"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
