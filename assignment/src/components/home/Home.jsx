import React, { useState } from 'react'
import icon from '../Assests/icon.png'
import imageicon from '../Assests/Ellipse 8.png'
import { useSelector } from 'react-redux'
import { CustomBar } from '../bar/CustomBar'
import { CustomDoughnut } from '../doughnut/CustomDoughnut'
import CustomTable from '../table/CustomTable'
import './home.css'
export const Home = () => {


  const [EnergyisOpen, setEnergyisOpen] = useState(true);
  const [WaterisOpen, setWaterisOpen] = useState(true);

  const toggleEnergy = () => {
    setEnergyisOpen(!EnergyisOpen);
  };

  const toggleWater = () => {
    setWaterisOpen(!WaterisOpen);
  };


  const data = useSelector((store => {
    return store;
  }))
  return (
    <div>
      <div id='homeTopDiv' >
        <div id='homeMainLeftDiv'>
          <div className='homeIconDiv' >
            <div className='homeInnerDivIcon' >
              <img src={icon} alt="" />
            </div>
          </div>
          <div className='homeDropdownOptions'>
            <div>DATA-IN</div>
            <div >
              <div
                className=" homeDropdownToggle no-arrow" // Add a custom class for styling
                type="button"
                onClick={toggleEnergy}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <g clip-path="url(#clip0_1_39)">
                    <path d="M8.14581 12.0417C9.03123 12.0417 9.78395 11.7317 10.404 11.1116C11.024 10.4916 11.3338 9.73912 11.3333 8.85418V5.66668H8.14581C7.2604 5.66668 6.50767 5.97669 5.88765 6.59672C5.26762 7.21675 4.95784 7.96923 4.95831 8.85418C4.95831 9.16112 4.99963 9.45626 5.08227 9.73959C5.16491 10.0229 5.28887 10.2945 5.45415 10.5542L5.17081 10.8375C5.04095 10.9674 4.97602 11.1327 4.97602 11.3333C4.97602 11.534 5.04095 11.6993 5.17081 11.8292C5.30067 11.959 5.46595 12.024 5.66665 12.024C5.86734 12.024 6.03262 11.959 6.16248 11.8292L6.44581 11.5458C6.70554 11.7111 6.97706 11.8351 7.2604 11.9177C7.54373 12.0004 7.83887 12.0417 8.14581 12.0417ZM8.14581 10.625C8.03956 10.625 7.93331 10.6132 7.82706 10.5896C7.72081 10.566 7.61456 10.5365 7.50831 10.5011L8.99581 8.99584C9.12567 8.86598 9.19061 8.70071 9.19061 8.50001C9.19061 8.29932 9.12567 8.13404 8.99581 8.00418C8.86595 7.87432 8.70067 7.80939 8.49998 7.80939C8.29929 7.80939 8.13401 7.87432 8.00415 8.00418L6.49894 9.49168C6.46352 9.38543 6.43401 9.27918 6.4104 9.17293C6.38679 9.06668 6.37498 8.96043 6.37498 8.85418C6.37498 8.35834 6.54616 7.93925 6.88852 7.59689C7.23088 7.25452 7.64998 7.08334 8.14581 7.08334H9.91665V8.85418C9.91665 9.35001 9.74547 9.76911 9.4031 10.1115C9.06074 10.4538 8.64165 10.625 8.14581 10.625ZM8.49998 16.2917L6.05623 14.3792L2.99269 14.0073L2.62081 10.9438L0.708313 8.50001L2.62081 6.05626L2.99269 2.99272L6.05623 2.62084L8.49998 0.708344L10.9437 2.62084L14.0073 2.99272L14.3791 6.05626L16.2916 8.50001L14.3791 10.9438L14.0073 14.0073L10.9437 14.3792L8.49998 16.2917ZM8.49998 14.4854L10.3771 13.0333L12.75 12.7323L13.0333 10.3771L14.4854 8.50001L13.0333 6.62293L12.7323 4.26772L10.3771 3.96668L8.49998 2.51459L6.6229 3.96668L4.24998 4.26772L3.96665 6.62293L2.51456 8.50001L3.96665 10.3771L4.26769 12.75L6.6229 13.0333L8.49998 14.4854Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_39">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Energy
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8L12 16L19 8H5Z" fill="white" />
                </svg>
              </div>
              <ul className={`dropdown-menu ${EnergyisOpen ? '' : 'show'}`}>
                <li>
                  <a className="dropdown-item" href='#'>
                    Category 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href='#' >
                    Category 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href='#' >
                    Category 3
                  </a>
                </li>
              </ul>

            </div>
            <div >
              <div
                className=" homeDropdownToggle no-arrow" // Add a custom class for styling
                type="button"
                onClick={toggleWater}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3.76999L11.25 4.60999C11.25 4.60999 9.97 6.05999 8.68 7.93999C7.39 9.81999 6 12.07 6 14.23C6 15.8213 6.63214 17.3474 7.75736 18.4726C8.88258 19.5978 10.4087 20.23 12 20.23C13.5913 20.23 15.1174 19.5978 16.2426 18.4726C17.3679 17.3474 18 15.8213 18 14.23C18 12.07 16.61 9.81999 15.32 7.93999C14.5243 6.78422 13.6664 5.67258 12.75 4.60999L12 3.76999ZM12 6.89999C12.44 7.41999 12.84 7.84999 13.68 9.06999C14.89 10.83 16 13.07 16 14.23C16 16.45 14.22 18.23 12 18.23C9.78 18.23 8 16.45 8 14.23C8 13.07 9.11 10.83 10.32 9.06999C11.16 7.84999 11.56 7.41999 12 6.89999Z" fill="white" />
                </svg>
                Water and Effluents
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8L12 16L19 8H5Z" fill="white" />
                </svg>
              </div>
              <ul className={`dropdown-menu ${WaterisOpen ? '' : 'show'}`}>

                <li>
                  <a className="dropdown-item" href='#'>
                    Category 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href='#' >
                    Category 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href='#' >
                    Category 3
                  </a>
                </li>
              </ul>

            </div>
          </div>
          <div className='homeDropdownOptions'>
            <div>ANALYZE</div>
            <div >
              <div
                className=" homeDropdownToggle"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <g clip-path="url(#clip0_1_39)">
                    <path d="M8.14581 12.0417C9.03123 12.0417 9.78395 11.7317 10.404 11.1116C11.024 10.4916 11.3338 9.73912 11.3333 8.85418V5.66668H8.14581C7.2604 5.66668 6.50767 5.97669 5.88765 6.59672C5.26762 7.21675 4.95784 7.96923 4.95831 8.85418C4.95831 9.16112 4.99963 9.45626 5.08227 9.73959C5.16491 10.0229 5.28887 10.2945 5.45415 10.5542L5.17081 10.8375C5.04095 10.9674 4.97602 11.1327 4.97602 11.3333C4.97602 11.534 5.04095 11.6993 5.17081 11.8292C5.30067 11.959 5.46595 12.024 5.66665 12.024C5.86734 12.024 6.03262 11.959 6.16248 11.8292L6.44581 11.5458C6.70554 11.7111 6.97706 11.8351 7.2604 11.9177C7.54373 12.0004 7.83887 12.0417 8.14581 12.0417ZM8.14581 10.625C8.03956 10.625 7.93331 10.6132 7.82706 10.5896C7.72081 10.566 7.61456 10.5365 7.50831 10.5011L8.99581 8.99584C9.12567 8.86598 9.19061 8.70071 9.19061 8.50001C9.19061 8.29932 9.12567 8.13404 8.99581 8.00418C8.86595 7.87432 8.70067 7.80939 8.49998 7.80939C8.29929 7.80939 8.13401 7.87432 8.00415 8.00418L6.49894 9.49168C6.46352 9.38543 6.43401 9.27918 6.4104 9.17293C6.38679 9.06668 6.37498 8.96043 6.37498 8.85418C6.37498 8.35834 6.54616 7.93925 6.88852 7.59689C7.23088 7.25452 7.64998 7.08334 8.14581 7.08334H9.91665V8.85418C9.91665 9.35001 9.74547 9.76911 9.4031 10.1115C9.06074 10.4538 8.64165 10.625 8.14581 10.625ZM8.49998 16.2917L6.05623 14.3792L2.99269 14.0073L2.62081 10.9438L0.708313 8.50001L2.62081 6.05626L2.99269 2.99272L6.05623 2.62084L8.49998 0.708344L10.9437 2.62084L14.0073 2.99272L14.3791 6.05626L16.2916 8.50001L14.3791 10.9438L14.0073 14.0073L10.9437 14.3792L8.49998 16.2917ZM8.49998 14.4854L10.3771 13.0333L12.75 12.7323L13.0333 10.3771L14.4854 8.50001L13.0333 6.62293L12.7323 4.26772L10.3771 3.96668L8.49998 2.51459L6.6229 3.96668L4.24998 4.26772L3.96665 6.62293L2.51456 8.50001L3.96665 10.3771L4.26769 12.75L6.6229 13.0333L8.49998 14.4854Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_39">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Energy
              </div>


            </div>
            <div >
              <div
                className=" homeDropdownToggle" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4.66634 2.66634V1.33301H11.333V2.66634H14.6663V3.99967H13.333V13.9997C13.333 14.1765 13.2628 14.3461 13.1377 14.4711C13.0127 14.5961 12.8432 14.6663 12.6663 14.6663H3.33301C3.1562 14.6663 2.98663 14.5961 2.8616 14.4711C2.73658 14.3461 2.66634 14.1765 2.66634 13.9997V3.99967H1.33301V2.66634H4.66634ZM3.99967 3.99967V13.333H11.9997V3.99967H3.99967ZM5.99967 5.99967H7.33301V11.333H5.99967V5.99967ZM8.66634 5.99967H9.99967V11.333H8.66634V5.99967Z" fill="white" />
                </svg>
                Waste <span id='homeSpan'  >(Beta)</span>

              </div>

            </div>
          </div>
          <div className='homeleftbuttonDiv' >
            <button id='HomeButton' >Open Help Center</button>
          </div>
          <div className='homeLastDiv' >
            <p>POWERED BY</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="117" height="26" viewBox="0 0 117 26" fill="none">
              <g clip-path="url(#clip0_1_69)">
                <path d="M1 19.8031V0.808291H3.05147V17.8093H11.9741V19.8031H1ZM19 20.342C14.9959 20.342 12.3512 17.4321 12.3512 13.0135C12.3512 8.56788 14.9959 5.65803 19 5.65803C23.0288 5.65803 25.6734 8.56788 25.6734 13.0135C25.6734 17.4321 23.0288 20.342 19 20.342ZM19 18.4829C21.8918 18.4829 23.7703 16.3275 23.7703 13.0135C23.7703 9.69948 21.8918 7.54404 19 7.54404C16.1081 7.54404 14.2297 9.69948 14.2297 13.0135C14.2297 16.3275 16.1081 18.4829 19 18.4829ZM34.3397 5.65803C37.2069 5.65803 38.9617 7.65181 38.9617 11.0197V19.8031H37.0586V11.2352C37.0586 8.91813 35.798 7.43627 33.8207 7.43627C31.3243 7.43627 29.52 9.34922 29.52 12.1244V19.8031H27.6416V6.19689H29.347L29.52 8.21762H29.5448C30.6076 6.57409 32.1647 5.65803 34.3397 5.65803ZM46.7163 26C43.775 26 41.0315 24.5451 39.8202 22.3627L41.2787 21.0155C42.2673 22.9016 44.393 24.1409 46.6669 24.1409C49.7564 24.1409 51.8079 22.0124 51.8079 18.7254V17.2166H51.7832C50.7945 18.914 48.8172 19.9648 47.0623 19.9648C43.3796 19.9648 40.8338 17.0819 40.8338 12.9057C40.8338 8.62176 43.3796 5.71192 47.0623 5.71192C48.8666 5.71192 50.7945 6.81658 51.8079 8.40622H51.8326L52.0303 6.19689H53.7111V18.7254C53.7111 23.144 50.9181 26 46.7163 26ZM47.3095 18.1057C50.0036 18.1057 51.882 15.8694 51.882 12.9057C51.882 9.86114 50.0036 7.54404 47.3095 7.54404C44.5907 7.54404 42.7122 9.72643 42.7122 12.9057C42.7122 15.9772 44.5907 18.1057 47.3095 18.1057ZM61.3376 20.342C58.2233 20.342 55.6528 18.5907 55.4303 15.6808L57.2841 15.2767C57.4324 17.1627 59.1131 18.4829 61.3376 18.4829C63.2902 18.4829 64.7979 17.486 64.7979 16.085C64.7979 15.0342 63.8834 14.3876 61.7825 13.9295L59.8052 13.4984C57.2099 12.9057 56.0977 11.7741 56.0977 9.78031C56.1224 7.40933 58.0503 5.65803 60.7197 5.65803C63.3396 5.65803 65.2922 7.19378 65.7618 9.40311L63.9575 9.94197C63.7845 8.51399 62.4745 7.46321 60.695 7.46321C59.1131 7.46321 57.9514 8.51399 57.9267 9.67254C57.9267 10.6694 58.6682 11.2352 60.3984 11.6394L62.4251 12.0705C65.3664 12.744 66.6269 13.8756 66.6269 15.8964C66.6269 18.456 64.353 20.342 61.3376 20.342ZM69.4981 3.55648C68.6577 3.55648 68.114 2.96373 68.114 2.04767C68.114 1.15855 68.6577 0.565801 69.4981 0.565801C70.3137 0.565801 70.9069 1.15855 70.9069 2.04767C70.9069 2.96373 70.3137 3.55648 69.4981 3.55648ZM68.5341 19.8031V6.19689H70.4126V19.8031H68.5341ZM78.553 26C75.6118 26 72.8682 24.5451 71.6571 22.3627L73.1154 21.0155C74.1041 22.9016 76.2297 24.1409 78.5036 24.1409C81.5932 24.1409 83.6446 22.0124 83.6446 18.7254V17.2166H83.6199C82.6312 18.914 80.6539 19.9648 78.8991 19.9648C75.2163 19.9648 72.6705 17.0819 72.6705 12.9057C72.6705 8.62176 75.2163 5.71192 78.8991 5.71192C80.7034 5.71192 82.6312 6.81658 83.6446 8.40622H83.6693L83.8671 6.19689H85.5478V18.7254C85.5478 23.144 82.7548 26 78.553 26ZM79.1462 18.1057C81.8403 18.1057 83.7188 15.8694 83.7188 12.9057C83.7188 9.86114 81.8403 7.54404 79.1462 7.54404C76.4274 7.54404 74.549 9.72643 74.549 12.9057C74.549 15.9772 76.4274 18.1057 79.1462 18.1057ZM88.0088 19.8031V0H89.8872V8.21762H89.912C90.9748 6.57409 92.5319 5.65803 94.7069 5.65803C97.5741 5.65803 99.3289 7.65181 99.3289 11.0197V19.8031H97.4258V11.2352C97.4258 8.91813 96.1652 7.43627 94.1879 7.43627C91.6915 7.43627 89.8872 9.34922 89.8872 12.1244V19.8031H88.0088ZM106.625 20.342C104.277 20.342 102.695 18.6176 102.695 16.1389V7.8943H99.9517V6.19689H102.695V2.15544L104.574 1.67047V6.19689H110.16V7.8943H104.574V15.9233C104.574 17.4591 105.439 18.5637 106.798 18.5637C108.059 18.5637 109.22 17.5668 109.468 15.8155L111 16.5161C110.654 18.887 108.751 20.342 106.625 20.342Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_69">
                  <rect width="116" height="25" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div id='homeMainRightDiv' >

          <div id='homeMainRightDivFirstDiv' >
            <div  >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z" fill="#02AB6C" />
                <path d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z" fill="#02AB6C" />
                <path d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z" fill="#02AB6C" />
                <path d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z" fill="#02AB6C" />
                <path d="M12.8691 15.6985C11.99 16.1428 11.0131 16.3795 9.99957 16.3795C6.48177 16.3795 3.61988 13.5174 3.61988 9.99943C3.61988 8.10453 4.45168 6.35944 5.83537 5.17004L4.40368 1.71344C1.67938 3.54464 0.000579834 6.62153 0.000579834 10.0016C0.000579834 15.5148 4.48518 19.9999 9.99777 19.9999C11.991 19.9999 13.8944 19.4218 15.5167 18.3466L12.8691 15.6985Z" fill="#02AB6C" />
              </svg>
              <p>Category-1</p>
            </div>
            <div>
              <img src={imageicon} alt="" />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8L12 16L19 8H5Z" fill="#474444" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00011 6.10352e-05C9.47935 0.00258418 9.94313 0.16989 10.3136 0.473895C10.6841 0.7779 10.9387 1.2001 11.0348 1.66962C11.812 1.88784 12.5381 2.22245 13.192 2.65612C13.9665 3.16599 13.1969 4.32568 12.4258 3.81165C11.764 3.36929 11.0231 3.0588 10.2436 2.8972C9.8626 2.82654 9.652 2.46353 9.6901 2.07697C9.7289 1.68209 9.39568 1.38005 9.00011 1.38005C8.60454 1.38005 8.27409 1.68071 8.30457 2.09013C8.33298 2.47808 8.11822 2.82446 7.75105 2.89582C4.91557 3.47635 2.76384 5.99663 2.76384 9.006V12.8308C2.76384 12.9385 2.73869 13.0448 2.69041 13.1411L1.45244 15.6212C1.20997 16.1068 1.52865 16.6216 2.07247 16.6222H15.925C16.4702 16.6236 16.7909 16.1082 16.5471 15.6212L15.3043 13.1411C15.256 13.0448 15.2308 12.9385 15.2308 12.8308V9.006C15.2311 7.78469 14.8695 6.59067 14.1917 5.57474C13.679 4.80369 14.8373 4.03611 15.3472 4.80854C16.1746 6.05206 16.6162 7.51235 16.6164 9.006V12.6673L17.7871 15.0019C18.4647 16.359 17.4401 18.0099 15.9236 18.0078H12.3905C12.0677 19.5845 10.6655 20.7802 8.99734 20.7802C7.32916 20.7802 5.92701 19.5845 5.60418 18.0078H2.06969C0.556004 18.0057 -0.463053 16.3562 0.213085 15.0012L1.37831 12.6673V9.006C1.37831 5.51932 3.74619 2.56329 6.9613 1.66547C7.05939 1.19655 7.31529 0.775431 7.68631 0.472361C8.05733 0.169291 8.52105 0.00258965 9.00011 6.10352e-05ZM10.9495 18.0078H7.04513C7.18536 18.4136 7.44892 18.7655 7.79895 19.0141C8.14898 19.2628 8.56797 19.3959 8.99734 19.3947C9.4267 19.3959 9.8457 19.2628 10.1957 19.0141C10.5458 18.7655 10.8093 18.4136 10.9495 18.0078Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00011 6.10352e-05C9.47935 0.00258418 9.94313 0.16989 10.3136 0.473895C10.6841 0.7779 10.9387 1.2001 11.0348 1.66962C11.812 1.88784 12.5381 2.22245 13.192 2.65612C13.9665 3.16599 13.1969 4.32568 12.4258 3.81165C11.764 3.36929 11.0231 3.0588 10.2436 2.8972C9.8626 2.82654 9.652 2.46353 9.6901 2.07697C9.7289 1.68209 9.39568 1.38005 9.00011 1.38005C8.60454 1.38005 8.27409 1.68071 8.30457 2.09013C8.33298 2.47808 8.11822 2.82446 7.75105 2.89582C4.91557 3.47635 2.76384 5.99663 2.76384 9.006V12.8308C2.76384 12.9385 2.73869 13.0448 2.69041 13.1411L1.45244 15.6212C1.20997 16.1068 1.52865 16.6216 2.07247 16.6222H15.925C16.4702 16.6236 16.7909 16.1082 16.5471 15.6212L15.3043 13.1411C15.256 13.0448 15.2308 12.9385 15.2308 12.8308V9.006C15.2311 7.78469 14.8695 6.59067 14.1917 5.57474C13.679 4.80369 14.8373 4.03611 15.3472 4.80854C16.1746 6.05206 16.6162 7.51235 16.6164 9.006V12.6673L17.7871 15.0019C18.4647 16.359 17.4401 18.0099 15.9236 18.0078H12.3905C12.0677 19.5845 10.6655 20.7802 8.99734 20.7802C7.32916 20.7802 5.92701 19.5845 5.60418 18.0078H2.06969C0.556004 18.0057 -0.463053 16.3562 0.213085 15.0012L1.37831 12.6673V9.006C1.37831 5.51932 3.74619 2.56329 6.9613 1.66547C7.05939 1.19655 7.31529 0.775431 7.68631 0.472361C8.05733 0.169291 8.52105 0.00258965 9.00011 6.10352e-05ZM10.9495 18.0078H7.04513C7.18536 18.4136 7.44892 18.7655 7.79895 19.0141C8.14898 19.2628 8.56797 19.3959 8.99734 19.3947C9.4267 19.3959 9.8457 19.2628 10.1957 19.0141C10.5458 18.7655 10.8093 18.4136 10.9495 18.0078Z" fill="black" fill-opacity="0.84" />
              </svg>
            </div>
          </div>
          <div id='homeMainRightDivSecondDiv' >
            <select className="form-select no-arrow" >
              <option selected>Show Tline: Mar’23 - Apr’23 |
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path d="M2.90573 5.00001L0.305725 2.40001C-0.0109418 2.08335 -0.0816084 1.72101 0.093725 1.31301C0.269058 0.905012 0.581392 0.700679 1.03073 0.700012H6.18072C6.63072 0.700012 6.94339 0.904345 7.11872 1.31301C7.29406 1.72168 7.22306 2.08401 6.90573 2.40001L4.30572 5.00001C4.20572 5.10001 4.09739 5.17501 3.98073 5.22501C3.86406 5.27501 3.73906 5.30001 3.60573 5.30001C3.47239 5.30001 3.34739 5.27501 3.23073 5.22501C3.11406 5.17501 3.00573 5.10001 2.90573 5.00001Z" fill="black" fill-opacity="0.84" />
                </svg>
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div id='homeMainRightDivThirdDiv' >
            <div className='homeTopBoxElement' >
              <div  >
                <span>Purchased goods and Services</span> &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <g clip-path="url(#clip0_1_76)">
                    <path d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z" fill="black" fill-opacity="0.8" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_76">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className='smallFontinDiv' >contribution to Scope3</p>
              </div>
              <div>
                <p>441510.9 CO₂e</p>
                <p>25% YOY ↑</p>
              </div>
            </div>
            <div className='homeTopBoxElement' >
              <div>
                <span>Purchased good and services</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <g clip-path="url(#clip0_1_76)">
                    <path d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z" fill="black" fill-opacity="0.8" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_76">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>to revenue ratio </p>
              </div>
              <div>
                <p>323586.2 CO₂e</p>
                <p>24% YOY ↓</p>
              </div>
            </div>
            <div className='homeTopBoxElement' >
              <div>
                <span>Category-1</span> &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <g clip-path="url(#clip0_1_76)">
                    <path d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z" fill="black" fill-opacity="0.8" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_76">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className='smallFontinDiv' >contribution to Scope3</p>
              </div>
              <div>
                <p>32% of Scope3</p>
                <p>25% YOY ↑</p>
              </div>
            </div>
            <div className='homeLastElement' >
              <div>
                Total number of reached suppliers
              </div>
              <div>143</div>
            </div>
          </div>
          <div >
            <CustomBar/>
          </div>

          <div id='homeBottomDiv' >
            <div id='homeBottomDivleftdivfirst'>
              <div id='homeBottomDivleftdivsecond' >
                <div id='headerPiechart' >
                  <div>Emission by Supplier</div>
                  <div id='svgDiv' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M7.38349 15.2661C7.38349 15.6716 7.05505 16 6.64954 16H0.733945C0.656881 16 0.581651 15.9872 0.510091 15.9651C0.489908 15.9578 0.469724 15.9505 0.449541 15.9413C0.429357 15.9339 0.411009 15.9248 0.394495 15.9156C0.372477 15.9046 0.352293 15.8936 0.33211 15.8789C0.311926 15.8661 0.291743 15.8514 0.27156 15.8349C0.19633 15.7743 0.135779 15.7009 0.0899079 15.6147C0.0788987 15.5982 0.0697245 15.5798 0.0642199 15.5596C0.0587153 15.5541 0.0550453 15.5468 0.0532105 15.5376C0.0440362 15.5174 0.0366969 15.4954 0.0311923 15.4752C0.0110088 15.4092 0 15.3394 0 15.2661V9.35046C0 8.94495 0.330275 8.61651 0.733945 8.61651C1.13945 8.61651 1.46789 8.94495 1.46789 9.35046V13.4954L5.66422 9.29725C5.95046 9.01101 6.41651 9.01101 6.70275 9.29725C6.98899 9.58348 6.98899 10.0477 6.70275 10.3358L2.50642 14.5321H6.64954C7.05505 14.5321 7.38349 14.8605 7.38349 15.2661ZM16 0.733945V6.64954C16 7.05505 15.6716 7.38349 15.2661 7.38349C14.8605 7.38349 14.5321 7.05505 14.5321 6.64954V2.50642L10.3358 6.70275C10.1927 6.84587 10.0037 6.91743 9.81651 6.91743C9.62936 6.91743 9.44037 6.84587 9.29725 6.70275C9.01101 6.41651 9.01101 5.95046 9.29725 5.66422L13.4936 1.46789H9.35046C8.94495 1.46789 8.61651 1.13945 8.61651 0.733945C8.61651 0.32844 8.94495 0 9.35046 0H15.2661C15.3174 0 15.367 0.00550422 15.4128 0.0146785C15.4367 0.0201831 15.4605 0.0256881 15.4844 0.0330276C15.5064 0.040367 15.5284 0.0477064 15.5505 0.0587155C15.7266 0.13211 15.8679 0.273394 15.9413 0.449541C15.9523 0.471559 15.9596 0.493577 15.967 0.515596C15.9743 0.539449 15.9798 0.563302 15.9853 0.587155C15.9945 0.633027 16 0.682569 16 0.733945Z" fill="white" />
                    <path d="M7.38349 15.2661C7.38349 15.6716 7.05505 16 6.64954 16H0.733945C0.656881 16 0.581651 15.9872 0.510091 15.9651C0.489908 15.9578 0.469724 15.9505 0.449541 15.9413C0.429357 15.9339 0.411009 15.9248 0.394495 15.9156C0.372477 15.9046 0.352293 15.8936 0.33211 15.8789C0.311926 15.8661 0.291743 15.8514 0.27156 15.8349C0.19633 15.7743 0.135779 15.7009 0.0899079 15.6147C0.0788987 15.5982 0.0697245 15.5798 0.0642199 15.5596C0.0587153 15.5541 0.0550453 15.5468 0.0532105 15.5376C0.0440362 15.5174 0.0366969 15.4954 0.0311923 15.4752C0.0110088 15.4092 0 15.3394 0 15.2661V9.35046C0 8.94495 0.330275 8.61651 0.733945 8.61651C1.13945 8.61651 1.46789 8.94495 1.46789 9.35046V13.4954L5.66422 9.29725C5.95046 9.01101 6.41651 9.01101 6.70275 9.29725C6.98899 9.58348 6.98899 10.0477 6.70275 10.3358L2.50642 14.5321H6.64954C7.05505 14.5321 7.38349 14.8605 7.38349 15.2661ZM16 0.733945V6.64954C16 7.05505 15.6716 7.38349 15.2661 7.38349C14.8605 7.38349 14.5321 7.05505 14.5321 6.64954V2.50642L10.3358 6.70275C10.1927 6.84587 10.0037 6.91743 9.81651 6.91743C9.62936 6.91743 9.44037 6.84587 9.29725 6.70275C9.01101 6.41651 9.01101 5.95046 9.29725 5.66422L13.4936 1.46789H9.35046C8.94495 1.46789 8.61651 1.13945 8.61651 0.733945C8.61651 0.32844 8.94495 0 9.35046 0H15.2661C15.3174 0 15.367 0.00550422 15.4128 0.0146785C15.4367 0.0201831 15.4605 0.0256881 15.4844 0.0330276C15.5064 0.040367 15.5284 0.0477064 15.5505 0.0587155C15.7266 0.13211 15.8679 0.273394 15.9413 0.449541C15.9523 0.471559 15.9596 0.493577 15.967 0.515596C15.9743 0.539449 15.9798 0.563302 15.9853 0.587155C15.9945 0.633027 16 0.682569 16 0.733945Z" fill="black" fill-opacity="0.84" />
                  </svg>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                      <path d="M2 0C0.9 0 0 0.899976 0 1.99995C0 3.09992 0.9 3.9999 2 3.9999C3.1 3.9999 4 3.09992 4 1.99995C4 0.899976 3.1 0 2 0ZM14 0C12.9 0 12 0.899976 12 1.99995C12 3.09992 12.9 3.9999 14 3.9999C15.1 3.9999 16 3.09992 16 1.99995C16 0.899976 15.1 0 14 0ZM8 0C6.9 0 6 0.899976 6 1.99995C6 3.09992 6.9 3.9999 8 3.9999C9.1 3.9999 10 3.09992 10 1.99995C10 0.899976 9.1 0 8 0Z" fill="white" />
                      <path d="M2 0C0.9 0 0 0.899976 0 1.99995C0 3.09992 0.9 3.9999 2 3.9999C3.1 3.9999 4 3.09992 4 1.99995C4 0.899976 3.1 0 2 0ZM14 0C12.9 0 12 0.899976 12 1.99995C12 3.09992 12.9 3.9999 14 3.9999C15.1 3.9999 16 3.09992 16 1.99995C16 0.899976 15.1 0 14 0ZM8 0C6.9 0 6 0.899976 6 1.99995C6 3.09992 6.9 3.9999 8 3.9999C9.1 3.9999 10 3.09992 10 1.99995C10 0.899976 9.1 0 8 0Z" fill="black" fill-opacity="0.84" />
                    </svg>
                  </div>
                </div>
                <div id='PieChartDiv'>
              <CustomDoughnut/>
              </div>
              </div>   
            </div>
              <div id='' >
                <CustomTable/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}