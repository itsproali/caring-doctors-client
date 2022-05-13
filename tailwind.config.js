module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerImage: "url('/src/assets/images/bg.png')",
        appointment: "url('/src/assets/images/appointment.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#3A4256",
          secondary: "#0FCFEC",
          accent: "#19D3AE",
          neutral: "#6B7280",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
