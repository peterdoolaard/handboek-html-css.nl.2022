      <h2>Het formulier op de client</h2>
      <form action="form-aanmelden.php" method="post">
        <p>
          <label>
            <span class="required">Voornaam</span>
            <input type="text" name="voornaam" required>
          </label>
        </p>
        <p>
          <label>
            <span class="required">Achternaam</span>
            <input type="text" name="achternaam" required>
          </label>
        </p>
        <p>
          <label>
            <span>Geboortedatum</span>
            <input type="date" name="geboortedatum">
          </label>
        </p>
        <p class="nummer_postcode">
          <label>
            <span class="required">Huisnummer</span>
            <input type="text" name="huisnummer" required>
          </label>
        </p>
        <p>
          <label>
            <span class="required">Postcode</span>
            <input type="text" name="postcode" pattern="^[0-9]{4}\s?[a-zA-Z]{2}"
                                               								 title="Een postcode bestaat uit 4 cijfers en 2 letters"required>
          </label>
        </p>
        <p>
          <label>
            <span class="required">Straatnaam</span>
            <input type="text" name="straatnaam" required>
          </label>
        </p>
        <p>
          <label>
            <span class="required">Woonplaats</span>
            <input type="text" name="woonplaats" required>
          </label>
        </p>
        <p>
          <label>
            <span>E-mailadres</span>
            <input type="email" name="email" pattern="^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})+$">
          </label>
        </p>
        <p>
          <label>
            <span>Telefoonnummer</span>
            <input type="tel" name="telefoon" pattern="^0[1-9]{1,3}[-|\s]?[0-9]{6,8}$" minlength="10" maxlength="11">
          </label>
        </p>
        <p>
          <label>
            <span>Bankrekening (IBAN)</span>
            <input type="text" name="iban" pattern="[a-zA-Z]{2}[0-9]{2}\s?[a-zA-Z]{4}\s?([0-9]{4}\s?){2}[0-9]{2}" title="Een IBAN bestaat uit 2 letters, 2 cijfers, 4 letters en 10 cijfers">
          </label>
        </p>
        <button type="submit">Verzenden</button>
      </form>
    </div>

