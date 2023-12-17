import React, { FormEvent, useState } from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import Link from 'next/link'

const buyoffline = () => {
  const countryList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas (the)',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia (Plurinational State of)',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory (the)',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cayman Islands (the)',
    'Central African Republic (the)',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands (the)',
    'Colombia',
    'Comoros (the)',
    'Congo (the Democratic Republic of the)',
    'Congo (the)',
    'Cook Islands (the)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czechia',
    "Côte d'Ivoire",
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic (the)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands (the) [Malvinas]',
    'Faroe Islands (the)',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories (the)',
    'Gabon',
    'Gambia (the)',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See (the)',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran (Islamic Republic of)',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    "Korea (the Democratic People's Republic of)",
    'Korea (the Republic of)',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic (the)",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands (the)',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia (Federated States of)',
    'Moldova (the Republic of)',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands (the)',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger (the)',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands (the)',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines (the)',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of North Macedonia',
    'Romania',
    'Russian Federation (the)',
    'Rwanda',
    'Réunion',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten (Dutch part)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan (the)',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands (the)',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates (the)',
    'United Kingdom of Great Britain and Northern Ireland (the)',
    'United States Minor Outlying Islands (the)',
    'United States of America (the)',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela (Bolivarian Republic of)',
    'Viet Nam',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
    'Åland Islands',
  ]
  const optionsAtoz = countryList.map((country, index) => (
    <option key={index} value={country}>
      {country}
    </option>
  ))
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submit clicked')

    const formData = {
      serial: (document.getElementById('serial') as HTMLInputElement).value,
      name: (document.getElementById('name') as HTMLInputElement).value,
      company: (document.getElementById('company') as HTMLInputElement).value,
      contact: (document.getElementById('contact') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      address: (document.getElementById('address') as HTMLInputElement).value,
      state: (document.getElementById('state') as HTMLInputElement).value,
      city: (document.getElementById('city') as HTMLInputElement).value,
      postal: (document.getElementById('postal') as HTMLInputElement).value,
      country: (document.querySelector('[name="country"]') as HTMLSelectElement)
        .value,
      products: (
        document.querySelector('[name="products"]') as HTMLSelectElement
      ).value,
      payment: (document.querySelector('[name="payment"]') as HTMLSelectElement)
        .value,
      text: (document.getElementById('textarea') as HTMLInputElement).value,
    }
    try {
      const response = await fetch('http://localhost:3001/saveBuyData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        console.log('Form data saved successfully.')
        const recipientEmail = '2612adityasingh2000@gmail.com'
        const mailtoLink = `mailto:${recipientEmail}?subject=New Form Submission&body=${encodeURIComponent(
          JSON.stringify(formData) ?? null
        )}`
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
    <div>
      <Navbar />
      <section
        className="page-title parallaxie"
        data-bg-img="/images/08.jpg"
        style={{
          backgroundImage: 'url("/images/08.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 134.681px',
        }}
      >
        <div
          className="container"
          style={{
            width: '100%',
            height: '33vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '130px',
            textAlign: 'left',
          }}
        >
          <h1 style={{ zIndex: '2', marginBottom: '20px' }}>Buy Offline</h1>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Buy Offline
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="pb-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10">
              <div className="section-title">
                <h4 className="title">Buy Offline</h4>
                <div className="contact-main white-bg p-5 box-shadow">
                  <form
                    id="formArea"
                    className="row"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <div id="formmessage" />
                    <div className="col-md-6">
                      <input
                        type="radio"
                        id="html"
                        name="customer"
                        defaultValue="Existing"
                      />
                      &nbsp; <label htmlFor="html">Existing Customer</label>
                      <br />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="radio"
                        id="html"
                        name="customer"
                        defaultValue="New"
                      />
                      &nbsp; <label htmlFor="html">New Customer</label>
                      <br />
                    </div>
                    <div className="col-md-6" style={{ marginTop: '20px' }}>
                      <p>Serial Number*</p>
                    </div>
                    <div className="col-md-6" style={{ marginTop: '20px' }}>
                      <div className="form-group">
                        <input
                          id="serial"
                          type="name"
                          name="serial_number"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Name*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="name"
                          type="name"
                          name="name"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Company Name*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="company"
                          type="text"
                          name="company_name"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Contact name*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="contact"
                          type="text"
                          name="contact"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Email address*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="email"
                          type="text"
                          name="email"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Address*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="address"
                          type="text"
                          name="address"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Country*</p>
                    </div>
                    <div className="col-md-6">
                      {/* Country */}
                      <div className="form-group">
                        <select
                          name="country"
                          className="form-control"
                          required={true}
                          defaultValue="-1"
                        >
                          <option value="-1" disabled>
                            - Select Country
                          </option>
                          {optionsAtoz}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>State*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="state"
                          type="text"
                          name="state"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>City*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="city"
                          type="text"
                          name="city"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Postal Code*</p>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="postal"
                          type="text"
                          name="postal code"
                          className="form-control contact-one__form-input formerror "
                          placeholder=""
                          required={false}
                          maxLength={6}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Products*</p>
                    </div>
                    <div className="col-md-6">
                      {/* <Products /> */}
                      {/* Products */}
                      <div className="form-group">
                        <select
                          name="products"
                          className="form-control"
                          required={true}
                        >
                          <option value="">Please select....</option>
                          <option value="Tally.ERP 9 (Single User)">
                            Tally.ERP 9 (Single User)
                          </option>
                          <option value="Tally.ERP 9 (Multi User)">
                            Tally.ERP 9 (Multi User)
                          </option>
                          <option value="Upgrade to Tally.ERP 9">
                            Upgrade to Tally.ERP 9
                          </option>
                          <option value="Tally.ERP 9 - Auditors' Edition">
                            Tally.ERP 9 - Auditors Edition
                          </option>
                          <option value="Tally 7.2 Silver to Tally.ERP 9 Silver">
                            Tally 7.2 Silver to Tally.ERP 9 Silver
                          </option>
                          <option value="Tally 7.2 Gold to Tally.ERP 9 Gold">
                            Tally 7.2 Gold to Tally.ERP 9 Gold
                          </option>
                          <option value="Tally 6.3 Silver to Tally.ERP 9 Silver">
                            Tally 6.3 Silver to Tally.ERP 9 Silver
                          </option>
                          <option value="Tally 6.3 Gold to Tally.ERP 9 Gold">
                            Tally 6.3 Gold to Tally.ERP 9 Gold
                          </option>
                          <option value="Tally.ERP 9 Silver To Tally.ERP 9 Gold">
                            Tally.ERP 9 Silver To Tally.ERP 9 Gold
                          </option>
                          <option value="Tally Corporate Training">
                            Tally Corporate Training
                          </option>
                          <option value="Tally Customisation">
                            Tally Customisation{' '}
                          </option>
                          <option value="Tally On Cloud Services">
                            Tally On Cloud Services
                          </option>
                          <option value="Tally Implementation Services ">
                            Tally Implementation Services 
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>Payment Options*</p>
                    </div>
                    <div className="col-md-6">
                      {/* <Payment /> */}
                      <div className="form-group">
                        <select
                          name="payment"
                          className="form-control"
                          required={true}
                        >
                          <option value="">Please select...</option>
                          <option value="product">cash</option>
                          <option value="product">credit</option>
                          <option value="product">UPI</option>
                          <option value="product">Etc</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>
                        Any specific requirement related to Services or
                        Solution?
                      </p>
                    </div>
                    <div className="col-md-6">
                      <textarea
                        id="textarea"
                        name="w3review"
                        rows={4}
                        cols={50}
                        className="w-100"
                        defaultValue={' '}
                      />
                    </div>
                    <div className="col-md-12 text-center mt-4">
                      <button className="btn">
                        <span>Send Messages</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default buyoffline
