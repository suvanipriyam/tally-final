import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const shoper9HO = () => {
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
                  {/*    <Link href="tally-erp9-software-quotation.php" class="collapsed">Our Quotation</Link>*/}
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
                        <p>Shoper 9 HO</p>
                      </div>
                      <div className="p-3">
                        <p>
                          When you have more than one store (whether it is your
                          own store or of a franchisee) and one or more
                          warehouses, managing your enterprise centrally may be
                          required. Shoper 9 HO fulfills these requirements.
                        </p>

                        <p>
                          What can you manage centrally? Since reporting and
                          control are best managed when the same SKU (stock
                          keeping unit/item code) and categories are used
                          uniformly, you can define these at the HO and have
                          them flow to the POS locations. Other masters are also
                          supported, including price lists, promotions,
                          discounts, customer &amp; supplier lists and taxes.
                        </p>

                        <p>
                          Keeping in mind that connectivity can never be 100%,
                          the data architecture is de-centralised. This means
                          that each store has its own local database, and these
                          databases are replicated at the HO. One additional
                          advantage this design brings is that you have two
                          copies of the database - this will come in use in case
                          of a disaster and no backups are available at the
                          stores!
                        </p>

                        <p>
                          Data transfer between POS &amp; HO is via the Internet
                          and several methods are supported depending on the
                          local connectivity conditions – each store can employ
                          the connectivity that suits it the best. This data
                          synchronisation can be scheduled to happen at regular
                          intervals - even this can be controlled by the HO.
                        </p>

                        <p>
                          All decision support is available centrally at the HO
                          and you get access to over a 100 reports that you can
                          take across stores &amp; groups of stores (grouped any
                          way you need to).
                        </p>

                        <p>
                          When you need to add another store, Shoper 9 HO
                          supports rapid deployment - you can bring up a store
                          to full operation in about half a day. Specific store
                          settings and configurations can be copied into a
                          template and deployed at the new store. All master
                          information can be automatically pulled in from the
                          HO.
                        </p>

                        <p>
                          HO supports centralised management of indents from the
                          store, generation of consolidated Purchase Orders and
                          integration with warehouses for dispatches.
                        </p>

                        <p>
                          <strong>Budgeting:</strong>
                        </p>

                        <p>
                          Shoper 9 HO supports you with basic retail sales
                          planning. You can set the plan based on Quantity/Value
                          or both for a store location for all the months in the
                          year. For the same store you can fine tune the plan
                          based on the product mix the store has.
                        </p>

                        <p>
                          You can track the sales plan vs actual based on the
                          level of planning you have set.
                        </p>

                        <p>
                          <strong>Housekeeping:</strong>
                        </p>

                        <p>
                          Shoper 9 HO offers you utilities from diagnosing
                          issues, correcting issues and re configuring system
                          setting as per business changes.
                        </p>

                        <p>
                          Though Shoper 9 HO stores data on a sql server
                          database, you could manage many of the sql operations
                          like database tuning, data backups within the product.
                          You could also manage clearing old log files within
                          the product.
                        </p>

                        <p>
                          If a store data goes down for whatever reason, you can
                          still send the store data from your head office to
                          your store to continue operation. You can still
                          continue without a store data backup. On the contrary
                          there is flexibility for you to allow store backup to
                          be restored at the store location and resynchronize
                          the information.
                        </p>

                        <p>
                          If you are a single store, options to backup, restore,
                          compact databases , database tuning are available to
                          you within the product and you do not need to install
                          third party software to manage your store database.
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

export default shoper9HO
