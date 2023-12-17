import { FormEvent } from 'react'

const FooterForm = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submit clicked')

    const formData = {
      name: (document.getElementById('form_name') as HTMLInputElement).value,
      email: (document.getElementById('form_email') as HTMLInputElement).value,
      phone: (document.getElementById('form_number') as HTMLInputElement).value,
      city: (document.getElementById('city') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLInputElement).value,
    }

    try {
      const response = await fetch('http://localhost:3001/saveFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        console.log('Form data saved successfully.')
        const recipientEmail = 'saurabhbehal@gmail.com'
        const emailData = `
        Name: ${formData.name},
        Email: ${formData.email},
        Mobile: ${formData.phone},
    City: ${formData.city},
        Message: ${formData.message},
        
    `
        const mailtoLink = `mailto:${recipientEmail}?subject=New Form Submission&body=${encodeURIComponent(
          emailData ?? null
        )}`
        // window.location.href = mailtoLink
        window.open(mailtoLink, '_blank')
      } else {
        console.error('Error saving form data.')
        // Handle errors or provide user feedback
      }
    } catch (error) {
      console.error('Error:', error)
      // Handle network errors or unexpected issues
    }
  }
  return (
    <form method="post" onSubmit={handleSubmit} id="formArea">
      <input
        type="hidden"
        defaultValue=""
        id="recapta_token"
        name="recapta_token"
      />
      <div id="formmessage" />
      <div className="form-group">
        <input
          id="form_name"
          type="text"
          name="name"
          className="form-control"
          placeholder="Your Name"
          required={true}
          data-error="Name is required."
        />
        <div className="help-block with-errors" />
      </div>
      <div className="form-group">
        <input
          id="form_email"
          type="email"
          name="email"
          className="form-control"
          placeholder="Your Email"
          required={true}
          data-error="Valid email is required."
        />
        <div className="help-block with-errors" />
      </div>
      <div className="form-group">
        <input
          id="form_number"
          type="text"
          name="phone"
          className="form-control"
          placeholder="Phone Number"
          required={true}
        />
      </div>
      <div className="form-group">
        <input
          id="city"
          type="text"
          name="city"
          className="form-control"
          placeholder="City"
          data-error="City is required."
        />
      </div>
      <div className="form-group">
        <input
          id="message"
          type="text"
          name="message"
          className="form-control"
          placeholder="Message"
          data-error="Message is required."
        />
      </div>

      <button
        type="submit"
        className="btn btn-2 btn-border white mt-5 g-recaptcha"
        style={{ background: 'blue', marginTop: '-100px' }}
      >
        {' '}
        <span className="btn-icon btn-arrow" />
        <span className="btn-text">Submit</span>
      </button>
    </form>
  )
}

export default FooterForm
