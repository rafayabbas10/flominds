'use client'
import React, { useState } from 'react'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    preferredDate: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission (e.g., send booking data to an API)
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="form-control gap-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered"
        />
      </div>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Company</span>
        </label>
        <input
          type="text"
          name="company"
          placeholder="Your Company"
          value={formData.company}
          onChange={handleChange}
          className="input input-bordered"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Preferred Date</span>
        </label>
        <input
          type="datetime-local"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          className="input input-bordered"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Message (Optional)</span>
        </label>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-bordered"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-4">
        Book Demo
      </button>
    </form>
  )
}

export default BookingForm
