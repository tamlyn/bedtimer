import { h } from "preact";

const SvgWash = props => (
  <svg viewBox="0 0 512 512" {...props} width="1em" height="1em" fill="currentColor">
    <path d="M459.79 437.345c-19.021 0-34.495 15.399-34.495 34.326 0 18.928 15.475 34.327 34.495 34.327 19.02 0 34.494-15.399 34.494-34.327 0-18.927-15.474-34.326-34.494-34.326zm0 48.654c-7.993 0-14.495-6.427-14.495-14.327 0-7.899 6.502-14.326 14.495-14.326 7.992 0 14.494 6.427 14.494 14.326 0 7.9-6.502 14.327-14.494 14.327zM340.898 445.742c-5.522 0-10 4.477-10 10s4.478 10 10 10h.057c5.522 0 9.972-4.477 9.972-10s-4.506-10-10.029-10zM34.495 437.345C15.475 437.345 0 452.744 0 471.672c0 18.928 15.475 34.327 34.495 34.327S68.99 490.6 68.99 471.672c0-18.928-15.474-34.327-34.495-34.327zm0 48.654c-7.993 0-14.495-6.427-14.495-14.327 0-7.899 6.502-14.326 14.495-14.326s14.495 6.427 14.495 14.326c0 7.9-6.502 14.327-14.495 14.327zM153.386 445.742h-.057c-5.523 0-9.972 4.477-9.972 10s4.505 10 10.028 10 10-4.477 10-10c.001-5.523-4.476-10-9.999-10zM204.908 217.166c-2.993-4.641-9.182-5.978-13.824-2.986-22.964 14.804-45.048 14.574-67.511-.703-4.568-3.106-10.787-1.92-13.893 2.645-3.105 4.567-1.921 10.787 2.646 13.893 14.954 10.169 30.091 15.253 45.31 15.253 14.721 0 29.518-4.76 44.285-14.279 4.642-2.992 5.98-9.18 2.987-13.823zM391.282 216.774c-2.994-4.642-9.181-5.98-13.823-2.987-22.963 14.804-45.046 14.574-67.511-.703-4.566-3.105-10.785-1.921-13.893 2.646-3.106 4.567-1.921 10.787 2.646 13.892 14.954 10.169 30.092 15.254 45.311 15.254 14.721 0 29.518-4.76 44.283-14.279 4.642-2.992 5.979-9.181 2.987-13.823z" />
    <path d="M508.577 100.359a10.003 10.003 0 0 0-10.039-1.849c-10.386 3.832-20.29 5.776-29.44 5.776-20.201.001-37.847-9.245-55.53-29.095-39.751-44.619-96.492-69.192-159.773-69.192-45.805 0-91.639 13.426-129.058 37.805-40.289 26.249-68.761 63.27-82.351 107.07-11.675 34.017-18.616 113.789 2.158 152.05-1.988 3.283-3.527 6.836-4.452 10.587-14.008 4.695-22.688 16.619-22.688 32.043 0 17.018 13.816 35.87 33.073 38.936a48.15 48.15 0 0 0 3.512 3.881c10.807 10.732 14.377 23.645 18.512 38.597 2.052 7.421 4.174 15.094 7.33 22.842 4.705 11.542 10.284 16.716 14.768 20.873 5.135 4.762 8.527 7.908 9.651 25.938a10 10 0 0 0 9.98 9.378h111.084a10.003 10.003 0 0 0 10-10.008l-.03-39.247c.444-1.343 2.021-4.32 3.31-6.752 2.473-4.668 5.592-10.565 8.547-18.097 2.955 7.533 6.074 13.43 8.548 18.098 1.289 2.432 2.866 5.409 3.309 6.752l-.029 39.247a10 10 0 0 0 10 10.008h111.084a10 10 0 0 0 9.98-9.378c1.124-18.03 4.517-21.175 9.651-25.937 4.483-4.157 10.064-9.331 14.769-20.875 3.156-7.747 5.277-15.419 7.329-22.839 4.135-14.952 7.705-27.865 18.513-38.598a48.167 48.167 0 0 0 3.512-3.881c19.257-3.066 33.073-21.918 33.073-38.936 0-15.424-8.68-27.348-22.689-32.043-1.108-4.497-3.092-8.712-5.685-12.513 16.202-36.907 19.591-91.335 8.362-131.34 30.207-13.266 49.186-33.86 54.894-59.603a9.997 9.997 0 0 0-3.185-9.698zM44.684 356.551c-.383.93-.681 1.874-.938 2.825-3.953-4.028-6.341-9.501-6.341-13.821-.001-10.121 7.075-13.189 13.011-13.981a10 10 0 0 0 8.678-9.912c0-4.232 1.993-8.256 4.868-11.571.033-.037.063-.076.095-.112 4.355-4.963 10.684-8.306 15.234-8.306 6.748 0 9.246.957 12.053 3.563v42.23c-6.36-4.194-13.369-6.499-20.463-6.502-12.196 0-22.234 5.973-26.197 15.587zm192.034 25.243c-.943 30.803-9.881 47.67-15.796 58.835-.974 1.838-1.869 3.537-2.656 5.164-.328-.032-.66-.05-.997-.05h-35.195c-5.523 0-10 4.477-10 10s4.477 10 10 10h33.218l.015 20.256h-92.016c-2.372-16.892-7.872-23.283-15.094-29.98-3.656-3.391-6.813-6.318-9.845-13.756-2.714-6.661-4.59-13.444-6.575-20.625-4.484-16.215-9.121-32.982-23.695-47.457-4.731-4.698-5.601-8.328-4.908-10.009.637-1.546 3.32-3.208 7.717-3.208 7.731.004 16.171 6.919 21.502 17.617a10 10 0 0 0 18.95-4.46v-70.045c0-4.501 3.718-8.162 8.288-8.162s8.288 3.662 8.288 8.162v70.044c0 5.523 4.477 10 10 10s10-4.477 10-10v-82.208c0-4.501 3.718-8.163 8.287-8.163 4.571 0 8.289 3.662 8.289 8.163v82.208c0 5.523 4.477 10 10 10s10-4.477 10-10v-70.044c0-4.501 3.717-8.162 8.287-8.162s8.289 3.662 8.289 8.162v24.078l-.001.02v45.947c0 5.523 4.477 10 10 10s10-4.477 10-10v-45.927l.001-.02c0-4.501 3.717-8.162 8.287-8.162a8.302 8.302 0 0 1 7.498 4.705 28.179 28.179 0 0 0-.219 3.629l.502 29.099-.421 24.349zm10.424-75.501a28.228 28.228 0 0 0-17.783-6.282c-2.933 0-5.763.447-8.425 1.275-1.413-14.224-13.499-25.373-28.151-25.373-4.183 0-8.156.908-11.732 2.538-4.804-8.753-14.139-14.703-24.844-14.703-10.704 0-20.039 5.95-24.842 14.703a28.235 28.235 0 0 0-11.733-2.538c-8.547 0-16.215 3.799-21.407 9.783-4.601-2.498-10.432-4.025-18.934-4.025-6.502 0-13.486 2.277-19.779 6.211-12.579-30.963-9.431-93.816.628-126.911 27.291-14.189 54.59-21.116 83.329-21.116 37.362 0 72.244 11.276 109.173 23.214 37.664 12.176 76.611 24.766 119.063 24.766 22.767.002 44.65-3.601 66.41-10.932 8.775 33.118 6.53 77.91-5.372 109.788-5.743-3.195-11.939-5.019-17.749-5.019-8.503 0-14.334 1.527-18.936 4.025-5.191-5.985-12.859-9.784-21.406-9.784-4.184 0-8.157.909-11.733 2.538-4.803-8.753-14.138-14.703-24.842-14.703-10.705 0-20.04 5.95-24.844 14.703a28.23 28.23 0 0 0-11.732-2.538c-14.652 0-26.739 11.149-28.15 25.373a28.293 28.293 0 0 0-8.426-1.275 28.226 28.226 0 0 0-17.783 6.282zm179.06 67.887c-14.575 14.476-19.212 31.244-23.695 47.459-1.985 7.181-3.861 13.963-6.573 20.622-3.032 7.439-6.19 10.367-9.847 13.757-7.223 6.697-12.722 13.089-15.095 29.981h-92.015l.015-20.257h33.218c5.522 0 10-4.477 10-10s-4.478-10-10-10h-35.194c-.337 0-.669.018-.998.05-.786-1.626-1.682-3.325-2.655-5.163-5.915-11.165-14.853-28.033-15.799-58.837l-.421-24.354.503-29.092.002-.173c0-1.171-.081-2.323-.221-3.457a8.302 8.302 0 0 1 7.498-4.706c4.57 0 8.288 3.662 8.288 8.162v45.947c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10v-70.044c0-4.501 3.718-8.162 8.288-8.162 4.567 0 8.282 3.657 8.288 8.153l-.001.01v70.044c0 5.523 4.478 10 10 10s10-4.477 10-10v-70.025l.001-.02v-.001l-.001-12.163c0-4.501 3.719-8.163 8.289-8.163 4.569 0 8.287 3.662 8.287 8.163v82.208c0 5.523 4.478 10 10 10s10-4.477 10-10v-70.044c0-4.501 3.718-8.162 8.288-8.162s8.288 3.662 8.288 8.162v70.045a10 10 0 0 0 18.95 4.46c5.331-10.698 13.772-17.613 21.514-17.617 4.386 0 7.069 1.663 7.706 3.208.693 1.681-.177 5.31-4.908 10.009zm30.679-28.625c0 4.32-2.388 9.793-6.341 13.821a23.784 23.784 0 0 0-.938-2.825c-3.963-9.614-14.001-15.587-26.218-15.587-7.084.003-14.086 2.308-20.443 6.5v-42.229c2.808-2.606 5.306-3.563 12.054-3.563 7.608 0 20.195 9.343 20.195 19.989a10 10 0 0 0 8.678 9.912c5.936.793 13.013 3.861 13.013 13.982zM448.24 151.61c-25.215 10.919-50.25 16.227-76.536 16.227-39.299 0-76.721-12.097-112.911-23.796-36.779-11.89-74.81-24.184-115.324-24.184-25.168 0-49.279 4.718-73.103 14.357C101.457 69.468 173.463 25.999 253.795 25.999c57.498 0 108.935 22.195 144.838 62.496 21.456 24.084 44.505 35.792 70.464 35.79 5.185 0 10.514-.478 15.956-1.428-9.18 14.245-24.203 23.292-36.813 28.753z" />
  </svg>
);

export default SvgWash;

