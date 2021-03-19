import React from 'react'
import Header from './Header'
import SideNav from './SideNav'
import './Terms.css';
class Terms extends React.Component{
    render() {
        return (
            <div>
                <div className="header-terms" onClick={()=>{
                 document.getElementById("sidebar").classList.remove('active')
                 document.getElementById("share-buttons-link").classList.remove('share-buttons-link-active')
                 document.getElementById("scheduled-test-series").classList.remove('scheduled-test-series-active')
                 document.getElementById("search-results").classList.remove('dum');
                 document.getElementById("rewards").classList.remove('rewards-active')
                 }}>
                <Header/>
                </div>
                <div className="na">
                <SideNav/>
                </div>
                <p className="f-29 text-center">Terms and Conditions</p>
                <div className="container small-screen-s">
                    <div className="row font-size-12">
                    We at www.ubfias.com are committed to protect the privacy of our visitors and handle all information with great responsibility. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern UBF IAS relationship with you in relation to this website.
                    </div>
                    <div className="row font-size-12">
                    The term 'UBF IAS' or 'us' or 'we' refers to the owner of the website. The term 'you' refers to the user or viewer of our website.
                    </div>
                    <div className="row font-size-17">
                    <b>
The use of this website is subject to the following terms of use:
</b>
                    </div>
                    <ul>
                    <li className=" font-size-12">
                     The content of the pages of this website is for your general information and It is subject to change without notice.
                    </li>
                    <li className=" font-size-12">
                     This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, then only personal information may be stored by us.
                    </li>
                    <li className=" font-size-12">
                     Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law. 
                    </li>
                    <li className=" font-size-12">
                     This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                    </li>
                    <li className=" font-size-12">
                     All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
                    </li>
                    <li className=" font-size-12">
                     Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
                    </li>
                    <li className=" font-size-12">
                     From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
                    </li>
                    </ul>
                    <div className=" font-size-17">
                    <b>
                    PRIVACY POLICY  
                    </b>
                    </div>
                    <div className="row font-size-12">

                    Your Privacy matters to us. We ' www.ubfias.com ' and our affiliate companies worldwide respect and are committed to the need for appropriate protection and management of any "personal information" that you share with us.

                    </div>
                    <div className="row font-size-12">
                    "Personal Information" may mean any information that may be used to identify an individual, including, but not limited to, a first and last name, a home or other physical and virtual address like an email address or any other contact information, that we may require.
                    </div>
                    <div className="row font-size-17">
                    <b>
                    1)Why we collect personal information?
                    </b>
                    </div>
                    <div className="row font-size-12">
                    The personal information that we collect is to identify you and to ensure that we provide you with the correct feedback that you require for performance in various tests, thus, to help you get superior quality educational feedback. The information collected enables us to give you convenient access to our services, offerings and products, and may help us tailor your educational experience.
                    </div>
                    <div className="row font-size-17">
                    <b>
                    2)What Information do we collect and how do we use it?
                    </b>
                    </div>
                    <div className="row font-size-17">
                         <b>
                    a) Information you Share:
                    </b>
                    </div>
                    <div className="row font-size-12">
                    The information that we collect is to provide effective services to you. You share your details like your name, email address, and other personal information like contact details to use certain features of our website. We also may ask for this information at other times, such as when you enter contests or other promotions, tests sponsored by us and/or our partners. If you use a feature that requires payment of a fee, we collect your credit card/debit card data or payment account information. When you use one of our paid products, we track the web pages, and information that has been accessed by you, and store it on our servers. This enables us to track items that you have completed, and those that you need to see.
                    </div>
                    <div className="row font-size-12">
                    b) Cookies:
                    </div>
                    <div className="row font-size-12">
                    Some of our web pages "cookies" and other tracking technologies. A "cookie" is a small text file that may be used, for example, to collect information about your web site activity. Some cookies and other technologies may serve to recall personal information previously indicated by a web user.
                    </div>
                    <div className="row font-size-12">
                    It is on you to set most browsers to notify if you receive a cookie, or if you may choose to block cookies from your browser, but please note that if you choose to erase or block your cookies, you will need to re-enter your original user ID and password to gain access to certain parts of the web site and some sections of the site would not work.
                    </div>
                    <div className="row font-size-1 2">
                   <b>
                   c) Log information: 
                   </b>
                    </div>
                    <div className="row font-size-12">
                    When you access our website, the server automatically records information that your browser sends us. These server logs may include information such as your web request, internet protocol address, browser type, browser language, the date and time of your request and one or more cookies that may uniquely identify your browser.
                    </div>
                    <div className="row font-size-12">
                         <b>
                    d) User communications:
                    </b>
                    </div>
                    <div className="row font-size-12">
                    When you send email or other communication to us, we may retain those communications in order to process your enquiries, respond to your requests and improve our services. 
                    </div>
                    <div className="row font-size-12">
                    e) Links:
                    </div>
                    <div className="row font-size-12">
                    We may present links in a format that enables us to keep track of whether these links have been followed. We use this information to improve our customized content. Clicking on links may take you to sites outside our domain. We are not responsible for the privacy practices of other web sites. We encourage our users to be aware when they leave our site to read the privacy statements of each and every web site that collects personally identifiable information. This Privacy Policy applies solely to information collected by our website.
                    </div>
                    <div className="row font-size-17">
                    <b>
                    f) Alerts: 
                    </b>
                    </div>
                    <div className="row font-size-12">
                    We may alert you by email if we update our website in a way that we believe you should know about. Email alerts are usually prompted by new features on the websites, or substantial improvements in the products and offers made by us.
                    </div>
                    <div className="row font-size-12">
                    We may also send you other information about our program update, your subscription status etc. If you would prefer not to receive any of this SMS /email, please send us an email with your details. Kindly note that unsubscribing from one medium does not automatically lead to unsubscription from the other. Within 7 working days (days which are neither (i) a Saturday or Sunday, nor (ii) a public holiday anywhere in India) of receipt of your instruction we will cease to send you information as requested. If your instruction is unclear, we will contact you for clarification.
                    </div>
                    <div className="row font-size-17">
                    <b>
g) Public Forums:
</b>
                    </div>
                    <div className="row font-size-12">

                    When you use certain features on our website like the discussion forums and you post or share your personal information such as comments, messages, files, photos, it will be available to all users, and will be in the public domain. All such sharing of information is done at your own risk. Please keep in mind that if you disclose personal information in your profile or when posting on our forums this information may become publicly available.
                    </div>
                    <div className="row font-size-17">

                   <b>3. Data Security:</b>

                    </div>
                    <div className="row font-size-12">
                    If you use a feature requiring payment of a fee, we transmit your credit/debit card data to our bank for processing. If we encounter a problem with payment, we may review the order information with you and our bank to resolve it. We do not otherwise disclose your credit/debit card information. We do not share your email address or your personal information with third party marketers.
                   
                 </div>
                    <div className="row font-size-12">
                    We offer secure pages to collect sensitive information on our order form, such as credit/debit card information. We also use administrative, physical and technical precautions to help protect the confidentiality, security and integrity of personal information stored on our system. We host the site at a commercial-grade data centre that employs extensive security practices. While no computer system is completely secure, we believe the measures implemented by our site reduce the likelihood of security problems to a level appropriate to the type of data involved.
                    </div>
                    <div className="row font-size-17">
                        <b>
                    a) Information sharing and Disclosure
                    </b>
                    </div>
                    <div className="row font-size-12">
                    We may provide information to service providers to help us bring you the services we offer. Specifically, we may use third parties to facilitate our business, such as to host the service at a co-location facility for servers. Where we utilize third parties for the processing of any personal information, we implement reasonable contractual and technical protections limiting the use of that information to our specified purposes.
                    </div>
                    <div className="row font-size-12">
                    ' www.ubfias.com ' does not provide any personal information to the advertiser when you interact with or view a targeted advertisement. However, by interacting with or viewing an ad you are consenting to the possibility that the advertiser will make the assumption that you meet the targeting criteria used to display the advertisement.
                    </div>
                    <div className="row font-size-12">
                    ' www.ubfias.com ' advertisers may include financial service providers (such as banks, insurance agents, stock brokers and mortgage lenders) and non-financial companies (such as stores, airlines, and software companies) and any type of company organization.
                    </div>
                    <div className="row font-size-12" >

                    <b>
                    4. How Long Do We Retain User Data? 
                    </b>

                    </div>
                    <div className="row font-size-12">
                    Currently, we plan to retain user data while an account is active and for at least three years afterwards. We may alter this practice according to legal and business requirements. For example, we may lengthen the retention period for some data if needed to comply with law or voluntary codes of conduct. Unless otherwise prohibited, we may shorten the retention period for some types of data if needed to free up storage space.
                    </div>
                    <div className="row font-size-17">
                    <b>
                    5. Management of User Information:
                    </b>
                    </div>
                    <div className="row font-size-12">
                    You can access and manage your account information. You can update your usage by accessing further paid services or products, or change details such as email address, and personal information.
                    </div>
                    <div className="row font-size-17">
                    <b>
                    6. Third Party Services
                    </b>
                    </div>
                    <div className="row font-size-12">
                    Third parties provide certain services that are available on our website ' www.ubfias.com ' We may provide information, including Personal Information, ' www.ubfias.com ' collects on the web to third-party service provider to help us deliver programmes, products, information, and services. Service providers are also an important means by which ' www.ubfias.com ' maintains its web site and mailing lists. ' www.ubfias.com ' will take reasonable steps to ensure that these third-party service providers are obligated to protect Personal Information on our behalf.
                    </div>
                    <div className="row font-size-17">
                    <b>
                    7. Confidentiality and Security
                    </b>
                    </div>
                    <div className="row font-size-12">
                    We limit access to personal information about you to employees who we believe reasonably need to come into contact with that information to provide products or services to you or in order to do their jobs. We have physical, electronic, and procedural safeguards that comply with the laws prevalent in India to protect personal information about you. We seek to ensure compliance with the requirements of the Information Technology Act, 2000 and Rules made there under to ensure the protection and preservation of your privacy.
                    </div>
                    <div className="row font-size-17">
                    <b>
                    a) Your Consent to This Policy
                    </b>
                    </div>
                    <div className="row font-size-12">
                    By accessing our website, you agree to this Privacy Policy. This document supersedes any prior communication on this topic and reflects the entire and exclusive Privacy Policy for this site. This Policy is subject to our Terms of Use, which take precedence over any conflicting Policy provision. We may change our Policy by posting a new version of it on our site.
                    </div>
                    <div className="row font-size-17">
                    <b>
                    b) Changes to this Privacy Policy
                    </b>
                    </div>
                    <div className="row font-size-12">
                    ' www.ubfias.com ' reserves the right to update, change or modify this policy at any time. The policy shall come to effect from the date of such update, change or modification.
                    </div>
                    <div className="row font-size-17">
                    <b>
                    8. Contact Information
                    </b>
                    </div>
                    <div className="row font-size-12">
                    ' www.ubfias.com ' welcomes your comments regarding this privacy statement at the contact address given at the website. Should there be any concerns about contravention of this Privacy Policy, ' www.ubfias.com ' will employ all commercially reasonable efforts to address the same.
                    </div>
                    <div className="row font-size-17">
                        <b>
                    9. Shipping Policy
                    </b>
                    </div>
                    <div className="row font-size-12">
                    <ul>
                        <li>The subscription for the study material, in the form of softcopy will be sent on real time basis and the study material will be uploaded on the subscriber’s profile. User can have access to the paid material over his/her account.</li>
                        <li>The subscription for the study material in the form of hardcopy will be sent after the confirmation of such request. Order(s)/subscription(s) are shipped within 2 working days and delivered in 5-10 days from shipping. After successful shipment, a tracking ID will be provided to you for easy tracking of your order status.</li>
                        <li>The orders are usually shipped through courier agencies if service is not available in your area pin code then we will ship order through registered address only.</li>
                        <li>The orders are shipped on all working days except Sundays and public holidays</li>
                        <li>Once confirmed, no request for cancellation of subscription(s) shall be entertained.</li>
                        <li>In case of any defect in material the replacement will be sent as per the set schedule. However, such schedule may vary at times due to unavoidable circumstances.</li>
                        <li>Once confirmed, no request for the cancellation of replacement shall be entertained.
</li>
                    </ul>
                    </div>
                    <div className="row font-size-17">
                    <b>
                    10. Refund Policy
                    </b>
                    </div>
                    <div className="row font-size-12">
   <ul>
       <li>Full refund will be allowed in case of cancellation is requested before start of classes/ tests.</li>
       <li>No refunds will be allowed if student demands the same after expiration of schedules period/date classes/tests without attending classes/tests. </li>
       <li>Registration fee will not be refundable in any case.</li>
       <li>All disputes/legal claims subject to Delhi Jurisdiction only.</li>
   </ul>


                    </div>
                                      
                </div>
            </div>
        )
    }
}
export default Terms;