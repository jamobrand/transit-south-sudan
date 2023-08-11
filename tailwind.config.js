/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Spinnaker: ['Spinnaker, sans-serif'],
      },
      colors: {
        travelBlue: "#1864A2",
        travelBlueTwo: "#0A428A",
        travelButton: "#2C7AE4",
        travelBg: "#E7EEFB",
        applyOn:"#095EAC",
        speedyTra: "#051963",
        borderVerif: "#F6DFDE"
      },

    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'),
],
}

