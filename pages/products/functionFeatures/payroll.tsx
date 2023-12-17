import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const payroll = () => {
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
                        <p>Payroll</p>
                      </div>
                      <div className="section-title">
                        <h2 className="title p-3">Payroll</h2>

                        <h6 className="p-3">
                          Enjoy the Benefits of an Integrated Payroll
                        </h6>

                        <p className="p-3">
                          Tally.ERP 9 delivers integrated Payroll software which
                          is completely rewritten to provide all the necessary
                          Payroll Compliances. The software is capable of
                          handling simple Payslip generation in five easy steps
                          to complex associated processes - including handling
                          Loans and Advances, Salary revision and Arrear
                          calculation, Deductions and ad-hoc payments etc.
                        </p>

                        <h6 className="p-3">
                          Tally.ERP 9 Payroll module also covers a wide gamut of
                          functions such as:
                        </h6>

                        <ul className="akm">
                          <li>
                            Create and maintain the employee database viz.
                            contact details, personal details, bank account
                            details, statutory details etc., EXPAT details like
                            passport, Visa and work permit details.
                          </li>

                          <li>
                            Employee group or department wise categorisation.
                          </li>

                          <li>
                            Attendance, overtime, leave or production details
                            can be recorded.
                          </li>

                          <li>
                            Multiple salary structures can be created for
                            different group of employees. For example,
                            department wise salary structures and salary
                            processing.
                          </li>

                          <li>
                            Support Salary revision and arrear calculation both
                            as prospective and retrospective change.
                          </li>

                          <li>
                            Tracking of loans and advance paid to employees and
                            defining multiple criteria for recovery of such
                            advances. The loan / advances can be recovered in
                            complete or a number of installments from employee's
                            salary.
                          </li>

                          <li>
                            Complete support to implement Provident Fund and
                            Employee Insurance Schemes along with Professional
                            Tax calculation.
                          </li>

                          <li>
                            Supports Gratuity as per the specified criteria.
                          </li>
                        </ul>

                        <h6 className="p-3">
                          Benefits of using Tally.ERP 9 Payroll
                        </h6>

                        <ul className="akm">
                          <li>
                            Time spent on processing salaries, manual and paper
                            work can be cut down to a great extent.
                          </li>

                          <li>Accurate and timely salary processing.</li>

                          <li>
                            Tracking and reviewing of employee's absence and
                            salary calculation as per the attendance is much
                            easier.
                          </li>

                          <li>
                            {' '}
                            Generate the Payment Advice to instruct the bank for
                            salary payment.
                          </li>

                          <li>
                            Payslips can be printed, exported to Excel or
                            emailed to the respective email accounts of the
                            employees.
                          </li>

                          <li>
                            All payroll related reports can be generated with a
                            click of a button.
                          </li>

                          <li>
                            Above all, the Payroll feature is completely
                            integrated with Accounts.
                          </li>
                        </ul>

                        <p className="p-3">
                          <span>
                            The new Payroll Feature provides the following
                            Statutory Reports:
                          </span>
                        </p>

                        <p className="p-3">
                          <b>
                            Employees Provident Fund Computation &amp; Support:
                          </b>
                        </p>

                        <ul className="akm">
                          <li>
                            PF deduction &amp; contribution monthly statement
                          </li>

                          <li>PF Combined Challan</li>

                          <li> Form 5</li>

                          <li>Form 10</li>

                          <li>Form 12A</li>

                          <li>Form 3A</li>

                          <li>Form 6A etc.</li>
                        </ul>

                        <p className="p-3">
                          <b>ESI Computation &amp; Support:</b>
                        </p>

                        <ul className="akm">
                          <li>
                            ESI deduction &amp; contribution monthly statement
                          </li>

                          <li>Payment Challan</li>

                          <li>Form 3</li>

                          <li>Form 5</li>

                          <li>Form 6 etc.</li>
                        </ul>

                        <p className="p-3">
                          <b>
                            Professional Tax computation for all the states with
                            the following reports
                          </b>
                        </p>

                        <ul className="akm">
                          <li>PT Computation Report</li>

                          <li>PT Monthly Report...and more</li>
                        </ul>
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

export default payroll
