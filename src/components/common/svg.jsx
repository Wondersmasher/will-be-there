import { cn } from "../../utils/cn";
import PropTypes from "prop-types";
export const MsgIcon = ({ className }) => {
  return (
    <svg
      width='26'
      height='23'
      viewBox='0 0 26 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn("size-5", className)}
    >
      <path
        d='M22.1 0.5625H3.9C2.86566 0.5625 1.87368 1.00524 1.14228 1.79332C0.410892 2.5814 0 3.65026 0 4.76478V18.7724C0 19.8869 0.410892 20.9557 1.14228 21.7438C1.87368 22.5319 2.86566 22.9746 3.9 22.9746H22.1C23.1343 22.9746 24.1263 22.5319 24.8577 21.7438C25.5891 20.9557 26 19.8869 26 18.7724V4.76478C26 3.65026 25.5891 2.5814 24.8577 1.79332C24.1263 1.00524 23.1343 0.5625 22.1 0.5625ZM21.229 3.36402L13 10.0176L4.771 3.36402H21.229ZM22.1 20.1731H3.9C3.55522 20.1731 3.22456 20.0256 2.98076 19.7629C2.73696 19.5002 2.6 19.1439 2.6 18.7724V5.11497L12.22 12.8892C12.445 13.071 12.7187 13.1693 13 13.1693C13.2813 13.1693 13.555 13.071 13.78 12.8892L23.4 5.11497V18.7724C23.4 19.1439 23.263 19.5002 23.0192 19.7629C22.7754 20.0256 22.4448 20.1731 22.1 20.1731Z'
        fill='#D7D7D7'
      />
    </svg>
  );
};
MsgIcon.propTypes = {
  className: PropTypes.string,
};

export const LocationIcon = ({ className }) => {
  return (
    <svg
      width='23'
      height='27'
      viewBox='0 0 23 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn("size-5", className)}
    >
      <path
        d='M12 5.92969C11.0111 5.92969 10.0444 6.21136 9.22215 6.73907C8.3999 7.26679 7.75904 8.01685 7.3806 8.89441C7.00217 9.77197 6.90315 10.7376 7.09608 11.6692C7.289 12.6008 7.7652 13.4566 8.46447 14.1282C9.16373 14.7999 10.0546 15.2573 11.0245 15.4426C11.9945 15.6279 12.9998 15.5328 13.9134 15.1693C14.827 14.8058 15.6079 14.1903 16.1573 13.4005C16.7068 12.6107 17 11.6822 17 10.7323C16.9985 9.45901 16.4712 8.23829 15.5339 7.33794C14.5965 6.43759 13.3256 5.93114 12 5.92969ZM12 13.1336C11.5055 13.1336 11.0222 12.9928 10.6111 12.7289C10.2 12.465 9.87952 12.09 9.6903 11.6512C9.50108 11.2124 9.45157 10.7296 9.54804 10.2638C9.6445 9.79801 9.8826 9.37014 10.2322 9.03431C10.5819 8.69849 11.0273 8.46978 11.5123 8.37713C11.9972 8.28447 12.4999 8.33203 12.9567 8.51378C13.4135 8.69553 13.804 9.00331 14.0787 9.3982C14.3534 9.79309 14.5 10.2574 14.5 10.7323C14.4992 11.3689 14.2356 11.9793 13.7669 12.4295C13.2982 12.8796 12.6628 13.1329 12 13.1336Z'
        fill='white'
      />
      <path
        d='M19.6316 3.3815C17.6209 1.71736 14.9369 0.728798 12.0976 0.606599C9.2583 0.4844 6.46494 1.23723 4.25667 2.71979C2.0484 4.20235 0.581764 6.30955 0.13982 8.63468C-0.302124 10.9598 0.311956 13.3381 1.86354 15.3104L9.85846 25.4713C10.0364 25.6973 10.2796 25.8831 10.5662 26.0117C10.8528 26.1403 11.1736 26.2076 11.4995 26.2076C11.8255 26.2076 12.1463 26.1403 12.4328 26.0117C12.7194 25.8831 12.9626 25.6973 13.1406 25.4713L21.1357 15.3104C22.5754 13.4808 23.2117 11.297 22.9378 9.12523C22.664 6.95342 21.4967 4.92555 19.6316 3.3815ZM19.3628 14.3542L11.4995 24.3474L3.63621 14.3542C1.22928 11.2953 1.74551 7.20168 4.86368 4.62015C5.7351 3.89871 6.76964 3.32643 7.90823 2.93599C9.04681 2.54554 10.2671 2.34458 11.4995 2.34458C12.7319 2.34458 13.9523 2.54554 15.0909 2.93599C16.2294 3.32643 17.264 3.89871 18.1354 4.62015C21.2536 7.20168 21.7697 11.2953 19.3628 14.3542Z'
        fill='white'
      />
    </svg>
  );
};
LocationIcon.propTypes = {
  className: PropTypes.string,
};

export const CallIcon = ({ className }) => {
  return (
    <svg
      width='24'
      height='27'
      viewBox='0 0 24 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn("size-5", className)}
    >
      <path
        d='M17.4822 26.9467C17.8009 26.9488 18.1167 26.8802 18.4113 26.7451C18.7059 26.61 18.9733 26.411 19.198 26.1597L22.4496 22.5448C22.6731 22.2949 22.7986 21.9568 22.7986 21.6044C22.7986 21.252 22.6731 20.9139 22.4496 20.664L17.6502 15.3283C17.4253 15.0799 17.1212 14.9404 16.8043 14.9404C16.4873 14.9404 16.1832 15.0799 15.9583 15.3283L14.0385 17.4492C12.7094 17.0553 11.4784 16.3299 10.4389 15.3283C9.54037 14.1709 8.88825 12.803 8.53113 11.3266L10.4389 9.19231C10.6624 8.94238 10.7878 8.6043 10.7878 8.2519C10.7878 7.8995 10.6624 7.56141 10.4389 7.31149L5.63944 1.97583C5.41463 1.72739 5.11052 1.58794 4.79353 1.58794C4.47654 1.58794 4.17243 1.72739 3.94762 1.97583L0.707965 5.60408C0.481947 5.85384 0.302942 6.15115 0.181396 6.47865C0.0598508 6.80616 -0.00180071 7.1573 4.00358e-05 7.51157C0.108896 12.6369 1.95112 17.5283 5.15949 21.2109C8.472 24.7777 12.8719 26.8257 17.4822 26.9467ZM4.79953 4.81707L7.9072 8.27191L6.35936 9.99265C6.21276 10.1453 6.10298 10.3365 6.04009 10.5485C5.9772 10.7606 5.96321 10.9869 5.9994 11.2065C6.44788 13.4346 7.39738 15.4999 8.75911 17.2091C10.2954 18.7249 12.1536 19.7808 14.1585 20.2771C14.3531 20.3224 14.5548 20.3131 14.7454 20.2503C14.9359 20.1874 15.1095 20.0729 15.2504 19.917L16.7983 18.1562L19.9059 21.611L17.5062 24.2789C13.5271 24.165 9.73041 22.3996 6.86331 19.3301C4.0951 16.1413 2.5025 11.915 2.39978 7.4849L4.79953 4.81707ZM21.5977 12.2736H23.9975C24.0286 10.6876 23.7705 9.11101 23.2389 7.63884C22.7072 6.16666 21.9129 4.8294 20.9039 3.70764C19.8948 2.58589 18.6919 1.70286 17.3677 1.11179C16.0435 0.520716 14.6253 0.233829 13.1986 0.268419V2.93625C14.312 2.89343 15.4214 3.10567 16.4578 3.55976C17.4943 4.01386 18.4356 4.70011 19.2234 5.57585C20.0111 6.45159 20.6284 7.49811 21.0369 8.65034C21.4453 9.80258 21.6363 11.0359 21.5977 12.2736Z'
        fill='white'
      />
      <path
        d='M13 9.86887C15.1 9.86887 16 10.8294 16 13.0706H18C18 9.63407 16.22 7.73438 13 7.73438V9.86887Z'
        fill='white'
      />
    </svg>
  );
};
CallIcon.propTypes = {
  className: PropTypes.string,
};

export const TwitterIcon = ({ className }) => {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn("size-5", className)}
    >
      <path
        d='M18.8263 2.01562H22.1998L14.8297 10.4391L23.5 21.9016H16.7112L11.394 14.9497L5.30995 21.9016H1.93443L9.81743 12.8917L1.5 2.01562H8.46111L13.2674 8.36996L18.8263 2.01562ZM17.6423 19.8824H19.5116L7.44539 3.92876H5.43946L17.6423 19.8824Z'
        fill='#F9F9F9'
      />
    </svg>
  );
};
TwitterIcon.propTypes = {
  className: PropTypes.string,
};

export const FacebookIcon = ({ className }) => {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn("size-5", className)}
    >
      <path
        d='M12.5 0.109375C5.87264 0.109375 0.5 5.48201 0.5 12.1094C0.5 17.7369 4.37456 22.4591 9.60128 23.7561V15.7766H7.12688V12.1094H9.60128V10.5292C9.60128 6.4449 11.4498 4.55177 15.4597 4.55177C16.22 4.55177 17.5318 4.70106 18.0685 4.84985V8.17385C17.7853 8.14409 17.2933 8.12922 16.6822 8.12922C14.7147 8.12922 13.9544 8.87465 13.9544 10.8124V12.1094H17.8741L17.2006 15.7766H13.9544V24.0215C19.8963 23.3039 24.5005 18.2447 24.5005 12.1094C24.5 5.48201 19.1274 0.109375 12.5 0.109375Z'
        fill='#F9F9F9'
      />
    </svg>
  );
};
FacebookIcon.propTypes = {
  className: PropTypes.string,
};

export const InstagramIcon = ({ className }) => {
  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn("size-5", className)}
    >
      <g clipPath='url(#clip0_169_13799)'>
        <path
          d='M12.5 2.27031C15.7063 2.27031 16.0859 2.28437 17.3469 2.34062C18.5188 2.39219 19.1516 2.58906 19.5734 2.75313C20.1313 2.96875 20.5344 3.23125 20.9516 3.64844C21.3734 4.07031 21.6313 4.46875 21.8469 5.02656C22.0109 5.44844 22.2078 6.08594 22.2594 7.25312C22.3156 8.51875 22.3297 8.89844 22.3297 12.1C22.3297 15.3063 22.3156 15.6859 22.2594 16.9469C22.2078 18.1188 22.0109 18.7516 21.8469 19.1734C21.6313 19.7313 21.3687 20.1344 20.9516 20.5516C20.5297 20.9734 20.1313 21.2313 19.5734 21.4469C19.1516 21.6109 18.5141 21.8078 17.3469 21.8594C16.0813 21.9156 15.7016 21.9297 12.5 21.9297C9.29375 21.9297 8.91406 21.9156 7.65313 21.8594C6.48125 21.8078 5.84844 21.6109 5.42656 21.4469C4.86875 21.2313 4.46563 20.9688 4.04844 20.5516C3.62656 20.1297 3.36875 19.7313 3.15313 19.1734C2.98906 18.7516 2.79219 18.1141 2.74063 16.9469C2.68438 15.6813 2.67031 15.3016 2.67031 12.1C2.67031 8.89375 2.68438 8.51406 2.74063 7.25312C2.79219 6.08125 2.98906 5.44844 3.15313 5.02656C3.36875 4.46875 3.63125 4.06562 4.04844 3.64844C4.47031 3.22656 4.86875 2.96875 5.42656 2.75313C5.84844 2.58906 6.48594 2.39219 7.65313 2.34062C8.91406 2.28437 9.29375 2.27031 12.5 2.27031ZM12.5 0.109375C9.24219 0.109375 8.83438 0.123437 7.55469 0.179688C6.27969 0.235938 5.40313 0.442187 4.64375 0.7375C3.85156 1.04687 3.18125 1.45469 2.51563 2.125C1.84531 2.79063 1.4375 3.46094 1.12813 4.24844C0.832812 5.0125 0.626563 5.88437 0.570313 7.15937C0.514063 8.44375 0.5 8.85156 0.5 12.1094C0.5 15.3672 0.514063 15.775 0.570313 17.0547C0.626563 18.3297 0.832812 19.2063 1.12813 19.9656C1.4375 20.7578 1.84531 21.4281 2.51563 22.0938C3.18125 22.7594 3.85156 23.1719 4.63906 23.4766C5.40313 23.7719 6.275 23.9781 7.55 24.0344C8.82969 24.0906 9.2375 24.1047 12.4953 24.1047C15.7531 24.1047 16.1609 24.0906 17.4406 24.0344C18.7156 23.9781 19.5922 23.7719 20.3516 23.4766C21.1391 23.1719 21.8094 22.7594 22.475 22.0938C23.1406 21.4281 23.5531 20.7578 23.8578 19.9703C24.1531 19.2063 24.3594 18.3344 24.4156 17.0594C24.4719 15.7797 24.4859 15.3719 24.4859 12.1141C24.4859 8.85625 24.4719 8.44844 24.4156 7.16875C24.3594 5.89375 24.1531 5.01719 23.8578 4.25781C23.5625 3.46094 23.1547 2.79063 22.4844 2.125C21.8188 1.45938 21.1484 1.04688 20.3609 0.742188C19.5969 0.446875 18.725 0.240625 17.45 0.184375C16.1656 0.123438 15.7578 0.109375 12.5 0.109375Z'
          fill='#F9F9F9'
        />
        <path
          d='M12.5 5.94531C9.09688 5.94531 6.33594 8.70625 6.33594 12.1094C6.33594 15.5125 9.09688 18.2734 12.5 18.2734C15.9031 18.2734 18.6641 15.5125 18.6641 12.1094C18.6641 8.70625 15.9031 5.94531 12.5 5.94531ZM12.5 16.1078C10.2922 16.1078 8.50156 14.3172 8.50156 12.1094C8.50156 9.90156 10.2922 8.11094 12.5 8.11094C14.7078 8.11094 16.4984 9.90156 16.4984 12.1094C16.4984 14.3172 14.7078 16.1078 12.5 16.1078Z'
          fill='#F9F9F9'
        />
        <path
          d='M20.3469 5.70469C20.3469 6.50157 19.7 7.14375 18.9078 7.14375C18.1109 7.14375 17.4688 6.49688 17.4688 5.70469C17.4688 4.90781 18.1156 4.26562 18.9078 4.26562C19.7 4.26562 20.3469 4.9125 20.3469 5.70469Z'
          fill='#F9F9F9'
        />
      </g>
      <defs>
        <clipPath id='clip0_169_13799'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(0.5 0.109375)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};
InstagramIcon.propTypes = {
  className: PropTypes.string,
};

export const Harmburger = ({ className, handleClick }) => {
  return (<span onClick={handleClick}
  >
    <svg
      fill='#000000'
      className={cn(className)}
      width='60px'
      height='44px'
      viewBox='-1.6 -1.6 19.20 19.20'
      xmlns='http://www.w3.org/2000/svg'
      stroke='#000000'
      strokeWidth='0.272'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path d='M.5 7.42h15v1.25H.5zm0 3.6h15v1.25H.5zm0-7.29h15v1.25H.5z'></path>
      </g>
    </svg></span>
  );
};

Harmburger.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export const CloseMenuBtn = ({ className, handleClick }) => {
  return (
    <span onClick={handleClick}
    ><svg
      viewBox='-2.4 -2.4 28.80 28.80'
      fill='none'
      className={cn(className)}
      width='70px'
      height='74px'
      xmlns='http://www.w3.org/2000/svg'
      stroke='#000000'
      strokeWidth='1.2'
    >
        <g
          id='SVGRepo_bgCarrier'
          strokeWidth='0'
          transform='translate(0,0), scale(1)'
        >
          <rect
            x='-2.4'
            y='-2.4'
            width='28.80'
            height='28.80'
            rx='14.4'
            fill='#E5A4CB'
            strokeWidth='0'
          ></rect>
        </g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
          stroke='#CCCCCC'
          strokeWidth='1.152'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z'
            fill='#000000'
          ></path>
        </g>
      </svg>
    </span>);
};

CloseMenuBtn.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
}


export const OpenedEye = ({ className }) => {
  return (

    <svg viewBox="0 0 24 24"
      fill=" none"
      className={cn(className)}
      width="20px"

      xmlns="http://www.w3.org/2000/svg" >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
    </svg >
  )
}

OpenedEye.propTypes = {
  className: PropTypes.string,
};


export const ClosedEye = ({ className }) => {

  return (
    <svg viewBox="0 0 24 24"
      width="20px"
      fill="none"
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">

      </g>
      <g id="SVGRepo_iconCarrier">

        <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
          stroke="#838383"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

        </path>
      </g>
    </svg>
  )
}

ClosedEye.propTypes = {
  className: PropTypes.string,
};

export const ArrowRightIcon = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      width="25px"

      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)
}

ArrowRightIcon.propTypes = {
  className: PropTypes.string
}
export const ArrowLeftIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="25px"

      className={cn(className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
  )
}

ArrowLeftIcon.propTypes = {
  className: PropTypes.string
}