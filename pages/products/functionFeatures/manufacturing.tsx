import React from 'react'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'

import Marquee from 'react-fast-marquee'
import Accordian from '@components/Accordian'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
const manufacturing = () => {
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
                        <p>Manufacturing</p>
                      </div>
                      <div className="">
                        <div className="section-title">
                          <h2 className="title p-3">Manufacturing</h2>

                          <h6 className="p-3">
                            Simple Manufacturing and Materials Management
                          </h6>

                          <p className="p-3">
                            Manufacturing business produces items with the usage
                            of machines, tools and labor. The core process of
                            manufacturing involves raw materials that are
                            transformed into finished goods on a large scale.
                            Such finished goods may be used for manufacturing
                            other, more
                          </p>

                          <p className="p-3">
                            complex products, such as household appliances or
                            automobiles, or sold to wholesalers, who in turn
                            sell them to retailers, who then sell them to end
                            users - the &quot;<strong>consumers&quot;.</strong>
                          </p>

                          <p className="p-3">
                            Businesses in Manufacturing can benefit immensely
                            from Tally.ERP 9 by the following functions and
                            features:
                          </p>

                          <p className="p-3">
                            <strong>
                              Stock Item Classification as Raw material, Work in
                              Progress, Finished goods:
                            </strong>
                            <br />
                            The user can classify stock items as per his
                            requirements. In manufacturing concerns the user
                            will primarily have three broad classifications
                            (Stock Groups) i.e.
                          </p>

                          <ul className="akm">
                            <li>Raw Materials</li>

                            <li>Work in Progress</li>

                            <li>Finished Goods</li>
                          </ul>

                          <p className="p-3">
                            All items that that are procured to manufacture a
                            particular item is called Raw Material &amp; is
                            grouped under the group 'Raw Materials', where as, a
                            product whose shape has changed, but has not reached
                            its finished stage is called Semi-finished item.
                            These items will be grouped under the Group
                            'Work-in-Progress' and any item that is changed its
                            shape / nature completely and reached the final form
                            to sell are called finished Goods and is grouped
                            under 'Finished goods' group. The user can also
                            create ledgers with the name Raw Materials,
                            Work-in-Progress and Finished goods under the group
                            Stock-in-Hand. Once the user has deactivated the
                            option 'Integrate Accounts with Inventory', based on
                            the Closing balances entered by the user, Tally.ERP
                            9 automatically displays the total of closing
                            balances of all the ledgers grouped under the group
                            Stock-in-Hand.
                          </p>

                          <p className="p-3">
                            <strong>
                              Bill of Material with auto adjustments of stock:
                            </strong>
                            <br />
                            In many industries, especially assembly units there
                            are number of components involved in the manufacture
                            of finished items. It is extremely difficult to
                            issue stock items each time a product is
                            manufactured. Such situations can be handled in
                            Tally.ERP 9 by using Bill of Material. To generate a
                            Bill of Material, create a new item (finished or
                            intermediate product) and specify the components
                            that go in to manufacturing of that
                            finished/intermediate product. Now, using
                            manufacturing journal, specify the quantity of items
                            to be manufactured. Tally.ERP 9 immediately selects
                            all items that go in to manufacturing of the
                            finished product and automatically adjusts
                            (decreases) the stock. Any additional manufacturing
                            cost like wages, power, water charges etc, can be
                            added to the value of the manufactured product.
                          </p>

                          <p className="p-3">
                            <strong>
                              Additional cost of Manufacturing with notional
                              value and percentage:
                            </strong>
                            <br />
                            When a product is manufactured, other than the
                            component cost, there are manufacturing costs like
                            labor, electricity, accessories etc, which will have
                            to be added to the cost of the product. In Tally.ERP
                            9, the additional cost can be added to the product
                            while entering stock Journals or at the time of
                            entering a manufacturing Journal (use B.O.M). The
                            user can specify additional cost as a % of the
                            component cost or even specify a notional value.
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

export default manufacturing
