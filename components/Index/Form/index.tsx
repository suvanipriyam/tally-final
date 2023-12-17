import FormComponent from '@components/FormComponent'
import { FC } from 'react'

export const Form: FC = () => {
  return (
    <>
      <section>
        <div className=" pt-0 z-index-1 mt-80-mobile">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row g-0 box-shadow">
                  <div className="col-lg-5 col-md-12 theme-bg p-5">
                    <div className="section-title mb-4">
                      <h2 className="title">Ask for a service</h2>
                    </div>
                    <FormComponent />
                  </div>
                  <div className="col-lg-7 col-md-12 white-bg d-flex align-items-center">
                    <div className="p-3 p-md-5 w-100">
                      <div className="section-title">
                        <h2 className="title">
                          Welcome to the World of Tally ERP-9 Solutions 123
                        </h2>
                        <p className="pt-5">
                          We are proficient in providing Tally Solutions, Tally
                          Software Sales, Tally customization &amp; Integration,
                          tally Implementation &amp; support in Delhi - NCR -
                          India - International. Our Team has provided Solutions
                          in Tally softwares for clients across India &amp;
                          Globe. With Dexterous staff working round the clock,
                          we are leading and trusted Solution Partners to many
                          corporate &amp; government bodies.
                        </p>
                        <p className="pt-5">
                          We have years of experience in implementation of
                          Enterprise business solutions on Tally ERP-9 framework
                          :- We offer complete Tally Solutions, which includes
                          Tally Development, Synchronization, Integration,
                          Implementation &amp; Corporate trainings. We are
                          Authorised Tally Solution Service providers &amp;
                          enhance value to our customers, by high quality
                          Services &amp; Support in Tally Softwares.
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
    </>
  )
}
