import { User, Instagram, Mail, LucideProps, BookMarked, Menu, Share } from "lucide-react";

export const Icons = {
  user: User,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),
  instagram: Instagram,
  mail: Mail,
  telegram: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
    </svg>
  ),
  bookmarked: BookMarked,
  menu: Menu,
  share: Share,
  whatsapp: ({ ...props }: LucideProps) => (
    <svg
    fill="#25D366"
    height="200px"
    width="200px"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 308 308"
    xmlSpace="preserve"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g id="XMLID_468_">
        <path
          id="XMLID_469_"
          d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
        />
        <path
          id="XMLID_470_"
          d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
        />
      </g>
    </g>
  </svg>
  ),
  telegram1: ({ ...props }: LucideProps) => (
    <svg
    width="800px"
    height="800px"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <style type="text/css">
      {
        "\n\t.st0{fill:#FFFFFF;}\n\t.st1{fill:#F5BB41;}\n\t.st2{fill:#2167D1;}\n\t.st3{fill:#3D84F3;}\n\t.st4{fill:#4CA853;}\n\t.st5{fill:#398039;}\n\t.st6{fill:#D74F3F;}\n\t.st7{fill:#D43C89;}\n\t.st8{fill:#B2005F;}\n\t.st9{fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t\n\t\t.st10{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t\n\t\t.st11{fill-rule:evenodd;clip-rule:evenodd;fill:none;stroke:#040404;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st12{fill-rule:evenodd;clip-rule:evenodd;}\n\t.st13{fill-rule:evenodd;clip-rule:evenodd;fill:#040404;}\n\t.st14{fill:url(#SVGID_1_);}\n\t.st15{fill:url(#SVGID_2_);}\n\t.st16{fill:url(#SVGID_3_);}\n\t.st17{fill:url(#SVGID_4_);}\n\t.st18{fill:url(#SVGID_5_);}\n\t.st19{fill:url(#SVGID_6_);}\n\t.st20{fill:url(#SVGID_7_);}\n\t.st21{fill:url(#SVGID_8_);}\n\t.st22{fill:url(#SVGID_9_);}\n\t.st23{fill:url(#SVGID_10_);}\n\t.st24{fill:url(#SVGID_11_);}\n\t.st25{fill:url(#SVGID_12_);}\n\t.st26{fill:url(#SVGID_13_);}\n\t.st27{fill:url(#SVGID_14_);}\n\t.st28{fill:url(#SVGID_15_);}\n\t.st29{fill:url(#SVGID_16_);}\n\t.st30{fill:url(#SVGID_17_);}\n\t.st31{fill:url(#SVGID_18_);}\n\t.st32{fill:url(#SVGID_19_);}\n\t.st33{fill:url(#SVGID_20_);}\n\t.st34{fill:url(#SVGID_21_);}\n\t.st35{fill:url(#SVGID_22_);}\n\t.st36{fill:url(#SVGID_23_);}\n\t.st37{fill:url(#SVGID_24_);}\n\t.st38{fill:url(#SVGID_25_);}\n\t.st39{fill:url(#SVGID_26_);}\n\t.st40{fill:url(#SVGID_27_);}\n\t.st41{fill:url(#SVGID_28_);}\n\t.st42{fill:url(#SVGID_29_);}\n\t.st43{fill:url(#SVGID_30_);}\n\t.st44{fill:url(#SVGID_31_);}\n\t.st45{fill:url(#SVGID_32_);}\n\t.st46{fill:url(#SVGID_33_);}\n\t.st47{fill:url(#SVGID_34_);}\n\t.st48{fill:url(#SVGID_35_);}\n\t.st49{fill:url(#SVGID_36_);}\n\t.st50{fill:url(#SVGID_37_);}\n\t.st51{fill:url(#SVGID_38_);}\n\t.st52{fill:url(#SVGID_39_);}\n\t.st53{fill:url(#SVGID_40_);}\n\t.st54{fill:url(#SVGID_41_);}\n\t.st55{fill:url(#SVGID_42_);}\n\t.st56{fill:url(#SVGID_43_);}\n\t.st57{fill:url(#SVGID_44_);}\n\t.st58{fill:url(#SVGID_45_);}\n\t.st59{fill:#040404;}\n\t.st60{fill:url(#SVGID_46_);}\n\t.st61{fill:url(#SVGID_47_);}\n\t.st62{fill:url(#SVGID_48_);}\n\t.st63{fill:url(#SVGID_49_);}\n\t.st64{fill:url(#SVGID_50_);}\n\t.st65{fill:url(#SVGID_51_);}\n\t.st66{fill:url(#SVGID_52_);}\n\t.st67{fill:url(#SVGID_53_);}\n\t.st68{fill:url(#SVGID_54_);}\n\t.st69{fill:url(#SVGID_55_);}\n\t.st70{fill:url(#SVGID_56_);}\n\t.st71{fill:url(#SVGID_57_);}\n\t.st72{fill:url(#SVGID_58_);}\n\t.st73{fill:url(#SVGID_59_);}\n\t.st74{fill:url(#SVGID_60_);}\n\t.st75{fill:url(#SVGID_61_);}\n\t.st76{fill:url(#SVGID_62_);}\n\t.st77{fill:none;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}\n\t.st78{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}\n\t.st79{fill:#4BC9FF;}\n\t.st80{fill:#5500DD;}\n\t.st81{fill:#FF3A00;}\n\t.st82{fill:#E6162D;}\n\t.st83{fill:#F1F1F1;}\n\t.st84{fill:#FF9933;}\n\t.st85{fill:#B92B27;}\n\t.st86{fill:#00ACED;}\n\t.st87{fill:#BD2125;}\n\t.st88{fill:#1877F2;}\n\t.st89{fill:#6665D2;}\n\t.st90{fill:#CE3056;}\n\t.st91{fill:#5BB381;}\n\t.st92{fill:#61C3EC;}\n\t.st93{fill:#E4B34B;}\n\t.st94{fill:#181EF2;}\n\t.st95{fill:#FF0000;}\n\t.st96{fill:#FE466C;}\n\t.st97{fill:#FA4778;}\n\t.st98{fill:#FF7700;}\n\t.st99{fill-rule:evenodd;clip-rule:evenodd;fill:#1F6BF6;}\n\t.st100{fill:#520094;}\n\t.st101{fill:#4477E8;}\n\t.st102{fill:#3D1D1C;}\n\t.st103{fill:#FFE812;}\n\t.st104{fill:#344356;}\n\t.st105{fill:#00CC76;}\n\t.st106{fill-rule:evenodd;clip-rule:evenodd;fill:#345E90;}\n\t.st107{fill:#1F65D8;}\n\t.st108{fill:#EB3587;}\n\t.st109{fill-rule:evenodd;clip-rule:evenodd;fill:#603A88;}\n\t.st110{fill:#E3CE99;}\n\t.st111{fill:#783AF9;}\n\t.st112{fill:#FF515E;}\n\t.st113{fill:#FF4906;}\n\t.st114{fill:#503227;}\n\t.st115{fill:#4C7BD9;}\n\t.st116{fill:#69C9D0;}\n\t.st117{fill:#1B92D1;}\n\t.st118{fill:#EB4F4A;}\n\t.st119{fill:#513728;}\n\t.st120{fill:#FF6600;}\n\t.st121{fill-rule:evenodd;clip-rule:evenodd;fill:#B61438;}\n\t.st122{fill:#FFFC00;}\n\t.st123{fill:#141414;}\n\t.st124{fill:#94D137;}\n\t.st125{fill-rule:evenodd;clip-rule:evenodd;fill:#F1F1F1;}\n\t.st126{fill-rule:evenodd;clip-rule:evenodd;fill:#66E066;}\n\t.st127{fill:#2D8CFF;}\n\t.st128{fill:#F1A300;}\n\t.st129{fill:#4BA2F2;}\n\t.st130{fill:#1A5099;}\n\t.st131{fill:#EE6060;}\n\t.st132{fill-rule:evenodd;clip-rule:evenodd;fill:#F48120;}\n\t.st133{fill:#222222;}\n\t.st134{fill:url(#SVGID_63_);}\n\t.st135{fill:#0077B5;}\n\t.st136{fill:#FFCC00;}\n\t.st137{fill:#EB3352;}\n\t.st138{fill:#F9D265;}\n\t.st139{fill:#F5B955;}\n\t.st140{fill:#DD2A7B;}\n\t.st141{fill:#66E066;}\n\t.st142{fill:#EB4E00;}\n\t.st143{fill:#FFC794;}\n\t.st144{fill:#B5332A;}\n\t.st145{fill:#4E85EB;}\n\t.st146{fill:#58A45C;}\n\t.st147{fill:#F2BC42;}\n\t.st148{fill:#D85040;}\n\t.st149{fill:#464EB8;}\n\t.st150{fill:#7B83EB;}\n"
      }
    </style>
    <g id="Layer_1" />
    <g id="Layer_2">
      <g>
        <path
          className="st117"
          d="M88.723,12.142C76.419,17.238,23.661,39.091,9.084,45.047c-9.776,3.815-4.053,7.392-4.053,7.392    s8.345,2.861,15.499,5.007c7.153,2.146,10.968-0.238,10.968-0.238l33.62-22.652c11.922-8.107,9.061-1.431,6.199,1.431    c-6.199,6.2-16.452,15.975-25.036,23.844c-3.815,3.338-1.908,6.199-0.238,7.63c6.199,5.246,23.129,15.976,24.082,16.691    c5.037,3.566,14.945,8.699,16.452-2.146c0,0,5.961-37.435,5.961-37.435c1.908-12.637,3.815-24.321,4.053-27.659    C97.307,8.804,88.723,12.142,88.723,12.142z"
        />
      </g>
    </g>
  </svg>
  ),
};
