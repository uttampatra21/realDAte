const Header = `
      <nav>
        <a href="/"
          ><img
            loading="lazy"
            width="150"
            src="https://realdate.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-16-at-8.13.50-AM-1-e1692196553139.jpeg"
            alt="" />
        </a>
        <h2>
          REAL DATE
          <span>Bringing Online Dating Back</span>
        </h2>
      </nav>
`;
document.getElementById("header").innerHTML = Header;

const footer = `
      <header>${Header}</header>
      <div class="contect">
        <ul class="main-ul">
          <li>
            <h3>FOLLOW US ON</h3>
            <ul class="child-ul">
              <li><i class="bx bxl-instagram"></i></li>
              <li><i class="bx bxl-facebook"></i></li>
              <li><i class="bx bxl-linkedin"></i></li>
              <li><i class="bx bxl-twitter"></i></li>
            </ul>
          </li>
          <li>
            <h3>Contact us:</h3>
            <ul class="nth2">
              <li>Email: info@realdate.in</li>
              <li>Phone: XXXXXXXXX9</li>
            </ul>
          </li>
          <li>
            <h3>Know Us:</h3>
            <ul class="nth2">
              <li><a href="">About us</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </li>
        </ul>
      </div>`;
document.getElementById("footer").innerHTML = footer;
