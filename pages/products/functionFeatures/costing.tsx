import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const costing = () => {
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
                        <p>Costing</p>
                      </div>
                      <div className="">
                        <div className="section-title">
                          <h2 className="title p-3">Costing</h2>

                          <h6 className="p-3">
                            Control &amp; Optimise Your Costs Using Tally.ERP 9
                          </h6>

                          <p className="p-3">
                            Costing is concerned with recording, classifying and
                            summarising costs for determination of costs of
                            products or services, planning, controlling and
                            reducing such costs and furnishing of information to
                            management for effective decision making.
                          </p>

                          <p className="p-3">
                            Businesses can benefit from various Costing
                            facilities in Tally.ERP 9. Essential costing
                            functions are listed below:
                          </p>

                          <p className="p-3">
                            <strong>
                              Optimise Costs Using Cost Centre &amp; Categories
                            </strong>
                          </p>

                          <p className="p-3">
                            A business, for achieving optimum
                            cost-effectiveness, assigns its controllable costs
                            to cost centres. Any unit of the organisation to
                            which costs can be allocated is a Cost Centre. For
                            Example: Branches, Departments, Projects, Products,
                            Persons and so on.
                          </p>

                          <p className="p-3">
                            Tally.ERP 9 enables a business to allocate
                            transactions to Cost Centres. For example, besides
                            the ledger-wise accounting allocation, a transaction
                            may be allocated amongst different Branches.
                            Tally.ERP 9 allows to compare one Cost Centre with
                            another, hence provides information regarding the
                            performance of each Cost / Profit Centre.
                          </p>

                          <p className="p-3">
                            Cost Category is a cluster of related cost centres.
                            Cost Categories allows parallel allocation of the
                            same transaction in multiple dimensions. In many
                            cases, a single transaction may have to be allocated
                            to more than one type of Cost Centre. Cost
                            Categories enable allocating costs to parallel sets
                            of Cost Centres i.e. the same amount can be
                            allocated to more than one cost centre.
                          </p>

                          <span>Cost Centre Reports</span>

                          <p className="p-3">
                            <strong>Category Summary:</strong>
                            <br />
                            This report displays the summary of all the cost
                            centres under a cost category.
                          </p>

                          <p className="p-3">
                            <strong>Cost Centre Break-up:</strong>
                            <br />
                            This report displays Ledger and Group summary
                            information for the selected cost centre.
                          </p>

                          <p className="p-3">
                            <strong>Ledger Break-up:</strong>
                            <br />
                            This report displays the summary information of all
                            Cost Centres for the selected Ledger.
                          </p>

                          <p className="p-3">
                            <strong>Group Break-up:</strong>
                            <br />
                            This report displays the summary information of all
                            Cost Centres for the selected Group.
                          </p>

                          <p className="p-3">
                            <strong>
                              Automatic Cost Allocation &amp; Control:
                            </strong>
                            <br />
                            Cost Centre Classes are used to automate Cost Centre
                            allocations in transactions. You can use cost centre
                            classes if you do not wish to manually allocate
                            amounts to cost centres in each entry.
                          </p>

                          <p className="p-3">
                            <strong>Cost Estimation &amp; Control:</strong>
                            <br />
                            Cost estimation is the process of pre-determining
                            the cost of a certain product job or order. Such
                            pre-determination may be required for several
                            purposes. Some of the purposes are as follows:
                          </p>

                          <ul className="akm">
                            <li>Budgets &amp; Variance</li>

                            <li>
                              Preparation of financial statements (valuation of
                              stocks)
                            </li>

                            <li>Job Costing</li>
                          </ul>

                          <p className="p-3">
                            <strong>Budgets &amp; Variance:</strong>
                            <br />
                            Budget is a detailed plan of income and expenses
                            expected over a certain period of time. A budget can
                            provide guidelines for managing future investments
                            and expenses. Every Business has its objectives and
                            goals and must have an efficient mechanism to set
                            its targets and appraisal of achievements in respect
                            of the target.
                          </p>

                          <p className="p-3">
                            To achieve the important managerial controls,
                            Tally.ERP 9 provides the flexible system of Budgets
                            for Group, Ledger or Cost Centres. Tally.ERP 9
                            allows creating multiple Budgets for different
                            purposes. For Example: Sales budget, Expenses
                            budget, etc. You can compare the actual performance
                            with budge created and also get variance report to
                            ensure corrective measures, if required.
                          </p>

                          <p className="p-3">
                            <strong>Stock Valuation:</strong>
                            <br />
                            Tally.ERP 9 allows you to view the effects of
                            different stock valuation methods on the closing
                            stock value. You can view a columnar display of
                            different stock valuations.
                          </p>

                          <p className="p-3">
                            Each stock item can be set up to have a different
                            stock valuation method (E.g. Average Cost, Average
                            price, Last Purchase cost, Last Sales price, FIFO).
                            In some instances, a particular method of valuation
                            may be required, for example, to assess the
                            replacement value or saleable value of stock.
                            Tally.ERP 9 displays stocks in any or all the
                            valuation methods dynamically and simultaneously,
                            without any complicated procedure.
                          </p>

                          <p className="p-3">
                            <strong>Job Costing:</strong>
                            <br />
                            Job Costing is a form of specific order costing,
                            which applies to a job undertaken according to
                            customer requirements and specifications. It applies
                            to industries which produce definite products
                            against individual orders from customers.
                          </p>

                          <p className="p-3">
                            Some industries where job costing plays an important
                            role are: construction, manufacturing, printing,
                            automobile, etc.
                          </p>

                          <p className="p-3">
                            Tally.ERP 9 offers comprehensive Job Costing that
                            helps businesses in project / job order mode to
                            estimate costs and track them.
                          </p>
                        </div>
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

export default costing
