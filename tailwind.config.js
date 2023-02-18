/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "img1": 'url("https://allswellalert.com/uploads/blog/dd82a10ef0847039e8eef524f0a88f1c.png")',
        "img2": 'url("https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2020/02/ia_0924_recommended-routes-for-solo-female-travellers-according-to-women-at-culture-trip_header_gs.jpg")',
        "img3": 'url("https://i.pinimg.com/736x/c5/87/f1/c587f193f70aaf50414f5e10504cdd3f.jpg")',
        "img4": 'url("https://st3.depositphotos.com/2704315/13872/v/600/depositphotos_138728932-stock-illustration-woman-character-protected-herself-from.jpg")',
        "img5": 'url("https://www.safetyandhealthmagazine.com/ext/resources/images/2018/02-feb/woman-by-elevator.jpg")',
        "img6": 'url("https://roofandfloor.thehindu.com/raf/real-estate-blog/wp-content/uploads/sites/14/2019/07/Five-Safety-Tips-for-Women-Living-Alone-in-a-Rented-House-840x480.jpg")',
        "img7": 'url("https://us.123rf.com/450wm/artinspiring/artinspiring1802/artinspiring180200243/95341604-isolated-drunk-woman-having-fun-with-wine-bottle.jpg")',
        "img8": 'url("https://img.freepik.com/premium-vector/bus-stop-flat-vector-illustration-people-waiting-bus-man-riding-bicycle-cartoon-characters-urban-transportation-means-public-transport-skyscrapers-background-city-infrastructure_126283-2651.jpg")',
        "img9": 'url("https://media.istockphoto.com/id/1341651858/vector/women-enjoy-shopping-in-mall-banner-or-background.jpg?s=612x612&w=0&k=20&c=jURCGlU9c3Xw4RU-RntoEiBlphcqMtf8w-D84w9BDBo=")',
        "img10": 'url("https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-driving-at-night.jpg")',

      },
      colors: {
        bcc: {
          50: "#e5f3ff",
          100: "#c5d7ee",
          200: "#a3bcdd",
          300: "#80a1cc",
          400: "#5c86bc",
          500: "#436ca3",
          600: "#33547f",
          700: "#223c5c",
          800: "#11243a",
          900: "#000d1a",
        },
        ycc: {
          50: "#f2f2f2",
          100: "#d9d9d9",
          200: "#bfbfbf",
          300: "#a6a6a6",
          400: "#8c8c8c",
          500: "#737373",
          600: "#595959",
          700: "#404040",
          800: "#262626",
          900: "#0d0d0d",
        },
        gcc: {
          50: "#c9ebd2",
          100: "#ffb3bb",
          150: "#fde1b2",
          200: "#fcf6b3",
          300: "#bbf0f1",
        },
      },
    },
  },
  plugins: [],
};
