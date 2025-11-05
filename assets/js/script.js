// Navbar 
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerBtn.innerHTML = navMenu.classList.contains('active')
        ? '<i class="fa-solid fa-xmark fa-xl"></i>'
        : '<i class="fa-solid fa-bars fa-xl"></i>';
});


// Section 4 Cards 
const products = [
    {
        img: "./assets/images/printer-png-8.png",
        brand: "Brother",
        name: "Brother DCP-L2550DW Wireless Monochrome Printer",
        oldPrice: "$149.99",
        newPrice: "$139.99",
    },
    {
        img: "./assets/images/printer-png-1-hp.png",
        brand: "HP",
        name: "HP LaserJet MFP M234sdw All-in-One Wireless Laser Printer",
        oldPrice: "$199.99",
        newPrice: "$179.99",
    },
    {
        img: "./assets/images/printer-png-5-cannon.png",
        brand: "Canon",
        name: "Canon PIXMA TR4720 All-in-One Wireless Inkjet Printer",
        oldPrice: "$129.99",
        newPrice: "$119.99",
    },
    {
        img: "./assets/images/printer-png-6-epson.png",
        brand: "Epson",
        name: "Epson EcoTank ET-2800 Wireless Color All-in-One Printer",
        oldPrice: "$249.99",
        newPrice: "$229.99",
    },
    {
        img: "./assets/images/printer-png-8.png",
        brand: "Brother",
        name: "Brother HL-L2390DW Compact Monochrome Laser Printer",
        oldPrice: "$179.99",
        newPrice: "$159.99",
    },
    {
        img: "./assets/images/printer-png-3-hp.png",
        brand: "HP",
        name: "HP DeskJet 4155e Wireless Color All-in-One Printer",
        oldPrice: "$99.99",
        newPrice: "$84.99",
    },
    {
        img: "./assets/images/printer-png-9-cannon.png",
        brand: "Canon",
        name: "Canon imageCLASS MF264dw Wireless Monochrome Printer",
        oldPrice: "$189.99",
        newPrice: "$169.99",
    },
    {
        img: "./assets/images/printer-png-12-epson.png",
        brand: "Epson",
        name: "Epson WorkForce Pro WF-4830 Wireless All-in-One Printer",
        oldPrice: "$279.99",
        newPrice: "$249.99",
    },
    {
        img: "./assets/images/printer-png-8.png",
        brand: "Brother",
        name: "Brother MFC-J1010DW Wireless Color Inkjet Printer",
        oldPrice: "$139.99",
        newPrice: "$124.99",
    },
    {
        img: "./assets/images/printer-png-4-hp.png",
        brand: "HP",
        name: "HP Smart Tank 5101 Wireless All-in-One Color Printer",
        oldPrice: "$189.99",
        newPrice: "$169.99",
    },
    {
        img: "./assets/images/printer-png-5-cannon.png",
        brand: "Canon",
        name: "Canon PIXMA TS3522 Wireless All-in-One Color Printer",
        oldPrice: "$89.99",
        newPrice: "$74.99",
    },
    {
        img: "./assets/images/printer-png-13-epson.png",
        brand: "Epson",
        name: "Epson Expression Home XP-4205 Wireless Color Printer",
        oldPrice: "$119.99",
        newPrice: "$99.99",
    },
    {
        img: "./assets/images/printer-png-8.png",
        brand: "Brother",
        name: "Brother HL-L3230CDW Digital Color Printer",
        oldPrice: "$299.99",
        newPrice: "$269.99",
    },
    {
        img: "./assets/images/printer-png-10-hp.png",
        brand: "HP",
        name: "HP OfficeJet Pro 8025e Wireless All-in-One Color Printer",
        oldPrice: "$229.99",
        newPrice: "$199.99",
    },
    {
        img: "./assets/images/printer-png-9-cannon.png",
        brand: "Canon",
        name: "Canon MAXIFY GX4020 MegaTank Wireless Color Printer",
        oldPrice: "$399.99",
        newPrice: "$349.99",
    },
    {
        img: "./assets/images/printer-png-7-epson.png",
        brand: "Epson",
        name: "Epson EcoTank ET-4850 Wireless Cartridge-Free Printer",
        oldPrice: "$449.99",
        newPrice: "$399.99",
    },
];


// Select container
const container = document.querySelector(".sec4-inner");

// Loop through each product and create HTML dynamically
products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("sec4-card-1");

    card.innerHTML = `
    <div class="sec4-sale">Sale!</div>
    <img src="${product.img}" alt="${product.brand}">
    <p class="mt-20">${product.brand}</p>
    <p class="mt-20">${product.name}</p>
    <p><del>${product.oldPrice}</del> <strong>${product.newPrice}</strong></p>
    <button class="btn mt-20"><a href="#">Add to Cart</a></button>
  `;

    container.appendChild(card);
});
