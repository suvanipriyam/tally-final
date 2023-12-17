'use client'
import { FC, FormEvent, useEffect, useState } from 'react'
import { Link } from '@components/Utils/Link'
import { IoIosArrowUp } from 'react-icons/io'
import { useRouter } from 'next/router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CustomImage } from '@components/Utils/CustomImage'
import classNames from 'classnames'
import icon from '@assets/icon.svg'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Owl from './OwlCarousel'
import OwlCarousel from './OwlCarousel'
import FormComponent from '@components/FormComponent'
import styles from './navbar.module.css'
import {
  Facebook,
  Linkedin,
  Mail,
  PhoneCall,
  Pin,
  ShoppingCart,
  Twitter,
} from 'lucide-react'
import NavComponent from './NavComponent'
import ConditionNavbar from './conditionNavbar'
import Logo from 'public/logoss-removebg-preview.png'

import Image from 'next/image'


export const Navbar: FC = () => {
  const router = useRouter()
  const [top, setTop] = useState(false)
  const [hash, setHash] = useState(false)

  const PAGES = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Company',
      link: '/#about',
    },
    {
      name: 'Products',
      link: '/#services',
    },
    {
      name: 'Services',
      link: '/#projects',
    },
    {
      name: 'Solution',
      link: '/#contact',
    },
    {
      name: 'Download',
      link: '/#contact',
    },
    {
      name: 'Contact Us',
      link: '/#contact',
    },
  ]

  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      )
        setTop(true)
      else setTop(false)
    }
  }, [])

  const onUp = () => {
    window.location.href = '#'
  }

  const onClose = () => {
    setHash(!hash)
  }

  return (
    <div>
      <header id="site-header" className=" p-4 fixed w-full top-0 custom-navbar">
        <div className="header-top bg-yellow-600">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 justify-content-between">
                <Link
                  href="#"
                  className="navbar-brand logo d-block h-100 d-flex justify-content-center"
                >
                  <Image
                    // style={{ height: 216, width: 216 }}
                    width={216}
                    height={216}
                    src="/logoss-removebg-preview.png"
                    className={styles['navbar-logo']}
                    alt="Navbar Logo"
                  />
                </Link>
              </div>
              <div className="col-md-10">
                <div className="row  mobo-menu-item">
                  <div className="col-md-7">
                    <div className="align-items-center text-center">
                      <span className="om-sai-ram">ॐ साईं राम</span>
                    </div>

                    <div className="row justify-content-center align-items-end pt-4">
                      {/* add  carousel here */}
                      <div
                        className={`col-md-4 ${styles['owl-container']}`}
                        style={{
                          // paddingRight: '2rem',
                          width: '24rem',
                          // marginLeft: '-120px',
                        }}
                      >
                        <OwlCarousel />
                      </div>
                      <div className="col-md-4">
                        <Link href="/tallyinternational">
                          <img
                            src="/images/banner/tallyinternational.png"
                            className="tally-international-shake d-none d-md-flex "
                            style={{ width: '10rem', marginLeft: '4rem' }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="social-icons">
                          <ul className="list-inline">
                            <li>
                              <a href="http://www.facebook.com/TallySolution">
                                <Facebook />
                              </a>
                            </li>
                            <li>
                              <a href="http://www.pinterest.com/tallysoftware">
                                <Pin />
                              </a>
                            </li>
                            <li>
                              <a href="http://twitter.com/#!/TALLYSOLUTION">
                                <Twitter />
                              </a>
                            </li>
                            <li>
                              <a href="http://www.linkedin.com/pub/tally-customization-developers-delhi-ncr/38/5b/a7">
                                <Linkedin />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-12" style={{ marginTop: '20px' }}>
                        <div className="d-flex justify-content-around">
                          <div className="d-flex align-items-end me-3">
                            <Mail style={{ fontSize: '20px' }} />
                            <div style={{ marginLeft: '10px' }}>
                              <h6> Email Us</h6>
                              <a
                                href="mailto:tallyproducts@gmail.com"
                                style={{ fontSize: '15px' }}
                              >
                                tallyproducts@gmail.com
                              </a>
                            </div>
                          </div>
                          <div className=" d-flex align-items-end me-3">
                            <PhoneCall />
                            <div style={{ marginLeft: '10px' }}>
                              <h6>Call Us</h6>
                              <a
                                href="tel:+919582927928"
                                style={{ fontSize: '15px' }}
                              >
                                +919582927928
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ width: '100%', height: '10px' }} />

                <div
                  className="row"
                  style={{ backgroundColor: 'white', borderRadius: '1rem' }}
                >
                  <div className="col-lg-12" style={{}}>
                    {/*  */}
                    <ConditionNavbar />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100 hover:bg-gray-200 focus:outline-none ring-2 ring-gray-200 duration-100"
              onClick={onClose}
            >
              <GiHamburgerMenu className="w-5 h-5" />
            </button>
          </div>
          <div
            className={classNames(
              "justify-between items-center w-full lg:flex lg:w-auto lg:order-1",
              { hidden: !hash }
            )}
          >
            
          </div> */}
        </div>
        {/* <button
        aria-label="Go Up"
        onClick={onUp}
        className={classNames(
          'bg-white border-2 border-blue-700 text-center fixed bottom-5 h-12 w-12 right-5 duration-500 rounded-full z-50 group',
          'hover:bg-blue-600 hover:border-blue-600',
          {
            block: top,
            hidden: !top,
          }
        )}
      >
        <IoIosArrowUp className="h-full w-full p-2 text-blue-700 group-hover:text-white" />
      </button> */}
      </header>

      <div className="mobile-view">
        <div className="mob-he"><h1>ॐ साईं राम</h1>
          <div className="">
            <div>
              <div className="col-md-12">
                <div className="social-icons">
                  <ul className="list-inline">
                    <li>
                      <a href="http://www.facebook.com/TallySolution">
                        <Facebook />
                      </a>
                    </li>
                    <li>
                      <a href="http://www.pinterest.com/tallysoftware">
                        <Pin />
                      </a>
                    </li>
                    <li>
                      <a href="http://twitter.com/#!/TALLYSOLUTION">
                        <Twitter />
                      </a>
                    </li>
                    <li>
                      <a href="http://www.linkedin.com/pub/tally-customization-developers-delhi-ncr/38/5b/a7">
                        <Linkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-menu">
          <img src="/logoss-removebg-preview.png" alt="" className="logo" />

          <div className="NavBarcaraousel">
            <OwlCarousel />
          </div>

          <div className="NavbarCondition">
            <ConditionNavbar />
          </div>

        </div>

      </div>
    </div>
  )
}
