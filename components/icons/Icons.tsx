import { SvgIcon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 40,
    height: 40,
    padding: 5,
  },
}));

const AWS = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <path
        fill="#252f3e"
        d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"
      />
      <path
        fill="#f90"
        d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"
      />
    </SvgIcon>
  );
};

const CProgramming = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <path
        fill="#283593"
        fillRule="evenodd"
        d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
        clipRule="evenodd"
      />
      <path
        fill="#5c6bc0"
        fillRule="evenodd"
        d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
        clipRule="evenodd"
      />
      <path
        fill="#3949ab"
        fillRule="evenodd"
        d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};

const Django = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <path
        fill="#004d40"
        fillRule="evenodd"
        d="M8,16v12.646C6.655,28.9,5.949,29,4.878,29 C1.67,28.997,0,27.565,0,24.816c0-2.649,1.771-4.368,4.516-4.368c0.426,0,0.75,0.033,1.143,0.134V16H8z M5.659,22.672 c-0.308-0.1-0.561-0.134-0.886-0.134c-1.328,0-2.096,0.809-2.096,2.228c0,1.381,0.734,2.143,2.079,2.143 c0.291,0,0.527-0.016,0.903-0.067V22.672L5.659,22.672z"
        clipRule="evenodd"
      />
      <path
        fill="#004d40"
        fillRule="evenodd"
        d="M12,20.046v6.618c0,2.076-0.155,3.224-0.612,4.084 c-0.426,0.827-0.987,1.349-2.146,1.925l-2.437-1.149c1.159-0.539,1.721-1.015,2.079-1.742c0.375-0.743,0.494-1.754,0.494-4.017 v-5.721H12z"
        clipRule="evenodd"
      />
      <rect
        width="2.623"
        height="2.713"
        x="9.377"
        y="16"
        fill="#004d40"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="#004d40"
        fillRule="evenodd"
        d="M13.734,20.876c1.136-0.552,2.223-0.795,3.408-0.795 c1.321,0,2.189,0.363,2.573,1.073C19.93,21.551,20,22.068,20,23.175v5.407c-1.152,0.171-2.606,0.294-3.673,0.294 c-2.156,0-3.123-0.778-3.123-2.505c0-1.868,1.285-2.731,4.441-3.006V22.78c0-0.483-0.235-0.658-0.884-0.658 c-0.95,0-2.02,0.278-3.024,0.812L13.734,20.876z M17.761,25.107c-1.702,0.171-2.255,0.449-2.255,1.141 c0,0.518,0.318,0.761,1.02,0.761c0.384,0,0.735-0.034,1.235-0.12L17.761,25.107L17.761,25.107z"
        clipRule="evenodd"
      />
      <path
        fill="#004d40"
        fillRule="evenodd"
        d="M21.418,20.693c1.52-0.421,2.772-0.613,4.041-0.613 c1.318,0,2.273,0.317,2.839,0.93C28.83,21.588,29,22.222,29,23.573v5.303h-2.574v-5.195c0-1.038-0.335-1.424-1.252-1.424 c-0.351,0-0.669,0.035-1.186,0.195v6.425h-2.57V20.693z"
        clipRule="evenodd"
      />
      <path
        fill="#004d40"
        fillRule="evenodd"
        d="M30.177,30.006c0.919,0.486,1.839,0.71,2.812,0.71 c1.721,0,2.454-0.473,2.454-2.176v-0.052c-0.51,0.258-1.025,0.366-1.704,0.366c-2.302,0-3.739-1.547-3.739-3.997 c0-3.043,2.141-4.762,5.974-4.762c1.126,0,2.167,0.121,3.427,0.383l-0.899,1.93c-0.699-0.138-0.057-0.021-0.584-0.072v0.279 l0.034,1.13l0.017,1.461c0.017,0.366,0.017,0.73,0.034,1.096v0.73c0,2.295-0.19,3.131-0.751,4.02 c-0.818,1.302-2.234,1.947-4.246,1.947c-1.024,0-1.91-0.155-2.829-0.521V30.006L30.177,30.006z M35.392,22.251h-0.085h-0.19 c-0.51-0.017-1.108,0.121-1.518,0.383c-0.628,0.365-0.953,1.027-0.953,1.964c0,1.337,0.649,2.102,1.808,2.102 c0.358,0,0.649-0.069,0.987-0.172v-0.193v-0.73c0-0.314-0.017-0.662-0.017-1.027l-0.017-1.234l-0.017-0.886V22.251z"
        clipRule="evenodd"
      />
      <path
        fill="#004d40"
        fillRule="evenodd"
        d="M43.566,20.046c2.753,0,4.434,1.66,4.434,4.348 c0,2.756-1.752,4.483-4.544,4.483c-2.756,0-4.456-1.659-4.456-4.33C39.005,21.774,40.757,20.046,43.566,20.046z M43.509,26.752 c1.057,0,1.681-0.838,1.681-2.294c0-1.439-0.607-2.294-1.663-2.294c-1.093,0-1.718,0.838-1.718,2.294 C41.81,25.914,42.438,26.752,43.509,26.752L43.509,26.752z"
        clipRule="evenodd"
      />
    </SvgIcon>
  );
};
const Figma = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <path
        fill="#e64a19"
        d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
      />
      <path
        fill="#7c4dff"
        d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
      />
      <path
        fill="#66bb6a"
        d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
      />
      <path
        fill="#ff7043"
        d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
      />
      <circle cx="32" cy="24" r="7" fill="#29b6f6" />
    </SvgIcon>
  );
};
const Firebase = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <path
        fill="#ff8f00"
        d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
      />
      <path
        fill="#ffa000"
        d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
      />
      <path
        fill="#ff6f00"
        d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
      />
      <path
        fill="#ffc400"
        d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
      />
    </SvgIcon>
  );
};
const Javascript = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <path fill="#ffd600" d="M6,42V6h36v36H6z" />
      <path
        fill="#000001"
        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
      />
    </SvgIcon>
  );
};
const Jira = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <g data-name="Слой 2">
        <path
          fill="#2684ff"
          d="M20.172,27.858,13.314,21l6.858-6.858V0L.586,19.586a2,2,0,0,0,0,2.828L20.172,42s3-2,3-7A11.639,11.639,0,0,0,20.172,27.858Z"
        />
        <path
          fill="#1d78f2"
          d="M14.385,19.667l.131.131,5.656-5.656V0L9.571,10.6A20.2,20.2,0,0,0,14.385,19.667Z"
        />
        <path
          fill="#126ae5"
          d="M15.832,18.285l.1.1,4.242-4.242V0L11.306,8.866A18.21,18.21,0,0,0,15.832,18.285Z"
        />
        <path
          fill="#0b60da"
          d="M20.172,14.142V0l-7,7a15.546,15.546,0,0,0,4.171,9.97Z"
        />
        <path
          fill="#0154ce"
          d="M15.172,7c0,4.746,3.407,8.371,3.585,8.556l1.415-1.414V0L15.35,4.822A13.161,13.161,0,0,0,15.172,7Z"
        />
        <path
          fill="#2482fd"
          d="M20.172,14.142,27.029,21l-6.857,6.858V42L39.757,22.414a2,2,0,0,0,0-2.828L20.172,0s-3,2-3,7A11.639,11.639,0,0,0,20.172,14.142Z"
        />
        <path
          fill="#1d78f2"
          d="M25.958,22.333l-.131-.131-5.655,5.656V42l10.6-10.6A20.2,20.2,0,0,0,25.958,22.333Z"
        />
        <path
          fill="#126ae5"
          d="M24.511,23.715l-.1-.1-4.241,4.242V42l8.866-8.866A18.216,18.216,0,0,0,24.511,23.715Z"
        />
        <path
          fill="#0b60da"
          d="M20.172,27.858V42l7-7A15.545,15.545,0,0,0,23,25.03Z"
        />
        <path
          fill="#0154ce"
          d="M25.172,35c0-4.746-3.407-8.371-3.586-8.556l-1.414,1.414V42l4.822-4.822A13.27,13.27,0,0,0,25.172,35Z"
        />
        <path
          fill="#2684ff"
          d="M20.172,27.858,13.314,21H2.172v3l18,18s3-2,3-7A11.639,11.639,0,0,0,20.172,27.858Z"
        />
      </g>
    </SvgIcon>
  );
};
const MaterialUi = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <polygon fill="#29b6f6" points="1,5 7,9 7,29 1,25" />
      <polygon fill="#0288d1" points="47,20 41,24 41,37 47,33" />
      <polygon fill="#0288d1" points="47,6 41,10 41,17 47,13" />
      <polygon fill="#0288d1" points="35,5 29,9 29,29 35,25" />
      <polygon fill="#29b6f6" points="1,12 18,23 18,16 1,5" />
      <polygon fill="#0288d1" points="35,12 18,23 18,16 35,5" />
      <polygon fill="#0288d1" points="35,26 18,37 18,30 35,19" />
      <polygon fill="#0288d1" points="47,34 30,45 30,38 47,27" />
      <polygon fill="#29b6f6" points="30,37.765 18,30 18,37 30,44.765" />
    </SvgIcon>
  );
};
const Nginx = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <polygon
        fill="#43a047"
        points="43,35.112 43,13.336 24,2.447 5,13.336 5,35.112 24,46"
      />
      <path
        fill="#fff"
        d="M32.5,13c-1.381,0-2.5,1.119-2.5,2.5v11.276L18.984,14.453l-0.131-0.152 C17.609,12.938,16.187,13,15.5,13c-1.381,0-2.5,1.119-2.5,2.5v17c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5V21.141 l11.278,12.627l0.11,0.142C30.62,35.133,32.295,35,32.5,35c1.381,0,2.5-1.119,2.5-2.5v-17C35,14.119,33.881,13,32.5,13z"
      />
    </SvgIcon>
  );
};
const PostgreSQl = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <path
        fill="#fff"
        d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"
      />
      <path
        fill="#0277bd"
        d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"
      />
      <path
        fill="#0277bd"
        d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"
      />
      <path
        fill="#0277bd"
        d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"
      />
    </SvgIcon>
  );
};
const Python = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <linearGradient
        id="goqfu1ZNmEnUrQDJEQ1bUa"
        x1="10.458"
        x2="26.314"
        y1="12.972"
        y2="26.277"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#26abe7" />
        <stop offset="1" stopColor="#086dbf" />
      </linearGradient>
      <path
        fill="url(#goqfu1ZNmEnUrQDJEQ1bUa)"
        d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2 H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
      />
      <linearGradient
        id="goqfu1ZNmEnUrQDJEQ1bUb"
        x1="35.334"
        x2="23.517"
        y1="37.911"
        y2="21.034"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#feb705" />
        <stop offset="1" stopColor="#ffda1c" />
      </linearGradient>
      <path
        fill="url(#goqfu1ZNmEnUrQDJEQ1bUb)"
        d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2 h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
      />
    </SvgIcon>
  );
};
const React = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <path
        fill="#4e7ab5"
        d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"
      />
      <path
        fill="#4e7ab5"
        d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"
      />
      <path
        fill="#4e7ab5"
        d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"
      />
      <path
        fill="#8bb7f0"
        d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"
      />
      <path
        fill="#4e7ab5"
        d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"
      />
      <path
        fill="#8bb7f0"
        d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"
      />
      <path
        fill="#8bb7f0"
        d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"
      />
      <g>
        <path
          fill="#8bb7f0"
          d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"
        />
      </g>
    </SvgIcon>
  );
};
const Redux = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <path
        fill="#7e57c2"
        d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"
      />
      <path
        fill="#7e57c2"
        d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"
      />
      <path
        fill="#7e57c2"
        d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"
      />
    </SvgIcon>
  );
};
const Typescript = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <rect width="36" height="36" x="6" y="6" fill="#1976d2" />
      <polygon
        fill="#fff"
        points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
      />
      <path
        fill="#fff"
        d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
      />
    </SvgIcon>
  );
};
const Vue = () => {
  const { root } = useStyles();
  return (
    <SvgIcon viewBox="0 0 50 50" className={root}>
      <polygon
        fill="#81c784"
        points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
      />
      <polygon
        fill="#455a64"
        points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
      />
    </SvgIcon>
  );
};
export {
  AWS,
  CProgramming,
  Django,
  Figma,
  Firebase,
  Javascript,
  Jira,
  MaterialUi,
  Nginx,
  PostgreSQl,
  Python,
  React,
  Redux,
  Typescript,
  Vue,
};
