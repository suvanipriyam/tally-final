import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const remoteAccess = () => {
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
          backgroundPosition: 'center 120.63px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>About Tally Erp9 Software</h1>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Tally Erp9 Softwarex
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <Marquee className="theme-bg marqueeData">
        <h1>
          Top Tally Solutions Dealers and Partners across New Delhi - Gurgaon -
          Noida - Faridabad - NCR | Tally Software Dealers and Solution Provides
          - Across New Delhi - NCR - Gurgaon - Noida
        </h1>
      </Marquee>

      <section className="pb-3">
        <div className="container">
          <div className="row justify-content-center flex-flow-row-reverse">
            <div className="col-md-4">
              <div className="tab-head">
                <h4 className="service-head mb-0">Tally Products</h4>
                <div
                  id="accordion"
                  className="accordion tabArea"
                  style={{
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    paddingTop: '15px',
                    paddingBottom: '15px',
                  }}
                >
                  <Accordian />
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Tally Products</h4>
                <div id="accordion" className="accordion tabArea">
                  {/*<div class="card-header1">*/}
                  {/*  <h6 class="mb-0">*/}
                  {/*    <Link href="tally-erp9-software-quotation.php" class="collapsed">Our Quotation</a>*/}
                  {/*  </h6>*/}
                  {/*</div>*/}
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/customization/dedicated"
                        className="collapsed"
                      >
                        Customization Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/training/site"
                        className="collapsed"
                      >
                        Tally Corporate Training
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/netsubscription"
                        className="collapsed"
                      >
                        Tally.Net Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/advisoryservices"
                        className="collapsed"
                      >
                        Business Advisory Services
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link href="/services/supportcover" className="collapsed">
                        {' '}
                        Annual Support Cover
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/services/syncimplementaion"
                        className="collapsed"
                      >
                        {' '}
                        Data Synchronization
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/download/instantsupport"
                        className="collapsed"
                      >
                        Priority Tally Support
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Useful Links</h4>
                <div id="accordion" className="accordion tabArea">
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/addonmodules"
                        className="collapsed"
                      >
                        Tally Academy Solution
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/corpmanangement"
                        className="collapsed"
                      >
                        Corporate Management
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/verticalsolutions"
                        className="collapsed"
                      >
                        Vertical Solutions for Tally{' '}
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/solutions/tallyintegration"
                        className="collapsed"
                      >
                        Tally Integration
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link href="/company/clientage" className="collapsed">
                        Our Esteemed Clientage
                      </Link>
                    </h6>
                  </div>
                  <div className="card-header1">
                    <h6 className="mb-0">
                      <Link
                        href="/download/instantsupport"
                        className="collapsed"
                      >
                        Instant Support
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="tab-head">
                <h4 className="service-head mb-0">Ask for a service</h4>
                <div
                  className="tabArea"
                  style={{
                    paddingTop: '50px',
                    paddingRight: '15px',
                    paddingBottom: '50px',
                  }}
                >
                  <FormComponent />
                </div>
              </div>{' '}
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="section-title">
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="client-border-2 mt-3 mb-3">
                      <div className="client-heading">
                        <p>Remote Access</p>
                      </div>
                      <div className="section-title">
                        <h2 className="title p-3">Remote Access</h2>

                        <h6 className="p-3">
                          Manage Your Business on the Move...! Trusted Remote
                          Access in Tally.ERP 9
                        </h6>

                        <p className="p-3">
                          The concept of 'remote' arose from the limitations on
                          business owners and staff from traditional software
                          systems that seriously restricted what could be done,
                          when it could be initiated and by whom, from outside
                          their offices and factories. More often than not when
                          a business closed for the day its data was effectively
                          locked. (The same effect when the owner went home or
                          traveled outside the city.) The revolutionary Remote
                          Access in Tally.ERP 9 makes regular functions
                          available outside the physical confines of the
                          premises.
                        </p>

                        <img
                          style={{ marginLeft: '25px' }}
                          src="/images/RemoteAccess.gif"
                          width="540"
                          height="270"
                        />

                        <p className="p-3">
                          <strong>
                            Various usage scenarios of Tally.ERP 9 Remote
                            Access:
                          </strong>
                        </p>

                        <ul className="akm">
                          <li>
                            <strong>Manage business from home</strong>: <br />
                            You do not have to be present in your office any
                            more to know the latest update on your business. You
                            can plan your day in advance by checking status of
                            payables and receivable, pending orders, stock
                            status etc in the morning, before you reach office.
                            Delegate and plan work better.
                          </li>

                          <li>
                            <strong>Business on the move</strong>: <br />
                            Your absence from office does not affect the
                            visibility to business anymore. Access your business
                            data from a laptop, cyber cafe or even computer in
                            the hotel where you are staying. Stay connected to
                            your business without being involved.
                          </li>

                          <li>
                            <strong>Enhance response time to customers</strong>:
                            <br />
                            Sales staff in the field can access customer's
                            outstanding statements for immediate reference or
                            discussion. Also before booking a new order or
                            promising delivery dates, a sales person can check
                            the stock status and availability of goods by using
                            Tally.ERP 9 installed on the customer's computer.
                          </li>

                          <li>
                            <strong>
                              Chartered Accountant can access your business data
                              sitting in his/her office
                            </strong>
                            :<br />
                            Enable remote access to the Chartered Accountant to
                            save timeb and money in receiving expert advice.
                            Chartered accountant and his/her article clerks can
                            access your business data and provide tax
                            computation, compliance and audit advices without
                            having to visit your office. This can help you with
                            continuous compliance.
                          </li>

                          <li>
                            <strong>
                              A Tally expert can resolve your support queries
                              remotely
                            </strong>
                            : <br />
                            Solution to support issues do not have to wait any
                            more. Provide one time access to a Tally expert or a
                            solution provider to fix your product, customisation
                            or any other support issues instantaneously. This
                            can save your business the delay in problem
                            resolution.
                          </li>

                          <li>
                            <strong>
                              Maintain personal account at home which can also
                              be accessed from your office.
                            </strong>
                            <br />
                            The Tally.NET ID is the user's Identity, Tally.NET
                            servers Authenticate the user as being a valid user;
                            you decide what the user is authorised to do.{' '}
                          </li>
                        </ul>

                        <p className="p-3">
                          <strong>
                            Your Business Requires You To Do Remote Edit of
                            Business Transactions?
                          </strong>
                        </p>

                        <p className="p-3">
                          A feature essentially developed for people on the move
                          with a capability to rectify or alter transactions or
                          masters from anywhere. Tally.ERP 9 will be enabled to
                          edit transactions and masters from a remote location.{' '}
                          <br />
                          <br />
                          This feature fundamentally helps business owners or
                          auditors to amend the classification of master or
                          transactions without actually being present at the
                          business location.{' '}
                        </p>

                        <p className="p-3">
                          It is necessary to create a user with the required
                          permission and connect the company to Tally.NET
                          server. The business owner/auditor logs in from a
                          remote location even with Tally.ERP 9 running in
                          Educational mode.
                        </p>
                      </div>
                    </div>
                  </div>
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

export default remoteAccess
