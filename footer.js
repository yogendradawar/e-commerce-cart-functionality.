const footerHTML = `

<footer class="footer-section">
      <div class="footer-container container">
        <div class="content-1">
          <img class="logo" src="./images/logo.png" alt="logo" />
          <p>
            Lore, a m ipsum dolor sit amet, consectetur adipisicing elit. Sit
            asperiores. Error.
          </p>
          <img
            class="cards"
            src="./images/—Pngtree—common bank card purchase icon_4059420.png"
            alt="cards"
          />
        </div>

        <div class="content-2">
          <h4>Shopping</h4>
          <a href="#">Computer Store</a>
          <a href="#">Laptop Store</a>
          <a href="#">Accessories</a>
          <a href="#">Sales & Discount</a>
        </div>
        <div class="content-3">
          <h4>Experience</h4>
          <a href="#">Contact Us</a>
          <a href="#">Payment Method</a>
          <a href="#">Delivery</a>
          <a href="#">Return and Exchange</a>
        </div>
        <div class="content-4">
          <h4>newsLetters</h4>
          <p>
            Be the first to know about new <br />
            arrivals, sales & promos!
          </p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>

      <div class="f-design">
        <div class="f-design-txt">
          <p>Design and code by xyz xyz</p>
        </div>
      </div>
    </footer>

`;

const footerElem = document.querySelector(".footer-section");
footerElem.insertAdjacentHTML("afterbegin",footerHTML);