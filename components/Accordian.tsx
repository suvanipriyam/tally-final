import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ChevronUp } from 'lucide-react'
import Link from 'next/link'

const Collapsible = ({ title, children, isOpen, onToggle }) => {
  const toggleCollapsible = () => {
    onToggle(title)
  }

  return (
    <div
      style={{
        marginBottom: '10px',
        background: 'white',
        color: 'black',
        fontSize: '17px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          cursor: 'pointer',
          backgroundColor: 'white',
        }}
        onClick={toggleCollapsible}
      >
        <span>{title}</span>
        <span style={{ fontWeight: 'bold' }}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>
      {isOpen && (
        <div style={{ padding: '10px', background: 'white' }}>
          {Array.isArray(children) ? children : <div>{children}</div>}
        </div>
      )}
    </div>
  )
}

const NestedCollapsible = ({ title, children, isOpen, onToggle }) => (
  <Collapsible title={title} isOpen={isOpen} onToggle={onToggle}>
    {children}
  </Collapsible>
)

const Accordion = () => {
  const [openCollapsibles, setOpenCollapsibles] = useState([])

  const handleToggle = (title) => {
    setOpenCollapsibles((prev) => {
      const parentTitle = title.split(' ')[0] // Extract parent title (e.g., 'Collapsible')

      if (prev.includes(title)) {
        // Close the current collapsible
        return prev.filter((t) => t !== title)
      } else {
        // Close other collapsibles at the same level
        const filtered = prev.filter((t) => !t.startsWith(parentTitle))
        return [...filtered, title]
      }
    })
  }

  return (
    <div>
      {/* tally erp9  */}
      <Collapsible
        title="Tally ERP 9"
        isOpen={openCollapsibles.includes('Tally ERP 9')}
        onToggle={handleToggle}
      >
        {/* function and features */}
        <NestedCollapsible
          title="Functions & Features"
          isOpen={openCollapsibles.includes('Functions & Features')}
          onToggle={handleToggle}
        >
          <Link
            href="/products/functionFeatures/accounting"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Accounting
          </Link>
          <Link
            href="/products/functionFeatures/financialManagementAndControl"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Financial Management & Control
          </Link>

          <NestedCollapsible
            title="Inventory"
            isOpen={openCollapsibles.includes('Inventory')}
            onToggle={handleToggle}
          >
            <Link
              href="/products/functionFeatures/inventoryAccounting"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Inventory Accounting & Management
            </Link>
            <Link
              href="/products/functionFeatures/batchVoucher"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Batch Voucher Report
            </Link>
          </NestedCollapsible>

          <NestedCollapsible
            title="Purchases & Payables"
            isOpen={openCollapsibles.includes('Purchases & Payables')}
            onToggle={handleToggle}
          >
            <Link
              href="/products/functionFeatures/stockQueryInvoice"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Stock Query From Invoice
            </Link>
          </NestedCollapsible>

          <NestedCollapsible
            title="Sales & Receivables"
            isOpen={openCollapsibles.includes('Sales & Receivables')}
            onToggle={handleToggle}
          >
            <Link
              href="/products/functionFeatures/stockFromInvoice"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Stock From Invoice
            </Link>
            <Link
              href="/products/functionFeatures/massEmailing"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Mass Emailing - Communicating
            </Link>
          </NestedCollapsible>

          <Link
            href="/products/functionFeatures/pointOfSale"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Point Of Sale
          </Link>
          <Link
            href="/products/functionFeatures/manufacturing"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Manufacturing
          </Link>
          <Link
            href="/products/functionFeatures/costing"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Costing
          </Link>
          <Link
            href="/products/functionFeatures/jobCosting"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Job Costing
          </Link>
          <Link
            href="/products/functionFeatures/payroll"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Payroll
          </Link>
          <Link
            href="/products/functionFeatures/branchManagement"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Branch Management
          </Link>

          <NestedCollapsible
            title="Data Synchronisation"
            isOpen={openCollapsibles.includes('Data Synchronisation')}
            onToggle={handleToggle}
          >
            <Link
              href="/products/functionFeatures/oneWaySync"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              One Way Synchronisation
            </Link>
            <Link
              href="/products/functionFeatures/selectiveSync"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Selective Synchronisation
            </Link>
            <Link
              href="/products/functionFeatures/syncAfterSave"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Synchronisation After Save
            </Link>
            <Link
              href="/products/functionFeatures/multipleRuleSync"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multiple Rule Synchronisation
            </Link>
            <Link
              href="/products/functionFeatures/enterpriseAndBeyond"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Enterprise And Beyond
            </Link>
            <Link
              href="/products/functionFeatures/syncVoucherOrdering"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Synch With Voucher Ordering
            </Link>
            <Link
              href="/products/functionFeatures/openBalanceControl"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Open Balance Control
            </Link>
          </NestedCollapsible>

          <NestedCollapsible
            title="Statutory Compliance"
            isOpen={openCollapsibles.includes('Statutory Compliance')}
            onToggle={handleToggle}
          >
            <Link
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              CST
            </Link>
            <Link
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              VAT
            </Link>
            <Link
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Service Tax
            </Link>
            <Link
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              TDS
            </Link>
            <Link
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Page Invoice Printing
            </Link>
            <Link
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Excise For Dealers
            </Link>
            <Link
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              TCS
            </Link>
            <Link
              href="#"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              FBT
            </Link>
          </NestedCollapsible>

          <NestedCollapsible
            title="Special Needs"
            isOpen={openCollapsibles.includes('Special Needs')}
            onToggle={handleToggle}
          >
            <Link
              href="/products/functionFeatures/multiCompany"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Company
            </Link>
            <Link
              href="/products/functionFeatures/multiPeriod"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Period
            </Link>
            <Link
              href="/products/functionFeatures/multiCost"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Cost/Profit Center
            </Link>
            <Link
              href="/products/functionFeatures/multiCurrency"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Currency
            </Link>
            <Link
              href="/products/functionFeatures/multiUnits"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Units
            </Link>
            <Link
              href="/products/functionFeatures/multiLocation"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Location Inventory
            </Link>
            <Link
              href="/products/functionFeatures/multiBudgets"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multi-Budgets & Scenarios
            </Link>
            <Link
              href="/products/functionFeatures/multiLingual"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Multilingual
            </Link>
          </NestedCollapsible>

          <Link
            href="/products/functionFeatures/securityAccessControl"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Security & Access Control
          </Link>
          <Link
            href="/products/functionFeatures/remoteAccess"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Remote Access
          </Link>
          <Link
            href="/products/functionFeatures/remoteEdit"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Remote Edit
          </Link>
        </NestedCollapsible>

        {/* editions avaliable */}
        <NestedCollapsible
          title="Editions Available"
          isOpen={openCollapsibles.includes('Editions Available')}
          onToggle={handleToggle}
        >
          <Link
            href="/products/silverEdition"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Silver Edition - Single User
          </Link>
          <Link
            href="/products/goldEdition"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Gold Edition - Unlimited Multi-User
          </Link>
          <Link
            href="/products/erp9auditors"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Tally ERP 9 - Auditors Edition
          </Link>
        </NestedCollapsible>

        {/* upgrades and migration */}
        <NestedCollapsible
          title="Upgrades & Migrations"
          isOpen={openCollapsibles.includes('Upgrades & Migrations')}
          onToggle={handleToggle}
        >
          <Link
            href="/products/upgradesPriorVersion"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Upgrades From Prior Versions
          </Link>
          <Link
            href="/products/migratePriorVersion"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Migrating From Other Products
          </Link>
        </NestedCollapsible>

        {/* product roadmap */}
        <NestedCollapsible
          title="Product Roadmap"
          isOpen={openCollapsibles.includes('Product Roadmap')}
          onToggle={handleToggle}
        >
          <Link
            href="/"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Series A
          </Link>
          <Link
            href="/"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Series B
          </Link>
          <Link
            href="/"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Series C
          </Link>
        </NestedCollapsible>
        <Link
          href="/"
          className="custom-link"
          style={{
            display: 'block',
            marginBottom: '10px',
            marginLeft: '10px',
            color: 'black',
          }}
        >
          Price List
        </Link>
      </Collapsible>

      {/* erp9 auditors edition */}
      <Collapsible
        title="Tally .ERP 9 - Auditor's Edition"
        isOpen={openCollapsibles.includes("Tally .ERP 9 - Auditor's Edition")}
        onToggle={handleToggle}
      >
        <Link
          href="/products/benefitsAtAGlance"
          className="custom-link"
          style={{
            display: 'block',
            marginBottom: '10px',
            marginLeft: '10px',
            color: 'black',
          }}
        >
          Benefits At A Glance
        </Link>
        {/* statutory audit */}
        <NestedCollapsible
          title="Statutory Audit"
          isOpen={openCollapsibles.includes('Statutory Audit')}
          onToggle={handleToggle}
        >
          <Link
            href="/products/dataAnalysis"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Data Analysis
          </Link>
          <Link
            href="/products/auditing"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Auditing
          </Link>
        </NestedCollapsible>
        {/* quick tax setup */}
        <NestedCollapsible
          title="Quick Tax Setup"
          isOpen={openCollapsibles.includes('Quick Tax Setup')}
          onToggle={handleToggle}
        >
          <Link
            href="/products/scheduleVI"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Schedule VI
          </Link>
        </NestedCollapsible>
        <Link
          href="/"
          className="custom-link"
          style={{
            display: 'block',
            marginBottom: '10px',
            marginLeft: '10px',
            color: 'black',
          }}
        >
          Schedule A Demo
        </Link>
      </Collapsible>

      {/* shoper 9 */}
      <Collapsible
        title="Tally Shopper 9"
        isOpen={openCollapsibles.includes('Tally Shopper 9')}
        onToggle={handleToggle}
      >
        {/* components */}
        <NestedCollapsible
          title="Components"
          isOpen={openCollapsibles.includes('Components')}
          onToggle={handleToggle}
        >
          <Link
            href="/products/shoper9HO"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Shopper 9 HO
          </Link>
          <Link
            href="/products/shoper9POS"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Shopper 9 POS/Distribution
          </Link>
          <Link
            href="/products/shoper9Product"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Shopper 9 - Product Edition
          </Link>
        </NestedCollapsible>

        {/* functionality */}
        <NestedCollapsible
          title="Functionality"
          isOpen={openCollapsibles.includes('Functionality')}
          onToggle={handleToggle}
        >
          <NestedCollapsible
            title="Inventory Management"
            isOpen={openCollapsibles.includes('Inventory Management')}
            onToggle={handleToggle}
          >
            <Link
              href="/products/stockTaking"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Stock Taking
            </Link>
          </NestedCollapsible>
          <NestedCollapsible
            title="Catalogue Management"
            isOpen={openCollapsibles.includes('Catalogue Management')}
            onToggle={handleToggle}
          >
            <Link
              href="/products/salesPromotions"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Sales Promotions
            </Link>
          </NestedCollapsible>
          <NestedCollapsible
            title="Configurability"
            isOpen={openCollapsibles.includes('Configurability')}
            onToggle={handleToggle}
          >
            <Link
              href="/products/erp9Interface"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Tally ERP 9 Interface
            </Link>
          </NestedCollapsible>
          <NestedCollapsible
            title="Flow of Goods And Information"
            isOpen={openCollapsibles.includes('Flow of Goods And Information')}
            onToggle={handleToggle}
          >
            <Link
              href="/products/comprehensiveDataSync"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Comprehensive Data Synchronisation
            </Link>
          </NestedCollapsible>
          <NestedCollapsible
            title="Management Reports"
            isOpen={openCollapsibles.includes('Management Reports')}
            onToggle={handleToggle}
          >
            <Link
              href="/products/salesAndStockReport"
              className="custom-link"
              style={{
                display: 'block',
                marginBottom: '10px',
                marginLeft: '10px',
                color: 'black',
              }}
            >
              Sales and Stock Reports
            </Link>
          </NestedCollapsible>
        </NestedCollapsible>
        {/* technology */}
        <NestedCollapsible
          title="Technology"
          isOpen={openCollapsibles.includes('Technology')}
          onToggle={handleToggle}
        >
          <Link
            href="/products/hardware"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Hardware
          </Link>
          <Link
            href="/products/deviceSupported"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Device Supported
          </Link>
          <Link
            href="/products/architecture"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Architecture
          </Link>
          <Link
            href="/products/customisation"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Customisation
          </Link>
          <Link
            href="/products/interfaces"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Interfaces
          </Link>
          <Link
            href="/products/storeTemplates"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Store Templates
          </Link>
          <Link
            href="/products/customInstaller"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Custom Installer
          </Link>
          <Link
            href="/products/liveUpdates"
            className="custom-link"
            style={{
              display: 'block',
              marginBottom: '10px',
              marginLeft: '10px',
              color: 'black',
            }}
          >
            Live Update
          </Link>
        </NestedCollapsible>
      </Collapsible>

      {/* tally developer */}
      <Collapsible
        title="Tally Developer"
        isOpen={openCollapsibles.includes('Tally Developer')}
        onToggle={handleToggle}
      >
        <Link
          href="/products/developmentTDL"
          className="custom-link"
          style={{
            display: 'block',
            marginBottom: '10px',
            marginLeft: '10px',
            color: 'black',
          }}
        >
          Tally Development - TDL
        </Link>
        <Link
          href="/products/developmentPlatform"
          className="custom-link"
          style={{
            display: 'block',
            marginBottom: '10px',
            marginLeft: '10px',
            color: 'black',
          }}
        >
          The Development Platform
        </Link>
      </Collapsible>
      <Link
        href="/products/erp9rental"
        className="custom-link"
        style={{
          display: 'block',
          marginBottom: '15px',
          marginLeft: '10px',
          color: 'black',
          fontSize: '17px',
        }}
      >
        Tally ERP-9 Rental
      </Link>
      <Link
        href="/products/quotation"
        className="custom-link"
        style={{
          display: 'block',
          marginBottom: '10px',
          marginLeft: '10px',
          color: 'black',
          fontSize: '17px',
        }}
      >
        Our Quotation
      </Link>
    </div>
  )
}

export default Accordion
