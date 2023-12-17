import React, { FormEvent, useEffect, useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FormComponent from '@components/FormComponent'
import { ShoppingCart } from 'lucide-react'

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
      <Button size='lg'  onClick={handleShow} id='colr'>
        Rapid Support Center
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

const CollapsibleNavbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false)

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen)
  }
  const linkStyle = {
    color: '#fff', // Set your desired text color
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

       // Cleanup the event listener on component unmount
       return () => {
         window.removeEventListener('scroll', handleScroll)
       }
     }, [])


  return (
    <Navbar
      expand="lg"
      bg="light"
      className={`navbar navbar-expand-lg navbar-light bg-light ${
        isSticky ? 'fixed-top' : ''
      }`}
    >
      <Navbar.Toggle onClick={toggleNavbar} aria-controls="navbar-nav" />
      <Navbar.Collapse
        id="navbar-nav"
        className={`${isNavbarOpen ? 'show' : ''}`}
      >
        <Nav
          className="ml-auto justify-content-start"
          style={{ marginTop: '10px' }}
        >
          <Nav.Link className="nav-link" href="/" style={{ marginTop: '10px' }}>
            Home
          </Nav.Link>
          <NavDropdown
            title="Company"
            id="basic-nav-dropdown"
            style={{ marginTop: '10px' }}
          >
            <NavDropdown.Item href="/company/about">About Us</NavDropdown.Item>
            <NavDropdown title="GLOWIPS Team" id="team-dropdown">
              <NavDropdown.Item href="/company/associates" style={linkStyle}>
                Our Associates
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Customers" id="customers-dropdown">
              <NavDropdown.Item href="/company/projects" style={linkStyle}>
                Featured Projects
              </NavDropdown.Item>
              <NavDropdown.Item href="/company/clientage" style={linkStyle}>
                Our Esteemed Clientage
              </NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
          <NavDropdown
            title="Products"
            id="products-dropdown"
            style={{ marginTop: '10px' }}
          >
            <NavDropdown.Item href="/products/erp9" style={linkStyle}>
              Tally .ERP 9
            </NavDropdown.Item>
            <NavDropdown.Item href="/products/erp9auditors" style={linkStyle}>
              Tally .ERP 9 - Auditors Edition
            </NavDropdown.Item>
            <NavDropdown.Item href="/products/shoper9" style={linkStyle}>
              Tally Shoper 9
            </NavDropdown.Item>
            <NavDropdown.Item href="/products/developer" style={linkStyle}>
              Tally Developer
            </NavDropdown.Item>
            <NavDropdown.Item href="/products/erp9rental" style={linkStyle}>
              Tally ERP-9 Rental
            </NavDropdown.Item>
            <NavDropdown.Item href="/products/quotation" style={linkStyle}>
              Our Quotations
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title="Services"
            id="services-dropdown"
            style={{ marginTop: '10px' }}
          >
            {/* Tally Academy */}
            <NavDropdown title="Tally Academy" id="tally-academy-dropdown">
              <NavDropdown.Item
                href="/services/training/site"
                style={linkStyle}
              >
                Tally Training at Site
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/services/training/academy"
                style={linkStyle}
              >
                Tally Training at Academy
              </NavDropdown.Item>
            </NavDropdown>

            {/* Priority Tally Support */}
            <NavDropdown title="Priority Tally Support" id="support-dropdown">
              <NavDropdown.Item
                href="/services/support/datarecovery"
                style={linkStyle}
              >
                Tally Data Recovery
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/services/support/passwordrecovery"
                style={linkStyle}
              >
                Tally Password Recovery
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/services/support/datamigration"
                style={linkStyle}
              >
                Data Migration
              </NavDropdown.Item>
            </NavDropdown>

            {/* Implementation Service */}
            <NavDropdown
              title="Implementation Service"
              id="implementation-dropdown"
            >
              <NavDropdown.Item
                href="/services/implementation/incremental"
                style={linkStyle}
              >
                Incremental Implementation
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/services/implementation/target"
                style={linkStyle}
              >
                Target Implementation
              </NavDropdown.Item>
            </NavDropdown>

            {/* Customization Service */}
            <NavDropdown
              title="Customization Service"
              id="customization-dropdown"
            >
              <NavDropdown.Item
                href="/services/customization/invoice"
                style={linkStyle}
              >
                Invoice Customization
              </NavDropdown.Item>

              {/* Module Customization */}
              <NavDropdown
                title="Module Customization"
                id="module-customization-dropdown"
              >
                <NavDropdown.Item
                  href="/assets/Our-Deluxe-ERP-Module.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  Our Deluxe ERP Module
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/assets/Auto-Alias-Part-Number-Creation-Module.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  Auto Part No/ Alias Creation Module
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/assets/Auto-Batch-No-Creation-Module-Glowips.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  Auto Batch No Module
                </NavDropdown.Item>
                <NavDropdown.Item href="#" style={linkStyle}>
                  Sales Register Module
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/assets/delete-master-module-by-Glowips.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  Master Deletion Module
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/assets/Enhanced-Customized-Reporting-Glowips.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  Enhanced Reporting Module
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/assets/ERP-reporting-Module-by-Glowips.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  ERP Reporting Module
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/assets/Label-Printing-module-by-Glowips.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  Label Printing Module
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/assets/Month-wise-outstanding-module-by-Glowips.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  Month Wise Outstanding Module
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/assets/Multiple-Email-Setting-by-Glowips.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  Multiple Email Setting Module
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/assets/Party-wise-Item-Discount-module-by-Glowips.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  Party Wise Discount Module
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/assets/Purchase-Requisition-Use-Module.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  Purchase Requisition Module
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/assets/Voucher-Approval-Module-by-glowips.pdf"
                  target="_blank"
                  style={linkStyle}
                >
                  Voucher Approval Module
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Item
                href="/services/customization/dedicated"
                style={linkStyle}
              >
                Dedicated Customization
              </NavDropdown.Item>
            </NavDropdown>

            {/* Additional Services */}
            <NavDropdown.Item
              href="/services/corporatetraining"
              style={linkStyle}
            >
              Tally Corporate Training
            </NavDropdown.Item>
            <NavDropdown.Item href="/services/supportcover" style={linkStyle}>
              Annual Support Cover
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/services/netsubscription"
              style={linkStyle}
            >
              Tally .Net Subscription
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/services/syncimplementaion"
              style={linkStyle}
            >
              Synchronization Implementation
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/services/advisoryservices"
              style={linkStyle}
            >
              Business Advisory Services
            </NavDropdown.Item>
            <NavDropdown.Item href="/services/placement" style={linkStyle}>
              Placement
            </NavDropdown.Item>
          </NavDropdown>
          {/* ------------------- */}
          <NavDropdown
            title="Solution"
            id="solution-dropdown"
            style={{ marginTop: '10px' }}
          >
            {/* Vertical Solutions Submenu */}
            <NavDropdown
              title="Vertical Solutions for Tally.ERP 9"
              id="vertical-solutions-dropdown"
            >
              <NavDropdown.Item
                href="\assets\Jeweler-Shop-Customization.pdf"
                target="_blank"
                style={linkStyle}
              >
                Jewellery Industry
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\GLOWIPS-MANUFACTURING-MODULE-PYARELAL-MODULE-WISE-PROJECT.pdf"
                target="_blank"
                style={linkStyle}
              >
                Manufacturing Industry
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\electronic-showroom-module-by-GLowips.pdf"
                target="_blank"
                style={linkStyle}
              >
                Electronic Showroom Management
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\Hotel-Restaurant-Module-for-Glowips.pdf"
                target="_blank"
                style={linkStyle}
              >
                Hotel &amp; Restaurant
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\School-and-college-accounts-management-by-Glowips.pdf"
                target="_blank"
                style={linkStyle}
              >
                School &amp; College
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\Training-institute-Module-by-Glowips.pdf"
                target="_blank"
                style={linkStyle}
              >
                Training Institute
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\Chit-Fund-Module.pdf"
                target="_blank"
                style={linkStyle}
              >
                Chit Fund Module
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\AUTOMOBILE-Module-Compatibility-Mode.pdf"
                target="_blank"
                style={linkStyle}
              >
                Automobile Module
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\CRM-Module.pdf"
                target="_blank"
                style={linkStyle}
              >
                CRM Module
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\ERP-Manufacturing-MOdule-Part-1.pdf"
                target="_blank"
                style={linkStyle}
              >
                ERP Manufacturing Module
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\ERP-BUS-Module-for-Schools-College-Compatibility-Mode.pdf"
                target="_blank"
                style={linkStyle}
              >
                ERP BUS Module for Schools, College
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\Builders-PropertyDevelopers-module-for-GLOWIPS.pdf"
                target="_blank"
                style={linkStyle}
              >
                Builders &amp; Property
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\Tally-ERP-for-Advt.pdf"
                target="_blank"
                style={linkStyle}
              >
                Tally ERP for Advertisement
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Customization Solutions"
              id="customization-solutions-dropdown"
            >
              <NavDropdown.Item
                href="/solutions/customizationsolutions/analytic"
                style={linkStyle}
              >
                Analytic Designing
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/solutions/customizationsolutions/implementationtraining"
                style={linkStyle}
              >
                Implementation &amp; Training
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/solutions/customizationsolutions/postsalessupport"
                style={linkStyle}
              >
                Post Sales Support
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Tally Ready Invoice Customization"
              id="ready-invoice-customization-dropdown"
            >
              <NavDropdown.Item
                href="\solutions\readyinvoicecust\preprinted"
                style={linkStyle}
              >
                Preprinted Invoices
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\solutions\readyinvoicecust\service"
                style={linkStyle}
              >
                Service Invoice
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\solutions\readyinvoicecust\manufacturing"
                style={linkStyle}
              >
                Manufacturing Invoice
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\solutions\readyinvoicecust\trading"
                style={linkStyle}
              >
                Trading Invoice
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\solutions\readyinvoicecust\clearingforwarding"
                style={linkStyle}
              >
                Clearing and Forwarding Invoice
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\solutions\readyinvoicecust\autoparts"
                style={linkStyle}
              >
                Auto Parts Invoice
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\solutions\readyinvoicecust\garment"
                style={linkStyle}
              >
                Garment Invoice
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\solutions\readyinvoicecust\simple"
                style={linkStyle}
              >
                Simple Invoice
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\solutions\readyinvoicecust\miscellaneous"
                style={linkStyle}
              >
                Miscellaneous Invoices
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Tally add-on Modules"
              id="addon-modules-dropdown"
            >
              <NavDropdown.Item
                href="\assets\GARMENT-INDUSTRY-MODULE.pdf"
                target="_blank"
                style={linkStyle}
              >
                Garment Industry Module
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\Vehicle-Sales-Module.pdf"
                target="_blank"
                style={linkStyle}
              >
                Vehicle Sales Module
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\PARTY-WISE-OUTSTANDING-MODULE.pdf"
                target="_blank"
                style={linkStyle}
              >
                Party Wise Outstanding Module
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\STANDARD-TERMS-AND-CONDITION-MODULE.pdf"
                target="_blank"
                style={linkStyle}
              >
                Standard Terms and Condition Module
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\THREE-DISCOUNT-COLOUM-MODULE.pdf"
                target="_blank"
                style={linkStyle}
              >
                Three Discount Column Module
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\AUTO-PHYSICAL-STOCK-VERIFICATION-MODULE.pdf"
                target="_blank"
                style={linkStyle}
              >
                Auto Physical Stock Verification
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\GODOWN-ADDRESS-IN-PRINT-MODULE.pdf"
                target="_blank"
                style={linkStyle}
              >
                Godown Address in Print Module
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\Petrol-Pump-Module.pdf"
                target="_blank"
                style={linkStyle}
              >
                Petrol Pump Module
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\STOCK-GROUP-WISE-ITEM-FILTER-MODULE.pdf"
                target="_blank"
                style={linkStyle}
              >
                Stock Group Wise Item Filter
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\1-CLICK-INSTRUMENT-DETAIL-IN-INVOICE.pdf"
                target="_blank"
                style={linkStyle}
              >
                1 Click Instrument Detail Module
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Tally Integration"
              id="tally-integration-dropdown"
            >
              <NavDropdown.Item
                href="\assets\GPS-Integration-Compatibility-Mode.pdf"
                target="_blank"
                style={linkStyle}
              >
                GPS Integration
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\Hypper-Market-Compatibility-Mode.pdf"
                target="_blank"
                style={linkStyle}
              >
                Hyper Market
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\assets\Remote-Location-Barcode-Scanner-Integration-Compatibility-Mode.pdf"
                target="_blank"
                style={linkStyle}
              >
                Remote Location Barcode Scanner Integration
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Corporate Management"
              id="corporate-management-dropdown"
            >
              <NavDropdown.Item
                href="\solutions\corporatemanagement\managementconsultancy"
                target="_blank"
                style={linkStyle}
              >
                Management Consultancy Services
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\solutions\corporatemanagement\businessdev"
                target="_blank"
                style={linkStyle}
              >
                Business Development
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\solutions\corporatemanagement\franchiseservices"
                target="_blank"
                style={linkStyle}
              >
                Our Franchise Services
              </NavDropdown.Item>
              <NavDropdown.Item
                href="\solutions\corporatemanagement\erpcorporate"
                target="_blank"
                style={linkStyle}
              >
                ERP for Corporate&apos;s and Industries
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Item
              href="/solutions/custombuiltsolutions"
              style={linkStyle}
            >
              Custom Built Solution
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Download"
            id="download-dropdown"
            style={{ marginTop: '10px' }}
          >
            <NavDropdown.Item href="/download/tallydownloads">
              Tally Downloads
            </NavDropdown.Item>
            <NavDropdown.Item href="/download/instantsupport">
              Instant Support
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item style={{ marginTop: '10px' }}>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ marginTop: '10px' }}>
            <RapidResponseCenter />
          </Nav.Item>
          <Nav.Item>
            <Button variant="primary" style={{ marginTop: '10px' }}>
              <Link
                className="btn me-1 me-sm-3"
                href="/buyoffline"
                style={{ color: 'white' }}
              >
                <ShoppingCart />
                <span>Buy Tally</span>
              </Link>
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CollapsibleNavbar
