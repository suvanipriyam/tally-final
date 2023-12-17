import { FC, FormEvent, useState } from 'react'

import { FiHeart } from 'react-icons/fi'
import { CustomImage } from '@components/Utils/CustomImage'

import { CONFIG } from '@libs/config'
import { PROJECTS } from '@libs/config/projects'
import FooterForm from '@components/FooterForm'
import { Facebook, Linkedin, Mail, Phone, Pin, Twitter } from 'lucide-react'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FormComponent from '@components/FormComponent'
import ScrollFadeImage from './ScrollImage'

const FillForm = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button onClick={handleShow}>
        <a>
          <img
            src="/images/fillForm.png"
            className="footer-fillForm"
            style={{ filter: 'invert(0)' }}
          />
        </a>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'blue', fontWeight: 'bold' }}>
            Ask For A Service
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComponent />
        </Modal.Body>
      </Modal>
    </>
  )
}

export const Footer: FC = () => {
  return (
    <>
      <div className="footer-social">
        <a href="https://api.whatsapp.com/send?phone=+91&text=Hii">
          <img
            src="/images/whatsapp-icon.webp"
            className="footer-whatsapp"
            style={{ filter: 'invert(0)' }}
          />
        </a>
        <a href="tel:">
          <img
            src="/images/call-icon.webp"
            className="footer-call"
            style={{ filter: 'invert(0)' }}
          />
        </a>
        {/* <a>
          <img
            src="/images/fillForm.png"
            className="footer-fillForm"
            style={{ filter: 'invert(0)'}}
          />
        </a> */}
        <FillForm />
      </div>
      <div className="container">
        <div className="d-flex justify-content-center flex-flow-wrap">
          <Link className="btn btn-2 m-2" href="/">
            {' '}
            <span className="btn-icon btn-arrow" />
            <span className="btn-text ps-5 pe-5">Quotations</span>
          </Link>
          <Link className="btn btn-2 m-2" href="/contact">
            {' '}
            <span className="btn-icon btn-arrow" />
            <span className="btn-text ps-5 pe-5">More</span>
          </Link>
          <Link className="btn btn-2 m-2" href="/buyoffline">
            {' '}
            <span className="btn-icon btn-arrow" />
            <span className="btn-text ps-5 pe-5">Buy Offline</span>
          </Link>
          <Link
            className="btn btn-2 m-2"
            href="/assets/GLOWIPS-BROCHURE.pdf"
            target="_blank"
          >
            {' '}
            <span className="btn-icon btn-arrow" />
            <span className="btn-text ps-5 pe-5">Brochure</span>
          </Link>
          <Link
            className="btn btn-2 m-2"
            href="/services/support/datamigratioLink"
          >
            {' '}
            <span className="btn-icon btn-arrow" />
            <span className="btn-text ps-5 pe-5">Migrate</span>
          </Link>
        </div>
      </div>
      <footer className="primary-footer dark-bg">
        <div className="">
          <div className="container">
            <div
              className="row row align-items-end"
              style={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
              <div className="col-xl-8 col-lg-5 col-md-12 mt-5 mt-lg-0">
                <div className="row">
                  <div className="col-md-8">
                    <h4 className="mb-4 text-white">About Tally Solutions</h4>
                    <p className="mb-3">
                      Get the Most of Out of Your Tally Software, with extensive
                      Tally Solutions from Certified Professionals. We have
                      Solutions in Tally Software for All types of Industry.
                      Connect with us Today.
                    </p>
                    <div className="footer-cntct">
                      <ul className="media-icon list-unstyled">
                        <li>
                          <Mail />{' '}
                          <a href="mailto:tallyproducts@gmail.com">
                            tallyproducts@gmail.com
                          </a>
                        </li>
                        <li>
                          <Phone />{' '}
                          <a href="tel:+919582827928">+91 9582827928</a>
                        </li>
                      </ul>
                      <div className="social-icons social-colored mt-2 mb-3">
                        <ul className="list-inline">
                          <li className="social-facebook">
                            <a href="http://www.facebook.com/TallySolution">
                              <Facebook />
                            </a>
                          </li>
                          <li className="social-dribbble">
                            <a href="http://www.pinterest.com/tallysoftware">
                              <Pin />
                            </a>
                          </li>
                          <li className="social-skype">
                            <a href="http://twitter.com/#!/TALLYSOLUTION">
                              <Twitter />
                            </a>
                          </li>
                          <li className="social-linkedin">
                            <a href="http://www.linkedin.com/pub/tally-customization-developers-delhi-ncr/38/5b/a7">
                              <Linkedin />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
                    <h4 className="mb-4 text-white">Quick Links</h4>
                    <div className="footer-list">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/company/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/">Site Map</Link>
                        </li>
                        <li>
                          <Link href="/services/placement">Placement</Link>
                        </li>
                        <li>
                          <Link href="/products/erp9">Product</Link>
                        </li>
                        <li>
                          <Link href="/">Disclaimer</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
                    <h4 className="mb-4 text-white">Solution</h4>
                    <div className="footer-list">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/solutions/verticalsolutions">
                            {' '}
                            Vertical Solutions for Tally.ERP 9
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/cusomizationsol">
                            {' '}
                            Customization Solutions
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/invoicecust">
                            Tally Ready Invoice Customization
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/addonmodules">
                            Tally add-on Modules
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/tallyintegration">
                            Tally Integration
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/corpmanangement">
                            {' '}
                            Corporate Management
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/custombuiltsolutions">
                            Custom Built Solution
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h4 className="mb-4 text-white">Company</h4>
                    <div className="footer-list">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/company/about">GLOWIPS Team</Link>
                        </li>
                        <li>
                          <Link href="/company/associates">Our Associates</Link>
                        </li>

                        <li>
                          <Link href="/company/projects">
                            Featured Projects
                          </Link>
                        </li>
                        <li>
                          <Link href="/company/clientage">
                            Our Esteemed Clientage
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h4 className="mb-4 text-white">Download</h4>
                    <div className="footer-list">
                      <ul className="list-unstyled">
                        <li>
                          <Link href="/download/tallydownloads">
                            Tally Downloads
                          </Link>
                        </li>
                        <li>
                          onclick
                          <Link href="/download/instantsupport">
                            Instant Support
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
                    <div data-aos="fade-up">
                      {/* <img
                        src="/images/footer-rock.png"
                        width={200}
                        style={{ filter: 'invert(0)', marginTop: '240px' }}
                      /> */}
                      <ScrollFadeImage />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5 mt-md-0 "
                id="rapid_response"
              >
                <h4 className="mb-4 text-white">Connect With Us</h4>
                <div className="tabArea" style={{ paddingRight: '15px' }}>
                  <FooterForm />
                </div>
                <h4 className="mb-4 text-white">Services</h4>
                <div className="footer-list">
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/services/training/academy">
                        Tally Academy
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/training/site">
                        Tally Training at Site
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/training/academy">
                        Tally Training at Academy
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">Priority Tally Support</Link>
                    </li>
                    <li>
                      <Link href="/services/support/datarecovery">
                        Tally Data Recovery
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/support/passwordrecovery">
                        Tally Password Recovery
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/support/datamigration">
                        Data Migration
                      </Link>
                    </li>
                    <li>
                      <Link href="/tallyinternational">
                        International Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/implementation/incremental">
                        Incremental Implementation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/implementation/target">
                        Target Implementation
                      </Link>
                    </li>
                    <li>
                      <Link href="/assets/Our-Deluxe-ERP-Module.pdf">
                        Customization Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/customization/invoice">
                        Invoice Customization
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/assets/Our-Deluxe-ERP-Module.pdf"
                        target="_blank"
                      >
                        Module Customization
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/customization/dedicated">
                        Dedicated Customization
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/corporatetraining">
                        Tally Corporate Training
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/supportcover">
                        Annual Support Cover
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/netsubscription">
                        Tally .Net Subscription
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/syncimplementaion">
                        Synchronization Implementation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/advisoryservices">
                        Business Advisory Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/placement">Placement</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="secondary-footer theme-bg footer-pb-80"
          style={{ width: '100vw' }}
        >
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div
                  className="col-lg-12"
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  {' '}
                  <span>
                    Copyright 2023 Tally Solutions Design by{' '}
                    <u>
                      <a href="codemix.in">Codemix technologies</a>
                    </u>{' '}
                    | All Rights Reserved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
