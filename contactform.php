<div class="contact">
  <form action="/contact.php" method="post" id="contactForm">
    <div class="grid">
      <div class="grid__item one-half contact-form__block">
        <label for="" class="input__label">Ditt Namn: <span class="asterix">*</span></label>
        <input type="text" name="name" id="name" placeholder="John Doe" class="input__field">
      </div>
      <div class="grid__item one-half contact-form__block">
        <label for="" class="input__label">Din Email: <span class="asterix">*</span></label>
        <input type="email" name="email" id="email" placeholder="john.doe@gmail.com" class="input__field">
      </div>
      <div class="grid__item one-half contact-form__block">
        <label for="" class="input__label">Din Telefonnr:</label>
        <input type="tel" name="phone" id="phone" placeholder="+46(0) 70 1337 13 37" class="input__field">
      </div>
      <div class="grid__item one-half contact-form__block">
        <label for="" class="input__label">Ditt CV/Personligt Brev:</label>
        <input type="file" name="file" id="file" class="input__file">
      </div>
      <div class="grid__item one-whole contact-form__block">
        <label for="" class="input__label">Vill du tillägga något?</label>
        <textarea name="" id="" rows="5" placeholder="Shut up and give me the job!" class="textarea"></textarea>
      </div>
      <div class="grid__item one-whole contact-form__block">
        <input type="submit" name="message" id="message" value="Skicka" class="submit-btn">
      </div>
    </div>
  </form>
</div>
