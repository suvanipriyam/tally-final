import React, { FormEvent, useEffect, useState } from 'react'
import NavComponent from './NavComponent'
import { Pin, ShoppingCart, User } from 'lucide-react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FormComponent from '@components/FormComponent'
import Link from 'next/link'
interface FormData {
  name: string
  email: string
  phone: string
  select: string
}
const RapidResponseCenter = () => {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    select: '',
  })
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Rapid Support Center
      </Button> */}





      <Button
        onClick={handleShow}
        style={{ marginTop: '5px', marginBottom: '5px' }}
      >
        <a
          className="btn"
          style={{
            color: 'white',
            fontSize: '12px',
            padding: '0px',
            marginTop: '-5px',
          }}
        >
          <User size={12} className="hidden lg:flex" />
          <span style={{ marginLeft: '10px' }}>Rapid Support Center</span>
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

const ConditionNavbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  const checkScreenSize = () => {
    console.log('Window Width:', window.innerWidth)

    // Debugging: Log the breakpoint and result
    const breakpoint = 992 // Adjust as needed
    const result = window.innerWidth < breakpoint
    console.log(`Is Small Screen? ${result}`)

    setIsSmallScreen(result)
  }

  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Normal Navbar for larger screens
  const largeNavbar = (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light rounded-full ${
        isSticky ? 'fixed-top' : ''
      }`}
    >
     <button
  className="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
  style={{ backgroundColor: '#ffff', borderRadius:'50px'}}
>
 
        <span className="navbar-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav w-100 justify-content-center">
          <ul className="navbar-nav w-100 justify-content-center mr-auto">
            <li className="nav-item">
              {' '}
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              {' '}
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                <span>Company</span>
              </Link>
              <div className="dropdown-menu">
                <ul className="list-unstyled">
                  <li>
                    <Link href="/company/about">About Us</Link>
                  </li>
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="#"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>GLOWIPS Team</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/company/associates">Our Associates</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="#"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>Customers</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/company/projects">Featured Projects</Link>
                      </li>
                      <li>
                        <Link href="/company/clientage">
                          Our Esteemed Clientage{' '}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item dropdown">
              {' '}
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Products
              </Link>
              <div className="dropdown-menu">
                <ul className="list-unstyled">
                  <li>
                    <Link href="/products/erp9">Tally .ERP 9</Link>
                  </li>
                  <li>
                    <Link href="/products/erp9auditors">
                      Tally .ERP 9 - Auditors Edition
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/shoper9">Tally Shoper 9</Link>
                  </li>
                  <li>
                    <Link href="/products/developer">Tally Developer</Link>
                  </li>
                  <li>
                    <Link href="/products/erp9rental">Tally ERP-9 Rental</Link>
                  </li>
                  <li>
                    <Link href="/products/quotation">Our Quotations</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item dropdown">
              {' '}
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Services
              </Link>
              <div className="dropdown-menu">
                <ul className="list-unstyled">
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="#"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>Tally Academy</span>
                    </Link>
                    <ul className="dropdown-menu">
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
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="#"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>Priority Tally Support</span>
                    </Link>
                    <ul className="dropdown-menu">
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
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="#"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>Implementation Service</span>
                    </Link>
                    <ul className="dropdown-menu">
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
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="#"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>Customization Service</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/services/customization/invoice">
                          Invoice Customization
                        </Link>
                      </li>
                      <li className="dropdown dropdown-submenu">
                        <Link
                          href="#"
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Module Customization
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link
                              href="\assets\Our-Deluxe-ERP-Module.pdf"
                              target="_blank"
                            >
                              Our Deluxe ERP Module
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="\assets\Auto-Alias-Part-Number-Creation-Module.pdf"
                              target="_blank"
                            >
                              Auto Part No/ Alias Creation Module
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="\assets\Auto-Batch-No-Creation-Module-Glowips.pdf"
                              target="_blank"
                            >
                              Auto Batch No Module
                            </Link>
                          </li>
                          <li>
                            <Link href="#">Sales Register Module</Link>
                          </li>
                          <li>
                            <Link
                              href="\assets\delete-master-module-by-Glowips.pdf"
                              target="_blank"
                            >
                              Master Deletion Module
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="\assets\Enhanced-Customized-Reporting-Glowips.pdf"
                              target="_blank"
                            >
                              Enhanced Reporting Module
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="\assets\ERP-reporting-Module-by-Glowips.pdf"
                              target="_blank"
                            >
                              ERP Reporting Module
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="\assets\Label-Printing-module-by-Glowips.pdf"
                              target="_blank"
                            >
                              Label Printing Module
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="\assets\Month-wise-outstanding-module-by-Glowips.pdf"
                              target="_blank"
                            >
                              Month Wise Outstanding Module
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="\assets\Multiple-Email-Setting-by-Glowips.pdf"
                              target="_blank"
                            >
                              Multiple Email Setting Module
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="\assets\Party-wise-Item-Discount-module-by-Glowips.pdf"
                              target="_blank"
                            >
                              Party Wise Discount Module
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="\assets\Purchase-Requisition-Use-Module.pdf"
                              target="_blank"
                            >
                              Purchase Requisition Module
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="\assets\Voucher-Approval-Module-by-glowips.pdf"
                              target="_blank"
                            >
                              Voucher Approval Module
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/services/customization/dedicated">
                          Dedicated Customization
                        </Link>
                      </li>
                    </ul>
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
            </li>
            <li className="nav-item dropdown">
              {' '}
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Solution
              </Link>
              <div className="dropdown-menu">
                <ul className="list-unstyled">
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="/solutions/verticalsolutions"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>Vertical Solutions for Tally.ERP 9</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          href="\assets\Jeweler-Shop-Customization.pdf"
                          target="_blank"
                        >
                          Jewellery Industry
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\GLOWIPS-MANUFACTURING-MODULE-PYARELAL-MODULE-WISE-PROJECT.pdf"
                          target="_blank"
                        >
                          Manufacturing Industry
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\electronic-showroom-module-by-GLowips.pdf"
                          target="_blank"
                        >
                          Electronic Showroom Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\Hotel-Restaurant-Module-for-Glowips.pdf"
                          target="_blank"
                        >
                          Hotel &amp; Restaurant
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\School-and-college-accounts-management-by-Glowips.pdf"
                          target="_blank"
                        >
                          School &amp; College
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\Training-institute-Module-by-Glowips.pdf"
                          target="_blank"
                        >
                          Training Institute
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\Chit-Fund-Module.pdf"
                          target="_blank"
                        >
                          Chit Fund Module
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\AUTOMOBILE-Module-Compatibility-Mode.pdf"
                          target="_blank"
                        >
                          Automobile Module
                        </Link>
                      </li>
                      <li>
                        <Link href="\assets\CRM-Module.pdf" target="_blank">
                          CRM Module
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\ERP-Manufacturing-MOdule-Part-1.pdf"
                          target="_blank"
                        >
                          ERP Manufacturing Module
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\ERP-BUS-Module-for-Schools-College-Compatibility-Mode.pdf"
                          target="_blank"
                        >
                          ERP BUS Module for Schools, College
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\Builders-PropertyDevelopers-module-for-GLOWIPS.pdf"
                          target="_blank"
                        >
                          Builders &amp; Property
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\Tally-ERP-for-Advt.pdf"
                          target="_blank"
                        >
                          Tally ERP for Advertisement
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="/solutions/cusomizationsol"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>Customization Solutions</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="/solutions/customizationsolutions/analytic">
                          Analytic Designing
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/customizationsolutions/implementationtraining">
                          Implementation &amp; Training
                        </Link>
                      </li>
                      <li>
                        <Link href="/solutions/customizationsolutions/postsalessupport">
                          Post Sales Support
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="\solutions\invoicecust"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>Tally Ready Invoice Customization</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="\solutions\readyinvoicecust\preprinted">
                          Preprinted Invoices
                        </Link>
                      </li>
                      <li>
                        <Link href="\solutions\readyinvoicecust\service">
                          Service Invoice
                        </Link>
                      </li>
                      <li>
                        <Link href="\solutions\readyinvoicecust\manufacturing">
                          Manufacturing Invoice
                        </Link>
                      </li>
                      <li>
                        <Link href="\solutions\readyinvoicecust\trading">
                          Trading Invoice
                        </Link>
                      </li>
                      <li>
                        <Link href="\solutions\readyinvoicecust\clearingforwarding">
                          Clearing and Forwarding Invoice
                        </Link>
                      </li>
                      <li>
                        <Link href="\solutions\readyinvoicecust\autoparts">
                          Auto Parts Invoice
                        </Link>
                      </li>
                      <li>
                        <Link href="\solutions\readyinvoicecust\garment">
                          Garment Invoice
                        </Link>
                      </li>
                      <li>
                        <Link href="\solutions\readyinvoicecust\simple">
                          Simple Invoice
                        </Link>
                      </li>
                      <li>
                        <Link href="\solutions\readyinvoicecust\miscellaneous">
                          Miscellaneous Invoices
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="/solutions/addonmodules"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>Tally add-on Modules</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          href="\assets\GARMENT-INDUSTRY-MODULE.pdf"
                          target="_blank"
                        >
                          Garment Industry Module
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\Vehicle-Sales-Module.pdf"
                          target="_blank"
                        >
                          Vehicle Sales Module{' '}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\PARTY-WISE-OUTSTANDING-MODULE.pdf"
                          target="_blank"
                        >
                          Party Wise Outstanding Module{' '}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\STANDARD-TERMS-AND-CONDITION-MODULE.pdf"
                          target="_blank"
                        >
                          Standard Terms and Condition Module{' '}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\THREE-DISCOUNT-COLOUM-MODULE.pdf"
                          target="_blank"
                        >
                          Three Discount Column Module{' '}
                        </Link>
                      </li>
                      <li>
                        <Link href="\assets\AUTO-PHYSICAL-STOCK-VERIFICATION-MODULE.pdf">
                          Auto Physical Stock Verification
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\GODOWN-ADDRESS-IN-PRINT-MODULE.pdf"
                          target="_blank"
                        >
                          Godown Address in Print Module{' '}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\Petrol-Pump-Module.pdf"
                          target="_blank"
                        >
                          Petrol Pump Module{' '}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\STOCK-GROUP-WISE-ITEM-FILTER-MODULE.pdf"
                          target="_blank"
                        >
                          Stock Group Wise Item Filter{' '}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\1-CLICK-INSTRUMENT-DETAIL-IN-INVOICE.pdf"
                          target="_blank"
                        >
                          1 Click Instrument Detail Module
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="/solutions/tallyintegration"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>Tally Integration</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          href="\assets\GPS-Integration-Compatibility-Mode.pdf"
                          target="_blank"
                        >
                          GPS Integration
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\Hypper-Market-Compatibility-Mode.pdf"
                          target="_blank"
                        >
                          Hyper Market
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="\assets\Remote-Location-Barcode-Scanner-Integration-Compatibility-Mode.pdf"
                          target="_blank"
                        >
                          Remote Location Barcode Scanner Integration
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-submenu">
                    {' '}
                    <Link
                      href="/solutions/corpmanangement"
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <span>Corporate Management</span>
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link href="\solutions\corporatemanagement\managementconsultancy">
                          Management Consultancy Services
                        </Link>
                      </li>
                      <li>
                        <Link href="\solutions\corporatemanagement\businessdev">
                          Business Development
                        </Link>
                      </li>
                      <li>
                        <Link href="\solutions\corporatemanagement\franchiseservices">
                          Our Franchise Services
                        </Link>
                      </li>
                      <li>
                        <Link href="\solutions\corporatemanagement\erpcorporate">
                          ERP for Corporate&apos;s and Industries{' '}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="\solutions\custombuiltsolutions">
                      Custom Built Solution
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item dropdown">
              {' '}
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Download
              </Link>
              <div className="dropdown-menu">
                <ul className="list-unstyled">
                  <li>
                    <Link href="/download/tallydownloads">Tally Downloads</Link>
                  </li>
                  <li>
                    <Link href="/download/instantsupport">Instant Support</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              {' '}
              <Link className="nav-link" href="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item-button">
              <div className="d-flex">
                <div className="social-icons fixed-header-social">
                  <ul className="list-inline">
                    <li>
                      <a href="http://www.facebook.com/TallySolution">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="http://www.pinterest.com/tallysoftware">
                        <Pin />
                      </a>
                    </li>
                    <li>
                      <a href="http://twitter.com/#!/TALLYSOLUTION">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="http://www.linkedin.com/pub/tally-customization-developers-delhi-ncr/38/5b/a7">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <Link href="tel:+919582927928">
                        <i className="fas fa-phone-alt" />
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:tallyproducts@gmail.com">
                        <i className="fas fa-envelope" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <RapidResponseCenter />
                <Button
                  variant="primary"
                  style={{ marginTop: '5px', marginBottom: '5px' }}
                >
                  <Link
                    className="btn"
                    href="/buyoffline"
                    style={{ color: 'white', fontSize: '12px', padding: '0px', marginTop:'-5px' }}
                  >
                    <ShoppingCart size={12} />
                    <span style={{ marginLeft: '10px' }}>Buy Tally</span>
                  </Link>
                </Button>
                {/*   <Button
        variant="primary"
        onClick={handleShow}
        style={{ marginTop: '5px', marginBottom: '5px' }}
      >
        <a
          className="btn"
          style={{ color: 'white', fontSize: '12px', padding:'0px' }}
        >
          <User size={12} className="hidden lg:flex" />
          <span style={{ marginLeft: '10px' }}>Rapid Support Center</span>
        </a>
      </Button> */}
              </div>
            </li>
            <li className="nav-item-button tally-international">
              <Link href="TALLYINTERNATIONAL/" target="_blank">
                <img
                  src="/images/tallyinternational.png"
                  className="tally-international-shake"
                  style={{
                    filter: 'invert(0)',
                    width: '200px',
                  }}
                />
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  )

  // Navbar for smaller screens (e.g., mobile devices)
  const smallNavbar = <NavComponent></NavComponent>

  return <div>{isSmallScreen ? smallNavbar : largeNavbar}</div>
}

export default ConditionNavbar
